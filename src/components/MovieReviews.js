import React from "react"


const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        {reviews.map(Review )}
    </div>
)

const Review = ({  byline, headline, summary_short, link }, index) => {
    return (
        <div className="review" key={index}>
            <h2><a href={link.url}> {headline}</a></h2>
            <p>BYLINE: {byline}</p>
            <p>HEADLINE: {headline}</p>
            <p>SUMMARY: {summary_short}</p>
        </div>
    )
}

export default MovieReviews