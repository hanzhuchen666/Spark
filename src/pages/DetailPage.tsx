import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Card,
  CardContent,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// Mock data for the Tesla FSD article
const articleData = {
  id: 'tesla-fsd-v12',
  title: "Tesla's Full Self-Driving Beta: Version 12 Analysis",
  image: "/images/topics/tesla-fsd-hero.jpg",
  timeline: [
    {
      date: "2024-01",
      title: "Version 12.0 Release",
      content: "Initial release of FSD Beta v12",
      overview: "Tesla's FSD Beta v12.0 marks a revolutionary shift in autonomous driving, introducing a pure vision-based neural network approach that eliminates all hard-coded rules. This release represents the most significant architectural change in the system's history.",
      technicalAspects: [
        {
          id: 1,
          title: "Final Neural Network Architecture",
          content: "The production release implements a unified single-stack neural network, successfully merging city and highway driving under one AI model. Performance metrics show 30% improvement in complex scenarios.",
          image: "/images/topics/tesla-neural.jpg",
          reviews: [
            {
              author: "Dr. Jane Smith",
              content: "The unified architecture shows remarkable improvements in handling edge cases, particularly in mixed urban-highway transitions.",
              timestamp: "2024-01-21",
              approved: true,
            }
          ]
        },
        {
          id: 2,
          title: "Production Vision System",
          content: "Final version brings enhanced object detection with 99.9% accuracy and sub-centimeter precision in distance estimation.",
          image: "/images/topics/tesla-vision.jpg",
          reviews: []
        }
      ]
    },
    {
      date: "2023-12",
      title: "Public Beta Testing",
      content: "Extended testing phase begins",
      overview: "The public beta testing phase of FSD v12 begins, with a select group of testers evaluating the new neural network architecture in diverse real-world conditions.",
      technicalAspects: [
        {
          id: 1,
          title: "Beta Neural Network Performance",
          content: "Initial testing shows promising results with the unified neural network approach, though some edge cases still require refinement.",
          image: "/images/topics/tesla-neural.jpg",
          reviews: []
        },
        {
          id: 2,
          title: "Beta Vision System",
          content: "Testing reveals improved object detection capabilities, with particular success in challenging weather conditions.",
          image: "/images/topics/tesla-vision.jpg",
          reviews: []
        }
      ]
    },
    {
      date: "2023-11",
      title: "Architecture Announcement",
      content: "Tesla reveals new neural network approach",
      overview: "Tesla announces a fundamental redesign of the FSD system, moving to a pure neural network approach and eliminating all hard-coded rules.",
      technicalAspects: [
        {
          id: 1,
          title: "Proposed Architecture",
          content: "Detailed plans for the new single-stack neural network are revealed, promising better handling of complex scenarios.",
          image: "/images/topics/tesla-neural.jpg",
          reviews: []
        }
      ]
    },
    {
      date: "2023-10",
      title: "Development Begins",
      content: "Initial work on version 12 starts",
      overview: "Development of FSD v12 begins with the ambitious goal of creating a pure vision-based neural network system.",
      technicalAspects: [
        {
          id: 1,
          title: "Initial Research",
          content: "Early research and development work begins on the feasibility of a pure neural network approach.",
          image: "/images/topics/tesla-neural.jpg",
          reviews: []
        }
      ]
    }
  ],
};

const DetailPage: React.FC = () => {
  const [selectedAspect, setSelectedAspect] = useState<number | null>(null);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [isAddAspectOpen, setIsAddAspectOpen] = useState(false);
  const [newReview, setNewReview] = useState({ aspect: '', content: '' });
  const [selectedMonth, setSelectedMonth] = useState<string>("2024-01");

  // Get current timeline data based on selected month
  const currentTimelineData = articleData.timeline.find(item => item.date === selectedMonth);

  const handleAddReview = () => {
    setIsAddReviewOpen(false);
    setNewReview({ aspect: '', content: '' });
  };

  const handleAddAspect = () => {
    setIsAddAspectOpen(false);
  };

  const handleTimelineSelect = (date: string) => {
    setSelectedMonth(date);
    setSelectedAspect(null); // Reset selected aspect when timeline changes
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f7', minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '500px',
          position: 'relative',
          backgroundImage: `url(${articleData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              pb: 6,
              color: 'white',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
              {articleData.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Typography variant="subtitle1">
                Version as of {currentTimelineData?.date}
              </Typography>
              <Typography variant="subtitle1">
                {currentTimelineData?.title}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Overview Section */}
            <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Overview
              </Typography>
              <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7 }}>
                {currentTimelineData?.overview}
              </Typography>
            </Paper>

            {/* Technical Aspects Section */}
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Technical Aspects
            </Typography>
            {currentTimelineData?.technicalAspects.map((aspect) => (
              <Accordion
                key={aspect.id}
                expanded={selectedAspect === aspect.id}
                onChange={() => setSelectedAspect(selectedAspect === aspect.id ? null : aspect.id)}
                sx={{ mb: 2, borderRadius: '8px !important' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>{aspect.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 4, color: '#444', lineHeight: 1.7 }}>
                    {aspect.content}
                  </Typography>
                  
                  {/* Reviews Section */}
                  {aspect.reviews && aspect.reviews.length > 0 && (
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>Expert Reviews</Typography>
                      {aspect.reviews.map((review, index) => (
                        <Card key={index} sx={{ mb: 2, bgcolor: '#f8f9fa' }}>
                          <CardContent>
                            <Typography variant="subtitle2" sx={{ color: '#666' }}>
                              {review.author} • {review.timestamp}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              {review.content}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}

            {/* Add Review/Aspect Buttons */}
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => setIsAddReviewOpen(true)}
              >
                Add Review
              </Button>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setIsAddAspectOpen(true)}
              >
                Propose New Aspect
              </Button>
            </Box>
          </Grid>

          {/* Timeline Panel */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                borderRadius: 2,
                position: 'sticky',
                top: 24,
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Development Timeline
              </Typography>
              
              <Timeline>
                {articleData.timeline.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent color="text.secondary">
                      {item.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot 
                        sx={{ 
                          bgcolor: selectedMonth === item.date ? 'secondary.main' : 'primary.main',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.2)',
                          }
                        }}
                        onClick={() => handleTimelineSelect(item.date)}
                      />
                      {index < articleData.timeline.length - 1 && (
                        <TimelineConnector sx={{ 
                          bgcolor: 'primary.main',
                          opacity: 0.3
                        }} />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.content}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Paper>
          </Grid>
        </Grid>

        {/* Add Review Dialog */}
        <Dialog open={isAddReviewOpen} onClose={() => setIsAddReviewOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Add Technical Review</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <InputLabel>Select Technical Aspect</InputLabel>
              <Select
                value={newReview.aspect}
                onChange={(e) => setNewReview({ ...newReview, aspect: e.target.value })}
                label="Select Technical Aspect"
              >
                {currentTimelineData?.technicalAspects.map((aspect) => (
                  <MenuItem key={aspect.id} value={aspect.id}>
                    {aspect.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Your Technical Review"
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddReviewOpen(false)}>Cancel</Button>
            <Button onClick={handleAddReview} variant="contained">Submit</Button>
          </DialogActions>
        </Dialog>

        {/* Add Aspect Dialog */}
        <Dialog open={isAddAspectOpen} onClose={() => setIsAddAspectOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Propose New Technical Aspect</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Aspect Title"
              sx={{ mt: 2, mb: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Initial Technical Analysis"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddAspectOpen(false)}>Cancel</Button>
            <Button onClick={handleAddAspect} variant="contained">Submit</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default DetailPage; 