import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    kota: "",
    telpon: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nama && form.kota && form.telpon && form.gender) {
      setData((prev) => [...prev, form]);
      setForm({ nama: "", kota: "", telpon: "", gender: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">Form Input Data</h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="border rounded px-3 py-2 w-full"
              required
            />
            <input
              type="text"
              name="kota"
              value={form.kota}
              onChange={handleChange}
              placeholder="Kota Tinggal"
              className="border rounded px-3 py-2 w-full"
              required
            />
            <input
              type="text"
              name="telpon"
              value={form.telpon}
              onChange={handleChange}
              placeholder="No Telepon"
              className="border rounded px-3 py-2 w-full"
              required
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambah Data
          </button>
        </form>

        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Nama Lengkap</th>
              <th className="border px-4 py-2">Kota Tinggal</th>
              <th className="border px-4 py-2">No Telepon</th>
              <th className="border px-4 py-2">Jenis Kelamin</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{row.nama}</td>
                <td className="border px-4 py-2">{row.kota}</td>
                <td className="border px-4 py-2">{row.telpon}</td>
                <td className="border px-4 py-2">{row.gender}</td>
              </tr>
            ))}
            {data.length < 5 &&
              [...Array(5 - data.length)].map((_, i) => (
                <tr key={`empty-${i}`} className="text-gray-400">
                  <td className="border px-4 py-2">{data.length + i + 1}</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
