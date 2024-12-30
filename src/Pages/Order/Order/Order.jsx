// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import orderCoverImg from "../../../assets/order/order.jpg"
import Cover from "../../Shared/Cover/Cover";
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()

    const offered = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>
            <Cover img={orderCoverImg} title="Oder Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;