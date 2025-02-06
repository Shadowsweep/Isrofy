"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Mission {
  name: string
  launchDate: string
  status: string
}

interface MissionTableProps {
  missions: Mission[]
}

export default function MissionTable({ missions }: MissionTableProps) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mission Name</TableHead>
            <TableHead>Launch Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {missions.map((mission, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{mission.name}</TableCell>
              <TableCell>{new Date(mission.launchDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge variant={mission.status === "Successful" ? "success" : "destructive"}>{mission.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

