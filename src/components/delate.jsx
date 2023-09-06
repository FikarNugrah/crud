import axios from "axios";
import React, { useEffect } from "react";

export default function Delete({ id }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`
      );
      console.log("User deleted:", response.data);
      if (response.data) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return <button onClick={handleDelete}>del</button>;
}
