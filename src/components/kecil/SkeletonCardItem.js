import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

const SkeletonCardItem = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" animation="wave" height={225} />
      <Box>
        <Skeleton variant="text" animation="wave" width="80%" />
        <Skeleton variant="text" animation="wave" width="50%" />
      </Box>
      <Box sx={{ display: 'block' }}>
        <Skeleton variant="rectangular" animation="wave" height={30} />
      </Box>
    </Stack>
  );
};

export default SkeletonCardItem;
