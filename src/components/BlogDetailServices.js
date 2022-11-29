import React, { useEffect, useState } from "react";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getService } from "../redux/features/services/servicesSlice";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";
import { fonts } from "../utils";
import moment from "moment";

const BlogDetailServices = () => {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getService(id))
      .then((res) => {
        setService(res.payload.service);
        setIsLoading(true);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err,
        });
      });
  }, [id, dispatch]);

  return (
    <>
      {isLoading ? (
        <Container>
          <div className="services">
              <h2 className="title">{service.title}</h2>
            <img
              className="gambar1"
              src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${service.idImage}`}
              alt=""
            />
            <div className="kolom">
              <Box
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(service.desc),
                }}
                className="deskripsi2"
              />
            </div>
          </div>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            sx={{
              fontFamily: fonts.comfortaa,
            }}
          >
            Posted: {moment(service.createdAt).fromNow()}
          </Typography>
        </Container>
      ) : (
        <Container>
          <Stack
            my={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={300}
              width={300}
            />
              <Skeleton variant="text" animation="wave" height={36} width={"50%"} />
            <Box sx={{ width: "90%" }}>
              <Skeleton variant="text" animation="wave" width={"60%"} />
              <Skeleton variant="text" animation="wave"  />
              <Skeleton variant="text" animation="wave" width={"60%"} />
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default BlogDetailServices;
