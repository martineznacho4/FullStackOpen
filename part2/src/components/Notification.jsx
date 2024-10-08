const Notification = ({message}) => {
    if(message === null){
        return null
    }

    return(
        <div className= {message.includes("Unable")? "fail":"success"} >
            {message}
        </div>
    )
}

export default Notification