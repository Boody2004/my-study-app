import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import VideoPlayer from "../../../components/general/VideoPlayer";
import Footer from "../../../components/general/Footer";

const Video = () => {
  return (
    <section>
      <Head>
        <title>Grade 12 Videos | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FVideo.png?alt=media&token=0f792b8c-a270-4bb2-8b59-f8ba55d991fb"
          title="الفديوهات التعليمية"
          subtitle="يوجد افضل الفديوهات شرح الدروس الي هذه المرحلة"
        />
        <VideoPlayer urlApi="highSchool/grade12/videos" />
      </div>
      <Footer />
    </section>
  );
};

export default Video;
