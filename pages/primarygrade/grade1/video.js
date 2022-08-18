import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import Footer from "../../../components/general/Footer";

const Video = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660770852/casual-life-3d-young-man-and-woman-looking-at-tablet_gs0xsm.png"
          title="الفديوهات التعليمية"
          subtitle="يوجد افضل الفديوهات شرح الدروس الي هذه المرحلة"
        />
      </div>
      <Footer />
    </section>
  );
};

export default Video;
