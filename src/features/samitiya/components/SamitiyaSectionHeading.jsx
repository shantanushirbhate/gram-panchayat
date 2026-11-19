
import React from "react";
import { Box, Typography } from "@mui/material";

const SamitiyaSectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  return (
    <Box
      sx={{
        maxWidth: 760,
        mx: align === "center" ? "auto" : 0,
        mb: { xs: 3, md: 4 },
        textAlign: align,
      }}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontSize: { xs: 11, sm: 12 },
            fontWeight: 800,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            mb: 1.2,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      {/* Heading */}
      <Typography
        component="h2"
        sx={{
          color: "#173B2A",
          fontSize: {
            xs: "1.65rem",
            sm: "2rem",
            md: "2.4rem",
          },
          fontWeight: 800,
          lineHeight: 1.3,
          mb: description ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      {description && (
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: 13, sm: 14, md: 15 },
            lineHeight: 1.9,
          }}
        >
          {description}
        </Typography>
      )}

      {/* Decorative underline */}
      <Box
        sx={{
          display: "flex",
          justifyContent: align,
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: 55,
            height: 4,
            borderRadius: 5,
            backgroundColor: "#E87519",
          }}
        />
      </Box>
    </Box>
  );
};

export default SamitiyaSectionHeading;
