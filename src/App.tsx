import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { useAppDispatch, useAppSelector } from "./hooks/Hooks";
import { decrement, increment } from "./stores/slice/CounterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Contador {count}</h2>
      <Home/>
    </div>
  );
}

export default App;
