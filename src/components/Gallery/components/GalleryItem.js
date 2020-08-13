import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({ id, thumbnail, caption, description, dribbbleLink, position, toggleLightbox }) => {
    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
            className="image fit thumb"
            href={dribbbleLink}
        >
            <img src={thumbnail} alt={description} />
        </a>

        <h3>{caption}</h3>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dribbbleLink: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem