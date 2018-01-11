import FetchService from "./FetchService";
import Series from "../entities/Series";

export default class DataService {
    constructor() {

        this.fetchService = new FetchService();
    }

    getAllSeries(success, failure) {
        this.fetchService.getAll(
            seriesData => {
                console.log("dataservice", seriesData);
                const series = seriesData.data.map(show => new Series(show));
                success(series);
            },
            error => failure(error)
        );
    }

    getOneSeries(id, success, failure) {
        this.fetchService.getOne(id,
            seriesData => success(seriesData)
            ,
            error => failure(error)
        )
    }

    getSeriesByName(seriesName, success, failure) {
        this.fetchService.getByName(seriesName,
            seriesData=> success(seriesData)
            ,
            error=> failure(error)
        )
    }
}