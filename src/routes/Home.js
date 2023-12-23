import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/screen/Home.module.css";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        // console.log(json.data);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <h1> Loading...</h1>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.container__movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;