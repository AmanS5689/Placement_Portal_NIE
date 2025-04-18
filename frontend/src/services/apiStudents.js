import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8080';

export async function getAllStudentsByBatch(batch) {
  try {
    const user = Cookies.get('user');
    if (!user) throw new Error('User not logged in or initialized');
    const { token } = JSON.parse(user);
    if (!batch) {
      throw new Error('Batch is required');
    }
    if (!token) {
      throw new Error('Unauthorized access not allowed!');
    }
    const response = await axios.get(`${API_URL}/students/all-by-batch`, {
      params: { batch },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Return the list of all students by batch
  } catch (error) {
    console.error('Failed to fetch all students by batch:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function addPlacedStudent(placedStudent) {
  try {
    const user = Cookies.get('user');
    const { token } = JSON.parse(user);
    // code
    const response = await axios.post(
      `${API_URL}/placed-student/add`,
      placedStudent,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to add placed student:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getAllPlacedStudents() {
  try {
    const user = Cookies.get('user');
    const { token } = JSON.parse(user);
    // code
    const response = await axios.get(`${API_URL}/get-placed-students`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch placed students:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}
