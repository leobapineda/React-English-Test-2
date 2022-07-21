import React from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
  return (
    <>
      {data.map((place) => {
        const { id } = place;
        return (
            <Tour removeTour={removeTour} key={id} {...place} />
        );
      })}
    </>
  );
};

export default Tours;
