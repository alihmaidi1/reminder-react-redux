import { ADD_REMINDER, CLEARALL,REMORE_REMINER } from "../types/types";
export const add_reminder=(text,date)=>{

    return {

        type:ADD_REMINDER,
        text,
        date
    }
}
export const remove_reminder=(id)=>{

    return {

        type:REMORE_REMINER,
        id

    };
}

export const clear_All=()=>{

    return {

        type:CLEARALL

    }

}
