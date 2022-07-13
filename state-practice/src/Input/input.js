import {useState} from 'react'

export default function Input (){
const [text, setText] = useState(" ")
return (
    <div>
    <input type="text" value= {text} onChange={(e) => setText(e.target.value)} />
    {/* the onChange watches for any events happening and that targets the value and stores setText  */}
    <button>click here</button>
    </div>
)
}