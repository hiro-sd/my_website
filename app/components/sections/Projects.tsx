'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedText from '../common/AnimatedText'
import { projects, type Project } from '../../data/projects'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Dialog,
  Grid,
  IconButton,
  Link,
  Typography,
  type SxProps,
  type Theme,
} from '@mui/material'
import { FiArrowRight, FiExternalLink, FiX } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'

const projectCardSx: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  color: 'var(--foreground)',
  background: theme => theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: 4,
  border: theme => `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(255, 255, 255, 0.2)'
    }`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: theme => theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(255, 255, 255, 0.15)',
    boxShadow: theme => theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0, 0, 0, 0.3)'
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
}

const feedbackStages = [
  { en: 'Sphere motion', ja: '球体の動き' },
  { en: 'Stereo cameras', ja: '2台のカメラ' },
  { en: '3D estimate', ja: '3次元位置推定' },
  { en: 'Prediction + PID', ja: '予測・PID制御' },
  { en: 'AUTD3 + STM', ja: 'AUTD3・STM' },
]

export default function Projects() {
  const { locale, text } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const headingClass = locale === 'ja' ? 'font-display-space' : 'font-display-outline'

  return (
    <>
      <Container id="projects" maxWidth="xl" component="section">
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pt: { xs: 10, md: 10 },
          pb: { xs: 4, md: 4 },
          px: { xs: 2, sm: 4, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}>
          <AnimatedText>
            <h1 className={`${headingClass} inline-block text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12`}>
              {text.sections.projects}
            </h1>
          </AnimatedText>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
            {projects.map(project => (
              <Grid item xs={12} md={6} key={project.id} sx={{ display: 'flex' }}>
                <AnimatedText className="h-full w-full">
                  <Card elevation={0} sx={projectCardSx}>
                    <CardActionArea
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${text.projects.viewDetails} ${project.title[locale]}`}
                      sx={{
                        height: '100%',
                        alignItems: 'stretch',
                        color: 'inherit',
                        '&:focus-visible': {
                          outline: '2px solid #d946ef',
                          outlineOffset: '-2px',
                        },
                      }}
                    >
                      <CardContent sx={{
                        p: { xs: 2, sm: 2.5, md: 3 },
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <Box sx={{
                          mb: { xs: 2, md: 2.5 },
                          position: 'relative',
                          width: '100%',
                          aspectRatio: '16 / 9',
                          overflow: 'hidden',
                          borderRadius: 2,
                          backgroundColor: '#050505',
                        }}>
                          <Image
                            src={project.coverImage}
                            alt={project.tagline[locale]}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            className="object-cover object-center"
                          />
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.25, mb: 1 }}>
                          {project.tagline[locale]}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.5, mb: 0.75 }}>
                          {project.cardDescription[locale]}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.6, mb: 1.5 }}>
                          {project.period[locale]}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
                          {project.skills.map(skill => (
                            <Chip
                              key={skill}
                              label={skill}
                              size="small"
                              variant="outlined"
                              sx={{
                                color: 'var(--foreground)',
                                borderColor: 'rgba(128, 128, 128, 0.45)',
                                backgroundColor: 'rgba(128, 128, 128, 0.08)',
                                '& .MuiChip-label': {
                                  px: 1,
                                  color: 'inherit',
                                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </AnimatedText>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Dialog
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        maxWidth="lg"
        fullWidth
        aria-labelledby="project-detail-title"
        aria-describedby="project-detail-summary"
        PaperProps={{
          sx: {
            m: { xs: 2, sm: 4 },
            maxHeight: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 64px)' },
            overflowY: 'auto',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)',
            border: '1px solid rgba(128, 128, 128, 0.35)',
            borderRadius: 2,
          },
        }}
      >
        {selectedProject && (
          <Box sx={{ p: { xs: 2.5, sm: 4, md: 5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" sx={{ opacity: 0.6, mb: 1 }}>
                  {selectedProject.period[locale]}
                </Typography>
                <Typography id="project-detail-title" component="h2" variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.3rem', sm: '1.5rem' }, lineHeight: 1.25, overflowWrap: 'anywhere' }}>
                  {selectedProject.title[locale]}
                </Typography>
              </Box>
              <IconButton onClick={() => setSelectedProject(null)} aria-label={text.projects.close} sx={{ flexShrink: 0, color: 'var(--foreground)' }}>
                <FiX aria-hidden="true" />
              </IconButton>
            </Box>
            <Typography id="project-detail-summary" variant="body1" sx={{ mt: 2, maxWidth: 850, opacity: 0.85, lineHeight: 1.75 }}>
              {selectedProject.overview[locale]}
            </Typography>

            <Box component="figure" sx={{ m: 0, mt: 3 }}>
              <Box sx={{ height: { xs: 260, sm: 330, md: 380 }, backgroundColor: '#050505', borderRadius: 1, overflow: 'hidden' }}>
                <video
                  key={selectedProject.video}
                  autoPlay muted loop playsInline preload="metadata"
                  poster={selectedProject.coverImage}
                  aria-label={`${selectedProject.title[locale]} ${text.projects.demonstration}`}
                  className="h-full w-full object-contain"
                >
                  <source src={selectedProject.video} type="video/mp4" />
                </video>
              </Box>
              <Typography component="figcaption" variant="body2" sx={{ mt: 1, opacity: 0.72, lineHeight: 1.6 }}>
                {selectedProject.demoCaption[locale]}
              </Typography>
            </Box>

            <Box component="section" sx={{ mt: 5, pt: 2.5, borderTop: '1px solid rgba(128,128,128,0.3)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{text.projects.keyResult}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 2, mt: 1.5 }}>
                <Typography sx={{ fontSize: { xs: '2.5rem', sm: '3.2rem' }, fontWeight: 700, lineHeight: 1.1, color: 'var(--foreground)' }}>
                  {selectedProject.keyResult.value}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  {selectedProject.keyResult.label[locale]}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1.5, maxWidth: 850, opacity: 0.8, lineHeight: 1.75 }}>
                {selectedProject.keyResult.context[locale]}
              </Typography>
            </Box>

            <Box component="section" sx={{ mt: 5, pt: 2.5, borderTop: '1px solid rgba(128,128,128,0.3)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{text.projects.howItWorks}</Typography>
              {selectedProject.id === 1 && (
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '170px minmax(0, 1fr)' }, gap: { xs: 3, md: 4 }, alignItems: 'center', mt: 3 }}>
                  <Box component="figure" sx={{ m: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                      role="img"
                      aria-label={locale === 'ja' ? '球体の直径約50 mmと、内側を巡回する直径47 mmの焦点軌道の上面模式図' : 'Top-view diagram of a roughly 50 mm sphere and a 47 mm focal trajectory just inside its outline'}
                      sx={{ position: 'relative', width: 148, height: 148, display: 'grid', placeItems: 'center' }}
                    >
                      <Box aria-hidden="true" sx={{ position: 'absolute', width: 140, height: 140, border: '2px solid #d9e0e6', borderRadius: '50%', backgroundColor: 'rgba(217, 224, 230, 0.12)' }} />
                      <Box aria-hidden="true" sx={{ position: 'absolute', width: 132, height: 132, border: '2px solid #48b9c4', borderRadius: '50%' }}>
                        {Array.from({ length: 8 }, (_, index) => {
                          const angle = index * Math.PI / 4 - Math.PI / 2
                          return (
                            <Box key={index} sx={{ position: 'absolute', width: 8, height: 8, left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%`, transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: '#48b9c4' }} />
                          )
                        })}
                      </Box>
                    </Box>
                    <Box component="figcaption" sx={{ mt: 1.5, textAlign: 'center' }}>
                      <Typography variant="caption" sx={{ display: 'block', opacity: 0.7, mb: 0.5 }}>
                        {locale === 'ja' ? '焦点が8点を巡回（上面図）' : 'One focus, eight points (top view)'}
                      </Typography>
                      <Typography variant="caption" sx={{ display: 'block', color: '#d9e0e6' }}>
                        {locale === 'ja' ? '白：球体 約50 mm' : 'White: sphere ~50 mm'}
                      </Typography>
                      <Typography variant="caption" sx={{ display: 'block', color: '#48b9c4' }}>
                        {locale === 'ja' ? '青：焦点軌道 47 mm' : 'Blue: focus path 47 mm'}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(5, minmax(0, 1fr))' }, gap: { xs: 1, md: 1.25 } }}>
                      {feedbackStages.map((stage, index) => (
                        <Box key={stage.en} sx={{ minWidth: 0, borderTop: '2px solid rgba(72,185,196,0.75)', pt: 1 }}>
                          <Typography variant="caption" sx={{ display: 'block', opacity: 0.55, mb: 0.25 }}>{String(index + 1).padStart(2, '0')}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 650, lineHeight: 1.45 }}>{stage[locale]}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.7, lineHeight: 1.5 }}>
                      {locale === 'ja' ? '音場が球体の位置を変え、その位置を次の更新に使う閉ループです。' : 'The updated field changes the sphere’s motion; the cameras measure it again for the next update.'}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${selectedProject.steps.length}, minmax(0, 1fr))` }, gap: { xs: 2.5, md: 2 }, mt: 2.5 }}>
                {selectedProject.steps.map((step, index) => (
                  <Box key={step.title.en} sx={{ display: 'flex', gap: 1.5, minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, opacity: 0.55, flexShrink: 0 }}>{String(index + 1).padStart(2, '0')}</Typography>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ fontWeight: 650, lineHeight: 1.35 }}>{step.title[locale]}</Typography>
                      <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.78, lineHeight: 1.65 }}>{step.description[locale]}</Typography>
                    </Box>
                    {index < selectedProject.steps.length - 1 && (
                      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', opacity: 0.45, pt: 0.5 }}>
                        <FiArrowRight aria-hidden="true" />
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box component="section" sx={{ mt: 5, pt: 2.5, borderTop: '1px solid rgba(128,128,128,0.3)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{text.projects.evidence}</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 3, mt: 2 }}>
                {selectedProject.evidence.map(item => (
                  <Box component="figure" key={item.image} sx={{ m: 0, minWidth: 0 }}>
                    <Link href={item.image} target="_blank" rel="noopener noreferrer" aria-label={item.alt[locale]} sx={{ display: 'block' }}>
                      <Box sx={{ position: 'relative', height: { xs: 250, sm: 380, md: 450 }, backgroundColor: '#fff', borderRadius: 1, overflow: 'hidden' }}>
                        <Image src={item.image} alt={item.alt[locale]} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
                      </Box>
                    </Link>
                    <Typography component="figcaption" variant="body2" sx={{ mt: 1, opacity: 0.78, lineHeight: 1.65 }}>{item.caption[locale]}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box component="section" sx={{ mt: 5, pt: 2.5, borderTop: '1px solid rgba(128,128,128,0.3)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{text.projects.implementation}</Typography>
              <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 2 }}>
                {selectedProject.implementation.map(item => (
                  <Typography component="li" variant="body2" key={item.en} sx={{ mb: 0.75, opacity: 0.8, lineHeight: 1.7 }}>{item[locale]}</Typography>
                ))}
              </Box>
              <Typography component="h4" sx={{ fontWeight: 650 }}>{text.projects.technologies}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                {selectedProject.skills.map(skill => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" sx={{ color: 'var(--foreground)', borderColor: 'rgba(128,128,128,0.5)', backgroundColor: 'rgba(128,128,128,0.08)', '& .MuiChip-label': { color: 'inherit' } }} />
                ))}
              </Box>
            </Box>

            <Box component="section" sx={{ mt: 5, pt: 2.5, borderTop: '1px solid rgba(128,128,128,0.3)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{text.projects.publication}</Typography>
              <Typography sx={{ mt: 1.5, fontWeight: 600 }}>{selectedProject.publication.venue[locale]}</Typography>
              <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.8, lineHeight: 1.7 }}>{selectedProject.publication.citation[locale]}</Typography>
              {selectedProject.publication.url ? (
                <Link href={selectedProject.publication.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, mt: 1.5 }}>
                  {text.projects.publication}<FiExternalLink aria-hidden="true" />
                </Link>
              ) : (
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.6 }}>{text.projects.publicLinkPending}</Typography>
              )}
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  )
}
