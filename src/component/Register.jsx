import "../style/password.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Register() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target[0].value,
            mobile: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value
        }
        axios.post("http://localhost:4800/auth/register", payload).then((response) => {
            if (response.data.status == "success") {
                toast(response.data.message)
                window.open("/", "_self")
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
                <div className="head">SignUp</div>
                <label className="label">Name</label>
                <input type="text" className="input" />
                <label className="label">Mobile(Optional)</label>
                <input type="text" className="input" />
                <label className="label">Email</label>
                <input type="email" className="input" />
                <label className="label">Password</label>
                <input type="password" className="input" />
                <Link to="/" className="label">Already Registered?</Link>
                <div className="btn">
                    <button className="btnins">Register</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}