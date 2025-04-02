const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const machineDataSets = {
    data1: [
  {
    Id_pk	:	1,
OrderNumber	:	"ACE1",
SemiBatch	:	2440006,
Material	:	"SESHE06",
Tagname	:	"LD2FST01",
Act_Inv	:	0,
Act_Weight	:	10365.056640625,
DateTime	:	"Jul 10 2024 11:02:29:000AM",
Speed : 42,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"

  },
  {
    Id_pk	:	2,
    OrderNumber	:	"ACE2",
    SemiBatch	:	2440078,
    Material	:	"SESDM21",
    Tagname	:	"LD2FST02",
    Act_Inv	:	0,
    Act_Weight	:	4477.3969726562,
    DateTime	:	"Jul 10 2024 11:02:29:000AM",
    Speed : 17,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
    
  },
  {
    Id_pk	:	3,
OrderNumber	:	"ACE3",
SemiBatch	:	2440061,
Material	:	"SESDG28",
Tagname	:	"LD2FST03",
Act_Inv	:	0,
Act_Weight	:	19403.16796875,
DateTime	:	"Jul 10 2024 11:02:29:000AM",
Speed : 89,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"

  }
],


data2: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	10366.4765625,
  DateTime	:	"Jul 10 2024 01:09:31:000PM",
  Speed : 5,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:	471.34725952148,
      DateTime	:	"Jul 10 2024 01:09:31:000PM",
      Speed : 73,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	13340.837890625,
  DateTime	:	"Jul 10 2024 01:09:31:000PM",
  Speed : 31,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ],

  data3: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	10365.766601562,
  DateTime	:	"Jul 10 2024 03:04:32:000PM",
  Speed : 96,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
  
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:	376.91082763672,
      DateTime	:	"Jul 10 2024 03:04:32:000PM",
      Speed : 12,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
      
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	10065.418945312,
  DateTime	:	"Jul 10 2024 03:04:32:000PM",
  Speed : 58,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ],

  data4: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	10365.766601562,
  DateTime	:	"Jul 10 2024 03:49:33:000PM",
  Speed : 24,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
  
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:	379.04138183594,
      DateTime	:	"Jul 10 2024 03:49:33:000PM",
      Speed : 67,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
      
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	7225.255859375,
  DateTime	:	"Jul 10 2024 03:49:33:000PM",
  Speed : 3,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ],

  data5: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	11914.821601562,
  DateTime	:	"Jul 10 2024 04:23:33:000PM",
  Speed : 80,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
  
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:	611.04238183594,
      DateTime	:	"Jul 10 2024 04:23:33:000PM",
      Speed : 45,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
      
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	6425.255859375,
  DateTime	:	"Jul 10 2024 04:23:33:000PM",
  Speed : 91,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ],

 data6: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	7336.0224609375,
  DateTime	:	"Jul 11 2024 09:17:44:000AM",
  Speed : 36,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
  
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:	58.102722167969,
      DateTime	:	"Jul 11 2024 09:17:44:000AM",
      Speed : 54,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
      
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	222.83312988281,
  DateTime	:	"Jul 11 2024 09:17:44:000AM",
  Speed : 22,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ],

  data7: [
    {
      Id_pk	:	1,
  OrderNumber	:	"ACE1",
  SemiBatch	:	2440006,
  Material	:	"SESHE06",
  Tagname	:	"LD2FST01",
  Act_Inv	:	0,
  Act_Weight	:	-39.882751464844,
  DateTime	:	"Jul 12 2024 08:48:00:000AM",
  Speed : 77,
  Image : "https://i.postimg.cc/xTJpvW8Y/3d-printer-svgrepo-com.png"
  
    },
    {
      Id_pk	:	2,
      OrderNumber	:	"ACE2",
      SemiBatch	:	2440078,
      Material	:	"SESDM21",
      Tagname	:	"LD2FST02",
      Act_Inv	:	0,
      Act_Weight	:		67.334136962891,
      DateTime	:	"Jul 12 2024 08:48:00:000AM",
      Speed : 9,
      Image : "https://i.postimg.cc/MGbFcVTQ/conveyor-svgrepo-com.png"
      
    },
    {
      Id_pk	:	3,
  OrderNumber	:	"ACE3",
  SemiBatch	:	2440061,
  Material	:	"SESDG28",
  Tagname	:	"LD2FST03",
  Act_Inv	:	0,
  Act_Weight	:	239.87329101562,
  DateTime	:	"Jul 12 2024 08:48:00:000AM",
  Speed : 63,
  Image : "https://i.postimg.cc/85pnLcJn/conveyor-svgrepo-com_(1).png"
  
    },
  ]
};


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
  
  // API to get machine data
  app.get("/api/machines", (req, res) => {
    const dataset = req.query.dataset || "data1";
  
    if (!machineDataSets[dataset]) {
      return res.status(400).json({ error: "Invalid dataset requested" });
    }
  
    res.json(machineDataSets[dataset]);
  });
  
  // Start server
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });