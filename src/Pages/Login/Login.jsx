
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = captchaRef.current.value
        if(validateCaptcha(userCaptchaValue)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="captcha" ref={captchaRef} placeholder="type the captcha above" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>

                        </div>

                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" name="" id="" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;