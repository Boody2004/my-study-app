import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const MiddleSchool3 = () => {
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
        <title>Grade 9 | Online Lessons App</title>
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
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FMiddle%20School.png?alt=media&token=9ea0111e-21b1-484b-a31e-6de908604f1c"
              title="المرحلة الاعدادية Grade 9"
              subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
              urlApi="middleSchool/grade9/grade9List"
            />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default MiddleSchool3;
