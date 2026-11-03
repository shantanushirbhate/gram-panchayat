
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import {
  Quote,
  Sparkles,
  Leaf,
} from "lucide-react";

import { useTranslation } from "react-i18next";

export default function TodaysThoughts() {
  const { i18n, t } = useTranslation();

  const isMarathi = i18n.language?.toLowerCase().startsWith("mr");

  const thought = isMarathi
    ? "गावाचा विकास हा प्रत्येक नागरिकाच्या सहभागातून घडतो. आपले गाव स्वच्छ, सुंदर आणि समृद्ध बनवण्यासाठी प्रत्येकाने आपली जबाबदारी पार पाडली पाहिजे."
    : "A village grows stronger when every citizen participates. Let us work together to make our village clean, beautiful and prosperous.";

  const title = isMarathi ? "आजचा विचार" : "Today's Thought";

  const subtitle = isMarathi
    ? "सकारात्मक विचार, उज्ज्वल भविष्य"
    : "Positive thoughts, brighter future";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, sm: 8, md: 11 },
        backgroundColor: "#F7F9F7",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 3, md: 5 },
            background: "linear-gradient(120deg, #102D20 0%, #173B2A 65%, #24583B 100%)",
            px: { xs: 3, sm: 5, md: 9 },
            py: { xs: 5, sm: 6, md: 7 },
            boxShadow: "0 20px 50px rgba(23,59,42,0.13)",
          }}
        >
          {/* Decorative circles */}

          <Box
            sx={{
              position: "absolute",
              width: { xs: 180, md: 350 },
              height: { xs: 180, md: 350 },
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "50%",
              top: -180,
              right: { xs: -80, md: 80 },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: { xs: 250, md: 450 },
              height: { xs: 250, md: 450 },
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "50%",
              bottom: -350,
              right: { xs: -100, md: 200 },
            }}
          />

          {/* Decorative quote icon */}

          <Box
            sx={{
              position: "absolute",
              top: { xs: 15, md: 25 },
              right: { xs: 20, md: 55 },
              color: "rgba(255,255,255,0.08)",
              transform: "rotate(180deg)",
            }}
          >
            <Quote size={140} strokeWidth={1.2} />
          </Box>

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: 950,
              mx: "auto",
              textAlign: "center",
            }}
          >
            {/* Section label */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ mb: 2.5 }}
            >
              <Sparkles size={17} color="#FF9933" />

              <Typography
                sx={{
                  color: "#FFB45E",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {title}
              </Typography>

              <Sparkles size={17} color="#FF9933" />
            </Stack>

            {/* Heading */}

            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: {
                  xs: 25,
                  sm: 32,
                  md: 40,
                },
                mb: 1.5,
              }}
            >
              {subtitle}
            </Typography>

            {/* Saffron divider */}

            <Box
              sx={{
                width: 70,
                height: 4,
                borderRadius: 5,
                backgroundColor: "#FF9933",
                mx: "auto",
                mb: 4,
              }}
            />

            {/* Thought */}

            <Box
              sx={{
                position: "relative",
                px: { xs: 1, sm: 3, md: 5 },
              }}
            >
              <Quote
                size={30}
                color="#FF9933"
                style={{
                  marginBottom: 12,
                  opacity: 0.9,
                }}
              />

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: {
                    xs: 16,
                    sm: 19,
                    md: 23,
                  },
                  lineHeight: { xs: 1.9, md: 2 },
                  letterSpacing: "0.2px",
                }}
              >
                {thought}
              </Typography>
            </Box>

            {/* Bottom decoration */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.2}
              sx={{ mt: 4 }}
            >
              <Box
                sx={{
                  width: 35,
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.35)",
                }}
              />

              <Leaf size={19} color="#FFB45E" />

              <Typography
                sx={{
                  color: "#D5E5D9",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                {isMarathi
                  ? "आपले गाव, आपली जबाबदारी"
                  : "Our Village, Our Responsibility"}
              </Typography>

              <Box
                sx={{
                  width: 35,
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.35)",
                }}
              />
            </Stack>
          </Box>

          {/* Tiranga bottom accent */}

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 5,
              background:
                "linear-gradient(90deg, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #16803D 66%, #16803D 100%)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
