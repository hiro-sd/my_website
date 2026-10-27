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
import { useLanguage } from '../../i18n/LanguageContext'
import type { LocalizedText } from '../../i18n/content'
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
  location: LocalizedText
  description: LocalizedText
}

// Example photo data
// To add more photos:
// 1. Place your photo files in public/gallery/ directory
// 2. Copy the template below and add new photo entries
// 3. Update the image path, date, location and description
// 4. Recommended to sort photos in reverse chronological order
const photos: Photo[] = [
  {
    id: 10,
    image: "/gallery/20261002.webp",
    date: "2026.10.02",
    location: { en: "Cathedral of Santa Maria del Fiore, Florence", ja: "サンタ・マリア・デル・フィオーレ大聖堂、フィレンツェ" },
    description: { en: "Florence is a city where every street looks like a work of art.", ja: "フィレンツェは、どこを歩いても絵になる街です。" }
  },
  {
    id: 11,
    image: "/gallery/20260929.webp",
    date: "2026.09.29",
    location: { en: "St. Peter’s Basilica, Vatican City", ja: "サン・ピエトロ大聖堂、バチカン市国" },
    description: { en: "I took this shot, captivated by the Swiss Guards standing watch over Vatican City.", ja: "バチカンを護衛するスイス衛兵に見惚れて撮った一枚です。" }
  },
  {
    id: 12,
    image: "/gallery/20260520.webp",
    date: "2026.05.20",
    location: { en: "Trocadéro Gardens, Paris", ja: "トロカデロ庭園、パリ" },
    description: { en: "I took a walk through the Trocadéro Gardens on a clear day, with a beautiful view of the Eiffel Tower.", ja: "晴れた日のパリで、エッフェル塔がよく見えるトロカデロ庭園を散歩しました。" }
  },
  {
    id: 1,
    image: "/gallery/20251119.webp",
    date: "2025.11.19",
    location: { en: "Ninenzaka, Kyoto", ja: "二年坂、京都" },
    description: { en: "Despite being such a famous spot, this was my first visit to Ninenzaka. It was bustling with visitors from around the world, and the atmosphere was incredible!", ja: "かなり有名な場所ですが、実は初めて訪れた二年坂。海外からの観光客も多く、雰囲気が最高でした。" }
  },
  {
    id: 2,
    image: "/gallery/20240507.webp",
    date: "2024.05.07",
    location: { en: "San Diego State University, California", ja: "サンディエゴ州立大学、カリフォルニア" },
    description: { en: "San Diego State University, where I studied abroad. I loved this campus and came here every day.", ja: "留学していたサンディエゴ州立大学。大好きなキャンパスで、毎日通いました。" }
  },
  {
    id: 3,
    image: "/gallery/20240429.webp",
    date: "2024.04.29",
    location: { en: "La Jolla Cove, California", ja: "ラホヤ・コーブ、カリフォルニア" },
    description: { en: "I first saw La Jolla in my junior high school English textbook. This beautiful beach town on San Diego's coast truly shows why the city is called 'America's Finest City.'", ja: "中学校の英語の教科書に載っていたラホヤ。留学先のサンディエゴ郊外にある素敵なビーチタウンで、『America's Finest City』という愛称にふさわしい場所です。" }
  },
  {
    id: 4,
    image: "/gallery/20240405.webp",
    date: "2024.04.05",
    location: { en: "UNAM Central Library, Mexico City", ja: "メキシコ国立自治大学中央図書館、メキシコシティ" },
    description: { en: "The Central Library at UNAM, known for its striking mosaic murals inspired by Mexico's pre-Hispanic past. The university campus is also a UNESCO World Heritage Site.", ja: "メキシコ国立自治大学内にある中央図書館。先スペイン期の文化をモチーフにした壁画が特徴的で、キャンパスは世界文化遺産にも登録されています。" }
  },
  {
    id: 5,
    image: "/gallery/20240114.webp",
    date: "2024.01.14",
    location: { en: "Salar de Uyuni, Bolivia", ja: "ウユニ塩湖、ボリビア" },
    description: { en: "Salar de Uyuni on a clear new-moon night. So far, this is the best place I have ever visited.", ja: "晴れた新月の夜のウユニ塩湖。今のところ、人生で訪れた中で一番好きな場所です。" }
  },
  {
    id: 6,
    image: "/gallery/20240103.webp",
    date: "2024.01.03",
    location: { en: "Plaza de Bolívar, Bogota", ja: "ボリバル広場、ボゴタ" },
    description: { en: "A famous square in Bogota, Colombia, with an incredible number of pigeons.", ja: "コロンビア・ボゴタの有名な広場。驚くほどたくさんの鳩がいました。" }
  },
  {
    id: 7,
    image: "/gallery/20231223.webp",
    date: "2023.12.23",
    location: { en: "Manhattan Bridge, New York", ja: "マンハッタン橋、ニューヨーク" },
    description: { en: "A shot from New York. The Manhattan Bridge looks especially beautiful from Dumbo.", ja: "ニューヨークでの一枚。マンハッタン橋はダンボ地区から撮るときれいに見えます。" }
  },
  {
    id: 8,
    image: "/gallery/20231222.webp",
    date: "2023.12.22",
    location: { en: "University of Toronto, Toronto", ja: "トロント大学、トロント" },
    description: { en: "The University of Toronto in winter: a quiet, historic campus where I even spotted a squirrel.", ja: "冬のトロント大学。静かで歴史のあるキャンパスで、リスも見つけました。" }
  },
  {
    id: 9,
    image: "/gallery/20230730.webp",
    date: "2023.07.30",
    location: { en: "Jōdogahama, Iwate", ja: "浄土ヶ浜、岩手" },
    description: { en: "Jodogahama in summer is one of my absolute favorite places in Japan.", ja: "夏の浄土ヶ浜は、日本でも屈指のお気に入りスポットです。" }
  },
]

export default function Gallery() {
  const { locale, text } = useLanguage()
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const headingClass = locale === 'ja' ? 'font-display-space' : 'font-display-outline'

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
            <h1 className={`${headingClass} inline-block text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 mb-12`}>
              {text.sections.gallery}
            </h1>
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
                      aria-label={`${text.gallery.viewPhoto} ${photo.location[locale]}`}
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
                            alt={photo.description[locale]}
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
                          {photo.location[locale]}
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
                aria-label={text.gallery.close}
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
                alt={selectedPhoto.description[locale]}
                fill
                sizes="(max-width: 600px) 40vh, 50vh"
                className="object-contain object-center"
              />
            </Box>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography id="gallery-photo-title" variant="h6" sx={{ fontWeight: 600 }}>
                {selectedPhoto.location[locale]}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.65 }}>
                {selectedPhoto.date}
              </Typography>
              <Typography id="gallery-photo-description" variant="body1" sx={{ mt: 1.5, opacity: 0.8 }}>
                {selectedPhoto.description[locale]}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  )
}
