import { useAppDispatch } from "../hooks/redux";
import { setSelectedCard } from "../store/reducers/BookSlice";
import { Book } from "../types/types";

const Card = (book: Book) => {

   const dispatch = useAppDispatch();

   return (
      <div
         className="bg-zinc-800 p-3 mb-5 cursor-pointer hover:bg-zinc-700 transition-all delay-100 ease-in-out"
         onClick={() => {
            dispatch(setSelectedCard(book));
         }}
      >
         <div className="flex justify-center" style={{ minHeight: '180px' }}>
            {book.volumeInfo.imageLinks &&
               <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book" />
            }
         </div>
         <div className="text-neutral-500 pt-4">{book.volumeInfo.categories}</div>
         <div className="text-neutral-300">{book.volumeInfo.title}</div>
         <div className="text-neutral-500">
            {book.volumeInfo.authors
               ? book.volumeInfo.authors[0]
               : book.volumeInfo.authors
            }
         </div>
      </div>
   );
}

export default Card;