import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const HighSchool1 = () => {
  return (
    <section>
      <Head>
        <title>Grade 10 | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <ServicesGrate
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FHigh%20Cchools.png?alt=media&token=0bc605e3-4f17-4433-a1d0-022e1bb3ebaa"
          title="المرحلة الثانوية Grade 10"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="highSchool/grade10/grade10List"
        />
      </div>
      <Footer />
    </section>
  );
};

export default HighSchool1;
