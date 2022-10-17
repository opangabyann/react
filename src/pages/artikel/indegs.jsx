import React from "react";
import { getAllArtikel } from "../../Api/auth";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Artikel() {
  const [artikel, setArtikel] = React.useState([]);
  const navigate = useNavigate();
  const [isFetchUser, setIsFetchUser] = React.useState(false);
  const getArtikelhandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await getAllArtikel();
    //   console.log(response.data);
      setArtikel(response.data.data.data);
      setIsFetchUser(false);
    } catch (e) {
    //   console.log(e);
    }
  };
//   console.log("list artikel =>", artikel);
  React.useEffect(() => {
    getArtikelhandle();
  }, []);
  return (
    <div>
      <Button
        text="black"
        color="white"
        title={"buat artikel"}
        onClick={() => {
          navigate("/artikel/create");
        }}
      />
      <table className="table-auto w-">
        <thead>
          <tr>
            <th>no</th>
            <th>judul</th>
            <th>thumbnail</th>

            <th>penulis</th>
            <th>dibuat</th>
            <th>diupdate</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchUser ? (
            <tr>
              <td colSpan={9}>
                <Skeleton
                  count={9}
                  baseColor="grey"
                  highlightColor="white"
                  borderRadius={50}
                />
              </td>
            </tr>
          ) : (
            artikel.map((artikel, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>

                  <td>
                    <img
                      src={artikel?.thumbnail}
                      alt=""
                      className="w-10 h-10"
                    />
                  </td>

                  {/* <td className="indent-8 truncate break-all">{artikel?.artikel}</td> */}
                  <td>{artikel.user?.name}</td>
                  <td>{artikel?.created_at}</td>
                  <td>{artikel?.updated_at}</td>
                  <td>
                    <Button
                      title={"edit"}
                      text="white"
                      color="blue"
                      onClick={() => {
                        return navigate("/");
                      }}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
