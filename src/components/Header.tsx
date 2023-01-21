import { BiSearchAlt } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchBooks } from '../store/reducers/ActionsCreators';
import { changeInputValue, setStartIndex } from '../store/reducers/BookSlice';

const Header = () => {

   const dispatch = useAppDispatch();
   const { value, startIndex } = useAppSelector((state) => state.bookReducer);

   const handleChange = (e: any) => {
      e.preventDefault();
      dispatch(changeInputValue(e.target.value));
   }

   const handleSearch = (e: any) => {
      setTimeout(() => {
         dispatch(fetchBooks({ value, startIndex }));
         dispatch(setStartIndex(startIndex + 20))
      }, 1000)
   }

   const handleKeySearch = (e: any) => {
      setTimeout(() => {
         e.key === 'Enter' && dispatch(fetchBooks({ value, startIndex }));
         dispatch(setStartIndex(startIndex + 20))
      }, 1000)
   }

   return (
      <div>
         <header className="p-10 bg-zinc-800 text-white">
            <h1 className="text-center font-medium text-4xl pb-8 pt-4">
               Search for books
            </h1>
            <div className="flex items-center justify-center pb-8 gap-3">
               <input
                  autoFocus
                  className="w-2/3 p-2 rounded-md border text-black"
                  type="text"
                  value={value}
                  onChange={handleChange}
                  onKeyDown={handleKeySearch}
               />
               <button onClick={handleSearch}><BiSearchAlt size='2.5rem' /></button>
            </div>
         </header>
      </div>
   );
}

export default Header;