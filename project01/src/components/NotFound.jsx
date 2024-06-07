const NotFound = () =>{
    return(
        <div style={{
            background: '#f5f5f5',
            height:'100vh',
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img 
                src="./images/not-found.svg" 
                width="720px"
                alt="" />
            <h1 style={{
                color:"#6c63ff"
            }}>Page Not Found !</h1>
        </div>
    )
}
export default NotFound;