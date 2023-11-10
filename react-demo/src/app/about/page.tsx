"use client";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);
  const buttonRef = useRef<any>(null);

  const handleClick = (e) => {
    setCount(count + 1);
    console.log(buttonRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    console.log("lalalallala....");
  }, [buttonRef.current]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="p-10">
        <h1>About</h1>
      </div>
      <div className="p-10">{count}</div>
      <div className="bg-blue-50 w-20 text-center" onClick={handleClick} ref={buttonRef}>
        点击
      </div>
    </div>
  );
}
