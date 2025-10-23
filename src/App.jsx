import { Suspense, useState } from "react";

import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Ticket from "./components/ticket/Ticket";
import TaskStatus from "./components/task status/TaskStatus";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const responceofdata = data();

function App() {
  const [increment, setincrement] = useState(0);
  const [decrement, setdecrement] = useState(0);
  const [info, setinfo] = useState([]);
  console.log(info);

  return (
    <>
      <section className="">
        <Nav></Nav>
        <Hero increment={increment} decrement={decrement}></Hero>
        <div className="a ">
          <div className="sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto gap-5  flex flex-col  justify-center md:flex-row  ">
            <div className="left">
              <Suspense
                fallback={
                  <button className="btn btn-square flex items-center justify-center">
                    <span className="loading loading-spinner"></span>
                  </button>
                }
              >
                <Ticket
                  info={info}
                  setinfo={setinfo}
                  increment={increment}
                  setincrement={setincrement}
                  responceofdata={responceofdata}
                ></Ticket>
              </Suspense>
            </div>
            <div className="right">
              <TaskStatus info={info}></TaskStatus>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
