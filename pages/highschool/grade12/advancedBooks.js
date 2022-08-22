import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import PdfViewer from "../../../components/general/PdfViewer";
import Footer from "../../../components/general/Footer";

const advancedbook = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FAdvanced%20Book.png?alt=media&token=7550acf7-98ec-47cd-835b-000c776870fc"
          title="الكتب الخارجية"
          subtitle="يوجد جميع الكتب الخارجية الي هذه المرحلة"
        />
        <PdfViewer urlApi="highSchool/grade12/advancedBooks" />
      </div>
      <Footer />
    </section>
  );
};

export default advancedbook;
