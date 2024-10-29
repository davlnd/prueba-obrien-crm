import { Box } from "@mui/material";

export const Layout = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "auto",
          margin: "0 auto",
          maxWidth: 1200,
          bgcolor: "#fcfcfc",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
