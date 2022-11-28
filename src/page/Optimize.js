import React from "react";
import Button from "../komponen/buttton";
import { useMemo, memo, useState, useCallback } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("opang");
  console.log("parent render");

//   const HandleCount = () => {
//     setCount((c) => c + 1);
//   };

//   const HandleCountOP = useCallback(HandleCount, []);

  const handleCount = useCallback(()=>{
      setCount ((c)=> c + 1)

  },[])

  const prosesBerat = (count) => {
    if (count < 20000000) {
    }
    console.log("proses berjalan");
    return count + 1;
  };

  const ProsesBeratMemo = useMemo(() => {
    return prosesBerat(count);
  }, [count]);
  return (
    <div>
      <h1>Parent</h1>
      <p>count : {count}</p>
      <p>count 2 : {ProsesBeratMemo}</p>

      <Button
        title={"Klik"}
        color="blue"
        text="white"
        onClick={handleCount}
      />

      <div>
        <Button
          onClick={() => {
            setUser("blue");
          }}
          title="blue"
          color="blue"
          text="white"
        />
        <Button
          onClick={() => {
            setUser("red");
          }}
          title="red"
          color="red"
          text="white"
        />
        <Button
          onClick={() => {
            setUser("green");
          }} 
          title="green"
          color="green"
          text="white"
        />
      </div>
      <div className="w-10 h-10" style={{backgroundColor : user}}>

      </div>
      <MemorizedChild user={user} handleCount={handleCount} />
    </div>
  );
}

function Child({ user, handleCount }) {
  console.log("child render");
  // delay(2000)
  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
      <Button
        title={"Tambah count from child"}
        color="white"
        onClick={handleCount}
      />
    </div>
  );
}

const MemorizedChild = memo(Child);

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
