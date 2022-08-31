import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="">
      <div className="space-x-5">
      <Link to="/about/1/opang">satu</Link>
      <Link to="/about/2/abyan">dua</Link>
      <Link to="/about/3/rivaldi">tiga</Link>
      </div>
      ini adalah page About
    </div>
  );
}
