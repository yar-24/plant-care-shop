import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";

const BlogDetailServices = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts())
  //   .then((res) => {
  //     const data = res.payload.products;
  //     setproducts(data);
  //     setIsLoading(true);
  //   })
  //   .catch((err) => {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Something went wrong!',
  //       footer: err
  //     })
  //   });
  // })

  return (
    <Container>
    <div className='services'>
      <img className="gambar1" src="https://img.freepik.com/free-vector/asian-farmer-working-agriculture-field-man-collecting-crops-fields-with-plow-hoe_575670-981.jpg?size=626&ext=jpg&ga=GA1.2.1760872244.1657091755" alt="" />
      <div className="kolom">
        <h2>Memuat Segala Informasi Mengenai Desa Panglipuran</h2>
        <p className="deskripsi2">Desa Adat Panglipuran merupakan satu kawasan pedesaan yang memiliki tatanan
          spesifik dari struktur desa tradisional, sehingga mampu menampilkan wajah pedesaan yang asri.
          Penataan fisik dari struktur desa tersebut tidak terlepas dari budaya masyarakatnya yang sudah
          berlaku turun
          temurun. Sehingga dengan demikian Desa Adat Penglipuran merupakan obyek wisata budaya.</p>
      </div>
    </div>
    <div className='services'>
      <div className="kolom">
        <h3>Desa Panglipuran</h3>
        <p className="deskripsi2">Desa adat Penglipuran merupakan sebuah komplek pemukiman penduduk yang ramah
          lingkungan, bangunan-bangunan tertata rapi dibangun di atas luas lahan yang sama, pintu utama
          (angku-angkul) berbentuk sama dan simetris, suasana perkampungan yang unik dan indah.</p>
        <p className="deskripsi2">Desa Penglipuran Bangli memang memiliki tata ruang yang konseptual, membuatnya
          tampil unik, perumahan tertata sangat rapi, jalanan bersih dan tenang tanpa kendaraan bermotor,
          jangankan mobil sepeda motorpun dilarang masuk ke komplek perumahan tradisional tersebut. Sebuah tempat
          parkir disediakan untuk kendaraan anda baik itu mobil ataupun bus pariwisata.</p>
      </div>
      <img className="gambar2"
        src="https://img.freepik.com/premium-photo/asian-farmer-transplant-rice-seedlings-rice-field-farmer-planting-rice-rainy-season_61243-156.jpg?size=626&ext=jpg&ga=GA1.2.2063963505.1657106894"
        alt="" />
    </div>
  </Container>
  );
};

export default BlogDetailServices;