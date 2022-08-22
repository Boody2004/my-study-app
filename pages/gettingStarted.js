import Head from "next/head";
import Nav from "../components/general/Nav";
import Service from "../components/gettingStarted/Service";
import Footer from "../components/general/Footer";

const GettingStarted = () => {
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
                src="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FGetting%20Started.png?alt=media&token=ff4135be-dedf-4840-8acd-22eb611775da"
                alt="Img Getting Started"
              ></img>
            </div>
          </div>
        </div>
        <div id="kg">
          <Service
            img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FKG.png?alt=media&token=a28db70c-5d06-4f22-85fb-64f18f1f8ae1"
            title="مرحلة رياض اطفال"
            subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
            urlApi="kg/kgList"
          />
        </div>
        <div id="primarygrade">
          <Service
            img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPrimary%20Grade.png?alt=media&token=6d6de740-6379-4e3e-939f-16eb03a7df4c"
            title="المرحلة الابتدائية"
            subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
            urlApi="primaryGrade/primaryGradeList"
          />
        </div>
        <div id="middleSchool">
          <Service
            img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FMiddle%20School.png?alt=media&token=9ea0111e-21b1-484b-a31e-6de908604f1c"
            title="المرحلة الاعدادية"
            subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
            urlApi="middleSchool/middleSchoolList"
          />
        </div>
        <div id="highSchool">
          <Service
            img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FHigh%20Cchools.png?alt=media&token=0bc605e3-4f17-4433-a1d0-022e1bb3ebaa"
            title="المرحلة الثانوية"
            subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
            urlApi="highSchool/highSchoolList"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GettingStarted;
