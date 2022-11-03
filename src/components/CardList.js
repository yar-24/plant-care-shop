import React from 'react'
import {styled} from '@mui/material/styles'
import { Grid,Typography } from '@mui/material/'
import CardItem from './CardItem'
import { fonts } from '../utils'
import { Container } from '@mui/system'

const CardListContainer = styled(Container)`
  max-width: 1024px;
  margin: 0 auto;
`

const TitleText = styled(Typography)`
  font-size: 32px;
  font-family: ${fonts.comfortaa};
  font-weight: 700;
  margin: 32px 0;
`
const CardList = ({children}) => {
  return (
    <CardListContainer>
      <TitleText variant='h2'>{children}</TitleText>
      <Grid container spacing={6} mb={4}>
        <Grid item>
          <CardItem/>
        </Grid>
        <Grid item>
          <CardItem/>
        </Grid>
        <Grid item>
          <CardItem/>
        </Grid>
        <Grid item>
          <CardItem/>
        </Grid>
        <Grid item>
          <CardItem/>
        </Grid>
      </Grid>
    </CardListContainer>
  )
}
export default CardList