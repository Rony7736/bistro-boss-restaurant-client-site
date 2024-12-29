import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data) 
            const popularItems = data.filter(item => item.category === "popular")           
            setMenu(popularItems)
        })
    },[])

    return (
        <section className="mb-12">
            <SectionTitle subHeading={"Check it Out"} heading={"form our menu"}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;