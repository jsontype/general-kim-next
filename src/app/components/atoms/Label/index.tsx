'use client'

import React from 'react'
import Typography from '@mui/material/Typography'

interface Props {
  text: string
}

export default function Label({ text }: Props) {
  return (
    <Typography variant="h3" gutterBottom>
      <span className="font-bold">{text}</span>
    </Typography>
  )
}
