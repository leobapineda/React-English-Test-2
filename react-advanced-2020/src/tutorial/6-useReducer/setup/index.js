import React, { useReducer, useState } from "react";
// ---------->>>
import Modal from './Modal';
import data  from '../../../data';


const Index = () => {
const [name, setName] = useState("")
const [isModal, setIsModal] = useState(false)
const [people, setPeople] = useState(data)


function handleSubmit(e) {
  console.log("submit");
  e.preventDefault()
  if(name) {
  console.log("if");

   setPeople(prevPeopls => {
    return [...prevPeopls, {name:name, id:Date.now()}];
   })
  } else {
    console.log("else");
    setIsModal(prev => !prev)
  }
}

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" />
        <button>submit</button>
      </form>
      {isModal && <Modal />}
      <div>

        {people.map((person) => {
          const {id, name} = person
          return <h4 key={id} >{name}</h4>
        })}
      </div>
    </>
  );
};

export default Index;
