import {Link} from 'react-router-dom';
const Footer = () =>{
    return(
        <footer style={{
            background:'#280044',
            padding:'80px 10%',
            display:"flex" 
        }}>
            <div style={{width:'100%'}}>
                <h2 style={{
                    color:'white',
                    fontWeight: '600',
                    margin:0
                }}>SaileshGrg</h2>
                <p style={{color:'#ccc'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores? </p>
            </div>

            <div style={{width:'100%'}}>
                <h2 style={{
                    color:'white',
                    fontWeight: '600',
                    margin:0
                }}>Popular Links</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display:'flex',
                    flexDirection:'column',
                    gap:'16px'
                }}>
                    <li>
                        <Link to="/"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>Home</Link>
                    </li>

                    <li>
                        <Link to="/teachers"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>Teachers</Link>
                    </li>

                    <li>
                        <Link to="/holidays"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>Holidays</Link>
                    </li>

                    <li>
                        <Link to="/contact-us"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div style={{width:'100%'}}>
                <h2 style={{
                    color:'white',
                    fontWeight: '600',
                    margin:0
                }}>Social Profile</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display:'flex',
                    flexDirection:'column',
                    gap:'16px'
                }}>
                    <li>
                        <Link to="/"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>
                            <i className="ri-youtube-line" style={{marginRight:'4px'}}></i>
                            Youtube
                        </Link>
                    </li>

                    <li>
                        <Link to="/"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>
                            <i className="ri-facebook-box-line" style={{marginRight:'4px'}}></i>
                            Facebook
                        </Link>
                    </li>

                    <li>
                        <Link to="/"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>
                            <i className="ri-linkedin-box-line" style={{marginRight:'4px'}}></i>
                            LinkedIn
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact-us"style={{
                            color:'white',
                            textDecoration:'none'
                        }}>
                            <i className="ri-instagram-line" style={{marginRight:'4px'}}></i>
                            Instagram
                        </Link>
                    </li>
                </ul>
            </div>

            <div style={{width:'100%'}}>
                <h2 style={{
                    color:'white',
                    fontWeight: '600',
                    margin:0
                }}>Contact Us</h2>
                <form style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'16px',
                    marginTop:'18px'
                    
                }}>
                    <input 
                        type="text"
                        required
                        name='fullname'
                        placeholder='Full Name'
                        style={{
                            border:'none',
                            padding:'12px',
                            borderRadius:'4px',
                            width:'100%'
                        }} />

                    <input 
                        type="email"
                        required
                        name='email'
                        placeholder='example@email.com'
                        style={{
                            border:'none',
                            padding:'12px',
                            borderRadius:'4px',
                            width:'100%'
                        }} />

                    <textarea
                        type="text"
                        required
                        name='message'
                        placeholder='Message'
                        style={{
                            border:'none',
                            padding:'12px',
                            borderRadius:'4px',
                            width:'100%'
                        }}
                        rows="3">
                    </textarea>

                    <button style={{
                        border:'none',
                        padding:'12px 24px',
                        borderRadius:'4px',
                        width:'fit-content',
                        background:'#f38e1e',
                        color:'white'
                    }}>
                        Submit
                    </button>
                </form>
            </div>
        </footer>
    )
}
export default Footer;