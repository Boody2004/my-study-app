import { useState, useEffect } from "react";
import Link from "next/link";
import IntroService from "../general/IntroService";

const Service = (props) => {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch(
      `https://online-lessons-api.vercel.app/gettingStarted/${props.urlApi}`
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
    <div className="mt-20 mb-40">
      <IntroService
        img={props.img}
        title={props.title}
        subtitle={props.subtitle}
      />
      {items.length > 0 && (
        <div className="rtl-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <Link key={item.id} href={item.link}>
              <div
                className="text-end bg-white drop-shadow-md ease-out duration-200 hover:drop-shadow-xl cursor-pointer"
                style={{ borderRadius: "2rem" }}
              >
                <div className="p-6">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
