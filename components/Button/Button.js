import "./Button.css";

const Button = ({children , handleclick = null , type = null}) => {
    return(
        <button className="blue-button" onClick={handleclick} type="button">
            {children}
        </button>
    )
}

export default Button;