
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

import menuImg from "../../assets/menu/menu-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* main cover */}
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>

            {/* salads menu items */}
            <MenuCategory items={salads} title="salad" img={saladImg}></MenuCategory>

            {/* soup menu items */}
            <MenuCategory items={soups} title="soup" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;