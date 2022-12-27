import { useAppSelector } from "../hooks/redux";
import Card from "./Card";

const Main = () => {

   const { books, loader, idBook } = useAppSelector((state) => state.bookReducer);

   return (
      <div className="p-3">
         <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {books.map((book) =>
               <Card key={book.id} {...book} />
            )}
         </div>
      </div>
   );
}

export default Main;