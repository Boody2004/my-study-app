import FooterBtns from "./FooterBtns";

const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10 pt-24 pb-32 text-textThird text-end">
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الثانوية
            </h1>
            <FooterBtns urlApi="highschool" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الاعدادية
            </h1>
            <FooterBtns urlApi="middleSchool" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              المرحلة الابتدائية
            </h1>
            <FooterBtns urlApi="primaryGrade" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white pb-5">
              مرحلة رياض اطفال
            </h1>
            <FooterBtns urlApi="kg" />
          </div>
          <div className="md:col-span-2">
            <h1 className="font-bold text-2xl text-white pb-5">مواكبة</h1>
            <p className="font-medium pb-5">
              انضم إلى النشرة الإخبارية للحصول على تحديثات منتظمة
            </p>
            <form
              action="https://formsubmit.co/abdelrahmanatefalibe@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://online-lessons.vercel.app"
              />
              <input
                className="text-base text-white border-0 rounded-lg outline-0 m-2 py-3 px-5"
                type="Email"
                style={{
                  background: "RGB(255, 255, 255, 20%)",
                }}
                name="email"
                placeholder="example@email.com"
                required
              />
              <button
                className="bg-lightSecondary ease-out duration-200 hover:bg-lightSecondaryHover font-bold text-base text-white border-0 rounded-lg outline-0	cursor-pointer m-2 py-3 px-5"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div
          className="text-textThird text-center pt-5 pb-10"
          style={{ borderTop: "1px solid rgb(255, 255, 255, 20%)" }}
        >
          <p>©2022 The Launchy Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
