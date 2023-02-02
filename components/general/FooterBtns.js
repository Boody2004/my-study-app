import { useState, useEffect } from "react";
import Link from "next/link";

const FooterBtns = (props) => {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch(`https://online-lessons-api.vercel.app/footer/${props.urlApi}`)
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
    <div>
      {items.length > 0 && (
        <div>
          {items.map((item) => (
            <Link key={item.id} href={item.link}>
              <p className="font-medium pb-3 ease-out duration-200 hover:text-white cursor-pointer">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterBtns;
