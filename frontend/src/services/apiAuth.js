import { clearItem } from '@/utils/localStorageServices';
import axios from 'axios';
import Cookies from 'js-cookie';
const API_URL = 'http://127.0.0.1:8080';
export async function login({ email, password, role }) {
  try {
    const loginData = { email, password, role };
    const response = await axios.post(`${API_URL}/login`, loginData);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export function logout() {
  try {
    clearItem('token');
    clearItem('currentUser');
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function getStudentDetails(usn) {
  if (!usn) throw new Error('USN is required');
  const user = Cookies.get('user');
  if (!user) throw new Error('User not logged in or initialized');
  const { token } = JSON.parse(user);
  try {
    const response = await axios.get('http://127.0.0.1:8080/student/details', {
      params: { usn },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch student details:', error);
    if (error.response) {
      throw new Error(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error(error.message);
    }
  }
}
