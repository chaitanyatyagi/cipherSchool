import "../style/follow.css"
import Card from "../component/Card"
import NavbarOne from "./NavbarOne"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Follow(props) {
    const [num, setNum] = useState([])
    const [unfollow, setUnfollow] = useState(false)
    const [follow, setFollow] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:4800/user/get-followers").then((res) => {
            setNum(res.data.followers)
        }).catch((err) => {
            console.log(err)
        })
    })

    if (props.login) {
        return (
            <div className="follow">
                <NavbarOne />
                <div className="follow-ins">
                    {
                        num.map((el, key) => (
                            <Card key={key} el={el} id={props.id} chkr={el.user.includes(props.id) ? follow : unfollow} />
                        ))
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div>Please Login First</div>
        )
    }
}