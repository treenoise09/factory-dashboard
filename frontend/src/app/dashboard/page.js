"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../api/axios";
import { Card, CardContent, MenuItem, Select, FormControl } from "@mui/material";
import dynamic from "next/dynamic";

const GaugeComponent = dynamic(() => import("react-gauge-component"), { ssr: false });

const FactoryDashboard = () => {
  const router = useRouter();
  const [machineData, setMachineData] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState("data1");

  useEffect(() => {
    api.get(`/machines?dataset=${selectedDataset}`)
      .then((response) => setMachineData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedDataset]);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/dashboard")}>Dashboard</h1>
        <h1 className="text-2xl font-bold cursor-pointer underline" onClick={() => router.push("/storage")}>Storage</h1>
        <FormControl className="w-full md:w-auto">
          <Select
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            className="w-full bg-white"
          >
            <MenuItem value="data1">Dataset 1</MenuItem>
            <MenuItem value="data2">Dataset 2</MenuItem>
            <MenuItem value="data3">Dataset 3</MenuItem>
            <MenuItem value="data4">Dataset 4</MenuItem>
            <MenuItem value="data5">Dataset 5</MenuItem>
            <MenuItem value="data6">Dataset 6</MenuItem>
            <MenuItem value="data7">Dataset 7</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {machineData.map((machine) => (
          <Card key={machine.Id_pk} className="col-span-1">
            <CardContent>
              <img
                src={machine.Image}
                alt={machine.Tagname}
                className="w-full h-auto max-w-xs mx-auto mb-4"
                crossOrigin="anonymous"
              />
              <h2 className="text-xl font-bold mb-2 text-center">{machine.Tagname}</h2>
              <GaugeComponent
                value={(machine.Speed / 100) * 100}
                type="semicircle"
                labels={{ valueLabel: "{{value}}%" }}
                className="mb-4"
              />
              <div className="text-sm text-center">
                <p><strong>Material:</strong> {machine.Material}</p>
                <p><strong>Weight:</strong> {machine.Act_Weight.toFixed(2)} kg</p>
                <p><strong>Speed:</strong> {machine.Speed} RPM</p>
                <p><strong>Date:</strong> {machine.DateTime}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FactoryDashboard;