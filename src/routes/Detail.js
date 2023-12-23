import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/components/Detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();


        setDetail(json.data.movie);
        setLoading(false);

        console.log("test", detail);
    };

    // const getMovies = async () => {
    //     const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    //     const json = await response.json();
    //     console.log("haha", json);
    // }

    // useEffect(() => {
    //     getMovies();
    // }, []);


    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className={styles.movie__container}>
                    <div className={styles.movie__detail}>
                        <div>
                            <img className={styles.movie__detail__cover}
                                src={detail.large_cover_image}
                                alt={detail.title}
                            />
                        </div>
                        <span className={styles.movie__title}>{detail.title}</span>
                        <div className={styles.movie__detail__info}>
                            <span>평점: {detail.rating}/10</span>
                            <span>{detail.runtime} 분</span>
                        </div>
                        <div className={styles.movie__detail__description}>
                            <ul className={styles.movie__category}>
                                {
                                    detail.genres.map((g) => (
                                        <li key={g}>{g}</li>
                                    ))
                                }
                            </ul>
                            <p className={styles.movie__detail__description}>
                                {detail.description_full}
                            </p>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )

}

export default Detail;