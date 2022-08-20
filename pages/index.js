import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Home | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <div
          className={`grid content-center ${styles.start}`}
          style={{
            background: "#EE9AE5",
            background: " -webkit-linear-gradient(to right, #5961F9, #EE9AE5)",
            background: "linear-gradient(to right, #5961F9, #EE9AE5)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-20">
            <div className="flex justify-center">
              <img
                className="w-9/12"
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660685912/casual-life-3d-young-man-surrounded-by-gadgets-taking-notes_s9ixdx.png"
                alt="img start"
              ></img>
            </div>
            <div className="text-end max-w-xl text-white">
              <h1 className="font-bold text-6xl sm:text-7xl">
                <span className="text-light">تعلم اسرع</span>
                <br />
                مع منصة مذاكرتي
              </h1>
              <p className="text-xl mt-10 mb-5">
                منصة مذاكرتي هي منصة الي تعليم الطلاب من داية الصف رياض اطفال
                الي الصف الثانوي العام
                <br />
                تتميز المنصة بي جودة الفديوهات و الكتب الدراسة الي الطالب و افضل
                طرق الشرح المبسطة و جودة تنظيم و تقسيم المراحل الدراسة للطلبة
              </p>
              <Link href="/gettingStarted">
                <button className="text-white bg-light text-xl py-4 px-6 rounded-xl">
                  <div className="flex items-center">
                    البدء
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-40">
          <h1 className="text-center font-semibold text-6xl text-textPrimary">
            المراحل التعليمية
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12">
            <div
              className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <div className="p-6">
                <div className="flex justify-center">
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660683558/casual-life-3d-young-man-in-orange-headphones-sitting-at-the-computer_reupky.png"
                    alt="Img Services"
                  ></img>
                </div>
                <div className="text-center my-5">
                  <h1 className="text-2xl font-bold	text-textPrimary">
                    المرحلة الثانوية
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <div className="p-6">
                <div className="flex justify-center">
                  <img
                    className="w-8/12"
                    src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638929/casual-life-3d-boy-using-laptop-and-talking-on-the-phone_cxtygy.png"
                    alt="Img Services"
                  ></img>
                </div>
                <div className="text-center my-5">
                  <h1 className="text-2xl font-bold	text-textPrimary">
                    المرحلة الاعدادية
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <div className="p-6">
                <div className="flex justify-center">
                  <img
                    src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638783/casual-life-3d-boy-sitting-at-the-desk-with-open-book_qma796.png"
                    alt="Img Services"
                  ></img>
                </div>
                <div className="text-center my-5">
                  <h1 className="text-2xl font-bold	text-textPrimary">
                    المرحلة الابتدائية
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <div className="p-6">
                <div className="flex justify-center">
                  <img
                    className="w-10/12"
                    src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638926/casual-life-3d-boy-lying-on-stomach-and-using-tablet-with-stylus-in-hand_htc3nu.png"
                    alt="Img Services"
                  ></img>
                </div>
                <div className="text-center my-5">
                  <h1 className="text-2xl font-bold	text-textPrimary">
                    مرحلة رياض اطفال
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-end max-w-xl grid content-center">
              <h1 className="font-bold text-4xl sm:text-6xl text-textPrimary">
                جميع كتب الوزارة و
                <span className="text-lightSecondary">كتب الخارجية</span>
              </h1>
              <p className="text-xl mt-10 text-textPrimary">
                كل الكتب و الفديوهات موجودة علي منصة مذاكرتي
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-8/12"
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660769906/casual-life-3d-cat-lying-on-books_hst1vt.png"
                alt="img start"
              ></img>
            </div>
          </div>
        </div>
        <div className="my-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img
                className="w-7/12"
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660770852/casual-life-3d-young-man-and-woman-looking-at-tablet_gs0xsm.png"
                alt="img start"
              ></img>
            </div>
            <div className="text-end max-w-xl grid content-center">
              <h1 className="font-bold text-4xl sm:text-6xl text-textPrimary">
                جميع فديوهات شرح و
                <span className="text-lightSecondary">
                  الفديوهات مفتوحة المصدر
                </span>
              </h1>
              <p className="text-xl mt-10 text-textPrimary">
                كل الكتب و الفديوهات موجودة علي منصة مذاكرتي
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
            </div>
          </div>
        </div>
        <div
          className={`my-40 ${styles.item}`}
          style={{
            background: " #5961F9",
            background: "-webkit-linear-gradient(to top, #EE9AE5, #5961F9)",
            background: "linear-gradient(to top, #EE9AE5, #5961F9)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 sm:p-20">
            <div className="text-end max-w-xl text-white ">
              <h1 className="font-bold text-6xl">ذاكر اون لاين</h1>
              <p className="text-xl mt-10 mb-5">
                كل الكتب و الفديوهات موجودة علي منصة مذاكرتي
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
              <Link href="/gettingStarted">
                <button className="text-white bg-light text-xl py-4 px-6 rounded-xl">
                  <div className="flex items-center">
                    البدء
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                className="w-9/12	"
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660737560/casual-life-3d-graduates-hat-and-books_ljid45.png"
                alt="img start"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
