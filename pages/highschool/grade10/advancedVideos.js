import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import VideoPlayer from "../../../components/general/VideoPlayer";
import Footer from "../../../components/general/Footer";

const AdvancedVideo = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660789652/casual-life-3d-boy-and-girl-working-on-computer_mgekvh.png"
          title="الفديوهات مفتوحة المصدر"
          subtitle="يوجد افضل الفديوهات مفتوحة المصدر الي هذه المرحلة"
        />
        <VideoPlayer urlApi="highSchool/grade10/advancedVideos" />
      </div>
      <Footer />
    </section>
  );
};

export default AdvancedVideo;
