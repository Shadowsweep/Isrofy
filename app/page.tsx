"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Timeline from "@/app/components/timeline"
import SatelliteViewer from "@/app/components/satellite-viewer"
import Statistics from "@/app/components/statistics"
import MissionTable from "@/app/components/mission-table"
import { Input } from "@/components/ui/input"

const missions = [
  { name: "Rohini Technology Payload", launchDate: "1979-08-10", status: "Unsuccessful" },
  { name: "RS-1", launchDate: "1980-07-18", status: "Successful" },
  // ... add all other missions
]

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMissions = missions.filter((mission) => mission.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">ISRO Satellite Missions</h1>
          <p className="text-muted-foreground mt-2">Exploring India's Space Journey Through Satellite Missions</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 3D Satellite Viewer */}
        <div className="h-[400px] mb-12 rounded-lg overflow-hidden bg-black/5">
          <SatelliteViewer />
        </div>

        {/* Statistics Dashboard */}
        <Statistics missions={missions} />

        {/* Timeline */}
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Mission Timeline</h2>
          <Timeline missions={missions} />
        </section>

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

