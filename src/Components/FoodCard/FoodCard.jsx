import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {

    const { name, recipe, image, category, price, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // sent cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Yoy are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // sent the use to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        console.log(food, user.email)
    }

    return (

        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => { handleAddToCart(item) }} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;