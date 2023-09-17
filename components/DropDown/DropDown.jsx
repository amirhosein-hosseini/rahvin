import { useEffect, useState } from "react";
import "./DropDown.css";
import axios from "axios";


const DropDown = () => {
    const [categories,setCategories] = useState([])
    const [subCategories , setSubCategories] = useState([])
    const [subnumber , setSubnumber] = useState()
    


    useEffect(()=>{
        axios.get('http://rahvin.ir/api/v1/categories/menu')
        .then(function (response) {
          // handle success
          setCategories(response.data.data)
          const data = response.data.data;
          const subcategory = []
          data.map((item) => {
            subcategory.push(item.childCategory)
          })
          setSubCategories(subcategory)
          const subcategorychildren = []
          subcategory.map((item) => {
            item[0].childCategory?subcategorychildren.push(item[0].childCategory):subcategorychildren.push("nothing")
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, [categories])






    return(

            <>
                <ul className="drop-down-topic-wrapper">
                        {categories.map((item) => (
                            <li className="drop-down-topic" id={categories.indexOf(item)}>
                                {item.title}
                            </li>
                        ))}
                </ul>
                <div className="dorp-down-items-wrapper">
                    {subCategories.map((item)=>(
                        <div className="drop-down-item" id={subCategories.indexOf(item)}>
                            <p className="drop-down-item-title">
                                {item[0].title}
                            </p>
                            {
                                item[0].childCategory?.map((itemy) => (
                                    <p className="drop-down-item-item">
                                        {itemy.title}
                                    </p>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </>
    )
}

export default DropDown;