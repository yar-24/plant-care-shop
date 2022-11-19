import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../redux/features/services/servicesSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CustomButton from "../components/CustomButton";
import { getText } from "../utils";

function HomeWrite() {
  const [allPost, setAllPost] = useState([]);
  const [post, setPost] = useState({});

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices())
      .then((res) => {
        setAllPost(res.payload.services);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userWrite = allPost.filter((post) => post.user !== user._id);

  const handleDelete = () => {
    console.log("dlete");
  };

  return (
    <Container>
      <Stack direction="column" spacing={2} my={7}>
        <Box sx={{ alignSelf: "center", mb: 5 }}>
          <h1 className="title__homewrite">
            Create <span> Your </span> blog for plant care
          </h1>
          <CustomButton component={Link} to={"/write"}>
            Create Now
          </CustomButton>
        </Box>
        {userWrite.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              component="img"
              height="140"
              image={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${item.idImage}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {getText(item.desc.slice(0, 150))}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to={`/edit/${item._id}`}
                state={post}
                size="small"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                component={Link}
                to={`/detail-services/${item._id}`}
                size="small"
              >
                Lihat
              </Button>
              <Button color="error" onClick={handleDelete} size="small">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default HomeWrite;
