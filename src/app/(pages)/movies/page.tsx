'use client'

import React from 'react'
import { useEffect } from 'react'
import Label from '../../components/atoms/Label'
import { useTranslation } from 'react-i18next'
import MovieList from '../../components/organisms/MovieList'
import { useAtom, useAtomValue } from 'jotai'
import { moviesFetchTriggerAtom } from '../../store/moviesFetchTriggerAtom'
import Loading from '../../components/molecules/Loading'
import useFetchMovies from '../../util/fetchAPI/useFetchMovies'
import { Box } from '@mui/material'
import MovieSelectLimit from '../../components/atoms/Movies/MovieSelectLimit'
import { moviesApiParamsAtom } from '../../store/moviesApiParamsAtom'
import MovieSelectSort from '../../components/atoms/Movies/MovieSelectSort'

export default function Movies() {
  const [isFetchRequired, setIsFetchRequired] = useAtom(moviesFetchTriggerAtom)
  const { t } = useTranslation('movies')
  const { fetchMovies, isLoading, movies } = useFetchMovies()
  const { limit, sort } = useAtomValue(moviesApiParamsAtom)

  useEffect(() => {
    if (isFetchRequired) {
      fetchMovies({ limit: limit, sort: sort })
      setIsFetchRequired(false)
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
