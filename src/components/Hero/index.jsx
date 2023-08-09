import styleHero from "./styleHero.module.css";
import IconDoubleChevronDown from "../../assets/icons/icon-double-chevron-down.svg";

export default function Hero() {
  return (
    <div className="relative pt-[60px]">
      <div className="bg-hero-background bg-no-repeat h-60 md:h-96 xl:h-[450px] 2xl:h-[630px] bg-bottom lg:bg-center bg-cover relative">
        <div className={styleHero.triangelWrapperUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styleHero.triangelUp}
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="fill-blue-400"
            ></path>
          </svg>
        </div>
        <div className={styleHero.triangelWrapperBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styleHero.triangelBack}
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="fill-blue-600"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-blue-400 px-10 xl:px-0 pb-[73px] pt-10">
        <div className="container">
          <div className="text-4xl font-medium text-white leading-[34px] mb-4 lg:text-center">
            Discover Your Wonder
          </div>
          <p className="text-white text-base leading-6 md:max-w-xl:w-3/5 lg:text-center lg:w-3/6 lg:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 -mr-[50%] translate-y-0 -translate-x-[50%] -bottom-7 drop-shadow-md">
        <img src={IconDoubleChevronDown} alt="icon double chevron down" />
      </div>
    </div>
  );
}
