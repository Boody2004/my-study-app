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
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638783/casual-life-3d-boy-sitting-at-the-desk-with-open-book_qma796.png"
          title="المرحلة الابتدائية Grade 1"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="primaryGrade/services/grade1"
        />
      </div>
      <Footer />
    </section>
  );
};

export default PrimaryGrade1;