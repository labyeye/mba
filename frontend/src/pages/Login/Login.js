import React from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  InputAdornment,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  // Add responsive hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Colors from the Kaksha logo
  const kakshaPrimaryGreen = "#3d6e39"; // Dark green from logo
  const kakshaSecondaryGreen = "#4d8a48"; // Lighter green for gradient
  const kakshaLightText = "#f5f5f0"; // Off-white text color
  
  const handleSignupClick = () => {
    navigate("/signup");
  };
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="lg" sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center",
      py: 4 // Add padding for better mobile display
    }}>
      <Grid container sx={{ 
        minHeight: { xs: "auto", md: "500px" }, 
        boxShadow: 3, 
        borderRadius: 2, 
        overflow: "hidden", 
        position: "relative",
        transform: "scale(1)",
        transition: "transform 0.3s ease",
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

        {/* Left Panel */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ 
            background: `linear-gradient(135deg, ${kakshaSecondaryGreen} 30%, ${kakshaPrimaryGreen} 90%)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { xs: 3, md: 4 },
            color: kakshaLightText
          }}
        >
          {/* Show logo on mobile at the top of the left panel */}
          {isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Kaksha Logo"
                sx={{
                  width: 80,
                  height: "auto",
                  mr: 2
                }}
              />
            </Box>
          )}
          
          <Typography variant="h3" sx={{ 
            fontWeight: "bold", 
            mb: 1,
            fontSize: { xs: "2rem", md: "3rem" }
          }}>
            Sign In.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
            Finance Simplified. Futures Amplified.
          </Typography>
          <Typography variant="body2" sx={{ mt: "auto", opacity: 0.7 }}>
            © 2025 Kaksha
          </Typography>
        </Grid>

        {/* Right Panel - Form */}
        <Grid item xs={12} md={7}>
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              height: "100%",
              p: { xs: 3, md: 6 }
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Sign In
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Welcome back! Please enter your details to log in.
            </Typography>

            <Box component="form" sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
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
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                size="small"
                sx={{ 
                  mb: 3, 
                  mt: 0,
                  "& .MuiOutlinedInput-root": {
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)"
                    }
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 2, 
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
                Continue
              </Button>
            </Box>

            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              Don't have an account?{" "}
              <Button 
                onClick={handleSignupClick}
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
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;