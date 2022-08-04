import React from 'react'
import useUser from '../hooks/useUser';

function MoreInfo() {
    const {name, age} = useUser()
  console.log(name, age);
  return (
    <div>
      <h1>More user info</h1>
      <p>user name: {name}</p>
      <p>user age: {age}</p>
    </div>
  );
}

export default MoreInfo;
