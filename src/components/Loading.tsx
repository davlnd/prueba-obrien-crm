import { CircularProgress, Box } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        bgcolor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
