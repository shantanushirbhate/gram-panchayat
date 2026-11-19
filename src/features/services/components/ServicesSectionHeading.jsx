
import React from "react";
import { Box, Typography } from "@mui/material";

const ServicesSectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <Box
      sx={{
        mb: { xs: 3, md: 4 },
        textAlign: align,
        maxWidth: isCenter ? 800 : "100%",
        mx: isCenter ? "auto" : 0,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontSize: { xs: "0.72rem", sm: "0.8rem" },
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            mb: 1.2,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        component="h2"
        sx={{
          color: "#173B2A",
          fontSize: {
            xs: "1.55rem",
            sm: "1.9rem",
            md: "2.25rem",
          },
          fontWeight: 800,
          lineHeight: 1.3,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: 65,
          height: 4,
          borderRadius: 5,
          bgcolor: "#E87519",
          mb: 2,
          mx: isCenter ? "auto" : 0,
        }}
      />

      {description && (
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.85,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default ServicesSectionHeading;
