import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, Items } from "../../types/types";
import { fetchBooks } from "./ActionsCreators";

interface BookState {
   books: Book[];
   loader: boolean;
   idBook: string;
   error: string;
   value: string;
   amount: number;
   startIndex: number;
}

const initialState: BookState = {
   books: [],
   loader: false,
   idBook: '',
   error: '',
   value: '',
   amount: 0,
   startIndex: 0,
}

export const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {
      changeInputValue(state, action: PayloadAction<string>) {
         state.value = action.payload;
      },
      setStartIndex(state, action: PayloadAction<number>) {
         state.startIndex = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchBooks.fulfilled, (state: any, action: PayloadAction<Items>) => {
            state.loader = false;
            state.error = '';
            state.books = state.books.concat(action.payload.items);
            state.amount = action.payload.totalItems;
         })
         .addCase(fetchBooks.pending, (state: any) => {
            state.loader = true;
         })
         .addCase(fetchBooks.rejected, (state: any, action: PayloadAction<any>) => {
            state.loader = false;
            state.error = action.payload;
         })
   }
})

export const { changeInputValue, setStartIndex } = bookSlice.actions;
export default bookSlice.reducer;