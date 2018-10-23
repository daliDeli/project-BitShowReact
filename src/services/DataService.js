import Series from "../entities/Series";
import { getAll, getOne, getByName} from "../services/fetchService";

export const getAllSeries = (success, failure) =>{
    getAll(
        seriesData => {
            success(seriesData.data);
        },
        error =>{        
            failure(error)

        } 
    );
}

export const getOneSeries = (id, success, failure) => {
    getOne(id,
        seriesData => {
            const series = new Series(seriesData.data);
            success(series);
        },
        error => failure(error.message)
    )
}

export const getSeriesByName = (seriesName, success, failure) => {
    getByName(seriesName,
        seriesData=> success(seriesData)
        ,
        error=> failure(error)
    )
}
