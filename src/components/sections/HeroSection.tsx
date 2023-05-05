import patternRings from "../../assets/images/pattern-rings.svg";
import Button from "../ui/buttons/Button";

// * COMPONENT: HeroSection
function HeroSection() {
  // @ Output
  return (
    <section className="flex flex-col justify-center items-center mb-24 -mt-32 px-4 md:flex-row bg-image relative">
      {/* <div
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${patternRings})` }}
      >
        ds
      </div> */}
      <div className="order-2 text-center">
        <h1 className="text-h1 mb-6">
          Nice to meet you! I'm{" "}
          <span className="underline underline-offset-8 decoration-green">
            Adam Keyes
          </span>
          .
        </h1>
        <p className="font-medium text-light-gray text-[16px] leading-[26px] mb-6">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <Button type="link" href="#contact">
          Contact me
        </Button>
      </div>

      <picture className="order-1 w-44 mb-10">
        <source
          media="(min-width: 89em)"
          srcSet="/images/image-profile-desktop.webp"
        />
        <source
          media="(min-width: 48em)"
          srcSet="/images/image-profile-tablet.webp"
        />
        {/* <img src="/images/image-p" alt="" /> */}
        <img
          src="/images/image-profile-mobile.webp"
          alt="An image of the author"
        />
      </picture>
    </section>
  );
}

export default HeroSection;
