import FetchService from "./FetchService";
import Series from "../entities/Series";

export default class DataService {
    constructor() {

        this.fetchService = new FetchService();
    }

    getAllSeries(success, failure) {
        this.fetchService.getAll(
            seriesData => {
                // const series = seriesData.data.map(show => new Series(show));
                
                success(seriesData.data);
            },
            error =>{
            console.log(error.message)            
                failure(error)

            } 
        );
    }

    getOneSeries(id, success, failure) {
        this.fetchService.getOne(id,
            seriesData => {
                const series = new Series(seriesData.data);
                success(series);
            },
            error => failure(error.message)
        )
    }

    getSeriesByName(seriesName, success, failure) {
        this.fetchService.getByName(seriesName,
            seriesData=> success(seriesData)
            ,
            error=> failure(error.message)
        )
    }
}