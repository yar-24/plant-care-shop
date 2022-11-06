import {axiosInstance} from "../../../utils"


// Register user
const register = async (userData) => {
  const response = await axiosInstance.post("/users/register", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axiosInstance.post("/users/login", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


//Forgot Passsword
const forgot = async (userData) => {
  const response = await axiosInstance.post("/users/forgotPassword", userData)

  return response
}

//Reset Passsword
const resetPassword = async (data, token) => {
  const response = await axiosInstance.get(`users/resetPassword?token=${token}`, data)
  .then((res) => {
    console.log("sukses", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

  return response
}


// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  forgot,
  resetPassword
}

export default authService