import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

// rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <section>
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>

            <div className="my-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>

                            <div className="flex flex-col items-center gap-4 text-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className="text-2xl" src="https://img.icons8.com/?size=50&id=38968&format=png" alt="" />
                                <p>{review.details}</p>
                                <h1 className="text-2xl text-orange-400">{review.name}</h1>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;