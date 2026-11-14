'use client'

import { Box, Card, Container, Grid, Typography } from '@mui/material'
import AnimatedText from '../common/AnimatedText'
import { noteTopics, type NoteTopic } from '../../data/notes'
import { useLanguage } from '../../i18n/LanguageContext'

function NoteVisual({ visual }: { visual: NoteTopic['visual'] }) {
  if (visual === 'mcp') {
    return (
      <svg viewBox="0 0 640 220" aria-hidden="true" style={{ width: '100%', height: '100%', maxWidth: 700 }}>
        <path d="M194 110h72m108 0h65" fill="none" stroke="#8eabb5" strokeWidth="3" strokeLinecap="round" />
        <path d="m255 103 11 7-11 7m173-14 11 7-11 7" fill="none" stroke="#8eabb5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M64 55h115a15 15 0 0 1 15 15v70a15 15 0 0 1-15 15h-72l-27 19v-19H64a15 15 0 0 1-15-15V70a15 15 0 0 1 15-15Z" fill="#dcebf0" stroke="#77aab9" strokeWidth="3" strokeLinejoin="round" />
        <text x="121" y="117" fill="#4b7180" fontSize="32" fontWeight="700" textAnchor="middle">LLM</text>
        <circle cx="320" cy="110" r="54" fill="#dcefe8" stroke="#75bba6" strokeWidth="3" />
        <text x="320" y="119" fill="#286c63" fontSize="29" fontWeight="700" textAnchor="middle">MCP</text>
        {[449, 497, 545].map(x => (
          <rect key={x} x={x} y="78" width="42" height="51" rx="5" fill="#e0eaf3" stroke="#83a9c7" strokeWidth="3" />
        ))}
        <path d="M458 91h23m-23 10h15m-15 10h19" stroke="#5687a4" strokeWidth="3" strokeLinecap="round" />
        <path d="M506 91h24m-24 10h24m-24 10h16" stroke="#5687a4" strokeWidth="3" strokeLinecap="round" />
        <circle cx="566" cy="103" r="11" fill="none" stroke="#5687a4" strokeWidth="3" />
        <circle cx="566" cy="103" r="3" fill="#5687a4" />
        <text x="518" y="163" fill="#426683" fontSize="18" fontWeight="700" textAnchor="middle">External Apps</text>
      </svg>
    )
  }

  if (visual === 'acoustics') {
    return (
      <svg viewBox="0 0 560 240" aria-hidden="true" style={{ width: '100%', height: '100%', maxWidth: 520 }}>
        <defs>
          <clipPath id="note-acoustic-waves"><rect x="40" y="12" width="480" height="169" /></clipPath>
        </defs>
        <g clipPath="url(#note-acoustic-waves)" fill="none" stroke="#7eb7d0" strokeWidth="2.5" opacity="0.68">
          {[
            { x: 136, radius: 170 }, { x: 208, radius: 119 }, { x: 280, radius: 91 },
            { x: 352, radius: 119 }, { x: 424, radius: 170 },
          ].map(({ x, radius }) => (
            <circle key={x} cx={x} cy="181" r={radius} />
          ))}
        </g>
        <circle cx="280" cy="90" r="14" fill="#e37c69" stroke="#f2b1a5" strokeWidth="3" />
        {[100, 172, 244, 316, 388].map(x => (
          <rect key={x} x={x} y="181" width="72" height="29" fill="#a4bcc5" stroke="#527a88" strokeWidth="2" />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 560 240" aria-hidden="true" style={{ width: '100%', height: '100%', maxWidth: 520 }}>
      <defs>
        <g id="note-camera-icon">
          <path d="M15 24 27 12h40l12 12" fill="none" stroke="#79a8bc" strokeWidth="3" strokeLinejoin="round" />
          <rect x="0" y="24" width="94" height="68" rx="8" fill="#dcebf0" stroke="#79a8bc" strokeWidth="3" />
          <circle cx="47" cy="58" r="22" fill="#abd1dc" stroke="#568ba3" strokeWidth="3" />
          <circle cx="47" cy="58" r="8" fill="#568ba3" />
        </g>
      </defs>
      <use href="#note-camera-icon" x="60" y="27" />
      <use href="#note-camera-icon" x="406" y="27" />
      <path d="M107 85 280 180m173-95-173 95" fill="none" stroke="#83b6c7" strokeWidth="2" strokeDasharray="7 6" opacity="0.75" />
      <circle cx="280" cy="180" r="27" fill="#9ebfd0" stroke="#568ba3" strokeWidth="3" />
      <path d="M270 163c8-5 18-5 25 0" fill="none" stroke="#dcebf0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function Notes() {
  const { locale, text } = useLanguage()
  const headingClass = locale === 'ja' ? 'font-display-space' : 'font-display-outline'

  return (
    <Container id="notes" maxWidth="xl" component="section">
      <Box sx={{ py: { xs: 10, md: 12 }, px: { xs: 2, sm: 4, md: 8 }, maxWidth: 1180, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center' }}>
          <AnimatedText>
            <h1 className={`${headingClass} inline-block text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-6`}>
              {text.sections.notes}
            </h1>
          </AnimatedText>
          <Typography variant="body1" sx={{ mb: { xs: 5, md: 7 }, mx: 'auto', maxWidth: 850, opacity: 0.72, lineHeight: 1.7 }}>
            {text.notes.intro}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 2.5 }}>
          {noteTopics.map((note, index) => (
            <Grid item xs={12} md={index === 0 ? 12 : 6} key={note.slug} sx={{ display: 'flex' }}>
              <Card
                component="article"
                elevation={0}
                sx={{
                  width: '100%',
                  color: 'var(--foreground)',
                  background: 'rgba(127, 127, 127, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'baseline' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, opacity: 0.75 }}>{note.category[locale]}</Typography>
                    <Typography variant="caption" sx={{ flexShrink: 0, opacity: 0.6 }}>{text.notes.status}</Typography>
                  </Box>
                  <Box sx={{ height: { xs: 185, sm: index === 0 ? 240 : 205, md: index === 0 ? 250 : 210 }, width: '100%', my: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <NoteVisual visual={note.visual} />
                  </Box>
                  <Typography component="h2" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' }, lineHeight: 1.45, fontWeight: 650, overflowWrap: 'anywhere' }}>
                    {note.title[locale]}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
