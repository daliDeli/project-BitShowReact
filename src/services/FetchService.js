import axios from "axios";
import { BASE_URL } from "../constants";

axios.defaults.baseURL = BASE_URL;

export const getAll = (successHandler, errorHandler) => {
    axios.get('shows')
        .then(response => successHandler(response))
        .catch(error => errorHandler(error));
}

export const getOne = (id, successHandler, errorHandler) => {
    axios.get(`shows/${id}`,
            {
                params: {
                    embed: ['seasons', 'cast']
                }
            }
        )
        .then(response => successHandler(response))
        .catch(error => errorHandler(error));
}

export const getByName = (seriesName, successHandler, errorHandler) => {
    axios.get(`/search/shows?q=${seriesName}`)
        .then(response => successHandler(response))
        .catch(error => errorHandler(error));
}

