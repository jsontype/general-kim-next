import { useState } from 'react'
import { useAtom } from 'jotai'
import { moviesDataAtom } from '../../store/moviesDataAtom'

function useFetchMovies() {
  const [movies, setMovies] = useAtom(moviesDataAtom)
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = async ({ sort = '', limit = '' } = {}) => {
    // Loading中のフラグ
    setIsLoading(true)
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`
      )
      const result = await res.json()
      setMovies(result.data.movies)
    } catch (error) {
      console.error('Fetch Movie Fail :', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { movies, isLoading, fetchMovies }
}

export default useFetchMovies
