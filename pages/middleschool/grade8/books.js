import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import PdfViewer from "../../../components/general/PdfViewer";
import Footer from "../../../components/general/Footer";

const Book = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FBook.png?alt=media&token=e5f64a1b-2c38-4bfe-b2b7-863f2b69329a"
          title="كتب الوزارة"
          subtitle="يوجد جميع كتب الوزارة الي هذه المرحلة"
        />
        <PdfViewer urlApi="middleSchool/grade8/books" />
      </div>
      <Footer />
    </section>
  );
};

export default Book;
