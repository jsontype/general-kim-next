import { Link } from '@mui/material'
import React from 'react'

interface Props {
  index: number
  url: string
  isLastData: boolean
}
const DetailsLink = ({ index, url, isLastData }: Props) => {
  const linkNumber = index + 1

  return (
    <>
      <Link href={url} color="#93C54B" underline="always">
        #{linkNumber}
      </Link>
      {!isLastData && <span>, </span>}
    </>
  )
}

export default React.memo(DetailsLink)
