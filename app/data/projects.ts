import type { LocalizedText } from '../i18n/content'

export type ProjectCategory = 'Research' | 'Personal'
export type ProjectStatus = 'Completed' | 'Ongoing'

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
  demoCaption: LocalizedText
  coverImage: string
  skills: string[]
  keyResult: { value: string; label: LocalizedText; context: LocalizedText }
  steps: { title: LocalizedText; description: LocalizedText }[]
  evidence: { image: string; alt: LocalizedText; caption: LocalizedText }[]
  implementation: LocalizedText[]
  publication: { venue: LocalizedText; citation: LocalizedText; url?: string }
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'vision-feedback-stabilization',
    category: 'Research',
    status: 'Completed',
    title: {
      en: 'Stabilization of Sphere Levitation Using Feedback Control with an Ultrasonic Phased Array',
      ja: '超音波フェーズドアレイを用いた球体浮揚のフィードバック制御による安定化',
    },
    tagline: { en: 'Hold a ball in mid-air using only sound.', ja: '音波だけで球体を安定的に空中に保持する' },
    cardDescription: { en: 'Stabilize a levitating ball with real-time feedback control.', ja: 'リアルタイムのフィードバック制御で浮揚球体を安定化する。' },
    overview: {
      en: 'A camera-guided feedback system reduces the motion of a 50 mm polystyrene sphere levitated by a bowl-shaped ultrasonic field. Instead of fixing the field in place, it moves the field in response to the sphere.',
      ja: '椀状の超音波音場で浮揚させた直径約50 mmの発泡スチロール球を、カメラで追跡して安定化する研究です。音場を固定する代わりに、球体の動きに応じて音場の中心を更新します。',
    },
    period: { en: '2025.10 - 2026.05', ja: '2025年10月 - 2026年5月' },
    video: '/project/feedback.mp4',
    demoCaption: {
      en: 'Watch the sphere remain near its target height as the acoustic field responds to its motion.',
      ja: '球体の動きに合わせて音場を更新し、目標の高さ付近に保つ様子をご覧ください。',
    },
    coverImage: '/project/feedback-stabilization-cover.webp',
    skills: ['Python', 'OpenCV', 'AUTD3', 'Stereo Vision', 'PID Control', 'STM'],
    keyResult: {
      value: '44%',
      label: { en: 'less overall 3D position variation', ja: '3次元の位置変動を低減' },
      context: {
        en: 'The standard deviation of the sphere’s 3D distance from its reference position (std_xyz) decreased from about 1.55 mm with a fixed field to 0.87 mm with feedback control (0.56 times). A 50 mm, 1.1 g sphere was measured for 30 s in five trials per condition.',
        ja: '球体の基準位置からの3次元距離の標準偏差（std_xyz）は、固定音場の約1.55 mmから制御時の約0.87 mmへ減少しました（0.56倍）。直径約50 mm・質量約1.1 gの球体を、各条件で30秒間ずつ5回計測しました。',
      },
    },
    steps: [
      {
        title: { en: 'Create an acoustic bowl', ja: '椀状の音場を作る' },
        description: { en: 'Nine AUTDs steer one focal point around eight positions using spatio-temporal modulation (STM).', ja: '9台のAUTDで単一焦点を円周上の8点に高速で巡回させ、時空間変調（STM）により球体を支える音場を作ります。' },
      },
      {
        title: { en: 'Track in 3D', ja: '3次元で位置を測る' },
        description: { en: 'Two high-speed cameras estimate the sphere center and velocity from frames captured at nearly the same time.', ja: '2台の高速カメラから、球体中心の3次元位置と速度を推定します。' },
      },
      {
        title: { en: 'Predict and correct', ja: '予測して補正する' },
        description: { en: 'A delay-compensated PID controller predicts the sphere position and updates the STM trajectory center.', ja: '遅延を考慮したPID制御で球体位置を予測し、STMの焦点軌道の中心を更新します。' },
      },
    ],
    evidence: [
      {
        image: '/project/details/stability-comparison.webp',
        alt: { en: 'Bar chart comparing position standard deviation with fixed and feedback-controlled acoustic fields', ja: '固定音場とフィードバック制御時の位置の標準偏差を比較した棒グラフ' },
        caption: { en: 'The overall 3D-distance metric std_xyz fell to 0.56 times its fixed-field value; the chart also shows the x, y, and z components.', ja: '3次元距離の指標 std_xyz は固定音場の0.56倍になりました。図にはx・y・z各軸の結果も示しています。' },
      },
    ],
    implementation: [
      { en: 'Integrated stereo tracking, position and velocity estimation, and AUTD3 updates into a real-time feedback loop.', ja: 'ステレオ計測、位置・速度推定、AUTD3の出力更新をリアルタイムのフィードバックループに統合。' },
      { en: 'Implemented delay-compensated PID control and evaluated stability against a fixed-field baseline.', ja: '遅延を考慮したPID制御を実装し、固定音場との比較実験で浮揚安定性を評価。' },
    ],
    publication: {
      venue: { en: 'SICE Festival 2026 with Annual Conference', ja: 'SICE Festival 2026 with Annual Conference' },
      citation: { en: 'H. Yoshida et al., “Stabilization of Sphere Levitation Using Feedback Control with an Ultrasonic Phased Array,” 2026, pp. 714-719.', ja: '吉田寛人ほか「Stabilization of Sphere Levitation Using Feedback Control with an Ultrasonic Phased Array」2026年, pp. 714-719.' },
    },
  },
  {
    id: 2,
    slug: 'acoustic-handoff-recovery',
    category: 'Research',
    status: 'Ongoing',
    title: { en: 'Feedback Control for Capturing a Sphere in Free Fall Using an Ultrasonic Phased Array', ja: '超音波フェーズドアレイによる自由落下する球体の捕捉制御' },
    tagline: { en: 'Catch a falling ball using only sound, without touching it.', ja: '落下する球体を、触れることなく音波だけで捕捉する' },
    cardDescription: { en: 'Track a falling ball and capture it in mid-air with real-time control.', ja: '落下する球体を追跡し、リアルタイム制御で空中捕捉する。' },
    overview: { en: 'A vision-guided acoustic system detects the release of a 40 mm sphere, predicts its fall, brakes it with ultrasound, and attempts to hold it in mid-air without contact.', ja: '直径約40 mmの球体の解放を検知し、落下運動を予測して、超音波で減速・保持する非接触捕捉システムです。' },
    period: { en: '2026.06 - current', ja: '2026年6月 - 現在' },
    video: '/project/acoustic_handoff.mp4',
    demoCaption: { en: 'A sphere released by hand is braked and held in mid-air by ultrasound without contact.', ja: '手から解放した球体を、超音波で減速し、触れずに空中へ保持する様子です。' },
    coverImage: '/project/acoustic-handoff-cover.webp',
    skills: ['Python', 'OpenCV', 'AUTD3', 'Stereo Vision', 'Motion Prediction', 'Feedback Control'],
    keyResult: {
      value: '54 / 100',
      label: { en: 'releases held for at least five seconds (54%)', ja: '5秒以上の保持に成功した試行（54%）' },
      context: { en: 'In a separate 100 ms rolling-force experiment, 54 of 100 eligible releases met the five-second hold criterion (95% Wilson interval: 44.3–63.4%). This is a different experimental series from the conference manuscript, which reports 37/105 under different conditions.', ja: '解放100試行のうち54試行で5秒以上保持しました（Wilson法による95%信頼区間：44.3–63.4%）。' },
    },
    steps: [
      {
        title: { en: 'Detect release', ja: '解放を検知する' },
        description: { en: 'Camera images identify when the fingers leave the sphere; stereo observations confirm downward motion.', ja: 'カメラ画像から指が球体を離れたことを検出し、ステレオ計測で落下運動を確認します。' },
      },
      {
        title: { en: 'Predict the fall', ja: '落下を予測する' },
        description: { en: 'Recent 3D positions estimate velocity and predict where the sphere will be when the acoustic field starts.', ja: '直近の3次元位置から速度を推定し、音場の出力開始時に球体がどこにいるか予測します。' },
      },
      {
        title: { en: 'Brake with sound', ja: '音波で減速する' },
        description: { en: 'A velocity-dependent braking trajectory moves the STM field with the falling sphere to reduce its downward speed.', ja: '落下速度に応じた制動軌道に沿ってSTM音場を動かし、球体の下降速度を抑えます。' },
      },
      {
        title: { en: 'Hold in place', ja: '空中に保持する' },
        description: { en: 'Feedback control damps the remaining motion and attempts to keep the sphere suspended.', ja: '制動後はフィードバック制御で残った動きを抑え、球体を音場内に保持します。' },
      },
    ],
    evidence: [
      {
        image: '/project/details/capture-velocity.webp',
        alt: { en: 'Measured vertical velocity of the 54 successful trials during release, braking, and hold', ja: '成功した54試行の解放・制動・保持中の鉛直速度' },
        caption: { en: 'Successful trials only (n = 54): the median downward velocity reverses after ultrasound starts, then settles near zero. Field onset was a median 41.6 ms after release; hold began at 209.9 ms.', ja: '成功試行のみ（n = 54）：音場の出力後に鉛直速度が上向きへ転じ、やがてゼロ付近に収束します。音場出力開始は解放後の中央値41.6 ms、保持への移行は209.9 msでした。' },
      },
      {
        image: '/project/details/capture-trajectory.webp',
        alt: { en: 'Measured vertical trajectory of the 54 successful trials after release', ja: '成功した54試行の解放後の鉛直方向の軌道' },
        caption: { en: 'Successful trials only (n = 54): the sphere falls, is braked, and remains near a holding height. Thin lines show individual trajectories; the bold line is the median.', ja: '成功試行のみ（n = 54）：球体が落下後に減速され、一定の高さ付近に保持される様子です。細線は各試行、太線は中央値です。' },
      },
    ],
    implementation: [
      { en: 'Combined release detection, stereo 3D tracking, motion prediction, and AUTD3 control in real time.', ja: '解放検知、ステレオ3D追跡、運動予測、AUTD3制御をリアルタイムのシステムに統合。' },
      { en: 'Implemented velocity-aware braking and the transition to feedback stabilization; analyzed successful and failed trials.', ja: '落下速度に応じた制動とフィードバック安定化への移行を実装し、成功・失敗試行を解析。' },
    ],
    publication: {
      venue: { en: 'SICE SI 2026 · Dec. 8-10, 2026 (upcoming)', ja: 'SICE SI 2026 · 2026年12月8–10日（開催予定）' },
      citation: { en: 'H. Yoshida et al., “Feedback Control for Capturing a Sphere in Free Fall Using an Ultrasonic Phased Array.”', ja: '吉田寛人ほか「超音波フェーズドアレイによる自由落下する球体の捕捉制御」' },
    },
  },
]
