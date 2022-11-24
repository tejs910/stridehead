import React, { useEffect, useRef } from "react";

function Cards({ user, updateScroll, total }) {
  const ref = useRef(null);
  const observer = useRef();

  useEffect(() => {
    const currentElement = ref.current;
    if (currentElement) {
      console.log("inside and registering for", currentElement, user.id);
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.2) {
              // const
              // setSlicedUser(user.slice(0, displayedCard));
              //   alert("for user id", ref.current.total, total, 55);
              //   console.log(ref.current.id, "total is", total);
              updateScroll((val) => val + 1);
              observer.current.unobserve(currentElement);
            }
          });
        },
        {
          root: null,
          threshold: 0.2,
        }
      );
      observer.current.observe(currentElement);
    }
  }, []);
  return (
    <>
      <div className="card-header">
        <img
          src={`https://avatars.dicebear.com/api/male/${user.username}.svg`}
          alt="city"
        />
      </div>
      <div className="card-body">
        <div className="user">
          <div className="user-info">
            <h2>{user.name}</h2>
          </div>
        </div>
        <h3>Address</h3>
        <p
          ref={ref}
          id={user.id}
          total={total}
        >{`${user.address.street},${user.address.suite},${user.address.city}`}</p>
      </div>
    </>
  );
}

export default Cards;
