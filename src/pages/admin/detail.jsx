
import React from 'react'
import {  useParams, useNavigate } from 'react-router-dom'

const UserDetail = () => {
    let {id, kelas} = useParams()
    
    let navigate = useNavigate()

    const handleBackUserPage = () => {
        return navigate("/admin/user", { replace: true });
      };

  return (
    <section>
      <div>
        <h1>User Detail</h1>
      </div>
      <div>
        <p>Nama: {id}</p>
        <p>Kelas: {kelas}</p>
      </div>
      <div>
      <button
            onClick={handleBackUserPage}
            style={{
                backgroundColor: "green",
                borderRadius: 20,
                width: 170,
                // paddingLeft: 10,
                color: "white",
                marginTop: 20,
              }}
          >Kembali ke Page User</button>
      </div>
    </section>
  )
}

export default UserDetail   