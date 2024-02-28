export default function InputBox({placeholder , label , onChange}){
return <div>
    <div className="text-sm font-normal text-left text-black-500 py-2">
        {label}
    </div>
    <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200">
    </input>
</div>
}