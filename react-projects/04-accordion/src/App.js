import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <>
  {data.map((question) => {
    return <SingleQuestion key={question.id} {...question} />;
  })}
  </>;
}

export default App;
