import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import Footer from "../../../components/general/Footer";

const Play = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660787167/casual-life-3d-boy-sitting-in-cardboard-box_d1tn6l.png"
          title="الالعاب التعليمية"
          subtitle="العاب تعلمية لسهولة التعلم عندالاطفال"
        />
      </div>
      <Footer />
    </section>
  );
};

export default Play;
