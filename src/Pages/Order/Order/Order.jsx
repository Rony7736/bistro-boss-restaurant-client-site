// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import orderCoverImg from "../../../assets/order/order.jpg"
import Cover from "../../Shared/Cover/Cover";
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    //
    const { category } = useParams()
    const initialInddex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialInddex)
    const [menu] = useMenu()



    const offered = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={orderCoverImg} title="Oder Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;