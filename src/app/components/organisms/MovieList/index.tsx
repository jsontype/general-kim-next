import React from 'react'
import MovieItem from '../../molecules/Movies/MovieItem'
import { MoviesData } from '@/app/types/movies'

interface Props {
  movies: MoviesData[]
}

const MovieList = ({ movies }: Props) => {
  return movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
}

export default React.memo(MovieList)
