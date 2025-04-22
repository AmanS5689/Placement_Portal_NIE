import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8080/student-dash';
const ADMIN_API_URL = 'http://127.0.0.1:8080';

export async function getActiveOpportunities() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token, batch } = JSON.parse(user);

    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    if (!batch) {
      throw new Error('Batch is required');
    }
    const response = await axios.get(`${API_URL}/active-opportunities`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch active opportunities', error.message);
  }
}
export async function getRecentOpportunities() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token, batch } = JSON.parse(user);

    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    if (!batch) {
      throw new Error('Batch is required');
    }
    const response = await axios.get(`${API_URL}/recent-opportunities`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch recent opportunities', error.message);
  }
}
export async function getTotalPlacedStudents() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token, batch } = JSON.parse(user);
    if (!batch) {
      throw new Error('Batch is required');
    }
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.get(`${API_URL}/total-placed-students`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to total placed students', error.message);
  }
}
export async function getTotalApplications() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { usn, token } = JSON.parse(user);
    if (!usn) {
      throw new Error('USN is required');
    }
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.get(`${API_URL}/total-applications`, {
      params: { usn },
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to total applications', error.message);
  }
}

// ADMIN
export async function getTotalStudentsByBatch(batch) {
  try {
    if (!batch) {
      throw new Error('Batch is required');
    }
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = axios.get(`${ADMIN_API_URL}/statistics/total-students`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });
    return (await response).data;
  } catch (error) {
    console.error('Failed to fetch total students:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getTotalPlacedStudentsByBatch(batch) {
  try {
    if (!batch) {
      throw new Error('Batch is required');
    }
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = axios.get(`${ADMIN_API_URL}/statistics/total-placed`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });
    return (await response).data;
  } catch (error) {
    console.error('Failed to fetch total placed students:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getTotalOpportunitiesByBatch(batch) {
  try {
    if (!batch) {
      throw new Error('Batch is required');
    }
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = axios.get(
      `${ADMIN_API_URL}/statistics/total-opportunities`,
      {
        params: { batch },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return (await response).data;
  } catch (error) {
    console.error('Failed to fetch total opportunities students:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getTotalApplicationsByBatch(batch) {
  try {
    if (!batch) {
      throw new Error('Batch is required');
    }
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = axios.get(`${ADMIN_API_URL}/applications/by-batch`, {
      params: { batch },
      headers: { Authorization: `Bearer ${token}` },
    });
    return (await response).data;
  } catch (error) {
    console.error('Failed to fetch total applications students:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getTotalEventsToday() {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = axios.get(`${ADMIN_API_URL}/statistics/total-placed`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return (await response).data;
  } catch (error) {
    console.error('Failed to fetch total events for today:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}
