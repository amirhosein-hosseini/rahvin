import { useEffect, useState } from "react";
import "./DropDown.css";
import axios from "axios";

const DropDown = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subnumber, setSubnumber] = useState(0);
  const [showSubCategories, setShowSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.16.16.210:7500/api/v1/categories/menu")
      .then(function (response) {
        // handle success
        setCategories(response.data.data);
        const data = response.data.data;
        const subcategory = data.map((item) => item.childCategory || []);
        setSubCategories(subcategory);
        setShowSubCategories(subcategory[0]); // Set initial value to the first item
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <ul className="drop-down-topic-wrapper">
        {categories.map((item, index) => (
          <li
            key={item.id}
            className="drop-down-topic"
            onMouseEnter={() => {
              setSubnumber(index);
              setShowSubCategories(subCategories[index]); // Update showSubCategories on category change
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="dorp-down-items-wrapper">
        {showSubCategories.map((item) => (
          <div key={item.id} className="drop-down-item">
            <p className="drop-down-item-title">{item.title}</p>
            {item.childCategory?.map((itemy) => (
              <p className="drop-down-item-item" key={itemy.id}>
                {itemy.title}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DropDown;