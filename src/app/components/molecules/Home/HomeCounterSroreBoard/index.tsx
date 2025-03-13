'use client'

import { useAtomValue } from 'jotai'
import { countAtom } from '../../../../store/countAtom'
import { Typography } from '@mui/material'
import HomeBoardBox from '../../../atoms/HomeBoardBox'

interface Props {
  titleText: string
}
const HomeCounterScoreBoard = ({ titleText }: Props) => {
  const count = useAtomValue(countAtom)

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
