import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function App() {
  let classButton = "text-white hover:text-gray-400 cursor-pointer";
  let [popUp, setPopUp] = React.useState(false);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-emerald-300">
        <div className="h-[8%] w-full bg-slate-500 lg:hidden flex items-center justify-between px-5 relative z-50">
          <span
            onClick={() => {
              setPopUp(!popUp);
            }}
            className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"
          ></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
        </div>

        <div className="h-[8%] w-full bg-slate-700 hidden lg:grid grid-cols-5 items-center px-5">
          <div className="flex w-full items-center">
            <section className="h-8 w-8 bg-slate-100 rounded-full"></section>
            <input
              className="h-5 ml-3 w-[80%] border rounded-md px-2 py-3"
              placeholder="Searh or Jump to"
            />
          </div>

          <div className="col-span-3 h-full flex items-center space-x-5">
            <button className={classButton}>Pull Request</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>Market Place</button>
            <button className={classButton}>Explore</button>
          </div>

          <div className="h-full w-full flex items-center justify-end space-x-3">
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
          </div>
        </div>

        <div className="h-[92%] w-full bg-slate-400 sm:block lg:flex items-center relative">
          {/* {popUp && (
            <section className="bg-slate-500 h-[80%] w-full top-0  absolute z-10 lg:hidden block"></section>
        )} */}

          <section
            className={`${
              popUp
                ? "transform translate-x-0 transition duration-500"
                : "transform -translate-y-full"
            } bg-slate-500 h-[50%] w-full top-0  absolute z-10 lg:hidden block flex items-center`}
          >
            <h5 className="font-bold text-white text-lg -rotate-90">
              kekuatan anime menyertai
            </h5>
          </section>
          <div className="h-full sm:w-full lg:w-[20%] bg-slate-600 p-5 overflow-hidden">
            <section className="flex items-start-center space-x-5 pb-3  border-b-2">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <button>omaga</button>
            </section>

            <section className="space-y-4 border-b-2 pb-5">
              <div className="flex items-center justify-between mt-2">
                <p className="text-white font-medium ">Recent omaga</p>
                <button className="border px-2 bg-green-500 hover:bg-green-400 text-white border-green-500 rounded-md cursor-pointer">
                  New
                </button>
              </div>
              <div>
                <input
                  type="text"
                  className="border px-2 w-full rounded-md"
                  placeholder="find a magatory"
                />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div key={item} className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-gray-700 rounded-full"></div>
                      <p className="text-white text-sm">opangabyan/magatory</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="space-y-2 border-b-2 pb-4">
              <div className="flex items-center justify-between mt-2">
                <p className="text-white font-medium">Recent omaga</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  When you take actions across GitHub, we’ll provide links to
                  that activity here.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between mt-2">
                <p className="text-white font-medium ">your team</p>
              </div>

              <div>
                <input
                  type="text"
                  className="border px-2 w-full rounded-md"
                  placeholder="find a team"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-gray-700 rounded-full"></div>
                  <p className="text-white text-sm">opangabyan/magatory</p>
                </div>
              </div>
            </section>
          </div>

          <div className="h-full sm:w-full lg:w-[80%] bg-slate-200 overflow-auto">
            <Tabs className={"p-5"}>
              <TabList>
                <Tab>Following</Tab>
                <Tab>For you</Tab>
              </TabList>

              <TabPanel>
                {[1,2,3,4,5,6]?.map((item)=>{
                  return (
                    <section className="pt-2 border border-b-slate-700 pb-4 w-3/5">
                  <div className="flex space-x-3 pb-2">
                    <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                    <p className=" font-medium">
                      Wakype started following mulza
                    </p>
                  </div>

                  <div className=" h-20  bg-slate-400 ml-8 rounded-sm border border-slate-700 flex justify-between ">
                    <div className="p-3 flex space-x-3">
                      <div className="h-11 w-11 bg-slate-700 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">Mulza</p>
                        <p className="text-white">12 repositories</p>
                      </div>
                    </div>
                    
                    <div className="p-3">
                    <button className=" border px-2 bg-slate-500 hover:bg-slate-600 text-white border-slate-200 rounded-md cursor-pointer">
                      follow
                    </button>
                    </div>
                  </div>
                </section>
                  )
                })}
              </TabPanel>
              <TabPanel>
                <section>
                  <div className="pt-2 border border-white pb-4 w-3/5 bg-slate-400 p-2 rounded-md">
                    <p className="font-bold text-white">Welcome to the new feed!</p>
                    <p className="text-slate-200">We’re updating the cards and ranking all the time, so check back regularly. At first, you might need to follow some people or star some repositories to get started</p>
                    <p className="underline underline-offset-2 text-blue-900 mt-4 font-semibold cursor-pointer hover:text-blue-600">Send feedback</p>
                  </div>
                </section>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
