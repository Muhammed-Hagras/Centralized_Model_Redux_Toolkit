const { createSlice } = require("@reduxjs/toolkit");

const initialState = { isOpen: false, componentName: null, modelChildPosition: null};
const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.name;
      state.modelChildPosition = action.payload.position; 
      console.log(action.payload)

    },
    closeModel: (state, action) => {
      state.isOpen = false;
      state.componentName = null;
      state.modelChildPosition = null;
    }
  }
});

export const {openModel, closeModel} = modelSlice.actions;

export default modelSlice.reducer;

