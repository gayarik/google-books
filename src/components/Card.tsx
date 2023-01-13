import { Book } from "../types/types";

const Card = (book: Book) => {
   return (
      <div className="bg-zinc-800 p-3 mb-5">
         <div className="flex justify-center" style={{ minHeight: '180px' }}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Image" />
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