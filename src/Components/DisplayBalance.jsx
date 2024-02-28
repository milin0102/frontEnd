export default function DisplayBalance({balance}){
    return <div className="flex">
        <div className="flex font-bold text-lg">Your Balance</div>
        <div className="font-semibold text-lg ml-2">Rs.{balance}</div>
    </div>
}