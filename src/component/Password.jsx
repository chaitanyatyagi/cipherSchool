import "../style/password.css"
import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Password(props) {
    const [pass, setPass] = useState("")
    const [npass, setNpass] = useState("")
    const [cpass, setCpass] = useState("")
    function handleSubmit(e) {
        console.log(1)
        const payload = {
            _id: props.id,
            password: pass,
            newpassword: npass,
            changepassword: cpass
        }
        axios.patch("http://localhost:4800/user/password-change", payload).then((response) => {
            console.log(response)
            if (response.data.status == "fault") {
                toast(response.data.message.toString())
            }
            else if (response.data.status == "success") {
                toast(response.data.message)
            }
        }).catch((error) => {
            console.log(error)
            toast("Something Went Wrong")
        })
    }
    return (
        <form className="password">
            <div className="head">Password Change</div>
            <label className="label">Current Password</label>
            <input type="password" className="input" value={pass} onChange={(e) => setPass(e.target.value)} />
            <label className="label">New Password</label>
            <input type="password" className="input" value={npass} onChange={(e) => setNpass(e.target.value)} />
            <label className="label">Confirm Password</label>
            <input type="password" className="input" value={cpass} onChange={(e) => setCpass(e.target.value)} />
            <div className="btn">
                <div className="btnins" onClick={() => props.setPassword(false)}>Cancel</div>
                <button className="btnins" onClick={() => { props.setPassword(false); handleSubmit() }}>Save</button>
            </div>
            <ToastContainer />
        </form >
    )
}