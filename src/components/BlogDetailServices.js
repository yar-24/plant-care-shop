import React from 'react';
import { Box, Container, Skeleton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DOMPurify from 'dompurify';
import { fonts, mobile } from '../utils';
import moment from 'moment';

const BlogDetailServices = ({ service, isLoading }) => {
  const { title, idImage, desc, category, createdAt } = service;

  const BlogImage = styled('img')`
    width: 100%;
    height: 400px;
    object-fit: cover;
    background-position: center;
    margin: 16px 0;
    ${mobile(`
      height: 250px;
    `)}
  `;

  return (
    <>
      {isLoading ? (
        <Container maxWidth="md">
          <Typography
            variant="body2"
            component="p"
            fontWeight="500"
            fontFamily={fonts.inter}
            textAlign="center"
            my={2}>
            Posted {moment(createdAt).format('D MMMM YYYY, h:mm a')}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            fontFamily={fonts.comfortaa}
            textAlign="center"
            fontWeight="bold">
            {title}
          </Typography>
          <BlogImage
            src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${idImage}`}
            alt=""
          />
          <Box
            sx={{
              fontSize: '1.1rem',
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc),
            }}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              my: 2,
              justifyContent: 'space-between',
            }}>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                fontFamily: fonts.comfortaa,
              }}>
              Posted : {moment(createdAt).fromNow()}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                fontFamily: fonts.comfortaa,
                textTransform: 'capitalize',
              }}>
              Category : {category}
            </Typography>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="md">
          <Stack
            my={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Skeleton
              variant="text"
              animation="wave"
              height={24}
              width={'30%'}
            />
            <Skeleton
              variant="text"
              animation="wave"
              height={36}
              width={'60%'}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={400}
              width={500}
            />
            <Box sx={{ width: '90%' }}>
              <Skeleton variant="text" animation="wave" width={'60%'} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" width={'60%'} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" width={'60%'} />
              <Skeleton variant="text" animation="wave" width={'60%'} />
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default BlogDetailServices;
