'use client'

import { Typography } from '@mui/material'
import HomeBoardBox from '../../../atoms/HomeBoardBox'
import { useAppSelector } from '@/app/util/useAppSelector'

interface Props {
  titleText: string
}
const HomeCounterScoreBoard = ({ titleText }: Props) => {
  const count = useAppSelector((state) => state.counter.value)

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Typography variant="h4" paddingRight={'15px'}>
        {count}
      </Typography>
    </HomeBoardBox>
  )
}

export default HomeCounterScoreBoard
