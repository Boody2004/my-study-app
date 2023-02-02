import { useState, useEffect } from "react";
import Link from "next/link";
import IntroService from "./IntroService";

const ServicesGrate = (props) => {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch(
      `https://online-lessons-api.vercel.app//gettingStarted/${props.urlApi}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mb-40">
      <IntroService
        img={props.img}
        title={props.title}
        subtitle={props.subtitle}
      />
      {items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <Link key={item.id} href={item.link}>
              <div
                className="bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img src={item.img} alt="Img Service"></img>
                  </div>
                  <div className="text-end my-5">
                    <h1 className="text-2xl font-bold	text-textPrimary mb-2">
                      {item.title}
                    </h1>
                    <p className="text-base	font-medium	text-light mb-1">
                      {item.underTitle}
                    </p>
                    <p className="text-base font-medium	text-textPrimary mb-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesGrate;
