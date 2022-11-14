import React, {useReducer} from "react";
import Button from "../komponen/buttton";

const reducer = (state, action)=> {
    if (action.type === "INCREMENT") {
        return {
            count : state.count + 1,
            showText : state.showText,
        }
    }
    if (action.type === "DECREMENT"){
        return {
            count : state.count - 1,
            showText : state.showText,
        }
    }
    if (action.type === "toggleShowText"){
        return{
            count : state.count,
            showText : !state.showText,
        }
    }
    return state;
}

function ReducerMateri(){
    const [state,dispatch]= useReducer(reducer, {
        count : 0,
        showText : true,
    }) 

    return(
        <div>
            <h1>{state.count}</h1>
            <Button title={"tambah"} color="blue" text="white" onClick={()=>{
                    dispatch({
                        type : "INCREMENT"
                    })

                    dispatch({
                        type : "toggleShowText"
                    })
                }} />

            <Button title={"kurang"} color="red" text="white" onClick={()=>{
                dispatch({
                    type : "DECREMENT"
                })
            }}/>
            {state.showText && <p>text ini muncul</p>}
        </div>
    )
}
export default ReducerMateri

