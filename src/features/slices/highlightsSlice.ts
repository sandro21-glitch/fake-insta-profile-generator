import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface highlightTypes {
  id: string;
  name: string;
  image: string;
}

export interface highlightsState {
  highlights: highlightTypes[];
  highlightsModal: boolean;
}

const initialState: highlightsState = {
  highlights: [],
  highlightsModal: false,
};

export const highlightsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setHighlightsModalOpen: (state) => {
      state.highlightsModal = true;
    },
    setHighlightsModalClose: (state) => {
      state.highlightsModal = false;
    },
    addNewHighlight: (
      state,
      action: PayloadAction<{ name: string; image: string }>
    ) => {
      const NewHighlight = {
        id: uuidv4(),
        ...action.payload,
      };
      state.highlights.push(NewHighlight);
    },
    editHighlightName: (
      state,
      action: PayloadAction<{ id: string; editName: string }>
    ) => {
      const { id, editName } = action.payload;
      const editedList = state.highlights.map((item) => {
        if (item.id === id) {
          return { ...item, name: editName };
        }
        return item;
      });
      state.highlights = editedList;
    },
  },
});

export const {
  setHighlightsModalOpen,
  setHighlightsModalClose,
  addNewHighlight,
  editHighlightName,
} = highlightsSlice.actions;

export default highlightsSlice.reducer;
