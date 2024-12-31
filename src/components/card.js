import '../css/card.css'

function card(props){
    return (
        <div className = "card" onClick={props.onClick}>
            <img src = {`${props.link}`} className = "cardImg"></img>
            <p className = "cardText">{props.text}</p>
        </div>
    );
}

export default card;