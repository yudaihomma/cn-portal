import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PracticeTimePickMobile() {
  const classes = useStyles();
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();
  console.log(start, end)

//   const handleChange = (event: any) => {
//     setAge(event.target.value);
//   };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">start</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(value) => setStart(value)}
        >
          <MenuItem value={"10:00"}>10:00</MenuItem>
          <MenuItem value={"11:00"}>11:00</MenuItem>
          <MenuItem value={"12:00"}>12:00</MenuItem>
          <MenuItem value={"13:00"}>13:00</MenuItem>
          <MenuItem value={"14:00"}>14:00</MenuItem>
          <MenuItem value={"15:00"}>15:00</MenuItem>
          <MenuItem value={"16:00"}>16:00</MenuItem>
          <MenuItem value={"17:00"}>17:00</MenuItem>
          <MenuItem value={"18:00"}>18:00</MenuItem>
          <MenuItem value={"19:00"}>19:00</MenuItem>
          <MenuItem value={"20:00"}>20:00</MenuItem>
          <MenuItem value={"21:00"}>21:00</MenuItem>
          <MenuItem value={"22:00"}>22:00</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">end</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(value) => setEnd(value)}
        >
          <MenuItem value={"10:00"}>10:00</MenuItem>
          <MenuItem value={"11:00"}>11:00</MenuItem>
          <MenuItem value={"12:00"}>12:00</MenuItem>
          <MenuItem value={"13:00"}>13:00</MenuItem>
          <MenuItem value={"14:00"}>14:00</MenuItem>
          <MenuItem value={"15:00"}>15:00</MenuItem>
          <MenuItem value={"16:00"}>16:00</MenuItem>
          <MenuItem value={"17:00"}>17:00</MenuItem>
          <MenuItem value={"18:00"}>18:00</MenuItem>
          <MenuItem value={"19:00"}>19:00</MenuItem>
          <MenuItem value={"20:00"}>20:00</MenuItem>
          <MenuItem value={"21:00"}>21:00</MenuItem>
          <MenuItem value={"22:00"}>22:00</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}