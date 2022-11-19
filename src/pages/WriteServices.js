import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createService,
  getService,
  updateService,
} from "../redux/features/services/servicesSlice";
import EditorToolbar, {
  modules,
  formats,
} from "../components/kecil/EditorToolbar";
import Swal from "sweetalert2";

const Image = styled("img")`
  width: 250px;
  object-fit: cover;
`;

const WriteServices = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [service, setService] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      dispatch(getService(id))
        .then((res) => {
          setService(res.payload.service);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: err,
          });
        });
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isUpdate) {
      setDesc(service.desc);
      setTitle(service.title);
      setImagePreview(
        `https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${service.idImage}`
      );
      setCategory(service.category);
    }
  }, [service, isUpdate]);

  const handleClick = async () => {
    const data = new FormData();

    data.append("image", image);
    data.append("title", title);
    data.append("desc", desc);
    data.append("category", category);

    if(isUpdate){
      dispatch(updateService(data))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    } else{

      dispatch(createService(data))
      .then(() => {
        navigate("/plant-care");
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }

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
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="form-write">
              <label className="font-desc">
                Description <span className="required"> * </span>{" "}
              </label>
              <EditorToolbar toolbarId={"t1"} />
              <ReactQuill
                theme="snow"
                value={desc}
                onChange={setDesc}
                placeholder={"Write something awesome..."}
                modules={modules("t1")}
                formats={formats}
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
