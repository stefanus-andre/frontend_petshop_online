import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>

            <Helmet>
                <title>Register</title>
            </Helmet>


            <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex justify-center mb-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
                            <span className="text-xl font-semibold text-gray-900 dark:text-white">Test App</span>
                        </Link>
                    </div>

                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h5>
                        <div>
                            <label htmlFor="nama_lengkap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Full Name</label>
                            <input type="text" name="nama_lengkap" id="nama_lengkap"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="Masukkan Nama Lengkap Anda" required/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="Masukkan Nama Lengkap Anda" required/>
                        </div>

                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   required/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                           className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                           required/>
                                </div>
                                <label htmlFor="remember"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                    me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                Password?</a>
                        </div>
                        <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                            to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                            account</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}