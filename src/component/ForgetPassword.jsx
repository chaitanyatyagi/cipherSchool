import "../style/password.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

export default function ForgetPassword() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email: e.target[0].value
        }
        axios.post("https://cipherschoolsbackendexpress.onrender.com/auth/forget-password", payload).then((response) => {
            if (response.data.status == "success") {
                toast(response.data.message)
                window.open("/login", "_self")
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
                <div className="head">Forget-Password</div>
                <label className="label">Email</label>
                <input type="email" className="input" />
                <div className="btn">
                    <button className="btnins">Sent Email</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}