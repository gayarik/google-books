import axios from "axios";
import { Items } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const KEY_API = 'AIzaSyDXGAhXjANHPQOptPvpf19UJueRgQ0DGFs';

interface FetchBooksPayload {
   value: string;
   startIndex: number;
}

export const fetchBooks = createAsyncThunk(
   'books/getBooks',
   async ({ value, startIndex }: FetchBooksPayload, { rejectWithValue }) => {
      try {
         const response = await axios.get<Items>(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${KEY_API}&maxResults=20&startIndex=${startIndex}`)
         return response.data;
      } catch (e: any) {
         return rejectWithValue(e.message);
      }
   }
)