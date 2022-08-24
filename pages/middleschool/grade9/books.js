import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import PdfViewer from "../../../components/general/PdfViewer";
import Footer from "../../../components/general/Footer";

const Book = () => {
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
        <title>Grade 9 Books | Online Lessons App</title>
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
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FBook.png?alt=media&token=e5f64a1b-2c38-4bfe-b2b7-863f2b69329a"
              title="كتب الوزارة"
              subtitle="يوجد جميع كتب الوزارة الي هذه المرحلة"
            />
            <PdfViewer urlApi="middleSchool/grade9/books" />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default Book;
