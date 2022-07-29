import React from 'react'
const List = ({ items, handleRemove, handleEdit }) => {

  return (
    <>
      <section>
        {items.map((stuff) => {
          const { item, id} = stuff;
          return (
            <p key={id} >
              <span>{item}</span>
              <button onClick={() => handleRemove(id)}>remove</button>
              <button onClick={() => handleEdit(id, item)}>edit</button>
            </p>
          );
        })}
      </section>
    </>
  );
};

export default List
