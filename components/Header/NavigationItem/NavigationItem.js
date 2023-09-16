
const NavigationItem = ({text , children , oncli = null ,onmousee = null ,onmousel = null}) => {
    return(
            <li key={text} className="nav-link" onClick={oncli} onMouseEnter={onmousee} onMouseLeave={onmousel}>
                {children}
            </li>
    )
}

export default NavigationItem;