import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Typography component="div">
      <Box
        sx={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          letterSpacing: 2,
          my: 3,
          color: "#c0c0c0",
        }}
      >
        Inmuebles Obrien
      </Box>
    </Typography>
  );
};
