export type ProjectCategory = "Research" | "Personal"
export type ProjectStatus = "Completed" | "Ongoing"

export type Project = {
  id: number
  slug: string
  category: ProjectCategory
  status: ProjectStatus
  title: string
  tagline: string
  overview: string
  period: string
  video: string
  coverImage?: string
  skills: string[]
  problem: string
  roles: string[]
  currentResult: string
  nextStep: string
  paper?: {
    label: string
    url: string
  }
}

const pendingDetail = "Details will be added soon."

export const projects: Project[] = [
  {
    id: 1,
    slug: "vision-feedback-stabilization",
    category: "Research",
    status: "Completed",
    title: "Vision-Based Feedback Stabilization of an Acoustically Levitated Sphere",
    tagline: "Closing the Loop on Acoustic Levitation",
    overview: "A vision-based feedback control system that tracks an acoustically levitated sphere in real time and dynamically adjusts the ultrasonic field to reduce positional fluctuations and improve levitation stability.",
    period: "2025.10 - 2026.05",
    video: "/project/feedback.mp4",
    skills: ["Python", "OpenCV", "AUTD3/pyautd3", "PID Feedback Control"],
    problem: pendingDetail,
    roles: [],
    currentResult: pendingDetail,
    nextStep: pendingDetail,
  },
  {
    id: 2,
    slug: "acoustic-handoff-recovery",
    category: "Research",
    status: "Ongoing",
    title: "Catch the Fall. Sound Takes Control.",
    tagline: "Predicting motion. Shaping sound. Capturing objects mid-air.",
    overview: "A real-time, vision-guided acoustic system that intercepts falling objects and holds them in mid-air without physical contact.",
    period: "2026.06 - current",
    video: "/project/acoustic_handoff.mp4",
    skills: ["Python", "OpenCV", "AUTD3", "Stereo Vision", "Predictive Control"],
    problem: pendingDetail,
    roles: [],
    currentResult: pendingDetail,
    nextStep: pendingDetail,
  },
]
