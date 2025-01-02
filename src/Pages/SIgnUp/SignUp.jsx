import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const {user, handleRegister, updateInfoProfile} = useContext(authContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        handleRegister(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)   
            updateInfoProfile(data.name, data.photoURL)   
            .then(()=> {
                console.log("user profile updated") 
                reset()      
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });      
                  navigate("/")   
            })      
            .catch(error => console.log(error)            )
        })
    }

    return (
        <>

            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" {...register("name", { required: true })} className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo url" {...register("photoURL", { required: true })} className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-500">photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" {...register("email", { required: true })} className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).+$/,
                                    })} className="input input-bordered" required />
                                {errors.password?.type === "required" && (<p className="text-red-500">Password is required</p>)}

                                {errors.password?.type === "minLength" && (<p className="text-red-500">Password must be 6 characters long</p>)}

                                {errors.password?.type === "maxLength" && (<p className="text-red-500">Password must be less than 20 characters</p>)}

                                {errors.password?.type === "pattern" && (<p className="text-red-500">Password must have one uppercase, one lowercase and a number</p>)}


                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" name="" id="" />
                            </div>
                        </form>
                        <p className='mb-6 ml-8'><small>Already Have an Account? <Link to="/login" className='text-red-500'>Please Sign In</Link></small></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;