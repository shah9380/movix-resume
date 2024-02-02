import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2Y3ZjAzYzFiYzZhOGNjNzVjZTU0YmRlOGEyMzg5NCIsInN1YiI6IjY1YWJmYTU0YzQzOWMwMDEwYzUxMmExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SVU1evt_UjJGoKYvw5jgb5eGViAZUc5QW152yXjfdhg",
};

export const fetchDataFromApi = async (url, params)=>{
    try {
        const data = await axios.get(BASE_URL+url,{
            headers,
            params
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}