import "../style/navbartwo.css"
import { ReactComponent as Profile } from "../image/mainprofile.svg"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

export default function NavbarTwo(props) {
    const [profile, setProfile] = useState("")
    const [user, setUser] = useState("")
    useEffect(() => {
        axios.post("http://localhost:4800/user/get-user", { _id: props.id }).then((r) => {
            setProfile(`http://localhost:4800/public/user/${r.data.user[0].photo}`)
            setUser(r.data.user[0])
        })
    })
    console.log(user, profile)

    return (
        <div className="navbartwo">
            <div className="navbartwo-left">
                {
                    profile ? <img className="navbartwo-profile-icon" onClick={() => props.setProfilepop(true)} src={profile} /> : <Profile className="navbartwo-profile-icon" onClick={() => props.setProfilepop(true)} />
                }
                <div className="navbartwo-left-name">
                    <div className="navbartwo-left-name1">Hello,</div>
                    <div className="navbartwo-left-name2">{user.name}</div>
                    <div className="navbartwo-left-name3">{user.email}</div>
                </div>
            </div>
            {
                user && user.followers.length > 0 ? <Link to="/followers" className="navbartwo-right">{user.followers.length} Followers</Link> : <Link to="/followers" className="navbartwo-right">0 Followers</Link>
            }
        </div>
    )
}