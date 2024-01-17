import React, { useEffect, useState } from 'react';
import "./App.css";
import { Hooks } from './Hooks';
import { Type } from './Begin/Type';


// Heading component using generics

const Heading: React.FunctionComponent<{title: string}> = ({title}) => (
  <div>{title}
  <p>title</p>
  <h2>{title}</h2>
  </div>
) 


const Set:React.FunctionComponent<{children: string, mess:string}> = ({children, mess}) =>(
  <div style={{textAlign: "center", fontSize: "16px", borderRadius: "6px", height: "20px", width: "30px", background:"#ccc", margin: "0"}}>{children}
  <h2>{mess}</h2>
  </div>

)

// mapping in typescript

const Data: React.FunctionComponent<{items:string[]}> = ({items}) =>(
  
  
  <ul>
    {items.map((item, i)=>(
      <li key={i}>{item}</li>
    ))}
  </ul>
)



const Feet:React.FunctionComponent<{text: string}> = ({text}) =>(
   <div>{text}</div>
)

interface Payload {
  text: string;
}


// Increment value

const Increment: React.FunctionComponent<{value: number, setValue:React.Dispatch<React.SetStateAction<number>>}> = ({value, setValue}) => (
  <button style={{background: "red"}} onClick={()=> setValue(value + 1)}>Add {value}</button>
)


const Loading: React.FunctionComponent<{load: boolean, setLoad:  React.Dispatch<React.SetStateAction<boolean>>}> = ({load, setLoad}) => (
  <>
  <p>Loading....</p>
  </>
)


function App() {

  const [load, setLoad] = useState<boolean>(false)

  const [checked, setChecked] = useState<Payload | null>(null);

  const [value, setValue] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      fetch("/data.json")
      .then(res => res.json())
      .then(data =>{
        setChecked(data);
      })
    })
  },[])





  const reveal = () =>{
    if(load){
      return <div>Loading...</div>
    }

    return (
      <>
      <h1 style={{textAlign : "center"}}>Hello!</h1>
      <Heading title='Heading title property' />
      <Increment value={value} setValue={setValue} />
      <Set children= "" mess='' />
      <Feet text='Filling'></Feet>

      <Hooks />

      <Data items={["one","2","3"]} />

      <Loading load={load} setLoad={setLoad} />

      <Type />
      </>
    )
  }



  return (
    <div className="App">
      {reveal()}
    </div>
  );
}

export default App;
