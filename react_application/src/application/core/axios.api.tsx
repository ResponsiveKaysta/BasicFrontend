
import axios from 'axios';

export default axios.create({
  baseURL: 'http://10.0.2.15:8080/api/'
});