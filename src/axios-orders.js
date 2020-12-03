import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-2f675-default-rtdb.firebaseio.com/",
});

export default instance;
