import "../style/profile.css"
import { ReactComponent as LinkedIn } from "../image/linkedin.svg"
import { ReactComponent as GitHub } from "../image/github.svg"
import { ReactComponent as Facebook } from "../image/facebook.svg"
import { ReactComponent as Instagram } from "../image/instagram.svg"
import { ReactComponent as Twitter } from "../image/twitter.svg"
import { ReactComponent as Website } from "../image/website.svg"
import NavbarOne from "./NavbarOne"
import NavbarTwo from "./NavbarTwo"
import Interest from "../component/Interest"
import ProfilePop from "../component/ProfilePop"
import Password from "../component/Password"
import GitHubCalendar from 'react-github-calendar';
import { useState, useEffect } from "react"
import axios from "axios"

export default function Profile(props) {
    const [interest, setInterest] = useState(false)
    const [password, setPassword] = useState(false)
    const [profilepop, setProfilepop] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.post("https://cipherschoolsbackendexpress.onrender.com/user/get-user", { _id: props.id }).then((r) => {
            setUser(r.data.user[0].interests)
        })
    })

    if (props.login) {
        return (
            <div className="profile" >
                <NavbarOne />
                <NavbarTwo setProfilepop={setProfilepop} id={props.id} />
                <div className="profile-about">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">About Me</div>
                        <div className="profile-headbtn-btn">Save</div>
                    </div>
                    <textarea type="text" className="profile-about-input" placeholder="Add something about you." />
                    <div className="border"></div>
                </div>
                <div className="profile-about">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">CIPHER MAP</div>
                    </div>
                    <GitHubCalendar className="github" username="chaitanyatyagi" blockSize={17} blockMargin={7.3} fontSize={16} color="#f3912e" labels="white" style={{ color: "white", fontWeight: 500, fontFamily: "sans-serif", marginTop: "12px", display: "flex", justifyContent: "flex-start", flexDirection: "column" }} />
                    <div className="border"></div>
                </div>
                <div className="profile-pi">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">On the web</div>
                        <div className="profile-headbtn-btn">Save</div>
                    </div>
                    <div className="profile-about-input-collect-pi">
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">LinkedIn</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <LinkedIn />
                                </div>
                                <input className="profile-about-input-right" placeholder="LinkedIn" />
                            </div>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">GitHub</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <GitHub />
                                </div>
                                <input className="profile-about-input-right" placeholder="GitHub" />
                            </div>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">Facebook</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <Facebook />
                                </div>
                                <input className="profile-about-input-right" placeholder="Facebook" />
                            </div>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">Twitter</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <Twitter />
                                </div>
                                <input className="profile-about-input-right" placeholder="Twitter" />
                            </div>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">Instagram</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <Instagram />
                                </div>
                                <input className="profile-about-input-right" placeholder="Instagram" />
                            </div>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">Website</label>
                            <div className="profile-about-input-combine">
                                <div className="profile-about-input-left">
                                    <Website />
                                </div>
                                <input className="profile-about-input-right" placeholder="Your Website" />
                            </div>
                        </div>
                    </div>
                    <div className="border"></div>
                </div>
                <div className="profile-pi">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">Professional Information</div>
                        <div className="profile-headbtn-btn">Change</div>
                    </div>
                    <div className="profile-about-input-collect-pi">
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">Highest Education</label>
                            <select className="profile-about-inputs" >
                                <option selected>Primary</option>
                                <option>Secondary</option>
                                <option>Higher Secondary</option>
                                <option>Graduation</option>
                                <option>Post Graduation</option>
                            </select>
                        </div>
                        <div className="profile-about-input-collect-pi-i">
                            <label htmlFor="">What do you do currently?</label>
                            <select className="profile-about-inputs"  >
                                <option>Schooling</option>
                                <option selected>College Student</option>
                                <option>Teaching</option>
                                <option>Job</option>
                                <option>Freelancing</option>
                            </select>
                        </div>
                    </div>
                    <div className="border"></div>
                </div>
                <div className="profile-password">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">Password & Security</div>
                        <div className="profile-headbtn-btn" onClick={() => setPassword(true)}>Change</div>
                    </div>
                    <label htmlFor="">Password</label>
                    <input type="password" className="profile-about-input" style={{ height: "40px" }} />
                    <div className="border"></div>
                </div>
                <div className="profile-interest">
                    <div className="profile-headbtn">
                        <div className="profile-headbtn-head">Interest</div>
                        <div className="profile-headbtn-btn" onClick={() => setInterest(true)}>Add</div>
                    </div>
                    <div className="profile-interest-add">
                        {
                            user.length > 0 ? user.map((el) => (
                                <div className="int-btns">{el}</div>
                            )) : ""
                        }
                    </div>
                    <div className="border"></div>
                </div>
                {
                    interest && <Interest setInterest={setInterest} id={props.id} />
                }
                {
                    profilepop && <ProfilePop setProfilepop={setProfilepop} id={props.id} />
                }
                {
                    password && <Password setPassword={setPassword} id={props.id} />
                }
            </div>
        )
    }
    else {
        return (
            <div>Please Login first</div>
        )
    }
}