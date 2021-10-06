import axios from 'axios';

export const registration = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/registration', {
      firstName,
      lastName,
      email,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    alert(error);
  }
};
