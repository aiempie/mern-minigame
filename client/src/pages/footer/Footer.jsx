import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="caption">Footer</Typography>
    </Box>
  );
}

export default Footer;
