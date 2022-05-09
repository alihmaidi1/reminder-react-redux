import React, { useState } from "react";
import { add_reminder,remove_reminder,clear_All } from "../../redux/action";
import { connect } from "react-redux";
import moment from "moment";
import "./app.css";
import "../../assets/fontawesome/css/all.min.css";
const App=(props)=>{

    let [state,setstate]=useState({
        text:'',
        date:''

    });


    let reminders=()=>{
        return(
            props.reminders.length!=0?
        <div className="ui-list">
    {props.reminders.map((reminder,index)=>{
        return(
        <div className="item-list" key={index}>
            <span>{reminder.text}</span> 
            <span>{moment.utc(reminder.date).fromNow()}</span>
            <span onClick={()=>props.remove_reminder(reminder.id)}><i className="fa fa-trash-alt"></i></span>
            
        </div>
        )
    })}
    </div>:"")

    }
    return (<div className="App">
                <div className="Container">
                        <div>
                        <div className="reminder-header">What Should You Do? </div>

                        </div>
                        <input  placeholder="Enter The Task" onKeyUp={(e)=>setstate({text:e.target.value,date:state.date})} className="form-control input"  type="text"/>
                        <input  onChange={(e)=>setstate({text:state.text,date:e.target.value})} className="form-control input" type="datetime-local"/>
                        <button onClick={()=>props.add_reminder(state.text,state.date)} className="d-block w-100 btn btn-primary" type="button"> Add</button>
                        {reminders()}
                        <button onClick={()=>props.clear_All()} className="d-block w-100 btn btn-danger mt-3" type="button"> Remove ALL</button>

                </div>
    </div>)
}


export default connect(state=>{

    return {

        reminders:state

    }

},{add_reminder,remove_reminder,clear_All})(App);