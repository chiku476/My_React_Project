import axios from 'axios';
const instance= axios.create({
  baseURL:'https://my-react-project-8d9f1-default-rtdb.europe-west1.firebasedatabase.app/'
});
export default instance;