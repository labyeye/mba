import React from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Grid,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Lottie from 'react-lottie';
import plantGrowthAnimation from '../../animations/plant.json';
import logo from "../../images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // Colors from the Kaksha logo
  const kakshaPrimaryGreen = "#3d6e39"; // Dark green from logo
  const kakshaSecondaryGreen = "#4d8a48"; // Lighter green for gradient
  const kakshaLightText = "#f5f5f0"; // Off-white text color
  const navigate = useNavigate();
  
  // Add responsive hooks
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
  
  const handleSigninClick = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="lg" sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center",
      py: 4 // Add padding for better mobile display
    }}>
      <Grid container sx={{ 
        minHeight: { xs: "auto", md: "600px" }, 
        boxShadow: 3, 
        borderRadius: 2, 
        overflow: "hidden",
        transform: "scale(1)",
        transition: "transform 0.3s ease",
        position: "relative", // Add relative positioning for absolute logo
        "&:hover": {
          transform: "scale(1.01)"
        }
      }}>
        {/* Logo in top right corner - only visible on desktop */}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Kaksha Logo"
              sx={{
                width: 100,
                height: "auto",
                mb: 1
              }}
            />
          </Box>
        )}
        
        {/* Left Panel - Animation and branding */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ 
            background: `linear-gradient(135deg, ${kakshaSecondaryGreen} 30%, ${kakshaPrimaryGreen} 90%)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 3, md: 4 },
            color: kakshaLightText
          }}
        >
          {/* Show logo on mobile at the top of the left panel */}
          {isMobile && (
            <Box sx={{ width: "100px", mb: 3 }}>
              <img 
                src={logo}
                alt="Kaksha Logo" 
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          )}
          
          <Box sx={{ 
            width: "100%", 
            height: { xs: "180px", md: "250px" }, 
            display: "flex", 
            justifyContent: "center",
            mt: { xs: 0, md: 8 } // Add more top margin on desktop to account for logo
          }}>
            <Lottie 
              options={defaultOptions} 
              height={isMobile ? 180 : 350} 
              width={isMobile ? 180 : 250} 
            />
          </Box>
          
          <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3 } }}>
            <Typography variant="h4" sx={{ fontFamily: "serif", mb: 1 }}>
              KAKSHA
            </Typography>
            <Typography variant="body2" sx={{ letterSpacing: 2 }}>
              FINANCE SIMPLIFIED FUTURES AMPLIFIED
            </Typography>
          </Box>
        </Grid>

        {/* Right Panel - Form */}
        <Grid item xs={12} md={7} sx={{ bgcolor: "white" }}>
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: "column",
              p: { xs: 3, md: 5 },
              pt: { md: 8 } // Add more top padding on desktop to account for logo
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: "serif", fontWeight: "bold", color: kakshaPrimaryGreen, mb: 0.5 }}>
              Join Kaksha
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Create your account to get started
            </Typography>

            <Box component="form" sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Full Name
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                name="name"
                placeholder="Your full name"
                size="small"
                sx={{ 
                  mb: 2, 
                  mt: 0,
                  "& .MuiOutlinedInput-root": {
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)"
                    }
                  }
                }}
              />

              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Email address
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                size="small"
                sx={{ 
                  mb: 2, 
                  mt: 0,
                  "& .MuiOutlinedInput-root": {
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)"
                    }
                  }
                }}
              />

              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                placeholder="Create a password"
                size="small"
                sx={{ 
                  mb: 0.5, 
                  mt: 0,
                  "& .MuiOutlinedInput-root": {
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)"
                    }
                  }
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                Password must be at least 8 characters long
              </Typography>

              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Confirm Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                size="small"
                sx={{ 
                  mb: 2, 
                  mt: 0,
                  "& .MuiOutlinedInput-root": {
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)"
                    }
                  }
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox 
                    name="terms" 
                    color="success"
                    sx={{ 
                      color: kakshaPrimaryGreen,
                      '&.Mui-checked': {
                        color: kakshaPrimaryGreen,
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{' '}
                    <Button 
                      component="span" 
                      sx={{ 
                        color: kakshaPrimaryGreen, 
                        p: 0, 
                        minWidth: "auto", 
                        textTransform: "none", 
                        fontWeight: 500,
                        "&:hover": { 
                          background: "transparent", 
                          textDecoration: "underline" 
                        } 
                      }}
                    >
                      Terms of Service
                    </Button>{' '}
                    and{' '}
                    <Button 
                      component="span" 
                      sx={{ 
                        color: kakshaPrimaryGreen, 
                        p: 0, 
                        minWidth: "auto", 
                        textTransform: "none", 
                        fontWeight: 500,
                        "&:hover": { 
                          background: "transparent", 
                          textDecoration: "underline" 
                        } 
                      }}
                    >
                      Privacy Policy
                    </Button>
                  </Typography>
                }
                sx={{ mt: 1 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  py: 1.5,
                  backgroundColor: kakshaPrimaryGreen,
                  transition: "all 0.3s ease",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: kakshaSecondaryGreen,
                    transform: "translateY(-2px)"
                  }
                }}
              >
                Create Account
              </Button>
            </Box>

            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              Already have an account?{" "}
              <Button 
                onClick={handleSigninClick}
                component="span" 
                sx={{ 
                  color: kakshaPrimaryGreen, 
                  fontWeight: 500, 
                  p: 0, 
                  minWidth: "auto", 
                  textTransform: "none", 
                  "&:hover": { 
                    background: "transparent", 
                    textDecoration: "underline" 
                  } 
                }}
              >
                Sign in
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;