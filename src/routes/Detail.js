import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovieInfo = useCallback(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);

        console.log("test", movie);
    }, []);

    // const getMovies = async () => {
    //     const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    //     const json = await response.json();
    //     console.log("haha", json);
    // }

    // useEffect(() => {
    //     getMovies();
    // }, []);

    useEffect(() => {
        getMovieInfo();
    }, []);

    return <>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                <h2>Detail Page</h2>
                {/* <p>title: {movie.data.title}</p> */}
            </div>
        )
        }
    </>
}

export default Detail;