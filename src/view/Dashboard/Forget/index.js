import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { ForgetPassword } from "../../../config/firebase";






function Forget() {
    const navigate = useNavigate()

    async function forgetPassword() {
        try {

            const inp = document.getElementsByClassName('inp')
            console.log(inp[0].value);

            await ForgetPassword(inp)
            navigate('/login')


        } catch (e) {

        }

    }


    return (
        <div>
            <div className='Body'>
                <div className="Con">
                    <span>
                        <h3>Login</h3>
                    </span>
                    <span>
                        <p>Email:</p>
                        <input className='inp' type="email" placeholder="Enter your email" />
                    </span>

                    <br />
                    <span>
                        <button style={{width: 131}} onClick={forgetPassword} >Forget Password</button>
                    </span>
                    <span>
                        <p className="href">Don't have an account. <a onClick={() => navigate('/signup')}>Click here!</a></p>
                    </span>
                    <span>
                    </span>
                </div>
            </div>
        </div>
    );
}



export default Forget;