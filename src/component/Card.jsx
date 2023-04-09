import "../style/card.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

export default function Card(props) {
    function handleSubmitTrue() {
        axios.patch("http://localhost:4800/user/follow-user", { follower: props.el._id, user: props.id, chkr: true }).then((res) => {
            console.log(res)
            if (res.data.status == "success") {
                toast(res.data.message)
            }
        }).catch((err) => {
            console.log(err, 1)
            toast("Something went wrong.")
        })
    }
    function handleSubmitFalse() {
        axios.patch("http://localhost:4800/user/follow-user", { follower: props.el._id, user: props.id, chkr: false }).then((res) => {
            console.log(res)
            if (res.data.status == "success") {
                toast(res.data.message)
            }
        }).catch((err) => {
            console.log(err, 1)
            toast("Something went wrong.")
        })
    }

    return (
        <div className="card">
            <div className="card-profile"></div>
            <div className="card-name">{props.el.name}</div>
            <div className="card-detail">{props.el.detail}</div>
            <div className="card-followers">{props.el.follow}</div>
            {
                props.chkr ? <div className="card-btn" onClick={handleSubmitFalse} style={{ backgroundColor: "white", color: "black" }}>Unfollow</div> : <div className="card-btn" onClick={handleSubmitTrue}>Follow</div>
            }
            <ToastContainer />
        </div>
    )
}