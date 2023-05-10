import patternRings from "../../assets/images/pattern-rings.svg";
import Button from "../ui/buttons/Button";

// * COMPONENT: HeroSection
function HeroSection() {
  // @ Output
  return (
    <section className="relative flex flex-col items-center justify-center px-4 mb-24 -mt-32 md:flex-row md:mt-0 md:mb-[60px] md:justify-start md:px-8 hero-bg-image">
      {/* <div
        className="w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${patternRings})` }}
      >
        ds
      </div> */}
      <div className="order-2 text-center md:order-1 md:text-left md:w-[445px]">
        <h1 className="mb-6 text-h1 md:text-h1md md:mb-[60px]">
          Nice to meet you! I'm{" "}
          <span className="underline underline-offset-8 decoration-green">
            Adam Keyes
          </span>
          .
        </h1>

        <p className="font-medium text-light-gray text-[16px] leading-[26px] mb-6 md:text-[18px] md:mb-[34px]">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <Button type="link" href="#contact">
          Contact me
        </Button>
      </div>

      <picture className="order-1 mb-10 w-[51.3%] md:order-2 md:absolute md:right-0 md:top-[-150px] md:w-80 md:-z-10">
        {/* <picture className="order-1 mb-10 w-44 md:order-2 md:absolute md:right-0 md:top-[-150px] md:w-80 md:-z-10"> */}
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
          className=""
        />
      </picture>
    </section>
  );
}

export default HeroSection;
