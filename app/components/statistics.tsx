"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface Mission {
  name: string
  launchDate: string
  status: string
}

interface StatisticsProps {
  missions: Mission[]
}

export default function Statistics({ missions }: StatisticsProps) {
  const totalMissions = missions.length
  const successfulMissions = missions.filter((m) => m.status === "Successful").length
  const unsuccessfulMissions = totalMissions - successfulMissions

  const data = [
    { name: "Successful", value: successfulMissions },
    { name: "Unsuccessful", value: unsuccessfulMissions },
  ]

  const COLORS = ["hsl(var(--success))", "hsl(var(--destructive))"]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Missions</CardTitle>
          <CardDescription>All ISRO satellite missions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{totalMissions}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Success Rate</CardTitle>
          <CardDescription>Mission success percentage</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{((successfulMissions / totalMissions) * 100).toFixed(1)}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Mission Status</CardTitle>
          <CardDescription>Success vs Failure ratio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

