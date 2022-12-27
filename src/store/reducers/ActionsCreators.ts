import { bookSlice } from "./BookSlice";
import axios from "axios";
import { Items } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const KEY_API = 'AIzaSyDXGAhXjANHPQOptPvpf19UJueRgQ0DGFs';

export const fetchBooks = createAsyncThunk(
   'books/getBooks',
   async (value: string, thunkAPI) => {
      try {
         const response = await axios.get<Items>(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${KEY_API}&maxResults=20`)
         return response.data.items;
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.message);
      }
   }
)

export const changeInput = bookSlice.actions.changeInputValue;