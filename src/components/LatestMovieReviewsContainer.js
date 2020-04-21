import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import { reporters } from 'mocha';

const NYT_API_KEY = 'v9f58tBxCwFfBh6DpYS63Rb4xXoFon83';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
        this.fetchLatestMoviesApi = this.fetchLatestMoviesApi.bind(this)
    }

    componentDidMount() {
        this.fetchLatestMoviesApi()
    }

    fetchLatestMoviesApi() {
        fetch(URL)
            .then(resp => resp.json())
            .then(({ results }) => this.setState({
                reviews: results
            }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
