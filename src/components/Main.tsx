import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchBooks } from "../store/reducers/ActionsCreators";
import { setStartIndex } from "../store/reducers/BookSlice";
import Card from "./Card";
import { FadeLoader } from "react-spinners";

const Main = () => {

   const { books, loader, amount, startIndex, value, error } = useAppSelector((state) => state.bookReducer);
   const dispatch = useAppDispatch();

   const fetchMoreBooks = (e: any) => {
      dispatch(setStartIndex(startIndex + 20));
      dispatch(fetchBooks({ value, startIndex }));
   }

   return (
      <div className="p-3">
         {books.length > 0 !== loader && (
            <div className="text-center pt-1">{amount}</div>)
         }
         {error && (
            <div className="text-center text-red-600 text-xl">Error... please reload the page</div>
         )}
         {
            loader ? (
               <div className="flex justify-center py-2">
                  <FadeLoader loading />
               </div>
            ) : (
               <div className="grid gap-3 grid-cols-2 md:grid-cols-4 mt-4">
                  {books.map((book) =>
                     <Card key={book.id} {...book} />
                  )}
               </div>
            )
         }
         <div className="text-center py-2">
            {books.length !== amount !== loader && (
               <button className="rounded-3xl ring-1 ring-zinc-800 p-2" onClick={fetchMoreBooks}>Load more</button>
            )}
         </div>
      </div >
   );
}

export default Main;