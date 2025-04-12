import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decBonusFun, incBonusFun, incByBonusFun } from "../actions";
function Bonus({store}) {
  const [bonus, setBonus] = useState(0);
  const points = useSelector((state)=> state.bonus.points)
  const dispatch = useDispatch()
  return (
    <>
      <div className="bg-cyan-400 m-8 p-6 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">Bonus : {points}</h1>
        <button className="p-2 bg-green-600 rounded-md m-2" onClick={()=> dispatch(incBonusFun())}>Increase By $1</button>
        <button className="p-2 bg-cyan-600 rounded-md m-2" onClick={()=> dispatch(decBonusFun())}>Decrease By $1</button>
        <input className="border border-green-400" type="text" onChange={(e) => setBonus(+e.target.value)} />
        <button className="p-2 bg-cyan-600 rounded-md m-2" onClick={()=> dispatch(incByBonusFun(bonus))}>Increase By {bonus}</button>
      </div>
    </>
  );
}

export default Bonus;
