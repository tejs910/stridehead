import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
// import img from "./img/loading.jpg";
function Card({ user }) {
  const [displayedCard, setDisplayedCard] = useState(2);
  const [slicedUser, setSlicedUser] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
    //   setSlicedUser(user.slice(0, 5));
    // }, 15000);
    setSlicedUser(user.slice(0, displayedCard));
  }, [displayedCard]);

  return (
    <>
      <div className="container">
        {slicedUser.map((user, i, arr) => {
          return (
            <div key={user.id} className="card">
              <Cards
                user={user}
                updateScroll={setDisplayedCard}
                total={arr.length}
              />
            </div>
          );
        })}
      </div>
      {displayedCard >= user.length && (
        <div className="centered">End of list reached</div>
      )}
    </>
  );
}

export default Card;
