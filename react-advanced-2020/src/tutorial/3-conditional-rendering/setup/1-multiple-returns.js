import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoagind] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});
  const obj = {
    login: "leo",
    avatar_url:
      "https://i0.wp.com/uncomocorreo.com/wp-content/uploads/2018/03/lol-meme.jpg?resize=415%2C501&ssl=1",
    bio: "nadaquever@.com",
    company: "no trabajo me mantienen",
  };
  async function fetchDate() {
    try {
      const response = await fetch(url);
      console.log(response);
      if (response.status >= 200 && response.status <= 299) {
        const userInfo = await response.json();
        const local = localStorage.getItem("user");
        if (local) {
          setUser(JSON.parse(local));
          console.log(JSON.parse(local));
          setLoagind(false);
          return;
        }
        setUser(userInfo);
        setLoagind(false);
        localStorage.setItem("user", JSON.stringify(obj));
        return userInfo;
      } else {
        setIsError(true);
        setLoagind(false);
        return;
      }
    } catch (err) {
      setLoagind(false);
      setIsError(true);
      return;
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
        <div>{user.bio}</div>
        <div>{user.company}</div>
      </>
    );
  }
};

export default MultipleReturns;
