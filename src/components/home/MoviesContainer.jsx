import React, { Component } from 'react'

import { connect } from 'react-redux'

import MovieCard from './MovieCard'

class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        let content = '';

        content =
            movies.Response === 'True' ? movies.Search.map((movie, id) =>
                <MovieCard key={id} movie={movie} />) : <div>{`No movie containing ${content}`}</div>;
        return <div className="row">{content}</div>
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)
