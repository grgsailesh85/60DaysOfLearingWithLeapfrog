const Navbar = () =>{
    return(
        <nav style={{
            background:"white",
            display:"flex",
            justifyContent: "space-between",
            padding: '0 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.2)'
        }}>
            <div style={{
                display:"flex",
                alignItems: "center",
                gap: "8px"
            }}>
                <img 
                    src="./images/schoolLogo.png"
                    width="60" 
                    alt="" 
                />
                <h1>SaileshGrg</h1>
            </div>

            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: 'flex',
                // gap: '64px'
            }}>
                <li style={{
                    display: 'flex',
                    alignItems: "center",
                    padding: '16px 24px',
                }}>
                    <a href="#" style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: '17px',           
                    }}>Home</a>
                </li>

                <li style={{
                    display: 'flex',
                    alignItems: "center",
                    padding: '16px 24px',
                }}>
                    <a href="#" style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: '17px',           
                    }}>Teachers</a>
                </li>

                <li style={{
                    display: 'flex',
                    alignItems: "center",
                    padding: '16px 24px',
                }}>
                    <a href="#" style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: '17px',           
                    }}>Holidays</a>
                </li>

                <li style={{
                    display: 'flex',
                    alignItems: "center",
                    padding: '16px 24px'
                }}>
                    <a href="#" style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: '17px',           
                    }}>Contact</a>
                </li>

                <li style={{
                    display: 'flex',
                    alignItems: "center",
                    padding: '16px 24px',
                }}>
                    <a href="#" style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: '17px',
                        background: 'dodgerblue',
                        padding: '16px 48px',
                        borderRadius: 4 

                    }}>Talk To Us</a>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar;