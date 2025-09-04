import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import './login.css'

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Paper class="login-card"
        elevation={6}
        sx={{ p: 4, mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", justifySelf: "center" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} 
        sx={{ mt: 1,
            input: {
                color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
                borderColor: "#00ffc8",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#00ffc8",
            },
            },
            "& .MuiInputLabel-root": {
            color: "rgba(255,255,255,0.7)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
            color: "#00ffc8",
            },
         }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
