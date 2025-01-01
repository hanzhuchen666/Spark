import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
  Rating,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Science as ScienceIcon,
  Update as UpdateIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'funding' | 'subscription';
  price?: string;
  fundingGoal?: string;
  category: string;
  rating: number;
  totalReviews: number;
  author: {
    name: string;
    tag: string;
    avatar: string;
  };
  specs: {
    overview: {
      vision: string;
      problem: string;
      solution: string;
    };
    technical: {
      [key: string]: string;
    };
    timeline: Array<{
      date: string;
      title: string;
      description: string;
    }>;
    reviews: Array<{
      id: number;
      user: string;
      avatar: string;
      rating: number;
      date: string;
      comment: string;
    }>;
  };
}

// Sample product data with extended information
const productDetails: ProductDetails = {
  id: 1,
  title: "AI-Powered Smart Home Assistant",
  description: "Revolutionary AI assistant that learns and adapts to your lifestyle. Seeking seed funding for development.",
  image: "/images/products/smart-home.jpg",
  type: "funding",
  fundingGoal: "$500,000",
  price: undefined,
  category: "AI & Robotics",
  rating: 4.5,
  totalReviews: 28,
  author: {
    name: "Tech Innovators Group",
    tag: "Columbia University students",
    avatar: "/images/avatars/team1.jpg"
  },
  specs: {
    overview: {
      vision: "Create an AI assistant that truly understands and anticipates user needs",
      problem: "Current smart home solutions lack true intelligence and adaptability",
      solution: "Using advanced machine learning to create a personalized experience",
    },
    technical: {
      architecture: "Distributed edge computing with cloud backup",
      aiModel: "Custom transformer-based neural network",
      privacy: "Local processing with encrypted cloud sync",
      compatibility: "Works with major smart home protocols",
      hardware: "Custom-designed ARM-based processor",
    },
    timeline: [
      {
        date: "2024 Q1",
        title: "Initial Prototype",
        description: "Complete working prototype with basic functionality"
      },
      {
        date: "2024 Q2",
        title: "Beta Testing",
        description: "Limited release to early adopters"
      },
      {
        date: "2024 Q3",
        title: "Manufacturing",
        description: "Begin mass production"
      },
      {
        date: "2024 Q4",
        title: "Market Launch",
        description: "Full market release with complete feature set"
      }
    ],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        avatar: "/images/avatars/user1.jpg",
        rating: 5,
        date: "2024-01-15",
        comment: "Impressive technology and clear development roadmap. The team's background in AI is evident."
      },
      {
        id: 2,
        user: "Sarah Chen",
        avatar: "/images/avatars/user2.jpg",
        rating: 4,
        date: "2024-01-14",
        comment: "Strong potential but would like to see more details about privacy protection."
      }
    ]
  }
};

const ProductSpecsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, fetch product details based on id
  
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {productDetails.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={productDetails.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                ({productDetails.totalReviews} reviews)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip
                label={productDetails.type === 'funding' ? 'Seeking Funding' : 'Subscription'}
                color={productDetails.type === 'funding' ? 'primary' : 'secondary'}
              />
              <Typography variant="h6" color="primary">
                {productDetails.type === 'funding' ? productDetails.fundingGoal : productDetails.price}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={productDetails.author.avatar}
                sx={{ width: 64, height: 64 }}
              />
              <Box>
                <Typography variant="h6">{productDetails.author.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {productDetails.author.tag}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* Overview Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ScienceIcon /> Overview
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Vision</Typography>
                <Typography>{productDetails.specs.overview.vision}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Problem</Typography>
                <Typography>{productDetails.specs.overview.problem}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Solution</Typography>
                <Typography>{productDetails.specs.overview.solution}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Timeline Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <UpdateIcon /> Development Timeline
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Timeline>
              {productDetails.specs.timeline.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color="text.secondary">
                    {event.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < productDetails.specs.timeline.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography variant="body2">{event.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </Grid>

        {/* Technical Specs Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BuildIcon /> Technical Specifications
            </Typography>
            <Divider sx={{ my: 2 }} />
            <List>
              {Object.entries(productDetails.specs.technical).map(([key, value]) => (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <CodeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={key.charAt(0).toUpperCase() + key.slice(1)}
                    secondary={value}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Reviews Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <StarIcon /> Reviews
            </Typography>
            <Divider sx={{ my: 2 }} />
            <List>
              {productDetails.specs.reviews.map((review) => (
                <ListItem key={review.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={review.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="subtitle1">{review.user}</Typography>
                        <Rating value={review.rating} size="small" readOnly />
                        <Typography variant="caption" color="text.secondary">
                          {review.date}
                        </Typography>
                      </Box>
                    }
                    secondary={review.comment}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductSpecsPage; 