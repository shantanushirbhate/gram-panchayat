
// src/Features/About/components/AboutSectionHeading.jsx

import { Box, Typography } from "@mui/material";

export default function AboutSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: 3,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        sx={{
          color: "#14532D",
          fontWeight: 800,
          fontSize: { xs: 23, sm: 28, md: 32 },
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
            fontSize: { xs: 13, sm: 15 },
            lineHeight: 1.8,
            maxWidth: align === "center" ? 720 : 760,
            mx: align === "center" ? "auto" : 0,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
