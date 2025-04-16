import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export default counterSlice
