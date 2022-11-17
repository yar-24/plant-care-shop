import React from "react";
import { Box, Container, Skeleton, Stack } from "@mui/material";

const SkeletonBannerPlantCare = () => {
  return (
    <Container>
      <Stack my={10} sx={{display: "flex"}}>
        <Box>
          <Skeleton variant="rectangular" animation="wave" height={250} />
        </Box>
        <Box sx={{marginTop: "20px"}}>
          <Skeleton variant="text" animation="wave" width="50%" />
          <Skeleton variant="text" animation="wave" width="50%" />
        </Box>
      </Stack>
    </Container>
  );
};

export default SkeletonBannerPlantCare;
