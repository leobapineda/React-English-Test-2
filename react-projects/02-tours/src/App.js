import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// const url = 'https://course-api.com/react-tours-project'
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoagind] = useState(true);
  const [isError, setIsError] = useState(false);
  async function fetchData() {
    try {
      const toursResponse = await fetch(url);
      const toursData = await toursResponse.json();
      setIsLoagind(false);
      setTours(toursData);
    } catch (err) {
      console.log(err);
      setIsLoagind(false);
      setIsError(true);
    }
  }

  function removeTourFunc(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h4>the was an error</h4>;
  }

  if (tours.length > 0) {
    return (
      <main>

      {tours.length > 0 && <Tours data={tours} removeTour={removeTourFunc} />}
      </main>
    );
  }

  if (!isLoading && !isError && tours.length === 0) {
    return (
      <>
        <h3>there are no more tours</h3>
        <button
          onClick={() => {
            fetchData();
          }}
        >
          refresh page
        </button>
      </>
    );
  }
}

export default App;
