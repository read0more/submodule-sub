import { Button } from '@mui/material'
import React from 'react'

export default function CustomButton({ text }: {
  text: string
}) {
  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  )
}
