'use client'

import { useState } from 'react'
import AnimatedText from '../common/AnimatedText'
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

type Project = {
  id: number
  title: string
  summary: string
  period: string
  video: string
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

const pendingDetail = 'Details will be added soon.'

const projects: Project[] = [
  {
    id: 1,
    title: 'Vision-Based Feedback Stabilization of an Acoustically Levitated Sphere',
    summary: 'A vision-based feedback control system that tracks an acoustically levitated sphere in real time and dynamically adjusts the ultrasonic field to reduce positional fluctuations and improve levitation stability.',
    period: '2025.10 - 2026.05',
    video: '/project/PID_off_to_on.mp4',
    skills: ['Python', 'OpenCV', 'AUTD3/pyautd3', 'PID Feedback Control'],
    problem: pendingDetail,
    roles: [],
    currentResult: pendingDetail,
    nextStep: pendingDetail,
  },
  {
    id: 2,
    title: 'Acoustic Handoff and Recovery of an Acoustically Levitated Sphere',
    summary: 'A state-machine-based recovery system that detects a falling sphere, predicts its motion, hands control from steady levitation to a tracking-and-braking acoustic field, and recaptures it for stabilized levitation.',
    period: '2026.06 - current',
    video: '/project/acoustic_handoff.mp4',
    skills: ['Python', 'OpenCV', 'AUTD3/pyautd3', 'Stereo Vision', 'Predictive Control', 'State Machine Control'],
    problem: pendingDetail,
    roles: [],
    currentResult: pendingDetail,
    nextStep: pendingDetail,
  },
]

const projectCardSx: SxProps<Theme> = {
  height: { xs: 500, sm: 520, md: 540 },
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

const detailSections = (project: Project) => [
  { label: 'Problem', content: project.problem },
  {
    label: 'My Role',
    content: project.roles.length > 0
      ? project.roles.join(' / ')
      : 'To be added after a factual review.',
  },
  { label: 'Current Result', content: project.currentResult },
  { label: 'Next Step', content: project.nextStep },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            <h1 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12">
              Projects
            </h1>
          </AnimatedText>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
            {projects.map(project => (
              <Grid item xs={12} md={6} key={project.id}>
                <AnimatedText>
                  <Card elevation={0} sx={projectCardSx}>
                    <CardActionArea
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
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
                          height: { xs: 280, sm: 300, md: 320 },
                          overflow: 'hidden',
                          borderRadius: 2,
                          backgroundColor: '#050505',
                        }}>
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                            className="h-full w-full object-contain"
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.25, mb: 1 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.65, mb: 1.5 }}>
                          {project.period}
                        </Typography>
                        <Typography variant="body2" sx={{
                          opacity: 0.8,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {project.summary}
                        </Typography>
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
                aria-label="Close project details"
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
                aria-label={`${selectedProject.title} demonstration`}
                className="h-full w-full object-contain"
              >
                <source src={selectedProject.video} type="video/mp4" />
              </video>
            </Box>

            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Typography id="project-detail-title" variant="h5" sx={{ fontWeight: 600 }}>
                {selectedProject.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.65 }}>
                {selectedProject.period}
              </Typography>
              <Typography id="project-detail-summary" variant="body1" sx={{ mt: 2, opacity: 0.85 }}>
                {selectedProject.summary}
              </Typography>

              <Box sx={{
                mt: 4,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                columnGap: 5,
                rowGap: 3,
              }}>
                {detailSections(selectedProject).map(section => (
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
                  Technologies & Methods
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
                  Paper
                </Typography>
                {selectedProject.paper ? (
                  <Link
                    href={selectedProject.paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1, display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
                  >
                    {selectedProject.paper.label}
                    <FiExternalLink aria-hidden="true" />
                  </Link>
                ) : (
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                    Paper link will be added soon.
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
