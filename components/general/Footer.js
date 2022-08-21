import Link from "next/link";
import ComingSoon from "./ComingSoon";

const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10 pt-24 pb-32 text-textThird text-end">
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الثانوية
            </h1>
            <Link href="/highschool/grade10">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 10
              </p>
            </Link>
            <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
              <ComingSoon />
              Grade 11
            </p>
            <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
              <ComingSoon />
              Grade 12
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الاعدادية
            </h1>
            <Link href="/middleschool/grade7">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 7
              </p>
            </Link>
            <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
              <ComingSoon />
              Grade 8
            </p>
            <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
              <ComingSoon />
              Grade 9
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الابتدائية
            </h1>
            <Link href="/primarygrade/grade1">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 1
              </p>
            </Link>
            <Link href="/primarygrade/grade2">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 2
              </p>
            </Link>
            <Link href="/primarygrade/grade3">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 3
              </p>
            </Link>
            <Link href="/primarygrade/grade4">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 4
              </p>
            </Link>
            <Link href="/primarygrade/grade5">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 5
              </p>
            </Link>
            <Link href="/primarygrade/grade6">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                Grade 6
              </p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              مرحلة رياض اطفال
            </h1>
            <Link href="/kg/kg1">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                KG1
              </p>
            </Link>
            <Link href="/kg/kg2">
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                KG2
              </p>
            </Link>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-bold text-2xl text-white pb-5">مواكبة</h1>
            <p className="font-medium pb-5">
              انضم إلى النشرة الإخبارية للحصول على تحديثات منتظمة
            </p>
            <form
              action="https://formsubmit.co/abdelrahmanatefalibe@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://online-lessons.vercel.app"
              />
              <input
                className="text-base text-white border-0 rounded-lg outline-0 m-2 py-3 px-5"
                type="Email"
                style={{
                  background: "RGB(255, 255, 255, 20%)",
                }}
                name="email"
                placeholder="example@email.com"
                required
              />
              <button
                className="bg-lightSecondary font-bold text-base text-white border-0 rounded-lg outline-0	cursor-pointer m-2 py-3 px-5"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div
          className="pt-5 pb-10 flex flex-wrap justify-between text-textThird"
          style={{ borderTop: "1px solid rgb(255, 255, 255, 20%)" }}
        >
          <p className="my-2">
            ©2022 The Launchy Company. All Rights Reserved.
          </p>
          <div className="flex justify-between my-2 text-white">
            <a href="https://www.google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
            <a href="https://www.google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
            <a href="https://www.google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
