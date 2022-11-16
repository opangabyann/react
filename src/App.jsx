import React from "react";
import {
  
  FaCircleNotch,

  FaSearch,
} from "react-icons/fa";
import {
  BsFillChatLeftTextFill,
  BsThreeDotsVertical,
  BsFilter,
  BsCheck2All,
} from "react-icons/bs";
import wa from "./styles/wa.png";

const App = () => {
  return (
    <section className="flex h-screen w-screen">
      <section className=" w-[30%] h-full bg-blue-500 border-r border-r-[#2b373f]">
        <header className="bg-[#202c33] w-full flex h-[7%] items-center justify-between px-5">
          <div className="rounded-full w-[40px] h-[40px] bg-slate-700 cursor-pointer">
            <img className="rounded-full" src="" alt="" />
          </div>

          <div className="flex gap-7">
            
            <FaCircleNotch
              className="rotate-[60deg] cursor-pointer hover-icon transition-all ease-in-out"
              onMouseOver={({ target }) => (target.style.color = "#cecece")}
              onMouseOut={({ target }) => (target.style.color = "#aebac1")}
              color="#aebac1"
              size={20}
            />
            <BsFillChatLeftTextFill
              className="cursor-pointer hover-icon transition-all ease-in-out"
              onMouseOver={({ target }) => (target.style.color = "#cecece")}
              onMouseOut={({ target }) => (target.style.color = "#aebac1")}
              color="#aebac1"
              size={20}
            />
            <BsThreeDotsVertical
              className="cursor-pointer hover-icon transition-all ease-in-out"
              onMouseOver={({ target }) => (target.style.color = "#cecece")}
              onMouseOut={({ target }) => (target.style.color = "#aebac1")}
              color="#aebac1"
              size={20}
            />
          </div>
        </header>

      

        <body className="w-full h-[100%] bg-[#111b21] overflow-y-auto overflow-x-hidden">
          <div className="flex pt-3 justify-between px-3 w-full">
            <div className="flex items-center">
              <div className="bg-[#202c33] flex items-center h-[40px] rounded-l-lg pl-5 pr-8">
                <FaSearch color="#869695" />
              </div>
              <input
                type="text"
                placeholder="Cari atau mulai chat baru"
                className="bg-[#202c33] text-[#869695] w-full h-[40px] rounded-r-lg pr-[130px]"
              />
            </div>

            <div className="flex items-center pl-5">
              <BsFilter color="#869695" size={25} />
            </div>
          </div>

          <div className="mt-5 w-full">
           
                  <section
                    
                    className="space-y-3 w-full hover:bg-[#222e35] cursor-pointer"
                  >
                    <div className="pl-3 w-full">
                      <div className="flex items-center w-full pr-3">
                        <div className="w-[50px] h-[50px] bg-blue-400 rounded-full mr-5">
                          <img className="rounded" src="" alt="" />
                        </div>
                        <div className="flex flex-col justify-between border-b border-b-[#222d34] py-3 w-full">
                          <div>
                            <div className="flex justify-between items-center">
                              <h1 className="text-[#e3e7e5] font-bold">tes</h1>
                              <p className="text-[#00a884]">11:30</p>
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <BsCheck2All
                                  color="#53bdeb"
                                  size={20}
                                  className="mr-1"
                                />
                                <p className="text-[#869695]">yowaimo</p>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </section>
            
          </div>
        </body>
      </section>

      <section className=" h-[100%] w-[70%]  bg-[#222e35]">
        <div className="w-full h-full flex flex-col justify-between">
          {/* <div className="w-full bg-[#008069]"></div> */}
          
          <div className="w-full h-2 bg-[#008069]"></div>
        </div>
      </section>
    </section>
  );
};

export default App;
