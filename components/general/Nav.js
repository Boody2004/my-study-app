import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-5 bg-background">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-textPrimary text-2xl font-bold cursor-pointer">
            My Study App
          </h1>
        </Link>
        <Link href="/gettingStarted">
          <button className="bg-light text-white text-l py-2 px-4 rounded-xl">
            البدء
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
