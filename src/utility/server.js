import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/portfolio";

export const addMessage = (messages)=> axios.post(REST_API_BASE_URL,messages);