import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import BannerFreeOngkir from '../components/BannerFreeOngkir';
import BlogDetailServices from '../components/BlogDetailServices';
import ServicesList from '../components/ServicesList';
import LocaleContext from '../contexts/LocaleContext';
import { getService } from '../redux/features/services/servicesSlice';

const DetailServices = () => {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { locale } = useContext(LocaleContext);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(false);
    dispatch(getService(id))
      .then((res) => {
        setService(res.payload.service);
        setIsLoading(true);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
  }, [id, dispatch]);

  return (
    <>
      <BlogDetailServices service={service} isLoading={isLoading} />
      <BannerFreeOngkir />
      <ServicesList category={service.category}>
        {locale === 'id' ? 'Mungkin Anda sukai' : 'You might like'}
      </ServicesList>
    </>
  );
};

export default DetailServices;
