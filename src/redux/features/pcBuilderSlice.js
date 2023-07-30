import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponents: [],
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const newComponent = action.payload;
      const category = newComponent.category;
      const existingComponentIndex = state.selectedComponents.findIndex(
        (component) => component.category === category
      );

      if (existingComponentIndex !== -1) {
        state.selectedComponents.splice(existingComponentIndex, 1);
      }

      state.selectedComponents.push(newComponent);
    },
    removeComponent: (state, action) => {
      state.selectedComponents = state.selectedComponents.filter(
        (component) => component.name !== action.payload
      );
    },
  },
});

export const { addComponent, removeComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
