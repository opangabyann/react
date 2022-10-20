import React from "react";

import Button from "../../komponen/button";
import Input from "../../komponen/input";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { createArtikel, getDetailartikel, updateartikel } from "../../Api/artikel";

export default function Editartikel() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [artikel, setArtikel] = React.useState({
    id: " ",
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });

  const handleChange = (e) => {
    setArtikel((artikel) => {
      return {
        ...artikel,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(artikel);
    console.log("jalan");
    try {
      setLoading(true);
      const response = await updateartikel(artikel)
      let data = response?.data
      if (data === 'Fail'){
        return alert(data?.message)
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "udah disimpen ke backend",
        showConfirmButton: false,
        timer: 1500,
      });
      return navigate("/artikel");
    } catch (err) {
      alert("aduh gagal maseh");
    } finally {
      setLoading(false);
    }
  };

  const getDetailArtikel = async () => {
    try {
      const response = await getDetailartikel(slug);
      // console.log(response)
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setArtikel(() => {
        return {
            id : dataArtikel?.id,
          judul: dataArtikel?.judul,
          thumbnail: dataArtikel?.thumbnail,
          artikel: dataArtikel?.artikel,
          imagePreview: dataArtikel?.thumbnail,
        };
      });
    } catch (err) {}
  };
  React.useEffect(() => {
    getDetailArtikel();
  }, []);
  return (
    <React.Fragment>
      <div className="">
        <h1>Edit Artikel</h1>
        <p>artikel dengan slug : {slug}</p>
        <form className="" onSubmit={handleSubmit}>
          <Input
            name={"judul"}
            value={artikel.judul}
            placeholder="judul"
            label={"judul"}
            onChange={handleChange}
          />
          <Input
            name={"thumbnail"}
            value={artikel?.file}
            placeholder="thumbnail"
            label={"thumbnail"}
            type={"file"}
            onChange={(e) => {
              console.log(e.target.files[0]);
              let file = e.target.files[0];

              if (file.size > 2000000) {
                return alert("too big file");
              }
              if (file.type === "image/jpeg" || file.type === "image/png") {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  console.log(reader);
                  setArtikel((artikel) => {
                    return {
                      ...artikel,
                      imagePreview: reader.result,
                      thumbnail: file,
                    };
                  });
                };
              } else {
                return Swal.fire({
                  icon: "warning",
                  title: "must image",
                });
              }
            }}
          />
          <img
            className="w-24 h-24"
            src={artikel.imagePreview}
            alt={artikel.imagePreview}
          />
          <Input
            name={"artikel"}
            value={artikel.artikel}
            placeholder="artikel"
            label={"artikel"}
            onChange={handleChange}
          />

          <Button
            title={loading ? "sedang memperbarui" : "perbarui"}
            color={"white"}
          />

          <Button
            title={"back"}
            color={"white"}
            onClick={() => {
              return navigate("/artikel");
            }}
          />
        </form>
      </div>
    </React.Fragment>
  );
}
