
// src/Features/About/components/AboutSectionHeading.jsx

import { Box, Typography } from "@mui/material";

const COLORS = {
  green: "#173B2A",
  orange: "#C65A16",
  muted: "#64748B",
};

export default function AboutSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: align,
        mb: { xs: 3, sm: 4 },
      }}
    >
      {eyebrow && (
        <Typography
          component="p"
          sx={{
            color: COLORS.orange,
            fontSize: { xs: 11, sm: 13 },
            fontWeight: 800,
            letterSpacing: { xs: 1.2, sm: 1.8 },
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      {title && (
        <Typography
          component="h2"
          sx={{
            color: COLORS.green,
            fontWeight: 900,
            fontSize: {
              xs: "1.65rem",
              sm: "2rem",
              md: "2.5rem",
            },
            lineHeight: 1.3,
            overflowWrap: "break-word",
          }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          component="p"
          sx={{
            mt: 1.5,
            color: COLORS.muted,
            fontSize: { xs: 13, sm: 14, md: 15 },
            lineHeight: 1.9,
            maxWidth: align === "center" ? 720 : 760,
            mx: align === "center" ? "auto" : 0,
            overflowWrap: "break-word",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
