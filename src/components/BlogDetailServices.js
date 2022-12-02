import { Box, Container, Skeleton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DOMPurify from 'dompurify';
import moment from 'moment';
import React from 'react';
import { fonts } from '../utils';

const BlogDetailServices = ({ service, loading }) => {
  const BlogImage = styled('img')`
    width: 100%;
    height: 400px;
    object-fit: cover;
    background-position: center;
    margin: 16px 0;
  `;

  return (
    <>
      {loading ? (
        <Container maxWidth="md">
          <Typography
            variant="body2"
            component="p"
            fontWeight="500"
            fontFamily={fonts.inter}
            textAlign="center"
            my={2}>
            Posted {moment(service.createdAt).format('D MMMM YYYY, h:mm a')}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            fontFamily={fonts.comfortaa}
            textAlign="center"
            fontWeight="bold">
            {service.title}
          </Typography>
          <BlogImage
            src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${service.idImage}`}
            alt=""
          />
          <Container maxWidth="sm" disableGutters>
            <Box
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(service.desc),
              }}
            />
          </Container>
          <Typography variant="p" component="p" fontFamily={fonts.inter} my={2}>
            Posted: {moment(service.createdAt).fromNow()}
          </Typography>
        </Container>
      ) : (
        <Container>
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
              width={'20%'}
            />
            <Skeleton
              variant="text"
              animation="wave"
              height={36}
              width={'50%'}
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
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default BlogDetailServices;
