import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoagind] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  async function fetchDate() {
    try {
      const response = await fetch(url);
      console.log(response);

      if (response.status >= 200 && response.status <= 299) {
        const userInfo = await response.json();
        console.log(userInfo);
        setUser(userInfo);
        setLoagind(false);
        return userInfo;
      } else {
        setIsError(true);
        setLoagind(false);
      }
    } catch (err) {
      setLoagind(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchDate();
  }, []);

  if (loading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>Error...</h3>;
  }

  if (user) {
    return (
      <>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt={user.login} />
      </>
    );
  }
};

export default MultipleReturns;
