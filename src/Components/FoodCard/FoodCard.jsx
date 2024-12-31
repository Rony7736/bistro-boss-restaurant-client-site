
const FoodCard = ({item}) => {
    
    const {name, recipe, image, category, price} = item

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
                    <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;