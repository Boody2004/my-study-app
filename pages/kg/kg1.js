import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const KG1 = () => {
  return (
    <section>
      <Head>
        <title>KG 1 | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <ServicesGrate
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660638926/casual-life-3d-boy-lying-on-stomach-and-using-tablet-with-stylus-in-hand_htc3nu.png"
          title="مرحلة رياض اطفال KG1"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="kg/services/kg1"
        />
      </div>
      <Footer />
    </section>
  );
};

export default KG1;
