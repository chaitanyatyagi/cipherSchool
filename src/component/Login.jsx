import "../style/password.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from "universal-cookie"
const cookie = new Cookies()


export default function Login() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post("http://localhost:4800/auth/login", payload).then((response) => {
            if (response.data.status == "success") {
                cookie.set('jwt', response.data.token, { path: '/' });
                cookie.set('id', response.data.user._id, { path: '/' });
                toast(response.data.message)
                window.open("/profile", "_self")
            }
            else if (response.data.status == "fault") {
                toast(response.data.message.toString())
            }
        }).catch((error) => {
            console.log(error)
            toast("Something Went Wrong")
        })
    }
    return (
        <div className="main">
            <form className="password" onSubmit={handleSubmit}>
                <div className="head">SignIn</div>
                <label className="label">Email</label>
                <input type="email" className="input" />
                <label className="label">Password</label>
                <input type="password" className="input" />
                <Link to="/forget-password" className="label">Forget Password?</Link>
                <div className="btn">
                    <button className="btnins">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}