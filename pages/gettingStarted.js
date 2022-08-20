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
        <h1 className="text-center font-semibold text-6xl text-light">
          اختر المراحل التعليمية
        </h1>
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
