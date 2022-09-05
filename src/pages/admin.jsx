import { NavLink, Outlet , useNavigate} from "react-router-dom";
export default function Admin() {
    const navigate = useNavigate()
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{ display: "flex", flexDirection: "column", marginRight: 40 }}
      >
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          to={"/admin/dashboard"}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          to={"/admin/user"}
        >
          User
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          to={"/admin/kelas"}
        >
          Kelas
        </NavLink>

        <button 
        style={{
            backgroundColor: "red",
            borderRadius: 20,
            width: 70,
            // paddingLeft:5,
            color: "white",
            marginTop: 7,
          }}
        onClick={()=>{
            return navigate ("/login")
        }}>
            Log out
        </button>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
