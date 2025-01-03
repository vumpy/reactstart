import '../css/staticcard.css'
import React from 'react'

function staticcard(props) {
    const small = props.small




    let head_text;
    let text_text;
    if (small == 'true') {
        // <p className='small'>{props.header}</p>
        // head_text = <p style = {{fontSize: 20, fontWeight: 'bold'}}>{props.header}</p>
        head_text = <p className='small' style={{ fontSize: 20, fontWeight: 'bold' }}>{props.header}</p>
        text_text = <p className='small' style = {{fontSize: 16}}>{props.text}</p>
    }
    else {
        head_text = <p className='big' style={{ fontSize: 20, fontWeight: 'bold' }}>{props.header}</p>
        text_text = <p className='big' style = {{fontSize: 16}}>{props.text}</p>
    }
    return(
        <div className='staticcard' style={{width: props.width,
            marginLeft: props.margin
        }}>
            {head_text}
            {text_text}
        </div>
    );
}

export default staticcard;