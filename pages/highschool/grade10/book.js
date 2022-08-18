import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import Footer from "../../../components/general/Footer";

const Book = () => {
  return (
    <section>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <IntroService
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660769906/casual-life-3d-cat-lying-on-books_hst1vt.png"
          title="الكتب الوزارة"
          subtitle="يوجد جميع الكتب الوزارة الي هذه المرحلة"
        />
      </div>
      <Footer />
    </section>
  );
};

export default Book;
