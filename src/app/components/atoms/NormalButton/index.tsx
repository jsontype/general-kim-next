import React from 'react'
import Button from '@mui/material/Button'

interface Props {
  buttonText: string
  onClick: () => void
}

export default function NormalButton({ buttonText, onClick }: Props) {
  return (
    <span>
      <Button variant="contained" onClick={onClick}>
        {buttonText}
      </Button>
    </span>
  )
}
