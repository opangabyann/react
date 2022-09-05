import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <div>Login page</div>
      <div>
        <button
          style={{
            backgroundColor: "green",
            borderRadius: 20,
            width: 70,
            color: "white",
            marginTop: 10,
          }}
          onClick={() => {
            return Navigate("/register");
          }}
        >
          register
        </button>

        <button
          style={{
            backgroundColor: "green",
            borderRadius: 20,
            width: 50,
            // paddingLeft: 10,
            color: "white",
            marginTop: 20,
          }}
          onClick={() => {
            return Navigate("/admin/dashboard");
          }}
        >Login</button>
      </div>
    </div>
  );
}
