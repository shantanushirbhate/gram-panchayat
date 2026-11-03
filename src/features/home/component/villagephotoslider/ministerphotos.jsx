
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
} from "@mui/material";

import image from "../../../../assets/ministerimagefolder/DevendraFadnavis-stockimage-18-thumbnail.png";
import vicecmimage from "../../../../assets/ministerimagefolder/SHRI-EKNATH-SHINDE-200x209-1.png";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#FF6820",
  cream: "#FFF8F0",
  white: "#FFFFFF",
  muted: "#64748B",
};

const ministers = [
  {
    image,
    name: "श्री. देवेंद्र फडणवीस",
    nameEn: "Shri. Devendra Fadnavis",
    designation: "मुख्यमंत्री, महाराष्ट्र राज्य",
    designationEn: "Chief Minister of Maharashtra",
  },
  {
    image: vicecmimage,
    name: "श्री. एकनाथ शिंदे",
    nameEn: "Shri. Eknath Shinde",
    designation: "उपमुख्यमंत्री, महाराष्ट्र राज्य",
    designationEn: "Deputy Chief Minister of Maharashtra",
  },
];

export default function MinisterSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: COLORS.cream,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION HEADING */}
        <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              color: COLORS.orange,
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: 2,
              mb: 1,
            }}
          >
            OUR LEADERSHIP
          </Typography>

          <Typography
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: { xs: 26, sm: 32, md: 38 },
              mb: 1.5,
            }}
          >
            महाराष्ट्र राज्य नेतृत्व
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            Leadership of Maharashtra
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              backgroundColor: COLORS.orange,
              borderRadius: 5,
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        {/* MINISTER CARDS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="stretch"
          spacing={{ xs: 3, sm: 4, md: 6 }}
        >
          {ministers.map((minister) => (
            <Card
              key={minister.nameEn}
              elevation={0}
              sx={{
                width: { xs: "100%", sm: 280, md: 320 },
                maxWidth: 340,
                mx: "auto",
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: COLORS.white,
                border: "1px solid #E8E5DC",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-7px)",
                  boxShadow: "0 18px 35px rgba(23,59,42,0.13)",
                },
              }}
            >
              {/* TOP ACCENT */}
              <Box
                sx={{
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.orange} 0%, ${COLORS.orange} 50%, ${COLORS.green} 50%, ${COLORS.green} 100%)`,
                }}
              />

              {/* PHOTO */}
              <Box
                sx={{
                  pt: 4,
                  px: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 175, sm: 185, md: 200 },
                    height: { xs: 190, sm: 200, md: 215 },
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "#F1F5F2",
                    border: "4px solid #F1E9DE",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box
                    component="img"
                    src={minister.image}
                    alt={minister.nameEn}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              {/* NAME BELOW PHOTO */}
              <Box
                sx={{
                  textAlign: "center",
                  px: 2.5,
                  pt: 3,
                  pb: 3.5,
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.green,
                    fontSize: { xs: 18, sm: 19, md: 21 },
                    fontWeight: 900,
                    mb: 0.8,
                  }}
                >
                  {minister.name}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.orange,
                    fontSize: 14,
                    fontWeight: 800,
                    mb: 0.6,
                  }}
                >
                  {minister.designation}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {minister.nameEn}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: 12,
                    mt: 0.4,
                  }}
                >
                  {minister.designationEn}
                </Typography>
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
