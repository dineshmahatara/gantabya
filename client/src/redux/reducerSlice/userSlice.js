import { createSlice } from '@reduxjs/toolkit';
//redux -> user: u
const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
    state.token= action.payload 
  
    },
  
  },
});




export const { setToken } = userSlice.actions;
export default userSlice.reducer;