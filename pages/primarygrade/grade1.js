import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const PrimaryGrade1 = () => {
  return (
    <section>
      <Head>
        <title>Grade 1 | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <ServicesGrate
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPrimary%20Grade.png?alt=media&token=6d6de740-6379-4e3e-939f-16eb03a7df4c"
          title="المرحلة الابتدائية Grade 1"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="primaryGrade/grade1/grade1List"
        />
      </div>
      <Footer />
    </section>
  );
};

export default PrimaryGrade1;
