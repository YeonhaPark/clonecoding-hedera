import Logo from "../atoms/Logo";
import Nav from "../molecules/Nav";
export default function Header() {
  return (
    <header className="fixed flex items-center z-10">
      <Logo />
      <Nav />
      <button className="header-quickstart btn-white">QuickStart</button>
      <form action="" className="header-search">
        <div>
          <input type="search" className="search" placeholder="search" />
        </div>
      </form>
    </header>
  );
}
