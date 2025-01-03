import '../css/info.css'

import Staticcard from './staticcard'
import Dynamiccard from './dynamiccard'

function myinfo() {
    return(
        <div className='info_body'>
            <div className='static'>

                <div className='statisCards'>
                    <Staticcard header = "Name" text = "John" width = "40%" margin = "0%" small = "true"/>
                    <Staticcard header = "Surname" text = "Dover" width = "40%" margin = "10%" small = "true"/>
                    {/* <div className='break'></div> */}
                    <Staticcard header = "Address" text = "Azeroth, Plaguelands" width = "91%" margin = "0%" small = "false"/>
                    <Staticcard header = "ID" text = "010100101010" width = "91%" margin = "0%" small = "false"/>
                </div>
            </div>
            
            <div className='dynamic'>
                <Dynamiccard />
            </div>
        </div>
    );
}

export default myinfo;