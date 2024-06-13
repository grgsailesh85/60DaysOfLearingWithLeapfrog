import Nav from "./Nav";
import Footer from "./Footer";
const Holidays = () =>{
    const holidays = [
        {
            title:'Summer Vacation 2024',
            duration:'1 Months',
            date:'10-04-2024'
        },
        {
            title:'Winter Vacation 2024',
            duration:'20 Days',
            date:'10-08-2024'
        },
        {
            title:'Christmas',
            duration:'2 Days',
            date:'25-12-2024'
        },
        {
            title:'New Year 2025',
            duration:'1 Days',
            date:'01-01-2025'
        },
        {
            title:'Exam Preparation Holiday',
            duration:'2 Week',
            date:'10-01-2024'
        },
        {
            title:'Exam Holiday',
            duration:'20 Days',
            date:'10-20-2024'
        }
    ]
    return(
        <div>
            <Nav/>
            <div style={{
                width:'60%',
                margin:'0 auto',
                padding:'64px 0'
            }}>
                <h1 style={{
                    textAlign:'center'
                }}>Your Holiday's</h1>

                <table width="100%">
                    <thead>
                        <tr style={{
                            background:'#ddd'
                        }}>
                            <th style={{padding:14}}>SN</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Date</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            holidays.map((item, index)=>(
                                <tr style={{
                                    textAlign:'center'
                                }}>
                                    <td style={{
                                        padding:14,
                                        borderBottom:'1px solid #ddd'
                                    }}>{index+1}</td>
                                    <td style={{
                                        padding:14,
                                        borderBottom:'1px solid #ddd'
                                    }}>{item.title}</td>
                                    <td style={{
                                        padding:14,
                                        borderBottom:'1px solid #ddd'
                                    }}>{item.duration}</td>
                                    <td style={{
                                        padding:14,
                                        borderBottom:'1px solid #ddd'
                                    }}>{item.date}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}
export default Holidays;