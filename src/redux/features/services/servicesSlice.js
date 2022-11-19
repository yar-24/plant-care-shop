import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import servicesService from './servicesService'

const initialState = {
  services: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new service
export const createService = createAsyncThunk(
  'services/create',
  async (serviceData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      console.log(token)
      return await servicesService.createService(serviceData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get service
export const getService = createAsyncThunk(
  'services/get',
  async (serviceId, serviceData, thunkAPI) => {
    try {
      return await servicesService.getService(serviceId, serviceData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get services
export const getServices = createAsyncThunk(
  'services/gets',
  async (_, thunkAPI) => {
    try {
      return await servicesService.getServices()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user goal
export const deleteservice = createAsyncThunk(
  'services/delete',
  async (serviceId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await servicesService.deleteService(serviceId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Update service
export const updateService = createAsyncThunk(
  'services/update',
  async (serviceData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      const serviceId = thunkAPI.getState().services.services.service._id
      console.log(serviceId)
      return await servicesService.updateService(serviceData, serviceId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.services.push(action.payload)
      })
      .addCase(createService.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getService.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.services = action.payload
      })
      .addCase(getService.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getServices.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.services = action.payload
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteservice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteservice.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.services = state.services.filter(
          (service) => service._id !== action.payload.serviceId
        )
      })
      .addCase(deleteservice.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateService.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.services = state.services.filter(
          (service) => service._id !== action.payload.serviceId
        )
        state.services.push(action.payload)
      })
      .addCase(updateService.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = serviceSlice.actions
export default serviceSlice.reducer