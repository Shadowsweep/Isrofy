"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Timeline from "@/app/components/timeline"
import SatelliteViewer from "@/app/components/satellite-viewer"
import Statistics from "@/app/components/statistics"
import MissionTable from "@/app/components/mission-table"
import { Input } from "@/components/ui/input"
import IsroCenters from "./components/IsroCentres"

const missions = [
  { name: "Rohini Technology Payload", launchDate: "1979-10-08", status: "Unsuccessful" },
  { name: "RS-1", launchDate: "1980-07-18", status: "Successful" },
  { name: "RS-D1", launchDate: "1981-05-31", status: "Successful" },
  { name: "RS-D2", launchDate: "1983-04-17", status: "Successful" },
  { name: "SROSS-1", launchDate: "1987-03-24", status: "Unsuccessful" },
  { name: "SROSS-2", launchDate: "1988-07-13", status: "Unsuccessful" },
  { name: "SROSS-C", launchDate: "1992-05-20", status: "Successful" },
  { name: "IRS-P2", launchDate: "1994-10-15", status: "Successful" },
  { name: "IRS-P3", launchDate: "1996-03-21", status: "Successful" },
  { name: "IRS-1D", launchDate: "1997-09-29", status: "Successful" },
  { name: "Oceansat (IRS-P4)", launchDate: "1999-05-26", status: "Successful" },
  { name: "GSAT-1", launchDate: "2001-04-18", status: "Unsuccessful" },
  { name: "TES", launchDate: "2001-10-22", status: "Successful" },
  { name: "Kalpana-1", launchDate: "2002-09-12", status: "Successful" },
  { name: "GSAT-2", launchDate: "2003-05-08", status: "Successful" },
  { name: "IRS-P6 / RESOURCESAT-1", launchDate: "2003-10-17", status: "Successful" },
  { name: "EDUSAT (GSAT-3)", launchDate: "2004-09-20", status: "Successful" },
  { name: "CARTOSAT-1", launchDate: "2005-05-05", status: "Successful" },
  { name: "INSAT-4C", launchDate: "2006-07-10", status: "Unsuccessful" },
  { name: "CARTOSAT-2", launchDate: "2007-01-10", status: "Successful" },
  { name: "AGILE", launchDate: "2007-04-23", status: "Successful" },
  { name: "INSAT-4CR", launchDate: "2007-09-02", status: "Successful" },
  { name: "TECSAR", launchDate: "2008-01-21", status: "Successful" },
  { name: "CARTOSAT – 2A", launchDate: "2008-04-28", status: "Successful" },
  { name: "IMS-1", launchDate: "2008-04-28", status: "Successful" },
  { name: "Chandrayaan-1", launchDate: "2008-10-22", status: "Successful" },
  { name: "RISAT-2", launchDate: "2009-04-20", status: "Successful" },
  { name: "Oceansat-2", launchDate: "2009-09-23", status: "Successful" },
  { name: "GSAT-4", launchDate: "2010-04-15", status: "Unsuccessful" },
  { name: "CARTOSAT-2B", launchDate: "2010-07-12", status: "Successful" },
  { name: "GSAT-5P", launchDate: "2010-12-25", status: "Unsuccessful" },
  { name: "RESOURCESAT-2", launchDate: "2011-04-20", status: "Successful" },
  { name: "YOUTHSAT", launchDate: "2011-04-20", status: "Successful" },
  { name: "GSAT-12", launchDate: "2011-07-15", status: "Successful" },
  { name: "Megha-Tropiques", launchDate: "2011-10-12", status: "Successful" },
  { name: "RISAT-1", launchDate: "2012-04-26", status: "Successful" },
  { name: "SPOT-6", launchDate: "2012-09-09", status: "Successful" },
  { name: "SARAL", launchDate: "2013-02-25", status: "Successful" },
  { name: "IRNSS-1A", launchDate: "2013-07-01", status: "Successful" },
  { name: "Mars Orbiter Mission", launchDate: "2013-11-05", status: "Successful" },
  { name: "GSAT-14", launchDate: "2014-01-05", status: "Successful" },
  { name: "IRNSS-1B", launchDate: "2014-04-04", status: "Successful" },
  { name: "SPOT-7", launchDate: "2014-06-30", status: "Successful" },
  { name: "IRNSS-1C", launchDate: "2014-10-16", status: "Successful" },
  { name: "Crew module Atmospheric Re-entry Experiment (CARE)", launchDate: "2014-12-18", status: "Successful" },
  { name: "IRNSS-1D", launchDate: "2015-03-28", status: "Successful" },
  { name: "DMC3", launchDate: "2015-07-10", status: "Successful" },
  { name: "GSAT-6", launchDate: "2015-08-27", status: "Successful" },
  { name: "Astrosat", launchDate: "2015-09-28", status: "Successful" },
  { name: "TeLEOS", launchDate: "2015-12-16", status: "Successful" },
  { name: "IRNSS-1E", launchDate: "2016-01-20", status: "Successful" },
  { name: "IRNSS-1F", launchDate: "2016-03-10", status: "Successful" },
  { name: "IRNSS-1G", launchDate: "2016-04-28", status: "Successful" },
  { name: "CARTOSAT-2 Series Satellite", launchDate: "2016-06-22", status: "Successful" },
  { name: "Scramjet Engine - TD", launchDate: "2016-08-28", status: "Successful" },
  { name: "INSAT-3DR", launchDate: "2016-09-08", status: "Successful" },
  { name: "SCATSAT-1", launchDate: "2016-09-26", status: "Successful" },
  { name: "RESOURCESAT-2A", launchDate: "2016-12-07", status: "Successful" },
  { name: "CARTOSAT -2 Series Satellite", launchDate: "2017-02-15", status: "Successful" },
  { name: "GSAT-9", launchDate: "2017-05-05", status: "Successful" },
  { name: "GSAT-19", launchDate: "2017-06-05", status: "Successful" },
  { name: "CARTOSAT-2 Series Satellite", launchDate: "2017-06-23", status: "Successful" },
    { name: "IRNSS-1H", launchDate: "2017-08-31", status: "Unsuccessful" },
  { name: "CARTOSAT-2 Series Satellite", launchDate: "2018-01-12", status: "Successful" },
  { name: "GSAT-6A", launchDate: "2018-03-29", status: "Successful" },
  { name: "IRNSS-1I", launchDate: "2018-04-12", status: "Successful" },
  { name: "GSAT-29", launchDate: "2018-11-14", status: "Successful" },
  { name: "HysIS", launchDate: "2018-11-29", status: "Successful" },
  { name: "GSAT-7A", launchDate: "2018-12-19", status: "Successful" },
  { name: "Microsat-R", launchDate: "2019-01-24", status: "Successful" },
  { name: "EMISAT", launchDate: "2019-04-01", status: "Successful" },
  { name: "RISAT-2B", launchDate: "2019-05-22", status: "Successful" },
  { name: "Chandrayaan-2", launchDate: "2019-07-22", status: "Successful" },
  { name: "CARTOSAT-3", launchDate: "2019-11-27", status: "Successful" },
  { name: "RISAT-2BR1", launchDate: "2019-12-11", status: "Successful" },
  { name: "EOS-01", launchDate: "2020-11-07", status: "Successful" },
  { name: "CMS-01", launchDate: "2020-12-17", status: "Successful" },
  { name: "Amazonia-1", launchDate: "2021-02-28", status: "Successful" },
  { name: "EOS-03", launchDate: "2021-08-12", status: "Unsuccessful" },
  { name: "EOS-04", launchDate: "2022-02-14", status: "Successful" },
  { name: "DS-EO", launchDate: "2022-06-30", status: "Successful" },
  { name: "EOS-D2", launchDate: "2022-08-07", status: "Unsuccessful" },
  { name: "OneWeb Gen-1", launchDate: "2022-10-23", status: "Successful" },
  { name: "EOS-06", launchDate: "2022-11-26", status: "Successful" },
  { name: "EOS-07", launchDate: "2023-02-10", status: "Successful" },
  { name: "OneWeb Gen-1", launchDate: "2023-03-26", status: "Successful" },
  { name: "TeLEOS-2", launchDate: "2023-04-22", status: "Successful" },
  { name: "NVS-01", launchDate: "2023-05-29", status: "Successful" },
  { name: "Chandrayaan-3", launchDate: "2023-07-14", status: "Successful" },
  { name: "DS-SAR", launchDate: "2023-07-30", status: "Successful" },
  { name: "Aditya-L1 payloads", launchDate: "2023-09-02", status: "Successful" },
  { name: "XPoSat", launchDate: "2024-01-01", status: "Successful" },
  { name: "INSAT-3DS", launchDate: "2024-02-17", status: "Successful" },
  { name: "EOS-08", launchDate: "2024-08-16", status: "Successful" },
  { name: "Proba-3", launchDate: "2024-12-05", status: "Successful" },
  { name: "SPADEX-A", launchDate: "2024-12-30", status: "Successful" },
  { name: "SPADEX-B", launchDate: "2024-12-30", status: "Successful" },
  { name: "NVS-02", launchDate: "2025-01-29", status: "Successful" },
];










export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMissions = missions.filter((mission) => mission.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-background">
     <header className="border-b relative"> {/* Add relative positioning for the header */}
  <div className="container mx-auto px-4 py-6 flex items-center justify-between"> {/* Use flexbox for layout */}
    <div> {/* Container for the title and description */}
      <h1 className="text-4xl font-bold">ISRO Satellite Missions</h1>
      <p className="text-muted-foreground mt-2">Exploring India's Space Journey Through Satellite Missions</p>
    </div>
    <div className="ml-4"> {/* Container for the logo with margin */}
      <img 
        src="/images/isro.png"
        alt="ISRO Logo" 
        className="h-20 w-auto"  // Adjust height as needed; width auto maintains aspect ratio
      />
    </div>
  </div>
</header>

      <main className="container mx-auto px-4 py-8">

        <IsroCenters />

        {/* 3D Satellite Viewer */}
        <div className="h-[400px] mb-12 rounded-lg overflow-hidden bg-black/5">
          <SatelliteViewer />
        </div>

        

        {/* Statistics Dashboard */}
        <Statistics missions={missions} />

        {/* Timeline */}
   

        {/* Mission Table */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">All Missions</h2>
            <div className="relative w-72">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search missions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <MissionTable missions={filteredMissions} />
        </section>
      </main>
    </div>
  )
}

