import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://reactmyburger-45f99.firebaseio.com/'
});

export default instance;