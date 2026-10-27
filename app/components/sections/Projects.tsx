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
import { FiExternalLink, FiX } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Locale } from '../../i18n/content'

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

const detailSections = (
  project: Project,
  locale: Locale,
  labels: ReturnType<typeof useLanguage>['text']['projects'],
) => [
  { label: labels.problem, content: project.problem[locale] },
  {
    label: labels.role,
    content: project.roles.length > 0
      ? project.roles.map(role => role[locale]).join(' / ')
      : labels.pendingRole,
  },
  { label: labels.currentResult, content: project.currentResult[locale] },
  { label: labels.nextStep, content: project.nextStep[locale] },
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
          <Box>
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '52vh', md: '62vh' },
              backgroundColor: '#050505',
            }}>
              <IconButton
                onClick={() => setSelectedProject(null)}
                aria-label={text.projects.close}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 1,
                  color: '#ffffff',
                  backgroundColor: 'rgba(0, 0, 0, 0.55)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
                }}
              >
                <FiX aria-hidden="true" />
              </IconButton>

              <video
                key={selectedProject.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={`${selectedProject.title[locale]} ${text.projects.demonstration}`}
                className="h-full w-full object-contain"
              >
                <source src={selectedProject.video} type="video/mp4" />
              </video>
            </Box>

            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Typography id="project-detail-title" variant="h5" sx={{ fontWeight: 600 }}>
                {selectedProject.title[locale]}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.65 }}>
                {selectedProject.period[locale]}
              </Typography>
              <Typography id="project-detail-summary" variant="body1" sx={{ mt: 2, opacity: 0.85 }}>
                {selectedProject.overview[locale]}
              </Typography>

              <Box sx={{
                mt: 4,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                columnGap: 5,
                rowGap: 3,
              }}>
                {detailSections(selectedProject, locale, text.projects).map(section => (
                  <Box key={section.label} sx={{ pt: 2, borderTop: '1px solid rgba(128, 128, 128, 0.3)' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                      {section.label}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8, lineHeight: 1.7 }}>
                      {section.content}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(128, 128, 128, 0.3)' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  {text.projects.technologies}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                  {selectedProject.skills.map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: 'var(--foreground)',
                        borderColor: 'rgba(128, 128, 128, 0.5)',
                        backgroundColor: 'rgba(128, 128, 128, 0.08)',
                        '& .MuiChip-label': { color: 'inherit' },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(128, 128, 128, 0.3)' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  {text.projects.paper}
                </Typography>
                {selectedProject.paper ? (
                  <Link
                    href={selectedProject.paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1, display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
                  >
                    {selectedProject.paper.label[locale]}
                    <FiExternalLink aria-hidden="true" />
                  </Link>
                ) : (
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                    {text.projects.pendingPaper}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  )
}
