import { Link } from "react-router-dom";
import routes from "../../../utils/routes";

const Hero = () => {
  return (
    <section className="hero hero_home">
      <div className="container">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="btn btn_light" to={routes.get("booking").path}>
            Reserve a table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;