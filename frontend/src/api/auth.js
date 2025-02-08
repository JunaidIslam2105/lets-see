import axios from "axios";

const API_URL = "http://localhost:8000/users";

export const register = async (username, password) => {
    return axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
};
