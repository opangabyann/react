import React, { useRef } from "react";

export default function RefTutorial() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);
  // const inputRef = useRef(null);
  // const onClick =() => {
  // console.log(inputRef.current);
  // inputRef.current.focus()
  // inputRef.current.value = "abyan"
  // inputRef.current.placeholder = 'tulis nama anda'
  // inputRef.current.type = 'password'
  // };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div ref={topRef}>
      {/* <h1>opangs</h1>
    <input ref={inputRef} type={"text"} placeholder="Write down here"/>
    <button onClick={onClick}>Change Name</button> */}
      <div className="space-x-5">
        <button
          onClick={() => {
            scrollToSection(homeRef);
          }}
        >
          home
        </button>

        <button
          onClick={() => {
            scrollToSection(aboutRef);
          }}
        >
          about
        </button>

      </div>

      <div ref={homeRef} className="h-screen w-full bg-red-500 pt-10 ">
        <h2 className="text-blue-500 font-bold">Home</h2>
      </div>

      <div ref={aboutRef} className="h-screen w-full bg-blue-500 pt-10 ">
        <h2 className="text-red-500 font-bold">about</h2>
      </div>

      <button onClick={()=>{
        scrollToTop(topRef)
      }} className={"fixed bg-green-500 cursor-pointer z-10 bottom-2 right-5"}>back to top </button>
    </div>
  );
}
