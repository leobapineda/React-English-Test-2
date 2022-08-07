import React from 'react'
import { useParams } from 'react-router-dom';

function Book() {

  const {id} = useParams()
  console.log(useParams());
  return (
    <div>
      <h1>Single Book {id}</h1>
    </div>
  );
}

export default Book
