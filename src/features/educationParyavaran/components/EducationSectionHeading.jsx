
import React from "react";
import { Box, Typography } from "@mui/material";

const EducationSectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === "center" ? 760 : "100%",
        mx: align === "center" ? "auto" : 0,
        mb: 4,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: 1.5,
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
          fontWeight: 800,
          fontSize: {
            xs: "1.55rem",
            sm: "1.9rem",
            md: "2.25rem",
          },
          lineHeight: 1.3,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: 14, sm: 15 },
            lineHeight: 1.9,
          }}
        >
          {description}
        </Typography>
      )}

      <Box
        sx={{
          width: 58,
          height: 4,
          borderRadius: 5,
          backgroundColor: "#E87519",
          mt: 2,
          mx: align === "center" ? "auto" : 0,
        }}
      />
    </Box>
  );
};

export default EducationSectionHeading;
