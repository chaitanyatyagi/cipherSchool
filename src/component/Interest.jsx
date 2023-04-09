import "../style/password.css"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Interest(props) {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const [eight, setEight] = useState(false)
    const [interests, setInterests] = useState([])

    const hndl = () => {
        props.setInterest(false)
    }

    const handleSubmit = (e) => {
        if (one) { interests.push("App Development") }
        if (two) { interests.push("Game Dvelopment") }
        if (three) { interests.push("Data Structures") }
        if (four) { interests.push("Machine Learning") }
        if (five) { interests.push("Programming") }
        if (six) { interests.push("Data Science") }
        if (seven) { interests.push("Web Development") }
        if (eight) { interests.push("Others") }
        const payload = {
            _id: props.id,
            interests: interests
        }
        axios.patch("https://cipherschoolsbackendexpress.onrender.com/user/interests", payload).then((res) => {
            if (res.data.status == "success") {
                setInterests(res.data.updatedUser.interests)
                toast(res.data.message)
            }
        }).catch((err) => {
            console.log(err)
            toast("Something went wrong.")
        })
    }

    return (
        <form className="interest" >
            <div className="head-interest">Interests</div>
            <div className="data-collection">
                <div className="data" onClick={() => setOne((prev) => !prev)} style={one ? { backgroundColor: "#f3912e", color: "white" } : {}}>App Development</div>
                <div className="data" onClick={() => setTwo((prev) => !prev)} style={two ? { backgroundColor: "#f3912e", color: "white" } : {}}>Game Dvelopment</div>
                <div className="data" onClick={() => setThree((prev) => !prev)} style={three ? { backgroundColor: "#f3912e", color: "white" } : {}}>Data Structures</div>
                <div className="data" onClick={() => setFour((prev) => !prev)} style={four ? { backgroundColor: "#f3912e", color: "white" } : {}}>Machine Learning</div>
                <div className="data" onClick={() => setFive((prev) => !prev)} style={five ? { backgroundColor: "#f3912e", color: "white" } : {}}>Programming</div>
                <div className="data" onClick={() => setSix((prev) => !prev)} style={six ? { backgroundColor: "#f3912e", color: "white" } : {}}>Data Science</div>
                <div className="data" onClick={() => setSeven((prev) => !prev)} style={seven ? { backgroundColor: "#f3912e", color: "white" } : {}}>Web Development</div>
                <div className="data" onClick={() => setEight((prev) => !prev)} style={eight ? { backgroundColor: "#f3912e", color: "white" } : {}}>Others</div>
            </div>
            <div className="btn-insert">
                <div className="btnins" onClick={() => props.setInterest(false)}>Cancel</div>
                <div className="btnins" onClick={() => { hndl(); handleSubmit() }} >Add</div>
            </div>
            <ToastContainer />
        </form>
    )
}