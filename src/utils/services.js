import axios from "axios";

export const BaseURL = "http://127.0.0.1:8000";

export const filterServicesAsync = async (query) => {
    const { data } = await axios.get(`${BaseURL}/api/search/${query}/`);
    return data;
};