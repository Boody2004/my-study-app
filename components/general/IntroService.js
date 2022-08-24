import styles from "../../styles/Home.module.css";

const IntroService = (props) => {
  return (
    <div
      className={`mb-20 ${styles.item}`}
      style={{
        background: "#5961F9",
        background: "-webkit-linear-gradient(to right, #EE9AE5, #5961F9)",
        background: "linear-gradient(to right, #EE9AE5, #5961F9)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 sm:p-20">
        <div className="flex justify-center">
          <img className="sm:w-7/12" src={props.img} alt="Img"></img>
        </div>
        <div className="text-end max-w-xl text-white  grid content-center">
          <h1 className="font-bold text-5xl sm:text-6xl">{props.title}</h1>
          <p className="text-xl mt-10">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroService;
