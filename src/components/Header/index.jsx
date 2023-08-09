import Logo from "../../assets/images/logo.svg";
import IconBurger from "../../assets/icons/icon-burger.svg";

export default function Header() {
  return (
    <div className="px-[30px] py-3.5 fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="flex justify-between relative items-center">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="hidden lg:flex gap-6 uppercase text-sm font-semibold">
          <a href="/" className="text-blue-700 hover:text-blue-700">Home</a>
          <a href="/" className="hover:text-blue-700">About Us</a>
          <a href="/" className="hover:text-blue-700">Our Product</a>
          <a href="/" className="hover:text-blue-700">Blog</a>
          <a href="/" className="hover:text-blue-700">Career</a>
        </nav>
        <div className="flex gap-6">
          <a href="/" className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm uppercase font-medium hidden lg:block">Contact Us</a>
          <img src={IconBurger} alt="icon menu" />
        </div>
      </div>
    </div>
  );
}
