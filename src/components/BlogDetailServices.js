import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import {getService} from "../redux/features/services/servicesSlice"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getText } from "../utils";

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

  console.log(service);

  return (
    <Container>
    <div className='services' >
      <img className="gambar1" src={`https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${service.idImage}`} alt="" />
      <div className="kolom">
        <h2>{service.title}</h2>
        <div dangerouslySetInnerHTML={{__html: service.desc}} className="deskripsi2"/>
      </div>
    </div>
    <div className='services'>
      {/* <div className="kolom">
        <h3>Desa Panglipuran</h3>
        <p className="deskripsi2">Desa adat Penglipuran merupakan sebuah komplek pemukiman penduduk yang ramah
          lingkungan, bangunan-bangunan tertata rapi dibangun di atas luas lahan yang sama, pintu utama
          (angku-angkul) berbentuk sama dan simetris, suasana perkampungan yang unik dan indah.</p>
        <p className="deskripsi2">Desa Penglipuran Bangli memang memiliki tata ruang yang konseptual, membuatnya
          tampil unik, perumahan tertata sangat rapi, jalanan bersih dan tenang tanpa kendaraan bermotor,
          jangankan mobil sepeda motorpun dilarang masuk ke komplek perumahan tradisional tersebut. Sebuah tempat
          parkir disediakan untuk kendaraan anda baik itu mobil ataupun bus pariwisata.</p>
      </div> */}
      {/* <img className="gambar2"
        src="https://img.freepik.com/premium-photo/asian-farmer-transplant-rice-seedlings-rice-field-farmer-planting-rice-rainy-season_61243-156.jpg?size=626&ext=jpg&ga=GA1.2.2063963505.1657106894"
        alt="" /> */}
    </div>
  </Container>
  );
};

export default BlogDetailServices;
