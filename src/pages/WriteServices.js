import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { createService } from "../redux/features/services/servicesSlice";

const Image = styled("img")`
  width: 250px;
  object-fit: cover;
`;

const WriteServices = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(state?.cat || "");
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {

    const data = new FormData();

    data.append("image", image);
    data.append("title", title);
    data.append("desc", value);
    data.append("category", category)
    dispatch(createService(data))
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })

  };

  const onImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Container>
      <Stack my={{ xs: 4, md: 6 }}>
        <div className="add">
          <div className="content">
            {imagePreview ? (
              <Image src={imagePreview} alt="input_gambar" />
            ) : null}
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name=""
              multiple
              onChange={(e) => onImage(e)}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="editorContainer">
              <ReactQuill
                className="editor"
                placeholder={"Start Posting Something..."}
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="menu">
            <div className="item">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  justifyContent: "space-around",
                }}
              >
                <h1>Publish</h1>
                <span>
                  <b>Status: </b> Draft
                </span>
                <span>
                  <b>Visibility: </b> Public
                </span>
                <div className="buttons">
                  <button>Save as a draft</button>
                  <button onClick={handleClick}>Publish</button>
                </div>
              </Box>
            </div>
            <div className="item">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Category
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="service"
                    control={<Radio />}
                    label="Service"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <FormControlLabel
                    value="plantCare"
                    control={<Radio />}
                    label="Plant Care"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default WriteServices;
