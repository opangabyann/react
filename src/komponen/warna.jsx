export default function Warna({ warna, setwarna }) {
  return (
    <div>
      <div style={{ backgroundColor: warna, width: 300, height: 300 }}>
        <p>{warna}</p>
      </div>
      <button
        onClick={() => {
          setwarna("red");
        }}
      >
        merah
      </button>

      <button
        onClick={() => {
          setwarna("blue");
        }}
      >
        biru
      </button>

      <button onClick={()=>{
        setwarna("green")
      }}>
        hijau
      </button>
    </div>
  );
}
