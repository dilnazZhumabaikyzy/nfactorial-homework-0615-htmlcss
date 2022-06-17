import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
export  const SearchBar = ()=> {
  return (
   <>
    <Box
      component="form"
      sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >  
      <TextField id="outlined-basic" label="Search" variant="outlined"  color="secondary" focused>
      </TextField>     
      
    </Box>
    <IconSearchSVG color="success" className="search-icon" />
    </>
  );
}