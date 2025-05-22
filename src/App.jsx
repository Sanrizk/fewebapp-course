import React from "react";
import './App.css';

const DataTable = () => {
  const data = [
    { no: 1, nama: "Andi Wijaya", kota: "Jakarta", telpon: "081234567890", gender: "Laki-laki" },
    { no: 2, nama: "Siti Nurhaliza", kota: "Bandung", telpon: "081234567891", gender: "Perempuan" },
    { no: 3, nama: "Budi Santoso", kota: "Surabaya", telpon: "081234567892", gender: "Laki-laki" },
    { no: 4, nama: "Dewi Lestari", kota: "Yogyakarta", telpon: "081234567893", gender: "Perempuan" },
    { no: 5, nama: "Rudi Hartono", kota: "Medan", telpon: "081234567894", gender: "Laki-laki" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 text-stone-700">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Data Penduduk</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Nama Lengkap</th>
                <th className="px-4 py-2 border">Kota Tinggal</th>
                <th className="px-4 py-2 border">No Telpon</th>
                <th className="px-4 py-2 border">Jenis Kelamin</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{item.no}</td>
                  <td className="px-4 py-2 border">{item.nama}</td>
                  <td className="px-4 py-2 border">{item.kota}</td>
                  <td className="px-4 py-2 border">{item.telpon}</td>
                  <td className="px-4 py-2 border">{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
