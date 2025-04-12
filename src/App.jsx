import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  return (
    <>
      <h1 className="text-center text-blue-800 text-4xl font-bold">
        Account : {amount}
      </h1>
      <h1 className="text-center text-orange-800 text-4xl font-bold">
        Bonus : {points}
      </h1>
      <div className="bg-red-600 m-10 h-full flex justify-center items-center flex-col gap-10">
        <Account />
        <Bonus />
      </div>
    </>
  );
}

export default App;
