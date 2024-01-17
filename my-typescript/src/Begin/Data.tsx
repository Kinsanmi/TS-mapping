import React, { useState,useEffect, useReducer, Reducer, useRef } from 'react'
import { event, getPerson } from './Event';

type Person = {
    name: string;
}


type State = {
    name: string | undefined;
    score: number;
    load: boolean;
}

type Action = 
    | {
        type: "initialize";
        name: string
        }
    | {
        type: "increment";
    }
    | {
        type: "decrement";
    }

    | {
        type: 'reset'
    };


export const Data = () => {

    
    const [name, setName] = useState<string | undefined>();
    const [score, setScore] = useState(0);
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const doSomething = () =>{
        console.log("current ref value of", inputRef.current)  

        return (
            <>
            <input ref={inputRef} type='text' />
            </>
        )

    }

    

    const reducer = (state: State, action: Action): State => {
        switch (action.type){
            case "initialize":
                return {name: action.name, score: 0, load: false};
            case "increment":
                return {...state, score: state.score + 1, };
            case "decrement":
                return {...state, score: state.score - 1, };
            case "reset":
                return {...state, score: 0 };
            default : 
            return state;
        }

    }
    
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer,{
        name: undefined,
        score: 0,
        load: true,
    });




    const fetchData = async()=>{
        setLoading(true)
        try {
            const res = await getPerson()
            setName(res.event)
        } catch (err) {
            //setError(err.msg)
        }finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    const loadingState = () =>{
        if(loading){
            return <div>Loading...</div>
        }

        if(error){
            return <div>404 Error Caught</div>
        }

        return (
            <>
            {
                event.map((item)=>{
                    return (
                        <>
                            <div>
                            <h2>{item.name}</h2>
                            </div>
                        </>

                    )
                })
            }
            <div>
                <button onClick={() => setScore(score + 1)}>Score{score} </button>
                <button onClick={()=> setScore(0)}>Reset</button>
            </div>
            </>
        )
    }




  return (
    <>
    {loadingState()}
    {doSomething()}
    </>
  )
}
