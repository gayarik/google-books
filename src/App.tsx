import ChosenCard from "./components/ChosenCard";
import Header from "./components/Header";
import Main from "./components/Main";
import { useAppSelector } from "./hooks/redux";

const App = () => {

   const { selectedCard } = useAppSelector((state) => state.bookReducer);

   return (
      <div>
         <Header />
         {selectedCard ? (
            <ChosenCard />
         ) :
            <Main />
         }
      </div>
   );
};

export default App;
