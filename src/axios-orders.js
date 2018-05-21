import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b51a7.firebaseio.com/'
});

export default instance;