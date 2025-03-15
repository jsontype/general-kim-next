import { Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  link: string
  text: string
}

export default function NavbarItem({ link, text }: Props) {
  return (
    <Typography
      sx={{
        minWidth: 100,
        border: 1,
        borderColor: 'grey.500',
        borderRadius: '16px',
        '&:hover': { backgroundColor: '#dddddd' },
      }}
    >
      <Link href={link}>{text}</Link>
    </Typography>
  )
}
