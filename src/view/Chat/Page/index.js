import './style.css'


function Page({chat}) {
    return <div >
        <h1>name</h1>
        <div className="Chat-Container">
        {chat.map((item, index) => (<div className='text-me'>
                   
                        <p key={index} className="chat-box">
                            <span>{item}</span>
                        </p>
                </div>
                    ))}
            <div className='text'>
                <p className="chat-box">
                    <strong>name</strong>
                    <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
                    <span>chat Messege</span>
                </p>
            </div>
        </div>
    </div>

}

export default Page;