import axios from "axios";
// account actions constants
export const incAmt = "account/inc";
export const decAmt = "account/dec";
export const incByAmount = "account/incByAmount";
export const accountGetByIdFullFill = "account/getById/FullFill";
export const accountGetByIdPending = "account/getById/pending";
export const accountGetByIdRejected = "account/getById/rejected";

// bonus actions constants
export const incBonus = "bonus/inc";
export const decBonus = "bonus/dec";
export const incByBonus = "bonus/incByAmount";
export const incByBonusTest = "bonus/incByAmount/test";

// account action creaters
export function incAmtFun() {
  return { type: incAmt };
}
export function decAmtFun() {
  return { type: decAmt };
}

export function incByAmountFun(val) {
  return { type: incByAmount, payload: val };
}

export function accountGetByIdFun(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccByIdPendingFun());
      let res = await axios.get(`http://localhost:3000/accounts/${id}`);
      console.log(res, "res");
      dispatch(getAccByIdFullFill(res.data.amount));
    } catch (error) {
      // console.log(error,"eroororororor")
      getAccByIdRejectedFun(error);
    }
  };
}
export function getAccByIdFullFill(val) {
  return { type: accountGetByIdFullFill, payload: val };
}
export function getAccByIdPendingFun() {
  return { type: accountGetByIdPending };
}
export function getAccByIdRejectedFun(error) {
  return { type: accountGetByIdRejected, error: error.message };
}
// Bonus action createros

export function incBonusFun() {
  return { type: incBonus };
}
export function decBonusFun() {
  return { type: decBonus };
}

export function incByBonusFun(val) {
  return { type: incByBonus, payload: val };
}
