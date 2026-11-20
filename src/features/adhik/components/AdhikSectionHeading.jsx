
import React from "react";
import { Box, Typography } from "@mui/material";

const AdhikSectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: 800,
        mx: align === "center" ? "auto" : 0,
        mb: 4,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: "#E87519",
            fontSize: { xs: 12, sm: 13 },
            fontWeight: 800,
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
          fontSize: { xs: 23, sm: 28, md: 34 },
          fontWeight: 800,
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
            fontSize: { xs: 14, sm: 15, md: 16 },
            lineHeight: 1.8,
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

export default AdhikSectionHeading;
