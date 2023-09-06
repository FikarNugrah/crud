import React, { useState } from "react";
import axios from "axios";

export default function FormPost() {
  const [newData, setNewData] = useState({
    nama: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form untuk melakukan reload halaman
    axios
      .post("https://61601920faa03600179fb8d2.mockapi.io/pegawai", newData)
      .then((response) => {
        console.log("User created:", response.data);
        if (response.data) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-area">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h4>POST</h4>
          <label htmlFor="nama">
            <p>nama:</p>
            <input
              type="text"
              name="nama"
              id="nama"
              value={newData.nama}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="provinsi">
            <p>provinsi:</p>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              value={newData.provinsi}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kabupaten">
            <p>kabupaten:</p>
            <input
              type="text"
              name="kabupaten"
              id="kabupaten"
              value={newData.kabupaten}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kecamatan">
            <p>kecamatan:</p>
            <input
              type="text"
              name="kecamatan"
              id="kecamatan"
              value={newData.kecamatan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kelurahan">
            <p>kelurahan:</p>
            <input
              type="text"
              name="kelurahan"
              id="kelurahan"
              value={newData.kelurahan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="jalan">
            <p>jalan:</p>
            <input
              type="text"
              name="jalan"
              id="jalan"
              value={newData.jalan}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
