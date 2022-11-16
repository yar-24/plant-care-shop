import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import productReducer from './features/products/productSlice'
import servicesReducer from './features/services/servicesSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    services: servicesReducer
  },
})

export default store;