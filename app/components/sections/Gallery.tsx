'use client'

import { useState } from 'react'
import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import {
  Typography,
  Container,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  Grid,
  IconButton,
} from '@mui/material'
import { FiX } from 'react-icons/fi'
// import GradientBackground from '../common/GradientBackground'

// Define photo data type
// Each photo must include:
// - id: Unique identifier
// - image: Image path (stored in public/gallery/ directory)
// - date: Photo date
// - location: Photo location
// - description: Photo description
type Photo = {
  id: number
  image: string
  date: string
  location: string
  description: string
}

// Example photo data
// To add more photos:
// 1. Place your photo files in public/gallery/ directory
// 2. Copy the template below and add new photo entries
// 3. Update the image path, date, location and description
// 4. Recommended to sort photos in reverse chronological order
const photos: Photo[] = [
  {
    id: 1,
    image: "/gallery/20251119.webp",
    date: "2025.11.19",
    location: "Ninenzaka, Kyoto",
    description: "An evening walk through Kyoto's historic Ninenzaka street."
  },
  {
    id: 2,
    image: "/gallery/20240507.webp",
    date: "2024.05.07",
    location: "San Diego State University, California",
    description: "A palm-lined view across the San Diego State campus."
  },
  {
    id: 3,
    image: "/gallery/20240429.webp",
    date: "2024.04.29",
    location: "La Jolla Cove, California",
    description: "Clear Pacific water along the coast at La Jolla Cove."
  },
  {
    id: 4,
    image: "/gallery/20240405.webp",
    date: "2024.04.05",
    location: "UNAM Central Library, Mexico City",
    description: "The mural-covered Central Library on the UNAM campus."
  },
  {
    id: 5,
    image: "/gallery/20240114.webp",
    date: "2024.01.14",
    location: "Salar de Uyuni, Bolivia",
    description: "A star-filled night reflected across the Uyuni salt flats."
  },
  {
    id: 6,
    image: "/gallery/20240103.webp",
    date: "2024.01.03",
    location: "Plaza de Bolívar, Bogota",
    description: "A lively afternoon in Bogota's historic central square."
  },
  {
    id: 7,
    image: "/gallery/20231223.webp",
    date: "2023.12.23",
    location: "Manhattan Bridge, New York",
    description: "A winter view of the Manhattan Bridge from Dumbo."
  },
  {
    id: 8,
    image: "/gallery/20231222.webp",
    date: "2023.12.22",
    location: "University of Toronto, Toronto",
    description: "A quiet winter walk across the University of Toronto campus."
  },
  {
    id: 9,
    image: "/gallery/20230730.webp",
    date: "2023.07.30",
    location: "Jōdogahama, Iwate",
    description: "Clear blue water framed by Jodogahama's rocky coast."
  },
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <>
      <Container id="gallery" maxWidth="xl" component="section">
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 4, md: 4 },
          px: { xs: 2, sm: 4, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}>

          <AnimatedText>
            <h1 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12">Gallery</h1>
          </AnimatedText>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1, maxWidth: 'xl' }}>
            {photos.map((photo) => (
              <Grid item xs={6} sm={4} md={4} key={photo.id}>
                <AnimatedText>
                  <Card
                    elevation={0}
                    sx={{
                      height: { xs: 280, sm: 340, md: 380 },
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
                      }
                    }}
                  >
                    <CardActionArea
                      onClick={() => setSelectedPhoto(photo)}
                      aria-label={`View photo from ${photo.location}`}
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
                        p: { xs: 1.5, sm: 2, md: 3 },
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <Box sx={{
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          position: 'relative',
                          width: '100%',
                          height: { xs: 180, sm: 220, md: 260 },
                          overflow: 'hidden',
                          borderRadius: 2,
                          background: theme => theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.04)'
                            : 'rgba(0, 0, 0, 0.04)'
                        }}>
                          <Image
                            src={photo.image}
                            alt={photo.description}
                            fill
                            sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 400px"
                            className="object-contain object-center"
                          />
                        </Box>
                        <Typography variant="body1" sx={{
                          fontWeight: 500,
                          mb: { xs: 0.5, sm: 0.75, md: 1 },
                          fontSize: {
                            xs: '0.875rem',
                            sm: '1rem',
                            md: '1.125rem'
                          }
                        }}>
                          {photo.location}
                        </Typography>
                        <Typography variant="body2" sx={{
                          opacity: 0.7,
                          fontSize: {
                            xs: '0.75rem',
                            sm: '0.875rem',
                            md: '1rem'
                          }
                        }}>
                          {photo.date}
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
        open={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        maxWidth="lg"
        fullWidth
        aria-labelledby="gallery-photo-title"
        aria-describedby="gallery-photo-description"
        PaperProps={{
          sx: {
            m: { xs: 2, sm: 4 },
            maxHeight: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 64px)' },
            overflow: 'hidden',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)',
            border: '1px solid rgba(128, 128, 128, 0.35)',
            borderRadius: 2,
          },
        }}
      >
        {selectedPhoto && (
          <Box>
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '58vh', md: '70vh' },
              backgroundColor: '#050505',
            }}>
              <IconButton
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo"
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
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.description}
                fill
                sizes="(max-width: 600px) 40vh, 50vh"
                className="object-contain object-center"
              />
            </Box>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography id="gallery-photo-title" variant="h6" sx={{ fontWeight: 600 }}>
                {selectedPhoto.location}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.65 }}>
                {selectedPhoto.date}
              </Typography>
              <Typography id="gallery-photo-description" variant="body1" sx={{ mt: 1.5, opacity: 0.8 }}>
                {selectedPhoto.description}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  )
}
