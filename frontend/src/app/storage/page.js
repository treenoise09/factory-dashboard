"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../api/axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FactoryDashboard() {
    const router = useRouter();
    const [machineData, setMachineData] = useState([]);
    const [dataset, setDataset] = useState("data1");

    useEffect(() => {
        fetchData(dataset);
    }, [dataset]);

    const fetchData = async (selectedDataset) => {
        try {
            const response = await api.get(`/machines?dataset=${selectedDataset}`);
            setMachineData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/storage")}>Storage</h1>
                <h1 className="text-2xl font-bold cursor-pointer underline" onClick={() => router.push("/dashboard")}>Dashboard</h1>
            </div>
            <h1 className="text-xl font-bold mb-4">Factory Machine Data</h1>

            <select
                className="mb-4 p-2 border rounded bg-white w-full md:w-auto text-gray-400"
                onChange={(e) => setDataset(e.target.value)}
                value={dataset}
            >
                <option value="data1">Dataset 1</option>
                <option value="data2">Dataset 2</option>
                <option value="data3">Dataset 3</option>
                <option value="data4">Dataset 4</option>
                <option value="data5">Dataset 5</option>
                <option value="data6">Dataset 6</option>
                <option value="data7">Dataset 7</option>
            </select>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-400">Storage Area Levels</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={machineData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                        <XAxis dataKey="Tagname" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Act_Weight" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border text-xs md:text-sm lg:text-base">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="border px-1 md:px-3 lg:px-4 py-2">ID</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">Order Number</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">SemiBatch</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">Material</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">Tagname</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">Act Weight</th>
                            <th className="border px-1 md:px-3 lg:px-4 py-2">DateTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {machineData.map((machine) => (
                            <tr key={machine.Id_pk} className="text-center">
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.Id_pk}</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.OrderNumber}</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.SemiBatch}</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.Material}</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.Tagname}</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.Act_Weight.toFixed(2)} kg</td>
                                <td className="border px-1 md:px-3 lg:px-4 py-2">{machine.DateTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
