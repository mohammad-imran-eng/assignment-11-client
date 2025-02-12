import { FcGoogle } from "react-icons/fc";
import animationLottie from '../../src/assets/lottie_json/register.json'
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser,updateUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        createUser(email, password)
            .then(result => {
                toast.success('Successfully Registered!')
                updateUser({ displayName: name, photoURL: photo })
                .then(result=> console.log(result)).catch(error=> {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message.slice(17,42));
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={animationLottie} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-5 text-center">Register now!</h1>
                        <div>
                            <button
                                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FcGoogle className="w-5 h-5" />
                                <span>Google</span>
                            </button>
                        </div>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" required/>
                            <label className="fieldset-label">PhotoURL</label>
                            <input type="url" name="photoURL" className="input" placeholder="PhotoURL" required/>
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" required/>
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" required/>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;