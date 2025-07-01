import axios from "axios";

const baseUrl = 'https://email-sender-backend-3.onrender.com/api/v1';

export const customAxios = axios.create(
    {
        baseURL:baseUrl,
    }
)