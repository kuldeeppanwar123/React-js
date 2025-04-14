import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';

function MuiRegistrationForm() {
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (event, newSkills) => {
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept terms and conditions");
      return;
    }
    console.log({
      ...formValues,
      gender,
      experience,
      skills,
      termsAccepted
    });
    alert("Registration successful!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        p: 4,
        border: '1px solid #ccc',
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Registration Form
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Full Name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
          fullWidth
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleInputChange}
          fullWidth
        />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box>
          <Typography sx={{ mb: 1 }}>Skills</Typography>
          <ToggleButtonGroup
            value={skills}
            onChange={handleSkillsChange}
            color="primary"
          >
            <ToggleButton value="html">HTML</ToggleButton>
            <ToggleButton value="css">CSS</ToggleButton>
            <ToggleButton value="js">JavaScript</ToggleButton>
            <ToggleButton value="react">React</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography>Experience Level</Typography>
          <Rating
            value={experience}
            onChange={(e, newValue) => setExperience(newValue)}
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label="I accept the terms and conditions"
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </Stack>
    </Box>
  );
}

export default MuiRegistrationForm;
