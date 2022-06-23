import Button from "../UI/Button";
import StyledHero from "./index.Styled";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>
            Monitoring Perkembangan Covid
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img
            src="https://img.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865177.jpg?w=1060"
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
