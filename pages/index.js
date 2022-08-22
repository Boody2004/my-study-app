import styles from "../styles/Home.module.css";
import Head from "next/head";
import Nav from "../components/general/Nav";
import ClassicBtn from "../components/general/ClassicBtn";
import Footer from "../components/general/Footer";
import Link from "next/link";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:py-20 sm:px-28 lg:px-20">
            <div className="flex justify-center">
              <img
                className="w-9/12"
                src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FHome%20Intro.png?alt=media&token=29ebb768-2d52-45c9-aca5-7197fd3529e5"
                alt="Img Home Intro"
              ></img>
            </div>
            <div className="text-end max-w-xl text-white">
              <h1 className="font-bold text-6xl sm:text-7xl">
                <span className="text-light">تعلم اسرع</span>
                <br />
                مع منصة دروس اون لاين
              </h1>
              <p className="text-xl mt-10 mb-5">
                منصة دروس اون لاين هي منصة الي تعليم الطلاب من داية الصف رياض
                اطفال الي الصف الثانوي العام
                <br />
                تتميز المنصة بي جودة الفديوهات و الكتب الدراسة الي الطالب و افضل
                طرق الشرح المبسطة و جودة تنظيم و تقسيم المراحل الدراسة للطلبة
              </p>
              <ClassicBtn class="text-xl py-4 px-6" icon={true} />
            </div>
          </div>
        </div>
        <div className="my-40">
          <h1 className="text-center font-semibold text-6xl text-textPrimary">
            المراحل التعليمية
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12">
            <Link href="/gettingStarted#kg">
              <div
                className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img
                      className="w-10/12"
                      src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FKG.png?alt=media&token=a28db70c-5d06-4f22-85fb-64f18f1f8ae1"
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
            </Link>
            <Link href="/gettingStarted#primarygrade">
              <div
                className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPrimary%20Grade.png?alt=media&token=6d6de740-6379-4e3e-939f-16eb03a7df4c"
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
            </Link>
            <Link href="/gettingStarted#middleSchool">
              <div
                className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img
                      className="w-8/12"
                      src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FMiddle%20School.png?alt=media&token=9ea0111e-21b1-484b-a31e-6de908604f1c"
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
            </Link>
            <Link href="/gettingStarted#highSchool">
              <div
                className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img
                      className="w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FHigh%20Cchools.png?alt=media&token=0bc605e3-4f17-4433-a1d0-022e1bb3ebaa"
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
            </Link>
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
                كل الكتب الوزارة و الكتب الخارجية موجودة علي منصة دروس اون لاين
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-8/12"
                src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FBook.png?alt=media&token=e5f64a1b-2c38-4bfe-b2b7-863f2b69329a"
                alt="Img Service Book"
              ></img>
            </div>
          </div>
        </div>
        <div className="my-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img
                className="w-7/12"
                src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FVideo.png?alt=media&token=0f792b8c-a270-4bb2-8b59-f8ba55d991fb"
                alt="Img Service Video"
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
                كل الفديوهات التعليمية و الفديوهات التعليمية ذات المصدر المفتوح
                موجودة علي منصة دروس اون لاين <br />
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
                كل الكتب و الفديوهات موجودة علي منصة دروس اون لاين
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
              <ClassicBtn class="text-xl py-4 px-6" icon={true} />
            </div>
            <div className="flex justify-center">
              <img
                className="w-9/12	"
                src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FHome.png?alt=media&token=20fc3edd-d538-47dd-a7a7-625eee4646e5"
                alt="Img Home"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
