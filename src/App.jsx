import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import FormPost from "./components/formPost";
import Delate from "./components/delate";
import FormPut from "./components/formPut";

function App() {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState("post");

  useEffect(() => {
    const get = async () => {
      try {
        const getdata = await axios.get(
          "https://61601920faa03600179fb8d2.mockapi.io/pegawai"
        );
        setData(getdata.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    get();
  }, []);

  const handleEditClick = (id) => {
    setEditingId(id);
    setForm("put");
  };

  const handleCloseEditForm = () => {
    setEditingId(null);
    setForm("post");
  };

  return (
    <>
      <div className="table-area">
        <table border="1">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Provinsi</th>
              <th>Kabupaten</th>
              <th>Kecamatan</th>
              <th>Kelurahan</th>
              <th>Jalan</th>
              <th>Fitur</th>
            </tr>
          </thead>
          <tbody>
            {data === null ? (
              <tr>
                <td colSpan="8">Loading...</td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan="8">Data kosong</td>
              </tr>
            ) : (
              data.map((list) => (
                <tr key={list.id}>
                  <td className="no">{list.id}</td>
                  <td>{list.nama}</td>
                  <td>{list.provinsi}</td>
                  <td>{list.kabupaten}</td>
                  <td>{list.kecamatan}</td>
                  <td>{list.kelurahan}</td>
                  <td>{list.jalan}</td>
                  <td className="fitur">
                    <Delate id={list.id} />
                    <button onClick={() => handleEditClick(list.id)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {form === "post" ? (
        <FormPost />
      ) : (
        <FormPut id={editingId} onClose={handleCloseEditForm} />
      )}
    </>
  );
}

export default App;
