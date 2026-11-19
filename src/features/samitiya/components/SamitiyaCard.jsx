
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
} from "@mui/material";

const SamitiyaCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2.5, sm: 3 },
        borderRadius: 4,
        border: "1px solid #E5EDE7",
        backgroundColor: "#FFFFFF",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "#E87519",
          boxShadow: "0 16px 35px rgba(20,83,45,0.10)",
        },
      }}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
        {/* Icon */}
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#14532D",
            backgroundColor: "#EAF4EC",
          }}
        >
          {Icon && <Icon size={28} strokeWidth={1.8} />}
        </Box>

        {/* Title */}
        <Typography
          component="h3"
          sx={{
            color: "#173B2A",
            fontSize: { xs: 17, sm: 18 },
            fontWeight: 800,
            lineHeight: 1.5,
          }}
        >
          {item.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 1.85,
            flexGrow: 1,
          }}
        >
          {item.description}
        </Typography>

        {/* Responsibilities */}
        {item.responsibilities?.length > 0 && (
          <Box
            sx={{
              pt: 1.5,
              borderTop: "1px solid #E8EEE9",
            }}
          >
            <Typography
              sx={{
                color: "#14532D",
                fontSize: 12,
                fontWeight: 800,
                mb: 1,
              }}
            >
              {item.responsibilitiesTitle || "Key Responsibilities"}
            </Typography>

            <Stack spacing={0.8}>
              {item.responsibilities.map((responsibility, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      mt: "7px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: "#E87519",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 12,
                      lineHeight: 1.7,
                    }}
                  >
                    {responsibility}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default SamitiyaCard;
