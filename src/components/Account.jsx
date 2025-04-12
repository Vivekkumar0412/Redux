import React, { useState } from "react";
import { accountGetByIdFun, decAmtFun, incAmtFun, incByAmountFun } from "../actions";
import { useDispatch, useSelector } from "react-redux";
function Account() {
  const [amounts,setAmount] = useState(0)
  let amount = useSelector((state)=> state.account.amount)
  let testAmt = useSelector((state)=> state.account);
  console.log(testAmt,"asssssssssssss,,,,,,,,,,")
  const dispatch = useDispatch()
  return (
    <>
      <div className="bg-yellow-400 m-8 p-6 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">Amount : {testAmt.pending ? "pending" : testAmt.error ? "error occuredd" : amount }</h1>
        <button className="p-2 bg-green-600 rounded-md m-2" onClick={()=>dispatch(incAmtFun())}>Increase By $1</button>
        <button className="p-2 bg-cyan-600 rounded-md m-2" onClick={()=>dispatch(decAmtFun())}>Decrease By $1</button>
        <input className="border border-green-400" type="text" onChange={(e) => setAmount(+e.target.value)} />
        <button className="p-2 bg-pink-600 rounded-md m-2" onClick={()=>dispatch(incByAmountFun(amounts))}>Increase By {amounts}</button>
        <button className="p-2 bg-violet-600 rounded-md m-2" onClick={()=>dispatch(accountGetByIdFun(1))}>Fetch Amount</button>
      </div>
    </>
  );
}
// accountGetByIdFun

export default Account;
