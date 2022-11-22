import React from 'react';
import { BsSearch } from "react-icons/bs";
import Swal from "sweetalert2";
 
function Search({ keyword, keywordChange }) {
    
  const onSearch = () => {
    Swal.fire({
      title: 'Halaman Pencarian',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Cari',
      confirmButtonColor: '#009e72',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }
  
  return (
    <BsSearch onClick={onSearch} value={keyword} onChange={(event) => keywordChange(event.target.value)} />
  )
}
 
export default Search;