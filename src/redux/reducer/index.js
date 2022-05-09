import {ADD_REMINDER, CLEARALL, REMORE_REMINER} from "../types/types";
import {bake_cookie,read_cookie} from "sfcookies";
let reducer=(state=read_cookie("reminders"),action)=>{

    if(action.type==ADD_REMINDER){

        state=[...state,{text:action.text,date:action.date,id:Math.round(Math.random()*1000000)}]
        bake_cookie("reminders",state)
        return state;
    }else if(action.type==REMORE_REMINER){
        state=state.filter((value)=>value.id!=action.id)
        bake_cookie("reminders",state)
        return state;
    }else if(action.type==CLEARALL){

        bake_cookie("reminders","")
    return [];

    }else{

        return state;
    }
    
}

export default  reducer;