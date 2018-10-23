export default class Series  {
    constructor(series) {
        this.image = series.image ? series.image.medium : "http://via.placeholder.com/400x400";
        this.imageOriginal = series.image ? series.image.original : "http://via.placeholder.com/400x400";
        this.name = series.name;
        this.id = series.id;
        this.summary = series.summary ? series.summary.replace(/<\/?[^>]+(>|$)/g, ""): "There is no summary for this show.";
        this.seasons = series._embedded.seasons;       
        this.cast = series._embedded.cast;       
    }
}