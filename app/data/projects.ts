import type { LocalizedText } from '../i18n/content'

export type ProjectCategory = "Research" | "Personal"
export type ProjectStatus = "Completed" | "Ongoing"

export type Project = {
  id: number
  slug: string
  category: ProjectCategory
  status: ProjectStatus
  title: LocalizedText
  tagline: LocalizedText
  cardDescription: LocalizedText
  overview: LocalizedText
  period: LocalizedText
  video: string
  coverImage: string
  skills: string[]
  problem: LocalizedText
  roles: LocalizedText[]
  currentResult: LocalizedText
  nextStep: LocalizedText
  paper?: {
    label: LocalizedText
    url: string
  }
}

const pendingDetail: LocalizedText = {
  en: 'Details will be added soon.',
  ja: '詳細は後日追加予定です。',
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "vision-feedback-stabilization",
    category: "Research",
    status: "Completed",
    title: { en: 'Vision-Based Feedback Stabilization of an Acoustically Levitated Sphere', ja: '超音波フェーズドアレイを用いた球体浮揚の視覚フィードバックによる安定化' },
    tagline: { en: 'Hold a ball in mid-air using only sound.', ja: '音波だけで球体を安定的に空中に保持する' },
    cardDescription: { en: 'Stabilize a levitating ball with real-time feedback control.', ja: 'リアルタイムのフィードバック制御で浮揚球体を安定化する。' },
    overview: { en: 'A vision-based feedback control system that tracks an acoustically levitated sphere in real time and dynamically adjusts the ultrasonic field to reduce positional fluctuations and improve levitation stability.', ja: '音響浮揚した球体をリアルタイムで追跡し、超音波の音場を動的に調整することで、位置の揺らぎを抑えて浮揚を安定化する視覚フィードバック制御システムです。' },
    period: { en: '2025.10 - 2026.05', ja: '2025年10月 - 2026年5月' },
    video: "/project/feedback.mp4",
    coverImage: "/project/feedback-stabilization-cover.webp",
    skills: ["Python", "OpenCV", "AUTD3", "PID Feedback Control"],
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
    title: { en: 'Feedback Control for Capturing a Sphere in Free Fall Using an Ultrasonic Phased Array', ja: '超音波フェーズドアレイを用いた自由落下する球体の捕捉制御' },
    tagline: { en: 'Catch a falling ball using only sound, without touching it.', ja: '落下する球体を、触れることなく音波だけで捕捉する' },
    cardDescription: { en: 'Track a falling ball and capture it in mid-air with real-time control.', ja: '落下する球体を追跡し、リアルタイム制御で空中捕捉する。' },
    overview: { en: 'A real-time, vision-guided acoustic system that intercepts falling objects and holds them in mid-air without physical contact.', ja: '落下する物体を視覚情報からリアルタイムで追跡し、音響場を制御することで、物体に触れずに空中で捕捉・保持するシステムです。' },
    period: { en: '2026.06 - current', ja: '2026年6月 - 現在' },
    video: "/project/acoustic_handoff.mp4",
    coverImage: "/project/acoustic-handoff-cover.webp",
    skills: ["Python", "OpenCV", "AUTD3", "Stereo Vision", "Predictive Control"],
    problem: pendingDetail,
    roles: [],
    currentResult: pendingDetail,
    nextStep: pendingDetail,
  },
]
