import '../css/btn.css'

function Button ({type, value}){
    return(
        <input className="btn" type={type} value={value} />
    )
}

export default Button;