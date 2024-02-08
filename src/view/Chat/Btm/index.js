import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Bottom({onSendMessage}){
    const [message , setMessage] = useState('')
    
    function send(){
       onSendMessage(message)
       setMessage('')
    }

return <div className='btm'>

    <input value={message} onChange={(e) => setMessage(e.target.value)} style={{textAlign:'center',width:'90%',height:60}} type='text' placeholder='Enter Your Messege'/>
    <div  onClick={send} style={{background:'black' , width :'10%' }}>
    <FontAwesomeIcon style={{
        
    marginLeft: '13px',
    color: 'white'

}} icon={faPaperPlane}/>
    </div>
    </div>
}
export default Bottom;