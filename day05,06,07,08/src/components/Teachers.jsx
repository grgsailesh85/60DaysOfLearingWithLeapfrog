import Nav from "./Nav";
import Footer from "./Footer";


const teachers = [
    {
        image: './teachers/a.jpg',
        name:'Sailesh Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/b.jpg',
        name:'Ram Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/c.jpg',
        name:'Hari Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/d.jpg',
        name:'Aviket Thapa',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/e.jpg',
        name:'Sailesh Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/f.jpg',
        name:'Ram Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/g.jpg',
        name:'Hari Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/h.jpg',
        name:'Aviket Thapa',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/i.jpg',
        name:'Sailesh Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/j.jpg',
        name:'Ram Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/k.jpg',
        name:'Hari Gurung',
        qua:'BE Computer(Pokhara University)'
    },
    {
        image: './teachers/l.jpg',
        name:'Aviket Thapa',
        qua:'BE Computer(Pokhara University)'
    }
]

const Teachers = () =>{
    return(
        <div>
            <Nav/>
            <div>
                <header style={{
                    height:280,
                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(151,41,247,1) 0%, rgba(24,22,39,1) 90% )',
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <h1 style={{
                        fontSize:'60px',
                        color:'white'
                    }}>
                        <i className="ri-user-voice-line" style={{
                            marginRight:16
                        }}></i>
                        Teachers
                    </h1>
                </header>

                <section style={{
                    width:'80%',
                    margin:'0 auto',
                    padding:'80px 0',
                    display:'flex',
                    columnGap:'5%',
                    rowGap:'48px',
                    flexWrap:'wrap'
                }}>
                    {
                        teachers.map(function(teacher,index){
                            return(
                                <div style={{width:'20%'}} key={index}>
                                    <img 
                                        src={teacher.image} 
                                        alt="" 
                                        width="100%"
                                        />
                                    <h2 style={{
                                        padding:0,
                                        marginBottom:4
                                    }}>{teacher.name}</h2>
                                    <p style={{
                                        padding:0,
                                        margin:0,
                                        color:'gray'
                                    }}>{teacher.qua}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Teachers;