import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormPut({ id, onClose }) {
  const [updatedData, setUpdatedData] = useState({
    nama: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`
        );
        const data = response.data;
        setUpdatedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`,
        updatedData
      );
      console.log("Data updated:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="form-area">
      <div className="form">
        <div className="input-area">
          <h4>UPDATE</h4>
          <label htmlFor="nama">
            <p>nama:</p>
            <input
              type="text"
              name="nama"
              id="nama"
              value={updatedData.nama === "" ? "Dimuat..." : updatedData.nama}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="provinsi">
            <p>provinsi:</p>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              value={
                updatedData.provinsi === "" ? "Dimuat..." : updatedData.provinsi
              }
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kabupaten">
            <p>kabupaten:</p>
            <input
              type="text"
              name="kabupaten"
              id="kabupaten"
              value={
                updatedData.kabupaten === ""
                  ? "Dimuat..."
                  : updatedData.kabupaten
              }
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kecamatan">
            <p>kecamatan:</p>
            <input
              type="text"
              name="kecamatan"
              id="kecamatan"
              value={
                updatedData.kecamatan === ""
                  ? "Dimuat..."
                  : updatedData.kecamatan
              }
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kelurahan">
            <p>kelurahan:</p>
            <input
              type="text"
              name="kelurahan"
              id="kelurahan"
              value={
                updatedData.kelurahan === ""
                  ? "Dimuat..."
                  : updatedData.kelurahan
              }
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="jalan">
            <p>jalan:</p>
            <input
              type="text"
              name="jalan"
              id="jalan"
              value={updatedData.jalan === "" ? "Dimuat..." : updatedData.jalan}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancelClick}>Batal</button>
        </div>
      </div>
    </div>
  );
}
