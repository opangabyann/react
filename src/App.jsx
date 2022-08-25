import React from "react";
import Input from "./komponen/input";
import Textarea from "./komponen/textarea";
import Card from "./komponen/card";
import Button from "./komponen/button";

export default function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });
  const [catatan, setCatatan] = React.useState([]);
  const [error, setError] = React.useState({});
  const [formerror, setFormError] = React.useState("");

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setError(() => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    } else {
      setError(() => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormError("");
    console.log("bisa kok");
    setValues(() => {
      return {
        ...values,
        [e.target.name]: e.target.value,
        createdAt: new Date(),
      };
    });

    handleBlur(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "" || values.body === "") {
      setFormError("masih kosong");

      if (values.title === "") {
        setError((error) => {
          return {
            ...error,
            title: true,
          };
        });
      }
      if (values.body === "") {
        setError((error) => {
          return {
            ...error,
            body: true,
          };
        });
      }
      return;
    }

    setCatatan((catatan) => {
      return [...catatan, values];
    });

    setValues((values) => {
      return {
        id: "",
        title: "",
        body: "",
        archived: false,
        createdAt: "",
      };
    });

    handleBlur(e);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const hasilFilter = catatan.filter((items) => {
      return items.id !== parseInt(e.target.value);
    });

    setCatatan(() => {
      return hasilFilter;
    });

    console.log("hasil filter", hasilFilter);
  };
  // console.log("catatan nya adalah",catatan)
  // console.log("errror", error);
  return (
    <div className="w-screen min-h-screen text-grey-500 p-5 space-y-5">
      <div className="grid grid-cols-5 border-b-2 py-2">
        <h1 className="text-2xl">Notes</h1>
        <div className="col-start-5">
          <Input placeholder="Cari Catatan ..." />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex items-center justify-center"></div>
        <div className="col-span-1 flex items-center justify-start">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <p className="text-red-600 text-lg">{formerror}</p>
            <h1 className="text-xl">Buat catatan</h1>
            <Input
              name={"title"}
              id="title"
              value={values.title}
              title={"judul"}
              placeholder={"judul"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={error.title}
            />
            <Textarea
              name={"body"}
              id="body"
              value={values.body}
              title={"body"}
              placeholder={"catatan"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={error.body}
            />
            <Button title={"simpen"} />
          </form>
        </div>

        <div className="col-span-1 oferflow-auto w-full px-5 py-3 border h-96">
          <h1 className="text-xl font-bold">Daftar catatan</h1>
          <div className="grid grid-cols-3 gap-5">
            {catatan.length === 0
              ? "wenomacheinsama"
              : catatan.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Card
                        title={item.title}
                        body={item.body}
                        handleDelete={handleDelete}
                      />
                    </React.Fragment>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
