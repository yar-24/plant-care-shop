import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
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
import { toast } from "react-toastify";
import LoadingBtn from "../components/kecil/LoadingBtn";
import LocaleContext from "../contexts/LocaleContext";

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
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = React.useContext(LocaleContext);

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

    if (!image || !title || !desc || !category) {
      toast.warning("Enter all fields");
    } else {
      if (isUpdate) {
        Swal.fire({
          title: "Are you sure update this?",
          text: "You will modify this blog!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#009E72",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLoading(true);
            dispatch(updateService(data)).then(() => {
              Swal.fire(
                "Updated!",
                "Your blog has been updated.",
                "success",
                navigate("/plant-care")
              );
            });
          }
        });
      } else {
        Swal.fire({
          title: "Are you sure save this?",
          text: "You will save this blog!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#009E72",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, save it!",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLoading(true);
            dispatch(createService(data)).then(() => {
              Swal.fire(
                "Saved!",
                "Your blog has been saved.",
                "success",
                navigate("/plant-care")
                )
            });
          }
        });
      }
    }
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
              onChange={(e) => onImage(e)}
            />
            <label className="file" htmlFor="file">
            {locale === 'id' ? 'Unggah Foto' : 'Upload Image'}
            </label>
            <input
              type="text"
              value={title}
              placeholder={locale === 'id' ? 'Judul' : 'Title'}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="form-write">
              <label className="font-desc">
              {locale === 'id' ? 'Deskripsi' : 'Description'} <span className="required"> * </span>{" "}
              </label>
              <EditorToolbar toolbarId={"t1"}/>
              <ReactQuill
                theme="snow"
                value={desc}
                onChange={setDesc}
                placeholder={locale === 'id' ? 'Tulis sesuatu yang luar biasa..' : "Write something awesome.."}
                modules={modules("t1")}
                formats={formats}
              />
            </div>
          </div>
          <div className="menu" >
            <div className="item"  style={{ backgroundColor: '#9ed7c1', textAlign: 'center', fontFamily:'Inter', padding:'20px'}}>
              <h1>{locale === 'id' ? 'Kategori' : 'Category'}</h1>
              <div className="cat" style={{ marginLeft:'20px' }}>
                <input
                  type="radio"
                  checked={category === "plant"}
                  name="cat"
                  value="plant"
                  id="plant"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="plant"  style={{ fontSize:'13.5px' }}>{locale === 'id' ? 'Tumbuhan' : 'Plant'}</label>
              </div>
              <div className="cat" style={{ marginLeft:'20px' }}>
                <input
                  type="radio"
                  checked={category === "care"}
                  name="cat"
                  value="care"
                  id="care"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="care"  style={{ fontSize:'13.5px' }}>{locale === 'id' ? 'Perawatan' : 'Care'}</label>
              </div>
              <div className="cat" style={{ marginLeft:'20px' }}>
                <input
                  type="radio"
                  checked={category === "shop"}
                  name="cat"
                  value="shop"
                  id="shop"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="shop"  style={{ fontSize:'13.5px' }}>{locale === 'id' ? 'Belanja' : 'Shop'}</label>
              </div>
              <div className="cat" style={{ marginLeft:'20px' }}>
                <input
                  type="radio"
                  checked={category === "service"}
                  name="cat"
                  value="service"
                  id="service"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="shop"  style={{ fontSize:'13.5px' }}>{locale === 'id' ? 'Layanan' : 'Service'}</label>
              </div>
              <div className="cat" style={{ marginLeft:'20px' }}>
                <input
                  type="radio"
                  checked={category === "other"}
                  name="cat"
                  value="other"
                  id="other"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="other"  style={{ fontSize:'13.5px' }}>{locale === 'id' ? 'Lainya' : 'Other'}</label>
              </div>
            </div>
            <div className="item"  style={{ backgroundColor: '#9ed7c1', fontFamily:'Inter'}}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  justifyContent: "space-around",
                }}
              >
                <h1 style={{ textAlign: 'center'}} >{locale === 'id' ? 'Menerbitkan' : 'Publish'}</h1>
                <span style={{ fontSize:'13.5px', marginLeft: '20px' }}>
                  <b>Status : </b> {locale === 'id' ? 'Konsep' : 'Draft'}
                </span>
                <span  style={{ fontSize:'13.5px', marginLeft: '20px' }}>
                  <b>{locale === 'id' ? 'Visibilitas' : 'Visibility'} : </b> {locale === 'id' ? 'Publik' : 'Public'}
                </span>
                <div className="buttons" style={{ marginLeft:'auto', marginRight:'auto' }} >
                  <LoadingBtn onClick={handleClick} loading={isLoading} >
                    Publish
                  </LoadingBtn>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default WriteServices;
