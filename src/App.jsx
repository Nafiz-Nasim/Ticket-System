import { Suspense, useState } from "react";

import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Ticket from "./components/ticket/Ticket";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const responceofdata = data();

function App() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <Nav></Nav>
        <Hero></Hero>
        <div className="sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex justify-between items-center py-5 mx-10">
          <div className="left">
            <Suspense
              fallback={
                <button className="btn btn-square flex items-center justify-center">
                  <span className="loading loading-spinner"></span>
                </button>
              }
            >
              <Ticket responceofdata={responceofdata}></Ticket>
            </Suspense>
          </div>
          <div className="right">

            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
