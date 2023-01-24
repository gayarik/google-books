import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { setSelectedCard } from "../store/reducers/BookSlice";

const ChosenCard = () => {

   const { selectedCard } = useAppSelector((state) => state.bookReducer);
   const dispatch = useAppDispatch();

   return (
      <div className="bg-zinc-800 p-4 mt-10 w-3/5 m-auto flex">
         <div>
            {selectedCard?.volumeInfo.imageLinks &&
               <img src={selectedCard?.volumeInfo.imageLinks.thumbnail} alt="Book" />
            }
         </div>
         <div className="w-10/12 pl-10">
            <div className="text-neutral-500 pb-2">{selectedCard?.volumeInfo.categories}</div>
            <div className="text-neutral-300 text-xl">{selectedCard?.volumeInfo.title}</div>
            <div className="text-neutral-500">{selectedCard?.volumeInfo.authors}</div>
            <div className="text-neutral-300 pt-6">{selectedCard?.volumeInfo.subtitle}</div>
            <div className="text-neutral-300">{selectedCard?.volumeInfo.description}</div>
         </div>
         <button className="flex text-red-500" onClick={() => dispatch(setSelectedCard(null))}>
            <AiOutlineCloseCircle size="2rem" />
         </button>
      </div>
   );
}

export default ChosenCard;