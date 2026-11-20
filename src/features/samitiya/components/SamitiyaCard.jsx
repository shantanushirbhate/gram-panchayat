
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { Phone, UserRound } from "lucide-react";

const SamitiyaCard = ({ item }) => {
  const Icon = item.icon;

  // Remove spaces and other formatting for telephone links.
  const phoneLink = item.phone?.replace(/[^\d+]/g, "");

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
        {/* Committee Icon */}
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

        {/* Committee Title */}
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

        {/* Committee Description */}
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 1.85,
          }}
        >
          {item.description}
        </Typography>

        {/* Optional Responsibilities */}
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

        {/* Chairperson and Contact Details */}
        {(item.chairperson || item.phone) && (
          <>
            <Divider sx={{ borderColor: "#E8EEE9", mt: "auto" }} />

            {/* Chairperson */}
            {item.chairperson && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    flexShrink: 0,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#14532D",
                    backgroundColor: "#EAF4EC",
                  }}
                >
                  <UserRound size={19} />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      color: "#8A9690",
                      fontSize: 11,
                      fontWeight: 600,
                      mb: 0.3,
                    }}
                  >
                    {item.chairpersonLabel || "Committee Chairperson"}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#173B2A",
                      fontSize: { xs: 13, sm: 14 },
                      fontWeight: 800,
                      lineHeight: 1.5,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.chairperson}
                  </Typography>
                </Box>
              </Stack>
            )}

            {/* Contact Number */}
            {item.phone && (
              <Box
                component="a"
                href={phoneLink ? `tel:${phoneLink}` : undefined}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: 2.5,
                  backgroundColor: "#F0F7F1",
                  border: "1px solid #E1EEE3",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "#E5F2E7",
                    borderColor: "#14532D",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    backgroundColor: "#14532D",
                  }}
                >
                  <Phone size={17} />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      color: "#8A9690",
                      fontSize: 11,
                      fontWeight: 600,
                      mb: 0.3,
                    }}
                  >
                    {item.contactLabel || "Contact"}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#14532D",
                      fontSize: 14,
                      fontWeight: 800,
                      letterSpacing: 0.3,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.phone}
                  </Typography>
                </Box>
              </Box>
            )}
          </>
        )}
      </Stack>
    </Paper>
  );
};

export default SamitiyaCard;
