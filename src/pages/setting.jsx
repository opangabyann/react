import { Outlet,Link,useNavigate , useLocation} from "react-router-dom"
export default function Setting(){
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname.split("/")[1]
    console.log(location.pathname)
    console.log(location.pathname.split("/"))
    console.log('path name =>', path)
    return(
        <div className="grid grid-cols-8">
            <section className="space-y-5 col-span-1 flex flex-col">
                <Link to={`/${path}/phone`}>phone</Link>
                <Link to={`/${path}/komputer`}>komputer</Link>
                <Link to={'/setting/profile'}>porfile</Link>
            </section>

            <section className="col-span-7 border">
                <Outlet />
            </section>

            <button onClick={()=>{
                return  navigate(-1)
            }}>back</button>
        </div>
    )
}