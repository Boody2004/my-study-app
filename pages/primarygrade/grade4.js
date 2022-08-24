import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const PrimaryGrade4 = () => {
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
        <title>Grade 4 | Online Lessons App</title>
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
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPrimary%20Grade.png?alt=media&token=6d6de740-6379-4e3e-939f-16eb03a7df4c"
              title="المرحلة الابتدائية Grade 4"
              subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
              urlApi="primaryGrade/grade4/grade4List"
            />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default PrimaryGrade4;
