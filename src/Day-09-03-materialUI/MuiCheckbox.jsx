import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckbox() {
  const [accept, setAccept] = useState(false)
  const [skills, setSkills] = useState([])

  const handleChange = (e) => {
    console.log({value: e.target.value})
    setAccept(e.target.checked)
  }

  const handleSkills = (e) => {
    const skill = e.target.value;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setSkills([...skills, skill]);
    } else {
      setSkills(skills.filter(s => s !== skill));
    }
  }
  
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='accept terms and conditions'
          control={<Checkbox checked={accept}  onChange={handleChange}/>}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon/>}
          checkedIcon={<BookmarkIcon/>}
        />
      </Box>

      <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label='HTML'
                value='html'
                control={<Checkbox/>}
                checked={skills.includes('html')}
                onChange={handleSkills}
              />

              <FormControlLabel
                label='CSS'
                value='css'
                control={<Checkbox/>}
                checked={skills.includes('css')}
                onChange={handleSkills}
              />

              <FormControlLabel
                label='JS'
                value='js'
                control={<Checkbox/>}
                checked={skills.includes('js')}
                onChange={handleSkills}
              />
            </FormGroup>
          </FormControl>
      </Box>
      


    </Box>
  )
}

export default MuiCheckbox