import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/components/Movie.module.css"

function Movie({ id, coverImg, title }) {

    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__cover} />
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`} className={styles.title}>
                    {title.length > 24 ? `${title.slice(0, 24)}...` : title}
                </Link>
            </h2>
        </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie;