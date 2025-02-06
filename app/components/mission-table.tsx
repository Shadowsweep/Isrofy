"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Mission {
  name: string
  launchDate: string
  status: string
}

interface MissionTableProps {
  missions: Mission[]
}

export default function MissionTable({ missions }: MissionTableProps) {
  const [page, setPage] = useState(0)
  const pageSize = 10
  const totalPages = Math.ceil(missions.length / pageSize)

  const paginatedMissions = missions.slice(page * pageSize, (page + 1) * pageSize)

  return (
    <div className="border rounded-lg p-2">
      <Table className="text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Mission Name</TableHead>
            <TableHead>Launch Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedMissions.map((mission, index) => (
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
      <div className="flex justify-between mt-2">
        <Button onClick={() => setPage(page - 1)} disabled={page === 0} size="sm">
          Previous
        </Button>
        <span className="text-sm">Page {page + 1} of {totalPages}</span>
        <Button onClick={() => setPage(page + 1)} disabled={page + 1 >= totalPages} size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
