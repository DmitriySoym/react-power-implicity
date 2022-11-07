import "./Slider.scss";

const sliderTitle = <h1 className="slider__title">The Power of Simplicity</h1>;
const sliderText = (
  <p className="slider__text">
    Instead of spending time searching for the right app, our AI will bring the
    right app to you.
  </p>
);
const sliderButton = <div className="slider__button">Learn</div>;
const sliderNav = (
  <div className="slider__nav">
    <label className="bar"></label>
    <label className="bar"></label>
    <label className="bar checked"></label>
    <label className="bar"></label>
    <label className="bar"></label>
  </div>
);

export const Slider = () => {
  return (
    <main className="main">
      <div className="slider">
        <div className="slider__item">
          {sliderTitle}
          {sliderText}
        </div>
        <div className="slider__input">
          {sliderButton}
          {sliderNav}
        </div>
      </div>
    </main>
  );
};
