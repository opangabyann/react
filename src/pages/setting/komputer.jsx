import { Link, Outlet } from "react-router-dom";

export default function Komputer (){
    return (
        <div>
            <div>
                ini adalah komputer
            </div>
            <div className="space-x-5">
                <Link to={"/setting/komputer/lenovo"}>Lenovo</Link>
                <Link to={"/setting/komputer/apple"}>Apple</Link>
                <Link to={"/setting/komputer/asus"}>Asus</Link>
            </div>
            <div><Outlet/></div>
        </div>
    )
}