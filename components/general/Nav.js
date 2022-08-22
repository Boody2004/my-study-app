import Link from "next/link";
import ClassicBtn from "./ClassicBtn";

const Nav = () => {
  return (
    <nav className="py-5 bg-background">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-textPrimary text-2xl font-bold cursor-pointer">
            Online Lessons
          </h1>
        </Link>
        <ClassicBtn class="text-lg py-2 px-4" icon={false} />
      </div>
    </nav>
  );
};

export default Nav;
