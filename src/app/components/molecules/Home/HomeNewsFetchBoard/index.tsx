'use client'

import { Button, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useSetAtom } from 'jotai'
import { newsFetchTriggerAtom } from '../../../../store/newsFetchTriggerAtom'
import HomeBoardBox from '../../../atoms/HomeBoardBox'
import { newsPageNumberAtom } from '../../../../store/newsPageNumberAtom'

interface Props {
  titleText: string
}
const HomeNewsFetchBoard = ({ titleText }: Props) => {
  const setIsFetchRequired = useSetAtom(newsFetchTriggerAtom)
  const setPageNumber = useSetAtom(newsPageNumberAtom)

  // news api를 refetch, page를 1로 초기화
  const onFetchTrigger = () => {
    setIsFetchRequired(true)
    setPageNumber(1)
  }

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Button variant="contained" color="success" onClick={onFetchTrigger}>
        Load Fetch
        <RefreshIcon
          sx={{
            color: 'white',
            fontSize: '10px',
            width: '20px',
            height: '20px',
            marginLeft: '5px',
          }}
        />
      </Button>
    </HomeBoardBox>
  )
}

export default HomeNewsFetchBoard
