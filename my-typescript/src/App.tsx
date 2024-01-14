import React, { useEffect, useState } from 'react';
import '../src/App.scss';


// Heading component using generics

const Heading: React.FunctionComponent<{title: string}> = ({title}) => (
  <div>{title}
  <p>title</p>
  <h2>{title}</h2>
  </div>
) 


const Set:React.FunctionComponent<{children: string, mess:string}> = ({children, mess}) =>(
  <div style={{textAlign: "center", fontSize: "16px", borderRadius: "6px", height: "20px", width: "30px", background:"#ccc"}}>{children}
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


function App() {

  const [checked, setChecked] = useState<Payload | null>(null);

  const [value, setValue] = useState(0);

  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(data =>{
      setChecked(data);
    })
  },[])

  return (
    <div className="App">
      <h1 style={{textAlign : "center"}}>Hello!</h1>
      <Heading title='Heading title property' />
      <Increment value={value} setValue={setValue} />
      <Set children= "50" mess='untanned' />
      <Feet text='Filling'></Feet>

      <Data items={["one","2","3"]} />
    </div>
  );
}

export default App;
