import * as React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HeaderLanding from "../components/HeaderLanding";

const theme = createTheme();

export default function SignUp() {
  const [gradYear, setgradYear] = React.useState("2023");
  const gradYears = [
    {
      value: "2023",
      label: "2023",
    },
    {
      value: "2024",
      label: "2024",
    },
    {
      value: "2025",
      label: "2025",
    },
    {
      value: "2026",
      label: "2026",
    },
  ];
  const genders = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];
  const [gender, setGender] = React.useState("M");

  const [branch, setBranch] = React.useState("CSE");
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const branches = [
    {
      value: "CSE",
      label: "Computer Science And Engineering",
    },
    {
      value: "COE",
      label: "Computer Engineering",
    },
    {
      value: "COBS",
      label: "Computer Science with Business Systems",
    },
    {
      value: "EIC",
      label: "Electronics and Instrumentation Engineering",
    },
    {
      value: "ENC",
      label: "Electronics and Communication Engineering",
    },
    {
      value: "ME",
      label: "Mechanical Engineering",
    },
    {
      value: "CE",
      label: "Civil Engineering",
    },
  ];
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleChange = (event) => {
    setgradYear(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    axios
      .post("http://127.0.0.1:8000/user/register/student/", {
        name: data.get("firstName") + data.get("lastName"),
        registration_id: data.get("rollNum"),
        password: data.get("password"),
        email: data.get("email"),
        sex: gender,
        phone: data.get("phoneNum"),
        branch: branch,
        grad_year: gradYear,
      })
      .then(function (response) {
        setShow(true);
        window.location.href = "/login";
      })
      .catch(function (error) {
        if (error.response) {
          alert("User already exists");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderLanding />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#FF385C" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Institutes Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="rollNum"
                  label="Roll Number"
                  name="rollNum"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNum"
                  label="Phone Number"
                  name="phoneNum"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="gender"
                  select
                  label="Select"
                  value={gender}
                  onChange={handleGenderChange}
                  helperText="Select your Gender"
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="gradYear"
                  select
                  label="Select"
                  value={gradYear}
                  onChange={handleChange}
                  helperText="Select your Graduation Year"
                >
                  {gradYears.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="branch"
                  select
                  fullWidth
                  label="Select"
                  value={branch}
                  onChange={handleBranchChange}
                  helperText="Select your Branch"
                >
                  {branches.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              bg="#FF385C"
              sx={{ mt: 3, mb: 2, backgroundColor: "#FF385C" }}
            >
              Sign Up
            </Button>
            <Grid
              container
              justifyContent="flex-end"
              style={{ marginBottom: "8%" }}
            >
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: "#FF385C" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Registered Successfully</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Now login and wait for the hostel preference form to open. Till
                then you can see the list of available hostels to you after
                loggin in.
              </Modal.Body>
              <Modal.Footer>
                <Link
                  href="/login"
                  style={{
                    marginRight: "5%",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    style={{ backgroundColor: "#EC5990" }}
                    variant="primary"
                    onClick={handleClose}
                  >
                    Login
                  </Button>
                </Link>

                <Button
                  style={{ backgroundColor: "#EC5990" }}
                  variant="primary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
