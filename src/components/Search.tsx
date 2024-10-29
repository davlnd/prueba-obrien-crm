import { OutlinedInput, Box, IconButton, InputAdornment } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface ISearch {
  setValue: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Search = ({ setValue, setPage }: ISearch) => {
  const [state, setState] = useState("");
  const onChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const onClick = () => {
    setValue(state);
    setPage(1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <OutlinedInput
        value={state}
        onChange={onChange}
        sx={{
          width: 600,
          borderRadius: 3,
          mb: 2,
        }}
        placeholder="Buscar inmueble..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};
