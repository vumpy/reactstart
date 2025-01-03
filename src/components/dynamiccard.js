import '../css/dynamiccard.css'
import React, {useRef} from 'react'
import phone from '../images/phone.png'
import Inputnew from './inputnew';



function Dynamiccard() {
    const [numbers, setNumbers] = React.useState(['557398911', '577783120']); 
    const [newNumber, setNewNumber] = React.useState('');
    const [emails, setEmails] = React.useState(['giochutlashvili@gmail.com']); 
    const [newEmail, setNewEmail] = React.useState('');

    const inputEmail = useRef(null);
    const inputNumber = useRef(null);

    function handleChangeNumber(event) {
        setNewNumber(event.target.value)
    }

    function handleAddNumber() {
        if(newNumber.trim() !== '') {
            setNumbers([...numbers, newNumber])
            setNewNumber('')
            inputNumber.current.value ="";
        }
    }

    function handleChangeEmail(event) {
        setNewEmail(event.target.value)
    }

    function handleAddEmail() {
        if(newEmail.trim() !== '') {
            setEmails([...emails, newEmail])
            setNewEmail('')
            inputEmail.current.value="";
        }
    }


    var linumbers = numbers.map(number => <div className='phoneedi'><img src={phone}></img> <li>{number}</li></div>)
    var liemails = emails.map(email => <div className='phoneedi'><li>{email}</li></div>)
    return(
        <div className='dynamiccard'>
            <div className='phones'>
                <h2 className='phone_header'>
                    Mobile Phones
                </h2>

                <ul className='phoneul'>   
                    {linumbers}
                </ul>

                <div className='inputnew' style={{height: "10%"}}>
                    <input type = "text" onChange={handleChangeNumber} ref={inputNumber}></input>
                    <button type = "button" onClick={handleAddNumber}>Add</button>
                </div>
            </div>
            <div className='emails'>
                <h2 className='email_header'>
                    Emails
                </h2>

                <ul className='phoneul'>   
                    {liemails}
                </ul>

                <div className='inputnew' style={{height: "12%"}}>
                    <input type = "text" onChange={handleChangeEmail} ref={inputEmail}style ={{width:"40%"}}></input>
                    <button type = "button" onClick={handleAddEmail}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Dynamiccard;