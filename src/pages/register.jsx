import { useNavigate } from "react-router-dom";
export default function Register() {
  const Navigate = useNavigate();
  return (
    <div>
      <div>Register page</div>
      <div
        style={{
          backgroundColor: "green",
          borderRadius: 20,
          width: 135,
          paddingLeft: 10,
          color: "white",
          marginTop: 20,
        }}
      >
        <button
        
          onClick={() => {
            return Navigate("/login");
          }}
        >
          kembali ke login
        </button>
      </div>
    </div>
  );
}
