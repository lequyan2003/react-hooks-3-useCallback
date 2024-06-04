import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []); // tranh truong hop useEffect o trong component con bi thuc thi lai

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data:</p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}

export default App;
