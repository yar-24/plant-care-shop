import React, { useContext, useEffect, useState } from 'react';
import BannerFreeOngkir from '../components/BannerFreeOngkir';
import BlogDetailServices from '../components/BlogDetailServices';
import ServicesList from '../components/ServicesList';
import LocaleContext from '../contexts/LocaleContext';
import { getService } from '../redux/features/services/servicesSlice';
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailServices = () => {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const { locale } = useContext(LocaleContext);

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
      <BlogDetailServices service={service} isLoading={isLoading} />
      <BannerFreeOngkir />
      <ServicesList category={service.category} >
        {locale === 'id' ? 'Mungkin Anda sukai' : 'You might like'}
      </ServicesList>
    </>
  );
};

export default DetailServices;
