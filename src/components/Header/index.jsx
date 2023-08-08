import Logo from "../../assets/images/logo.svg";
import IconBurger from "../../assets/icons/icon-burger.svg";

export default function Header() {
  return (
    <div className="container px-[30px] py-3.5 flex justify-between relative">
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <div className="absolute right-6 top-6">
        <img src={IconBurger} alt="icon menu" />
      </div>
    </div>
  );
}
