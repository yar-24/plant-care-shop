import React from "react";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import DOMPurify from "dompurify";
import { fonts } from "../utils";
import moment from "moment";

const BlogDetailServices = ({ service, isLoading }) => {
  const { title, idImage, desc, category, createdAt } = service;

  return (
    <>
      {isLoading ? (
        <Container>
          <div className="services">
            <h2 className="title">{title}</h2>
            <img
              className="gambar1"
              src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${idImage}`}
              alt=""
            />
            <div className="kolom">
              <Box
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(desc),
                }}
                className="deskripsi2"
              />
            </div>
          </div>
          <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                fontFamily: fonts.comfortaa,
              }}
            >
              Posted: {moment(createdAt).fromNow()}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              sx={{
                fontFamily: fonts.comfortaa,
              }}
            >
              Category: {category}
            </Typography>
          </Box>
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
              height={36}
              width={"50%"}
            />
            <Box sx={{ width: "90%" }}>
              <Skeleton variant="text" animation="wave" width={"60%"} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" width={"60%"} />
              </Box>
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
