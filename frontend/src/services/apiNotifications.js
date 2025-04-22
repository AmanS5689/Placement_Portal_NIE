import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8080';

export async function addNewNotification(notification) {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.post(
      `${API_URL}/notifications/add`,
      notification,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to add new notification:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getNotifications() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.get(`${API_URL}/notifications/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function markNotificationRead(notificationIdData) {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.post(
      `${API_URL}/notifications/mark-read`,
      notificationIdData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to mark notifications as read:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function sendEmailNotification(data) {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.post(`${API_URL}/notifications/send`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to send notification:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

// FOR ADMIN
export async function getNotificationDetails(batch) {
  try {
    if (!batch) throw new Error('Batch is required!');
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.get(`${API_URL}/admin-notifications/get`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to get notification details:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function deleteNotificationByID(notificationIDData) {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.delete(`${API_URL}/notifications/delete`, {
      headers: { Authorization: `Bearer ${token}` },
      data: notificationIDData,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to get notification details:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}
