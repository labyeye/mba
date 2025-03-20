import React from "react";
import { 
  Box, 
  Button, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import logo from "../../images/logo.jpeg";
import plantGrowthAnimation from '../../animations/plant.json';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const HomePage = () => {
  // Colors from the Kaksha design
  const kakshaPrimaryGreen = "#3d6e39"; // Dark green from logo
  const kakshaSecondaryGreen = "#4d8a48"; // Lighter green for gradient
  const kakshaLightText = "#f5f5f0"; // Off-white text color
  
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: plantGrowthAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <AppBar position="static" sx={{ backgroundColor: kakshaPrimaryGreen, boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="Kaksha Logo"
              sx={{
                width: 45,
                height: "auto",
                mr: 1
              }}
            />
            <Typography variant="h6" sx={{ fontFamily: "serif", display: { xs: 'none', sm: 'block' } }}>
              KAKSHA FINANCE
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit" sx={{ mx: 1 }}>Home</Button>
              <Button color="inherit" sx={{ mx: 1 }}>Courses</Button>
              <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
              <Button color="inherit" sx={{ mx: 1 }}>Contact</Button>
              <Button 
                color="inherit" 
                variant="outlined" 
                sx={{ 
                  ml: 2, 
                  borderColor: kakshaLightText,
                  '&:hover': {
                    borderColor: kakshaLightText,
                    backgroundColor: 'rgba(245, 245, 240, 0.1)'
                  }
                }}
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button 
                variant="contained" 
                sx={{ 
                  ml: 1, 
                  backgroundColor: kakshaLightText, 
                  color: kakshaPrimaryGreen,
                  '&:hover': {
                    backgroundColor: 'rgba(245, 245, 240, 0.8)'
                  }
                }}
                onClick={handleSignupClick}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${kakshaSecondaryGreen} 30%, ${kakshaPrimaryGreen} 90%)`,
        color: kakshaLightText,
        py: { xs: 8, md: 12 },
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontFamily: "serif", 
                  fontWeight: "bold", 
                  mb: 2 
                }}
              >
                Master Finance with Kaksha
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, fontWeight: 300 }}>
                Take your financial knowledge to the next level with expert-led courses and practical tools.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ 
                  backgroundColor: kakshaLightText,
                  color: kakshaPrimaryGreen,
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  boxShadow: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(245, 245, 240, 0.9)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Start Your Financial Journey
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: "100%", 
                height: { xs: "250px", md: "430px" }, 
                display: "flex", 
                justifyContent: "center"
              }}>
                <Lottie 
                  options={defaultOptions} 
                  height={isMobile ? 250 : 430} 
                  width={isMobile ? 250 : 350} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            fontFamily: "serif", 
            fontWeight: "bold",
            color: kakshaPrimaryGreen
          }}
        >
          Why Choose Kaksha Finance Academy
        </Typography>
        
        <Grid container spacing={4}>
          {[
            {
              title: "Expert-Led Courses",
              description: "Learn from industry professionals with years of experience in financial markets and investment strategies.",
              icon: <SchoolIcon sx={{ fontSize: 40, color: kakshaPrimaryGreen }} />
            },
            {
              title: "Practical Knowledge",
              description: "Gain skills you can apply immediately to your personal finances or professional career.",
              icon: <TrendingUpIcon sx={{ fontSize: 40, color: kakshaPrimaryGreen }} />
            },
            {
              title: "Market Analysis",
              description: "Access cutting-edge tools and insights to understand market trends and make informed decisions.",
              icon: <AutoGraphIcon sx={{ fontSize: 40, color: kakshaPrimaryGreen }} />
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Course Categories */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              fontFamily: "serif", 
              fontWeight: "bold",
              color: kakshaPrimaryGreen
            }}
          >
            Explore Our Finance Courses
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                title: "Investment Strategies",
                description: "Learn how to build and optimize your investment portfolio for long-term growth.",
                image: "https://isfm.co.in/wp-content/uploads/2025/01/HowToBuildAnInvestmentStrategy_image1-opt.jpg"
              },
              {
                title: "Financial Markets",
                description: "Understand the dynamics of global financial markets and economic indicators.",
                image: "https://media.warriortrading.com/2018/06/blog_financial_markets.jpg"
              },
              {
                title: "Risk Management",
                description: "Master techniques to assess and mitigate financial risks in various scenarios.",
                image: "https://ipkeys.com/wp-content/uploads/2022/08/RMF-7-Steps.jpeg"
              }
            ].map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)'
                    }
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={course.image}
                      alt={course.title}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {course.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: kakshaPrimaryGreen }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Learn More
                        </Typography>
                        <ArrowForwardIcon sx={{ ml: 1, fontSize: 16 }} />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${kakshaSecondaryGreen} 30%, ${kakshaPrimaryGreen} 90%)`,
        color: kakshaLightText,
        py: { xs: 6, md: 8 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontFamily: "serif", fontWeight: "bold", mb: 2 }}>
            Ready to Transform Your Financial Future?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mx: 'auto', maxWidth: '700px' }}>
            Join thousands of students who have already enhanced their financial literacy and taken control of their financial destiny with Kaksha Finance Academy.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              backgroundColor: kakshaLightText,
              color: kakshaPrimaryGreen,
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              boxShadow: 3,
              '&:hover': {
                backgroundColor: 'rgba(245, 245, 240, 0.9)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
              mr: 2
            }}
            onClick={handleSignupClick}
          >
            Create Account
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ 
              borderColor: kakshaLightText,
              color: kakshaLightText,
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                borderColor: kakshaLightText,
                backgroundColor: 'rgba(245, 245, 240, 0.1)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Browse Courses
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#333', color: kakshaLightText, py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="img"
                  src={logo}
                  alt="Kaksha Logo"
                  sx={{
                    width: 40,
                    height: "auto",
                    mr: 1
                  }}
                />
                <Typography variant="h6" sx={{ fontFamily: "serif" }}>
                  KAKSHA
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Finance Simplified, Futures Amplified
              </Typography>
              <Typography variant="body2">
                © 2025 Kaksha Finance Academy. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Quick Links
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Home
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Courses
              </Typography>
              <Typography variant="body2">
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Resources
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Blog
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Market Analysis
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Financial Tools
              </Typography>
              <Typography variant="body2">
                FAQ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Legal
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Terms of Service
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Privacy Policy
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Cookie Policy
              </Typography>
              <Typography variant="body2">
                Disclaimer
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;