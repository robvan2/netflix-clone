import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

//default export : can renae the variable to what ever you want when importing it
//you can have multi exports per file but only 1 default export
export default instance;