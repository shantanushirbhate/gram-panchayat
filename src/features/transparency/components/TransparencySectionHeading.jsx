
import React from "react";
import { Box, Typography } from "@mui/material";

function TransparencySectionHeading({ eyebrow, title, description }) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        component="h2"
        sx={{
          color: "#14532D",
          fontWeight: 800,
          fontSize: { xs: 24, sm: 30, md: 36 },
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: "#64748B",
            maxWidth: 720,
            mx: "auto",
            fontSize: { xs: 14, sm: 15, md: 16 },
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default TransparencySectionHeading;
