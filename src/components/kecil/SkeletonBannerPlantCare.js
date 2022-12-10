import React from 'react';
import { Box, Container, Skeleton, Stack } from '@mui/material';

const SkeletonBannerPlantCare = () => {
  return (
    <Container fixed>
      <Stack
        direction={{ xs: 'column', md: 'row-reverse' }}
        my={{ xs: 5, md: 10 }}
        spacing={{ xs: 5, md: 10 }}>
        <Box sx={{ flex: 2 }}>
          <Skeleton variant="rectangular" animation="wave" height={350} />
        </Box>
        <Box mt={3} sx={{ flex: 3 }}>
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="70%" />
          <Skeleton variant="text" animation="wave" width="70%" />
          <Skeleton variant="text" animation="wave" width="50%" />
        </Box>
      </Stack>
    </Container>
  );
};

export default SkeletonBannerPlantCare;
