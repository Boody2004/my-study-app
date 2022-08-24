import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import PdfViewer from "../../../components/general/PdfViewer";
import Footer from "../../../components/general/Footer";

const AdvancedBook = () => {
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
        <title>Grade 4 Advanced Book | Online Lessons App</title>
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
            <IntroService
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FAdvanced%20Book.png?alt=media&token=7550acf7-98ec-47cd-835b-000c776870fc"
              title="الكتب الخارجية"
              subtitle="يوجد جميع الكتب الخارجية الي هذه المرحلة"
            />
            <PdfViewer urlApi="primaryGrade/grade4/advancedBooks" />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default AdvancedBook;
