import axios from "axios";

import { BASE_URL } from "../constants";

export default class FetchService {

    getAll(successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}shows`,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }

    getOne(id, successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}shows/${id}`,
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                embed: ['seasons', 'cast']
            }

        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }
    
    getByName(seriesName, successHandler, errorHandler) {
        axios({
            url: `${BASE_URL}/search/shows?q=${seriesName}`,
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => successHandler(response))
            .catch(error => errorHandler(error));
    }
}
