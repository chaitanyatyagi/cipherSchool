
import "../style/navbarone.css"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Notification } from "../image/notification.svg"
import { ReactComponent as Search } from "../image/search-icon.svg"
import { ReactComponent as Close } from "../image/close.svg"
import { ReactComponent as Profile } from "../image/navbar-profile.svg"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from "universal-cookie"
const cookies = new Cookies()

export default function NavbarOne() {
    const theme = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const [search, setSearch] = useState(false)

    function Search1() {
        setSearch(false)
    }

    function Search2() {
        setSearch(true)
    }

    function logout() {
        console.log("hello")
        cookies.remove('jwt', { path: '/' })
        toast("Ypu are successfully logged out.")
        window.open("/", "_self")
    }

    if (search) {
        return (
            <div className="navbarone">
                <div className="navbarone-right2">
                    <div className="navbarone-searchbox2">
                        <div className="navbarone-searchicon">
                            <Search className="navbaroneiconicon" />
                        </div>
                        <input type="text" className="navbarone-searchinput" placeholder="Search and Learn" style={{ width: "88vw" }} />
                    </div>
                    <Close className="navbarone-searchicon-later" onClick={Search1} />
                </div>
                <ToastContainer />
            </div>
        )
    }
    else {
        return (
            <div className="navbarone">
                <div className="nabarone-combine-name-icon">
                    <Link to="/profile" className="navbarone-icon"></Link>
                    <div className="navbarone-name">CipherSchools</div>
                </div>
                <div className="navbarone-right">
                    <div className="navbarone-searchbox">
                        <div className="navbarone-searchicon">
                            <Search className="navbaroneiconicon" />
                        </div>
                        <input type="text" className="navbarone-searchinput" placeholder="Search and Learn" />
                    </div>
                    <Profile className="navbarone-notification" onClick={logout} />
                    <div className="navbarone-toggle"></div>
                    <Notification className="navbarone-notification" />
                    <Search className="navbarone-searchicon-later" onClick={Search2} />
                </div>
                <ToastContainer />
            </div>
        )
    }
}