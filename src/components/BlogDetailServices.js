import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import {getService} from "../redux/features/services/servicesSlice"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";

const BlogDetailServices = () => {
  const [service, setService] = useState({})

const dispatch = useDispatch();
 const {id} = useParams()

  useEffect(() => {
    dispatch(getService(id))
    .then((res) => {
      setService(res.payload.service)
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: err
      })
    });
  }, [id, dispatch])

  return (
    <Container>
    <div className='services' >
      <img className="gambar1" src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${service.idImage}`} alt="" />
      <div className="kolom">
        <h2>{service.title}</h2>
        <Box dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(service.desc)}} className="deskripsi2"/>
      </div>
    </div>
  </Container>
  );
};

export default BlogDetailServices;
