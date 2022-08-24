import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const KG1 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <section>
      <Head>
        <title>KG 1 | Online Lessons App</title>
      </Head>
      {loading ? (
        <div
          className="flex justify-center mx-1"
          style={{
            marginTop: "50vh",
          }}
        >
          <ClimbingBoxLoader color={"#2F3AFD"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="container mx-auto px-5 sm:px-10">
            <Nav />
            <ServicesGrate
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FKG.png?alt=media&token=a28db70c-5d06-4f22-85fb-64f18f1f8ae1"
              title="مرحلة رياض اطفال KG1"
              subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
              urlApi="kg/kg1/kg1List"
            />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default KG1;
