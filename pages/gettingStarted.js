import Head from "next/head";
import Nav from "../components/general/Nav";
import Service from "../components/gettingStarted/Service";
import Footer from "../components/general/Footer";

const gettingStarted = () => {
  return (
    <section>
      <Head>
        <title>Getting Started | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <div className="my-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-end max-w-xl grid content-center">
              <h1 className="font-bold text-4xl sm:text-6xl text-textPrimary">
                اختر المراحل التعليمية
              </h1>
              <p className="text-xl mt-10 text-textPrimary">
                كل الكتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و
                الفديوهات التعليمية ذات المصدر المفتوح موجودة علي منصة دروس اون
                لاين
                <br />
                هتتعلم اسرع و هتوفر وقت و مجهود
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-10/12"
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1661128124/casual-life-3d-excited-young-woman-receiving-like-notifications-on-her-laptop_lfffgf.png"
                alt="img getting started"
              ></img>
            </div>
          </div>
        </div>
        <Service
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638926/casual-life-3d-boy-lying-on-stomach-and-using-tablet-with-stylus-in-hand_htc3nu.png"
          title="مرحلة رياض اطفال"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="kg/kgList"
        />
        <Service
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638783/casual-life-3d-boy-sitting-at-the-desk-with-open-book_qma796.png"
          title="المرحلة الابتدائية"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="primaryGrade/primaryGradeList"
        />
        <Service
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638929/casual-life-3d-boy-using-laptop-and-talking-on-the-phone_cxtygy.png"
          title="المرحلة الاعدادية"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="middleSchool/middleSchoolList"
        />
        <Service
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660683558/casual-life-3d-young-man-in-orange-headphones-sitting-at-the-computer_reupky.png"
          title="المرحلة الثانوية"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="highSchool/highSchoolList"
        />
      </div>
      <Footer />
    </section>
  );
};

export default gettingStarted;
