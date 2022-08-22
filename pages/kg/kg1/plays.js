import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import Footer from "../../../components/general/Footer";

const Plays = () => {
  return (
    <section>
      <Head>
        <title>KG 1 Plays | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FPlay.png?alt=media&token=6adbaefa-9dae-4945-a6e5-7fbabc0a244e"
          title="الالعاب التعليمية"
          subtitle="العاب تعلمية لسهولة التعلم عندالاطفال"
        />
      </div>
      <Footer />
    </section>
  );
};

export default Plays;
