import axios from 'axios';

const instance axios.create({
    baseURL: 'https://burger-builder-6260e.firebaseio.com/'
});

export default instance;