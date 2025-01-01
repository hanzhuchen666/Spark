import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import { 
  Search as SearchIcon,
  Add as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

// Define product type
interface Product {
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
    avatar?: string;
  };
}

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    title: "AI-Powered Smart Home Assistant",
    description: "Revolutionary AI assistant that learns and adapts to your lifestyle. Seeking seed funding for development.",
    image: "/images/products/smart-home.jpg",
    type: "funding",
    fundingGoal: "$500,000",
    category: "AI & Robotics",
    rating: 4.5,
    totalReviews: 28,
    author: {
      name: "Tech Innovators Group",
      tag: "Columbia University students",
      avatar: "/images/avatars/team1.jpg"
    }
  },
  {
    id: 2,
    title: "Developer Productivity Suite",
    description: "Complete toolkit for developers to boost productivity. Monthly subscription includes all features.",
    image: "/images/products/dev-tools.jpg",
    type: "subscription",
    price: "$29.99/month",
    category: "Software",
    rating: 4.8,
    totalReviews: 156,
    author: {
      name: "CodeCraft Team",
      tag: "Indie developer group",
      avatar: "/images/avatars/team2.jpg"
    }
  },
  {
    id: 3,
    title: "Smart Manufacturing Robot",
    description: "Advanced robotic system for automated manufacturing processes with AI integration.",
    image: "/images/products/robot.jpg",
    type: "funding",
    fundingGoal: "$2,000,000",
    category: "Hardware",
    rating: 4.2,
    totalReviews: 45,
    author: {
      name: "Zhang Wei",
      tag: "DaJi mechanical engineer",
      avatar: "/images/avatars/engineer1.jpg"
    }
  }
];

// New interface for product requests
interface ProductRequest {
  id: number;
  title: string;
  description: string;
  category: string;
  requestedBy: string;
  email: string;
  date: string;
}

const InnoMarket: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openRequestDialog, setOpenRequestDialog] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Form state for product request
  const [requestForm, setRequestForm] = useState({
    title: '',
    description: '',
    category: '',
    name: '',
    email: '',
  });

  // Filter products based on all criteria
  const filteredProducts = sampleProducts.filter(product => {
    const typeMatch = filterType === 'all' || product.type === filterType;
    const categoryMatch = filterCategory === 'all' || product.category === filterCategory;
    const searchMatch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.author.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && categoryMatch && searchMatch;
  });

  const handleRequestSubmit = () => {
    // Here you would typically send this to your backend
    console.log('Product Request:', requestForm);
    setOpenRequestDialog(false);
    setShowSuccessMessage(true);
    setRequestForm({
      title: '',
      description: '',
      category: '',
      name: '',
      email: '',
    });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        InnoMarket - Tech Innovation Marketplace
      </Typography>

      {/* Search and Filters */}
      <Stack spacing={3} sx={{ mb: 4 }}>
        {/* Enhanced Search Bar */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            fullWidth
            placeholder="Search products, creators, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
            }}
            sx={{ maxWidth: 600 }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenRequestDialog(true)}
            sx={{ height: 56 }}
          >
            Request Product
          </Button>
        </Box>

        {/* Existing Filters */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={filterType}
              label="Type"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="funding">Seeking Funding</MenuItem>
              <MenuItem value="subscription">Subscription Products</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={filterCategory}
              label="Category"
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="AI & Robotics">AI & Robotics</MenuItem>
              <MenuItem value="Software">Software</MenuItem>
              <MenuItem value="Hardware">Hardware</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      {/* Product Request Dialog */}
      <Dialog 
        open={openRequestDialog} 
        onClose={() => setOpenRequestDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Request a Product
          <IconButton
            aria-label="close"
            onClick={() => setOpenRequestDialog(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              label="Product Title"
              fullWidth
              value={requestForm.title}
              onChange={(e) => setRequestForm({ ...requestForm, title: e.target.value })}
              placeholder="What kind of product are you looking for?"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={requestForm.description}
              onChange={(e) => setRequestForm({ ...requestForm, description: e.target.value })}
              placeholder="Describe the product you're looking for and its potential use cases..."
            />
            <TextField
              label="Category"
              fullWidth
              value={requestForm.category}
              onChange={(e) => setRequestForm({ ...requestForm, category: e.target.value })}
              placeholder="e.g., AI & Robotics, Software, Hardware"
            />
            <TextField
              label="Your Name"
              fullWidth
              value={requestForm.name}
              onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={requestForm.email}
              onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
              placeholder="We'll notify you when similar products are available"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRequestDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleRequestSubmit}>Submit Request</Button>
        </DialogActions>
      </Dialog>

      {/* Success Message Snackbar */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={() => setShowSuccessMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccessMessage(false)} 
          severity="success"
          variant="filled"
        >
          Your product request has been submitted successfully! We'll notify you when similar products become available.
        </Alert>
      </Snackbar>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No products found matching your criteria
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Can't find what you're looking for? 
            <Button 
              color="primary" 
              onClick={() => setOpenRequestDialog(true)}
              sx={{ ml: 1 }}
            >
              Request a Product
            </Button>
          </Typography>
        </Box>
      )}

      {/* Product Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {product.author.avatar && (
                    <Box
                      component="img"
                      src={product.author.avatar}
                      alt={product.author.name}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        mr: 1,
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  <Box>
                    <Typography variant="subtitle2" component="div">
                      {product.author.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {product.author.tag}
                    </Typography>
                  </Box>
                </Box>

                <Typography gutterBottom variant="h6" component={Link} to={`/product/${product.id}`} 
                  sx={{ 
                    color: 'inherit', 
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}>
                  {product.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={product.rating} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.totalReviews})
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Chip
                    label={product.type === 'funding' ? 'Seeking Funding' : 'Subscription'}
                    color={product.type === 'funding' ? 'primary' : 'secondary'}
                  />
                  <Typography variant="subtitle1" color="primary">
                    {product.type === 'funding' ? product.fundingGoal : product.price}
                  </Typography>
                </Box>

                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2, mb: 1 }}
                >
                  View Specifications
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                >
                  {product.type === 'funding' ? 'Invest Now' : 'Subscribe'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InnoMarket; 