import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types/types";
import { fetchBooks } from "./ActionsCreators";

interface BookState {
   books: Book[];
   loader: boolean;
   idBook: string;
   error: string;
   value: string;
}

const initialState: BookState = {
   books: [],
   loader: false,
   idBook: '',
   error: '',
   value: '',
}

export const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {
      booksFetching(state) {
         state.loader = true;
      },
      booksFetchingSuccess(state, action: PayloadAction<Book[]>) {
         state.loader = false;
         state.error = '';
         state.books = action.payload;
      },
      booksFetchingError(state, action: PayloadAction<string>) {
         state.loader = false;
         state.error = action.payload;
      },
      changeInputValue(state, action: PayloadAction<string>) {
         state.value = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchBooks.fulfilled, (state: any, action: PayloadAction<Book[]>) => {
            state.loader = false;
            state.error = '';
            state.books = action.payload;
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

export default bookSlice.reducer;