import axios from 'axios';

// I use this server from the course I have done in the past. For the register user, server is looking for these values: {name: '', email: '', password: ''} Here is API's docs: https://node-course-jobs-api.onrender.com/api-docs/#/

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default customFetch;
