import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { useSearchParams } from "react-router-dom";
import { getText, truncate } from "../utils";
import { styled, alpha } from "@mui/material/styles";
import LocaleContext from "../contexts/LocaleContext";
import { useDispatch } from "react-redux";
import { getServices } from "../redux/features/services/servicesSlice";

const Font = styled("div")`
  @media (max-width: 600px) {
    font-size: 13px;
  }
  @media (max-width: 475px) {
    font-size: 10px;
  }
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    textTransform: "lowercase",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function PageSearchBlog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const { locale } = React.useContext(LocaleContext);
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getServices())
    .then((res) => {
      setAllPost(res.payload.services)
      setLoading(true)
    })
  }, [dispacth]);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const keys = ["title", "desc", "category"];

  const filteredContacts = allPost.filter((post) => {
    return keys.some((key)=> post[key].toLowerCase().includes(keyword.toLowerCase()));
  });

  


  return (
    <Container>
      <Stack direction="column" spacing={2} my={7}>
        <Box sx={{ alignSelf: "center", mb: 5, fontFamily: "Comfortaa" }}>
          <Font>
            <h1 className="title__homewrite">
              {locale === "id"
                ? "Cari blog yang anda inginkan"
                : "Find the blog you want"}
            </h1>
          </Font>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => onKeywordChangeHandler(e.target.value)}
            />
          </Search>
        </Box>
        {loading ? (
          <Grid
            container
            spacing={{ md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
          >
            {filteredContacts.map((item, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345, m: 2 }} style={{ width: 'auto', height: 'auto', }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${item.idImage}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {getText(truncate(item.title, 35))}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {getText(truncate(item.desc, 150))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="info"
                      component={Link}
                      to={`/blog/detail/${item._id}`}
                      size="small"
                    >
                      {locale === "id" ? "Lihat" : "See"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography gutterBottom variant="h5" component="div">
            Loading...
          </Typography>
        )}
      </Stack>
    </Container>
  );
}

export default PageSearchBlog;
