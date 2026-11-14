import type { LocalizedText } from '../i18n/content'

export type NoteTopic = {
  slug: string
  category: LocalizedText
  title: LocalizedText
  visual: 'mcp' | 'acoustics' | 'calibration'
  relatedProjectSlugs: string[]
}

export const noteTopics: NoteTopic[] = [
  {
    slug: 'understanding-mcp',
    category: { en: 'Software Engineering', ja: 'ソフトウェア開発' },
    title: { en: 'What Is MCP?', ja: 'MCPとは何か？' },
    visual: 'mcp',
    relatedProjectSlugs: ['npb-mlb-weekly-digest'],
  },
  {
    slug: 'acoustic-radiation-pressure-and-levitation',
    category: { en: 'Acoustics', ja: '音響' },
    title: { en: 'Acoustic Radiation Pressure and Levitation with Airborne Ultrasound', ja: '空中超音波の音響放射圧と音響浮揚' },
    visual: 'acoustics',
    relatedProjectSlugs: ['vision-feedback-stabilization', 'acoustic-handoff-recovery'],
  },
  {
    slug: 'opencv-camera-calibration',
    category: { en: 'Computer Vision', ja: 'コンピュータビジョン' },
    title: {
      en: 'Camera Calibration with OpenCV (Monocular and Stereo)',
      ja: 'OpenCVによるカメラキャリブレーション(単眼・ステレオ)',
    },
    visual: 'calibration',
    relatedProjectSlugs: ['vision-feedback-stabilization', 'acoustic-handoff-recovery'],
  },
]
