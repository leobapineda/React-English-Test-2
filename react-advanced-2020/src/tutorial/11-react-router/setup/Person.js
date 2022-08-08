import React, { useState, useEffect } from 'react';
import  data  from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState("Default name");
  const {id} = useParams()
  
  useEffect(() => {
    const newPerson = data.find((peron) => peron.id === Number(id));
    setName(newPerson.name);
    console.log(newPerson.name);
  }, [])

  return (
    <div>
      <h2>{name}</h2>
      <Link className='btn' to="/people" >back to people</Link>
    </div>
  );
};

export default Person;
