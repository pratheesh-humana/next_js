import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import pino from "../logger";

const PRESCRIBER_QUERY = gql`
  query ExampleQuery($physicianNpi: String!) {
    introduction
    patients(physicianNpi: $physicianNpi) {
      patients {
        physician {
          firstName
          lastName
        }
      }
    }
  }
`;

const Prescriber = () => {
  const { data, error, loading } = useQuery(PRESCRIBER_QUERY, {
    variables: { physicianNpi: "12343212" },
  });

  const [view, setView] = useState("1");

  if (loading) {
    return <p>Loading ...</p>;
  }

  console.log(data);
  pino.info(`Data: ${data}`);

  if (error) {
    pino.error(`Error ${error}`);

    return null;
  }

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <>
      <div>
        <select class="form-select" aria-label="Default select example">
          {data?.patients?.patients?.map((res) => {
            const { firstName } = res.physician;
            console.log("11122", firstName);
            return (
              <div>
                <option value="1">{firstName}</option>
              </div>
            );
          })}
        </select>
      </div>
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
            {data?.patients?.patients?.map((res) => {
              const { firstName, lastName } = res.physician;
              return (
                <div>
                  <MenuItem key={lastName} value="1">
                    {firstName}
                  </MenuItem>
                </div>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Prescriber;
