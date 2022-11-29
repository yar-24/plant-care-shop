import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosInstance, getText, truncate } from "../../utils";

function Search({ keyword, keywordChange }) {
  const [data, setData] = useState();

  const navigate = useNavigate()

  const onSearch = () => {
    Swal.fire({
      title: "Halaman Pencarian",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      showLoaderOnConfirm: true,
      preConfirm: (keyword) => {
        return axiosInstance(`/services/?q=${keyword}`)
          .then((response) => {
            setData(response.data.services);
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })

  };

  useEffect(() => {
    if (data) {
      data.map((item) =>
        Swal.fire({
          title: `${item.title}`,
          text: `${getText(truncate(item.desc, 150))}`,
          imageUrl: `https://res.cloudinary.com/eundangdotcom/image/upload/v1666578066/${item.idImage}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: 'See More',
          confirmButtonColor: "#009E72",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
              navigate(`/detail-services/${item._id}`)
          }
        })
      );
    }
  },[data]);

  return (
    <BsSearch
      onClick={onSearch}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

export default Search;
