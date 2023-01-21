import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchBooks } from "../store/reducers/ActionsCreators";
import { setStartIndex } from "../store/reducers/BookSlice";
import Card from "./Card";
import { FadeLoader } from "react-spinners";
import { useEffect } from "react";

const Main = () => {

   const { books, loader, amount, startIndex, value, error } = useAppSelector((state) => state.bookReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setStartIndex(startIndex));
   }, [dispatch, setStartIndex])

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
         if (!loader) {
            dispatch(setStartIndex(startIndex + 20));
            dispatch(fetchBooks({ value, startIndex }));
         }
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [handleScroll])

   return (
      <div className="p-3">
         {books.length > 0 && (
            <div className="text-center pt-1">{amount}</div>)
         }
         {error && (
            <div className="text-center text-red-600 text-xl">Error... please reload the page</div>
         )}
         <div className="grid gap-3 grid-cols-2 md:grid-cols-4 mt-4">
            {books.map((book) => (
               <Card key={book.id} {...book} />
            ))}
         </div>
         {loader && (
            <div className="flex justify-center py-2">
               <FadeLoader loading />
            </div>
         )}
      </div >
   );
}

export default Main;