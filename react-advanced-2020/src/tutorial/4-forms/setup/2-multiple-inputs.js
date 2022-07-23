import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [infoError, setInfoError] = useState(false);
  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    age: "",
  });
  // console.log(Math.random().toString(36));
  const handleSubmit = (e) => {
    e.preventDefault();

    if (personInfo.name && personInfo.email && personInfo.age) {
      const newPerson = {
        ...personInfo,
        id: new Date().getTime().toString(),
      };
      setPeople((prevPeople) => {
        return [...prevPeople, newPerson];
      });
      setPersonInfo({
        name: "",
        email: "",
        age: "",
      });
    } else {
      setInfoError((prev) => !prev)
      setTimeout(() => {
         setInfoError((prev) => !prev);
      }, 1000);
    }
    console.log(personInfo);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);

    setPersonInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={personInfo.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={personInfo.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* age */}
          <div className="form-control">
            <label htmlFor="email">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={personInfo.age}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* age */}
          <button type="submit">add person</button>
        </form>
        {infoError && <h4>must provide all info</h4>}
        {people.map((person, index) => {
          // person.id = Math.random().toString(36);
          const { name, email, id } = person;
          // console.log(id);
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

// 0
// :
// {age: "12", email: "12", id: "0.2rrph599n2j", name:…}

// 1
// :
// {age: "13", email: "13", id: "0.4iz9fgimyt", name: …}
