import { incBonus, decBonus, incByBonus } from "../actions";

export function bonusReducer(state={points : 0},action){
    if(action.type === incBonus){
        return {points : state.points + 10}
    }
    if(action.type === decBonus){
        return {points : state.points - 10}
    }
    if(action.type === incByBonus){
        return {points : state.points + action.payload}
    }
    return state
}