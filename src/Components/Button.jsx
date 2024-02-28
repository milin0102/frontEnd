export default function Button({text,onClick}){
 return <div className="py-2">
    <button onClick= {onClick} className="w-full bg-black text-white py-2 rounded font-large">{text}</button>
 </div>
}

