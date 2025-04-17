'use client'

import React from 'react'
import Button from '@mui/material/Button'
import Label from '../../components/atoms/Label'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import counterSlice from '@/app/components/features/counter/counterSlice'
import { useAppSelector } from '@/app/util/useAppSelector'

export default function Count() {
  const dispatch = useDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const { t } = useTranslation('count')

  const addCount = (val: number) => {
    dispatch(counterSlice.actions.increase(val))
  }

  const subCount = (val: number) => {
    dispatch(counterSlice.actions.decrease(val))
  }

  return (
    <>
      <Label text={t('title')} />

      <h1>{count}</h1>

      <Button
        size="small"
        variant="outlined"
        color="success"
        onClick={() => addCount(1)}
      >
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={() => subCount(1)}
      >
        -
      </Button>
    </>
  )
}
