import Button from "../Button/Button";
import "./Hero.css";
import Mockup from "../../images/image-mockups.png";

const Hero = () => {
  return (
    <main className="hero">
      <section className="hero__content content">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="content__description"
        >
          <h2 className="content__heading">Next generation digital banking</h2>
          <p className="content__text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="content__btn">
            <Button />
          </div>
        </div>
      </section>
      <img
        src={Mockup}
        alt="Mockup of Easybanking mobile app."
        className="hero__img"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </main>
  );
};

export default Hero;