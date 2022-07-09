import axios from "axios";

const getPostRequest = async ()=> await axios.get("/posts");