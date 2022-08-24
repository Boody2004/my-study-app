import { useState, useEffect } from "react";

const PdfViewer = (props) => {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch(
      `https://online-lessons-api.herokuapp.com/gettingStarted/${props.urlApi}`
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
    <div>
      {items.length > 0 && (
        <div className="mb-40">
          {items.map((item) => (
            <div key={item.id} className="mb-20">
              <div className="flex justify-between text-light mb-10">
                <h1 className="font-bold text-5xl">{item.titleEn}</h1>
                <h1 className="font-bold text-5xl">{item.titleAr}</h1>
              </div>
              <div style={{ overflowX: "scroll" }}>
                <iframe className="w-full min-h-screen" src={item.pdf}></iframe>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
