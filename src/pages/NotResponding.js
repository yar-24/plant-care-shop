import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const NotResponding = () => {
  return (
    <Container>
        <Stack my={16}>
            <Typography variant="h5">Opss... no page</Typography>
        </Stack>
    </Container>
  )
}

export default NotResponding