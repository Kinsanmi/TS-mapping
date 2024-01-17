
import React, { useReducer, useState } from 'react'


const File: React.FC<{title: string}> = ({title}) => (
    <div>{title}</div>
)

const Data:React.FunctionComponent<{state: number, setState:React.Dispatch<React.SetStateAction<number>>}> = ({state, setState}) =>(
    <>
    <button onClick={() => setState(prev => prev + 1)}>Add</button>
    {state}
    <button onClick={() => setState(prev => prev - 1)}>sub</button>
    </>
    
)

interface Todo {
  id: number;
  done: boolean;
  text: string
}

type ActionType = {type: "Add", text: string}

export const Hooks = () => {

    const [state, setState] = useState<number>(1)

  return (
    <>
    <div>Hooks</div>
    <File title='lo' />
    <Data state={state} setState={setState} />
    </>
    
  )
}
