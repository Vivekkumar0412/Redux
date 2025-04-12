import {
  incAmt,
  decAmt,
  incByAmount,
  accountGetByIdFullFill,
  accountGetByIdPending,
  accountGetByIdRejected,
} from "../actions";
export function accountReducer(state = { amount: 0 }, action) {
  try {
    if (action.type === incAmt) {
      return { amount: state.amount + 10 };
    }
    if (action.type === decAmt) {
      return { amount: state.amount - 10 };
    }
    if (action.type === incByAmount) {
      return { amount: state.amount + action.payload };
    }
    if(action.type === accountGetByIdFullFill){
        return {amount : action.payload, pending : false}
    }
    if(action.type === accountGetByIdPending){
        return {...state,pending : true}
    }
    if(action.type === accountGetByIdRejected){
        console.log("hii iam rejectedddddd")
        return {...state,error : action.error, pending : false}
    }

    return state;
  } catch (error) {
    return state;
  }
}
