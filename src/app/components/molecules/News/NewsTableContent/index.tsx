import { News } from '@/app/types/news'
import { TableCell, TableRow } from '@mui/material'
import React from 'react'

interface Props {
  item: News
  index: number
}
function NewsTableContent({ item, index }: Props) {
  const onClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <TableRow
      key={item.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        '&:hover': { backgroundColor: '#b9e0fd', cursor: 'pointer' },
      }}
      onClick={() => onClick(item.url)}
    >
      <TableCell align="left">{index}</TableCell>
      <TableCell component="th" scope="row">
        {item.title}
      </TableCell>
      <TableCell align="right">{item.comments_count}</TableCell>
      <TableCell align="right">{item.user}</TableCell>
      <TableCell align="right">{item.points}</TableCell>
      <TableCell align="right">{item.time_ago}</TableCell>
    </TableRow>
  )
}

export default React.memo(NewsTableContent)
