"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Rocket, XCircle, CheckCircle } from "lucide-react"

interface Mission {
  name: string
  launchDate: string
  status: string
}

interface TimelineProps {
  missions: Mission[]
}

export default function Timeline({ missions }: TimelineProps) {
  return (
    <VerticalTimeline>
      {missions.map((mission, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element"
          date={new Date(mission.launchDate).toLocaleDateString()}
          icon={<Rocket className="w-6 h-6" />}
          iconStyle={{
            background: "hsl(var(--background))",
            color: mission.status === "Successful" ? "hsl(var(--success))" : "hsl(var(--destructive))",
          }}
        >
          <h3 className="font-semibold">{mission.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            {mission.status === "Successful" ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <XCircle className="w-4 h-4 text-destructive" />
            )}
            <span className={mission.status === "Successful" ? "text-success" : "text-destructive"}>
              {mission.status}
            </span>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

