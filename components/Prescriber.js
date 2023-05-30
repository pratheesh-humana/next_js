import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
const Prescriber = () => {
  const [view, setView] = useState("1");
  const handleChange = (event) => {
    setView(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Prescriber</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={view}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="1">Eric Richards NP-NPI#7234223044</MenuItem>
          <MenuItem value="2">John Doe NP -NPI#8745824088</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Prescriber;
