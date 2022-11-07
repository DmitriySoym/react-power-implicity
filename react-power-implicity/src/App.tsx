import { Header } from "./components/header/Header";
import { Slider } from "./components/slider/Slider";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Slider />
    </div>
  );
};
