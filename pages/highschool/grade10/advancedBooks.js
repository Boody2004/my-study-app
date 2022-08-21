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
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660789544/casual-life-3d-cat-sitting-on-bookshelf_tnjvcp.png"
          title="الكتب الخارجية"
          subtitle="يوجد جميع الكتب الخارجية الي هذه المرحلة"
        />
        <PdfViewer urlApi="highSchool/grade10/advancedBooks" />
      </div>
      <Footer />
    </section>
  );
};

export default advancedbook;
