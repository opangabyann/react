import { Outlet,Link } from "react-router-dom"
export default function Setting(){
    return(
        <div className="grid grid-cols-5">
            <section className="space-y-5 col-span-1 flex flex-col">
                <Link to={'/setting/phone'}>phone</Link>
                <Link to={'/setting/komputer'}>komputer</Link>
                <Link to={'/setting/profile'}>porfile</Link>
            </section>

            <section className="col-span-7 border">
                <Outlet />
            </section>
        </div>
    )
}