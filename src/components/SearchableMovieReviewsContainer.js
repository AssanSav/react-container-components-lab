import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'v9f58tBxCwFfBh6DpYS63Rb4xXoFon83';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(({ results }) => this.setState({
                reviews: results,
                searchTerm: ""
            }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleOnSubmit}>
                    <input id="searchTerm" name="searchTerm" onChange={this.handleOnChange} value={this.state.searchTerm}></input>
                    <input type="submit"></input>
                </form> 
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
