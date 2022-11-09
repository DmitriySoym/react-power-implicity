import "./Slider.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__item">
        <h1 className="slider__title">The Power of Simplicity</h1>
        <p className="slider__text">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>

        <button className="slider__button">Learn</button>
      </div>

      <div className="slider__input">
        <ul className="slider__dots">
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot slider__dot--active"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
        </ul>
      </div>
    </div>
  );
};
