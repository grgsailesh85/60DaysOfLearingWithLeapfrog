import {Link} from 'react-router-dom';
import './nav.css'
const menus = [
    {
        label:'Home',
        href: '/'
    },
    {
        label:'Teachers',
        href: '/teachers'
    },
    {
        label:'Holidays',
        href: '/holidays'
    },
    {
        label:'Contact Us',
        href: '/contact-us'
    },
]
const Nav = () =>{
    return (
        <nav style={{
            display: 'flex',
            background: 'white',
            justifyContent:'space-between',
            padding: '8px 48px',
            boxShadow: '0 8px 8px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                display: 'flex',
                alignItems : 'center',
                gap: '8px'
            }}>
                <img 
                    src="./images/schoolLogo.png" 
                    alt="" 
                    width="60px"
                />
                <h1>SaileshGrg</h1>
            </div>

            <ul style={{
                listStyle:'none',
                display:'flex',
                alignItems: 'center',
                gap: 32
            }}>
                {
                    menus.map(function(menu){
                        return(
                            <li>
                                <Link to={menu.href} style={{
                                    textDecoration: 'none',
                                    color:'#323232',
                                    fontSize: 17
                                }}>{menu.label}</Link>
                            </li> 
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default Nav;
