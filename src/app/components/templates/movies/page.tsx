'use client'

import React from 'react'
import { useEffect } from 'react'
import Label from '../../atoms/Label'
import { useTranslation } from 'react-i18next'
import MovieList from '../../organisms/MovieList'
import { useAtom, useAtomValue } from 'jotai'
import { moviesFetchTriggerAtom } from '../../../store/moviesFetchTriggerAtom'
import useFetchMovies from '../../../util/fetchAPI/useFetchMovies'
import { Box } from '@mui/material'
import MovieSelectLimit from '../../atoms/Movies/MovieSelectLimit'
import { moviesApiParamsAtom } from '../../../store/moviesApiParamsAtom'
import MovieSelectSort from '../../atoms/Movies/MovieSelectSort'
import Loading from '../../molecules/Loading'

export default function MoviesTemplate() {
  const [isFetchRequired, setIsFetchRequired] = useAtom(moviesFetchTriggerAtom)
  const { t } = useTranslation('movies')
  const { fetchMovies, isLoading, movies } = useFetchMovies()
  const { limit, sort } = useAtomValue(moviesApiParamsAtom)

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies({ limit: limit, sort: sort })
      setIsFetchRequired(false)
    }

    if (isFetchRequired) {
      fetchData()
    }
  }, [isFetchRequired, limit, sort])

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10px',
          paddingBottom: '5px',
        }}
      >
        <Label text={t('title')} />
        <Box>
          <MovieSelectLimit />
          <MovieSelectSort />
        </Box>
      </Box>
      <div>{isLoading ? <Loading /> : <MovieList movies={movies} />}</div>
    </div>
  )
}
