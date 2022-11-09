import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Slider />
    </div>
  );
};
