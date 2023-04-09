import "../style/password.css"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

export default function ProfilePop(props) {
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    function haandleSubmit() {
        const form = new FormData()
        form.append('id', props.id)
        form.append('photo', photo)
        form.append('name', name)
        form.append('email', email)
        form.append('mobile', mobile)
        axios.patch("https://cipherschoolsbackendexpress.onrender.com/user/update-me", form).then((res) => {
            console.log(res.data)
            if (res.data.status === "success") {
                toast(res.data.message)
            }
            else if (toast(res.data.status === "fault")) {
                toast(res.data.message.toString())
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <form className="password" >
            <div className="head">Update Profile</div>
            <div className="left-profile"></div>
            <input type="file" name="photo" className="file" onChange={(e) => setPhoto(e.target.files[0])} />
            <label className="label">Name</label>
            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <label className="label">Email Address</label>
            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="label">Mobile</label>
            <input type="text" className="input" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <div className="btn">
                <div className="btnins" onClick={() => props.setProfilepop(false)}>Cancel</div>
                <button className="btnins" onClick={() => { props.setProfilepop(false); haandleSubmit() }}>Save</button>
            </div>
        </form>
    )
}