import { useState } from "react";
import Swal from 'sweetalert2';
import Nav from "./Nav";
import Footer from "./Footer";
const ContactUs = () =>{
    const [fullName , setFullName]=useState('')
    const [email, setEmail] =useState('')
    const [message, setMessage] = useState('')

    const contactUs = (e)=>{
        e.preventDefault();
        console.log(fullName, email, message)
        Swal.fire({
            icon:'success',
            title:'Success',
            text:'Thank You ! We will try to reach you soon'
        })
        
    }
    return (
        <div>
            <Nav/>
            <div style={{
                display:'flex',
                padding:'64px',
                gap:24
            }}>
                <img 
                    src="./images/contact-us.svg" 
                    alt=""
                    width="50%" 
                />
                <div style={{
                    width:'50%'
                }}>
                    <form 
                        onSubmit={contactUs}
                        action="" 
                        style={{
                            display:'flex',
                            flexDirection:'column',
                            gap:24
                    }}>
                        <div 
                            style={{
                                display:"flex",
                                flexDirection:'column',
                                gap:8
                            }}>
                            <label style={{
                                fontSize:18,
                                fontWeight:500
                            }}>Full Name</label>
                            <input
                                value={fullName} 
                                onChange={(e)=>setFullName(e.target.value)}
                                required
                                type="text" 
                                name="fullname"
                                placeholder="Enter Your Name"
                                style={{
                                    border:'1px solid #ccc',
                                    borderRadius:4,
                                    padding:14
                            }}/>
                        </div>

                        <div 
                            style={{
                                display:"flex",
                                flexDirection:'column',
                                gap:8
                            }}>
                            <label style={{
                                fontSize:18,
                                fontWeight:500
                            }}>Email</label>
                            <input 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                type="email" 
                                name="email"
                                placeholder="example@gmail.com"
                                style={{
                                    border:'1px solid #ccc',
                                    borderRadius:4,
                                    padding:14
                            }}/>
                        </div>

                        <div 
                            style={{
                                display:"flex",
                                flexDirection:'column',
                                gap:8
                            }}>
                            <label style={{
                                fontSize:18,
                                fontWeight:500
                            }}>Message</label>
                            <textarea 
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                required
                                type="text" 
                                name="message"
                                placeholder="Write Your Query or Message"
                                rows={4}
                                style={{
                                    border:'1px solid #ccc',
                                    borderRadius:4,
                                    padding:14
                            }}/>
                        </div>

                        <button style={{
                            border:'none',
                            width:'fit-content',
                            padding:'14px 32px',
                            borderRadius:4,
                            background:'#6c63ff',
                            color:'white',
                            fontWeight:600
                        }}>SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactUs;