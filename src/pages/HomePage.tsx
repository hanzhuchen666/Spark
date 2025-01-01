import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Overview section content
const overviewContent = {
  title: "Discover the evolution of technology through comprehensive timelines",
  description: "Your go-to platform for in-depth technical evolution timelines and expert analysis of breakthrough technologies.",
  features: [
    "Comprehensive timelines",
    "Expert analysis",
    "Topic-based organization",
    "Technical deep-dives"
  ]
};

const featuredNews = {
  title: "Boston Dynamics' Atlas Robot: Latest Breakthrough in Manipulation",
  image: "/images/topics/atlas-hero.jpg",
  description: "The newest update brings unprecedented dexterity to robotic hands, allowing Atlas to handle complex objects with human-like precision.",
  topic: "Robotics",
};

// Extended mock data for more content
const topicNews = [
  {
    id: 1,
    topic: "Boston Dynamics Atlas",
    title: "Evolution of Atlas: From First Steps to Advanced Manipulation",
    image: "/images/topics/atlas-timeline.jpg",
    description: "A comprehensive timeline of Atlas robot's development from its initial release to the latest capabilities.",
  },
  {
    id: 2,
    topic: "Tesla FSD",
    title: "Tesla's Full Self-Driving Beta: Version 12 Analysis",
    image: "/images/topics/tesla-fsd.jpg",
    description: "Deep dive into the latest FSD beta release and its neural network improvements.",
  },
  {
    id: 3,
    topic: "SpaceX Starship",
    title: "Starship's Second Test Flight: Technical Deep Dive",
    image: "/images/topics/starship.jpg",
    description: "Analysis of improvements and technical specifications of the latest Starship test.",
  },
  {
    id: 4,
    topic: "Apple M3 Chip",
    title: "Apple Silicon Evolution: From M1 to M3 Max",
    image: "/images/topics/m3-chip.jpg",
    description: "Technical analysis of Apple's chip architecture development and performance improvements.",
  },
  {
    id: 5,
    topic: "OpenAI GPT",
    title: "GPT Architecture Evolution: From GPT-1 to GPT-4",
    image: "/images/topics/gpt4.jpg",
    description: "Deep dive into the architectural changes and capabilities of GPT models over time.",
  },
  {
    id: 6,
    topic: "Quantum Computing",
    title: "IBM's Quantum Roadmap: From 27 to 1000+ Qubits",
    image: "/images/topics/quantum.jpg",
    description: "Comprehensive analysis of IBM's quantum computing development and future plans.",
  },
];

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: '#f5f5f7' }}>
      {/* Overview Section */}
      <Box 
        sx={{ 
          bgcolor: 'white',
          py: { xs: 6, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(45deg, #1a1a1a 30%, #666 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {overviewContent.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#666',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {overviewContent.description}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {overviewContent.features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: '#f8f9fa',
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {feature}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured News Section */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            mb: 6,
            overflow: 'hidden',
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              height: isMobile ? '400px' : '600px',
              backgroundImage: `url(${featuredNews.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: 3, md: 6 },
                color: 'white',
              }}
            >
              <Chip
                label={featuredNews.topic}
                color="primary"
                sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.9)', color: 'black' }}
              />
              <Typography
                component="h1"
                variant={isMobile ? 'h4' : 'h2'}
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {featuredNews.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  maxWidth: '800px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {featuredNews.description}
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/article/featured"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Topic-based News Section */}
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            fontWeight: 700,
            color: '#1a1a1a',
          }}
        >
          Latest in Tech
        </Typography>
        <Grid container spacing={3}>
          {topicNews.map((news) => (
            <Grid item key={news.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={240}
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Chip
                    label={news.topic}
                    size="small"
                    sx={{ 
                      mb: 2,
                      bgcolor: '#f0f0f0',
                      color: '#666',
                      fontWeight: 500,
                    }}
                  />
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {news.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {news.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/topic/${news.topic.toLowerCase().replace(' ', '-')}`}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: 'transparent',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    View Full Timeline →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage; 