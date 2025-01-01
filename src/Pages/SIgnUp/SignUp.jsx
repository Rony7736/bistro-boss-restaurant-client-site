import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" {...register("email", { required: true })} className="input input-bordered" required />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="input input-bordered" required />
                            {errors.password?.type === "required" && (<p className="text-red-500">Password is required</p>)}
                            {errors.password && <span className="text-red-500">Password must be contain 6 carecters to 20</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='mb-6 ml-8'><small>Already Have an Account? <Link to="/login" className='text-red-500'>Please Sign In</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;