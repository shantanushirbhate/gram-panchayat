
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

import {
  Flower2,
  Landmark,
  Sprout,
  UsersRound,
  MapPin,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const COLORS = {
  green: "#14532D",
  darkGreen: "#0B2E1A",
  orange: "#E87519",
  cream: "#FFF8EF",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  lightGreen: "#EFF6F0",
  border: "#E5EBE5",
};

const villageHighlights = [
  {
    number: "01",
    icon: Landmark,
    title: "religiousHeritage.title",
    description: "religiousHeritage.description",
    action: "religiousHeritage.action",
    color: "orange",
  },
  {
    number: "02",
    icon: Sprout,
    title: "agriculturalProsperity.title",
    description: "agriculturalProsperity.description",
    action: "agriculturalProsperity.action",
    color: "green",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "communityLife.title",
    description: "communityLife.description",
    action: "communityLife.action",
    color: "orange",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        maxWidth: centered ? 780 : 720,
        mx: centered ? "auto" : 0,
        textAlign: centered ? "center" : "left",
        mb: { xs: 3.5, md: 5 },
      }}
    >
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 900,
          fontSize: 11,
          letterSpacing: 2,
          mb: 1.2,
          textTransform: "uppercase",
          overflowWrap: "anywhere",
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: { xs: 26, sm: 33, md: 39 },
          lineHeight: 1.3,
          mb: 1.5,
          overflowWrap: "break-word",
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: { xs: 14, md: 15.5 },
            lineHeight: 1.9,
            overflowWrap: "break-word",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

function HighlightCard({ item, t }) {
  const Icon = item.icon;
  const isOrange = item.color === "orange";

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.8, sm: 3.2, md: 3.5 },
        height: "100%",
        minWidth: 0,
        borderRadius: 4,
        border: `1px solid ${COLORS.border}`,
        bgcolor: COLORS.white,
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: { xs: "none", md: "translateY(-7px)" },
          boxShadow: "0 16px 35px rgba(20,83,45,0.09)",
          borderColor: "#B8D2BE",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            minWidth: 60,
            borderRadius: "18px",
            bgcolor: isOrange ? "#FFF0E3" : "#EAF3EC",
            color: isOrange ? COLORS.orange : COLORS.green,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Icon size={28} strokeWidth={1.9} />
        </Box>

        <Typography
          sx={{
            color: "#D7E0D8",
            fontSize: 28,
            fontWeight: 900,
          }}
        >
          {item.number}
        </Typography>
      </Stack>

      <Typography
        component="h3"
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: { xs: 19, md: 21 },
          lineHeight: 1.4,
          mb: 1.5,
          overflowWrap: "break-word",
        }}
      >
        {t(`cultureAndTraditions.${item.title}`)}
      </Typography>

      <Typography
        sx={{
          color: COLORS.muted,
          fontSize: 14,
          lineHeight: 2,
          flex: 1,
          overflowWrap: "break-word",
        }}
      >
        {t(`cultureAndTraditions.${item.description}`)}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={0.8}
        sx={{
          mt: 3,
          color: isOrange ? COLORS.orange : COLORS.green,
          fontWeight: 800,
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 800 }}>
          {t(`cultureAndTraditions.${item.action}`)}
        </Typography>
        <ArrowUpRight size={17} />
      </Stack>
    </Paper>
  );
}

function CultureAndTraditionsPage() {
  const { t } = useTranslation("about/cultureAndTraditions");

  const tr = (key) => t(`cultureAndTraditions.${key}`);

  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        width: "100%",
        minWidth: 0,
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 62%, #287044 100%)`,
          color: COLORS.white,
          py: { xs: 8, sm: 10, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 230, md: 460 },
            height: { xs: 230, md: 460 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -120, md: -80 },
            top: { xs: -100, md: -180 },
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: 170, md: 300 },
            height: { xs: 170, md: 300 },
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.035)",
            right: { xs: 20, md: 180 },
            bottom: -180,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 850, width: "100%" }}>
            <Chip
              icon={<Flower2 size={16} />}
              label={tr("hero.eyebrow")}
              sx={{
                mb: 3,
                height: "auto",
                minHeight: 36,
                maxWidth: "100%",
                color: "#FED7AA",
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.17)",
                fontWeight: 800,
                letterSpacing: 0.8,
                "& .MuiChip-icon": {
                  color: "#FDBA74",
                  flexShrink: 0,
                },
                "& .MuiChip-label": {
                  px: 1.5,
                  py: 1,
                  whiteSpace: "normal",
                },
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 34, sm: 48, md: 62 },
                fontWeight: 900,
                lineHeight: 1.2,
                letterSpacing: "-0.8px",
                mb: 2,
                maxWidth: 780,
                overflowWrap: "break-word",
              }}
            >
              {tr("hero.title")}
            </Typography>

            <Typography
              sx={{
                color: "#FED7AA",
                fontSize: { xs: 18, sm: 21, md: 25 },
                fontWeight: 800,
                lineHeight: 1.5,
                mb: 2.5,
                overflowWrap: "break-word",
              }}
            >
              {tr("hero.tagline")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: 14.5, sm: 16, md: 18 },
                lineHeight: 1.9,
                maxWidth: 720,
                overflowWrap: "break-word",
              }}
            >
              {tr("hero.description")}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                mt: 3.5,
                color: "#FED7AA",
                flexWrap: "wrap",
                rowGap: 1,
              }}
            >
              <MapPin size={19} />
              <Typography
                sx={{
                  fontSize: 13.5,
                  fontWeight: 800,
                  overflowWrap: "break-word",
                }}
              >
                {tr("hero.location")}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* VILLAGE INTRODUCTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
            width: "100%",
            minWidth: 0,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              minWidth: 0,
              minHeight: { xs: 250, sm: 290, md: 350 },
              borderRadius: { xs: 4, md: 5 },
              p: { xs: 3, sm: 4, md: 5 },
              background: "linear-gradient(145deg, #FFF8EF 0%, #FDE8D3 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #F5E6D6",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "28px solid rgba(20,83,45,0.055)",
                right: -80,
                top: -80,
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 62,
                  height: 62,
                  borderRadius: "18px",
                  bgcolor: COLORS.green,
                  color: COLORS.white,
                  display: "grid",
                  placeItems: "center",
                  mb: 3,
                  boxShadow: "0 8px 20px rgba(20,83,45,0.16)",
                }}
              >
                <Flower2 size={30} />
              </Box>

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: { xs: 25, sm: 29, md: 34 },
                  fontWeight: 900,
                  lineHeight: 1.4,
                  maxWidth: 370,
                  overflowWrap: "break-word",
                }}
              >
                {tr("intro.highlight")}
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                mt: 4,
                position: "relative",
                zIndex: 1,
                color: COLORS.green,
              }}
            >
              <Quote size={20} color={COLORS.orange} />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 13.5,
                  overflowWrap: "break-word",
                }}
              >
                {tr("intro.caption")}
              </Typography>
            </Stack>
          </Paper>

          <Box sx={{ minWidth: 0, width: "100%" }}>
            <SectionHeading
              eyebrow={tr("intro.eyebrow")}
              title={tr("intro.title")}
              description={tr("intro.description")}
            />
          </Box>
        </Box>
      </Container>

      {/* VILLAGE CULTURE AND IDENTITY */}
      <Box
        sx={{
          bgcolor: COLORS.cream,
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            centered
            eyebrow={tr("highlights.eyebrow")}
            title={tr("highlights.title")}
            description={tr("highlights.description")}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 2.5 },
              width: "100%",
              alignItems: "stretch",
            }}
          >
            {villageHighlights.map((item) => (
              <HighlightCard key={item.number} item={item} t={t} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* CLOSING MESSAGE */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: COLORS.darkGreen,
          py: { xs: 6, md: 8 },
          color: COLORS.white,
          "&::before": {
            content: '""',
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.035)",
            left: -100,
            top: -120,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: 230,
            height: 230,
            borderRadius: "50%",
            border: "30px solid rgba(255,255,255,0.035)",
            right: -80,
            bottom: -130,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 65,
                height: 65,
                borderRadius: "20px",
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#FDBA74",
                display: "grid",
                placeItems: "center",
                mx: "auto",
              }}
            >
              <Flower2 size={32} />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 24, sm: 30, md: 37 },
                fontWeight: 900,
                lineHeight: 1.4,
                mt: 2.5,
                mb: 1.5,
                overflowWrap: "break-word",
              }}
            >
              {tr("closing.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 13.5, md: 15 },
                lineHeight: 2,
                maxWidth: 700,
                mx: "auto",
                overflowWrap: "break-word",
              }}
            >
              {tr("closing.description")}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default CultureAndTraditionsPage;
