import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/ContainerCard";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          return Promise.reject();
        }
        console.log("it's", data);
        setUsers(data);
      })
      .catch((error) => {
        setIsError("An Error Occured please try after some time");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading && <div className="centered">Loading...</div>}
      {isError !== null && <div className="centered">Error... {isError}</div>}
      {!isLoading && isError === null && <Card user={users} />}
    </>
  );
}

export default App;
