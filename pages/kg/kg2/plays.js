import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import Footer from "../../../components/general/Footer";

const Plays = () => {
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
        <title>KG 2 Plays | Online Lessons App</title>
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
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPlay.png?alt=media&token=6adbaefa-9dae-4945-a6e5-7fbabc0a244e"
              title="الالعاب التعليمية"
              subtitle="العاب تعلمية لسهولة التعلم عندالاطفال"
            />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default Plays;
