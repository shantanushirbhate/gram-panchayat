
import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
} from "@mui/material";

import {
  CalendarDays,
  Leaf,
  Users,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Building2,
  TreePine,
  Megaphone,
  ArrowRight,
  Sparkles,
  HandHeart,
  Target,
  Clock,
  MapPin,
  Trash2,
  HeartPulse,
  Venus,
  Landmark,
  HandHelping,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#0B2E1A",
  lightGreen: "#EAF3EC",
  orange: "#E87519",
  cream: "#FFF8EF",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E6EDE7",
};

const activities = [
  { key: "treePlantation", icon: TreePine, color: "#287A55", background: "#EAF5EE" },
  { key: "cleanliness", icon: Sparkles, color: "#28718A", background: "#EAF5F8" },
  { key: "healthCamp", icon: HeartPulse, color: "#BE4566", background: "#FFF0F3" },
  { key: "womenGathering", icon: Users, color: "#8B5AA5", background: "#F4EDFA" },
  { key: "gramSabha", icon: Landmark, color: "#B7791F", background: "#FFF8E6" },
  { key: "shramdaan", icon: Droplets, color: "#28718A", background: "#EAF5F8" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 800,
          letterSpacing: 1.5,
          fontSize: "0.78rem",
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          mb: 1.3,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: COLORS.muted,
          maxWidth: 700,
          mx: "auto",
          lineHeight: 1.8,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

function ActivityCard({ item, translate }) {
  const Icon = item.icon;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: `1px solid ${COLORS.border}`,
        bgcolor: COLORS.white,
        overflow: "hidden",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: { xs: "none", md: "translateY(-5px)" },
          borderColor: COLORS.orange,
          boxShadow: "0 14px 30px rgba(23,59,42,0.09)",
        },
      }}
    >
      <Box
        sx={{
          height: 5,
          background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
        }}
      />

      <CardContent sx={{ p: { xs: 2.5, md: 3 }, "&:last-child": { pb: 3 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{ mb: 2.5 }}
        >
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: 2.5,
              bgcolor: item.background,
              color: item.color,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={27} />
          </Box>

          <Box
            sx={{
              minWidth: 66,
              px: 1.5,
              py: 1,
              borderRadius: 2.5,
              bgcolor: COLORS.lightGreen,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 900,
                fontSize: "1.35rem",
                lineHeight: 1.1,
              }}
            >
              {translate(`activities.${item.key}.day`)}
            </Typography>

            <Typography
              sx={{
                color: COLORS.muted,
                fontSize: "0.72rem",
                fontWeight: 800,
                mt: 0.4,
              }}
            >
              {translate(`activities.${item.key}.month`)}
            </Typography>
          </Box>
        </Stack>

        <Chip
          label={translate(`activities.${item.key}.category`)}
          size="small"
          sx={{
            mb: 1.5,
            bgcolor: item.background,
            color: item.color,
            fontWeight: 800,
            borderRadius: 1.5,
          }}
        />

        <Typography
          component="h3"
          sx={{
            color: COLORS.green,
            fontWeight: 900,
            fontSize: { xs: "1.05rem", md: "1.12rem" },
            lineHeight: 1.5,
            mb: 1.2,
          }}
        >
          {translate(`activities.${item.key}.title`)}
        </Typography>

        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: "0.91rem",
            lineHeight: 1.9,
          }}
        >
          {translate(`activities.${item.key}.description`)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function InitiativesAndEventsPage() {
  const { t } = useTranslation("about/initiativesAndEvents");
  const navigate = useNavigate();

  const ie = (key) =>
    t(`initiativesAndEvents.${key}`, { defaultValue: "" });

  return (
    <Box sx={{ bgcolor: COLORS.cream, minHeight: "100vh", pb: 8 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 65%, #28583C 100%)`,
          color: COLORS.white,
          py: { xs: 7, md: 10 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 210, md: 300 },
            height: { xs: 210, md: 300 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -130, md: 70 },
            top: -120,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.10)",
            right: { xs: -90, md: 110 },
            bottom: -150,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Chip
            icon={<CalendarDays size={16} />}
            label={ie("hero.badge")}
            sx={{
              mb: 2.5,
              bgcolor: "rgba(255,255,255,0.12)",
              color: COLORS.white,
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: 700,
              "& .MuiChip-icon": { color: "#F5B36F" },
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.6rem" },
              lineHeight: 1.25,
              maxWidth: 800,
              mb: 2,
            }}
          >
            {ie("hero.title")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
              lineHeight: 1.9,
            }}
          >
            {ie("hero.description")}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mt: 3.5 }}
          >
            <HandHeart size={21} color="#F5B36F" />

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              {ie("hero.caption")}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* INTRODUCTION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 5, md: 7 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                color: COLORS.orange,
                fontWeight: 800,
                letterSpacing: 1.4,
                fontSize: "0.78rem",
                mb: 1,
              }}
            >
              {ie("intro.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: COLORS.green,
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                lineHeight: 1.25,
                mb: 2,
              }}
            >
              {ie("intro.title")}
            </Typography>

            <Typography sx={{ color: COLORS.muted, lineHeight: 1.9, mb: 2 }}>
              {ie("intro.description")}
            </Typography>

            <Typography sx={{ color: COLORS.muted, lineHeight: 1.9 }}>
              {ie("intro.descriptionTwo")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                minHeight: { xs: 240, md: 310 },
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                bgcolor: COLORS.green,
                color: COLORS.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 190,
                  height: 190,
                  border: "1px solid rgba(255,255,255,0.13)",
                  borderRadius: "50%",
                  right: -60,
                  top: -60,
                  pointerEvents: "none",
                }}
              />

              <Box
                sx={{
                  width: 62,
                  height: 62,
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(255,255,255,0.13)",
                  color: "#F5B36F",
                  mb: 2.5,
                }}
              >
                <Target size={32} />
              </Box>

              <Typography
                component="h3"
                sx={{ fontSize: "1.35rem", fontWeight: 900, mb: 1.5, position: "relative" }}
              >
                {ie("intro.highlightTitle")}
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.82)",
                  position: "relative",
                }}
              >
                {ie("intro.highlightDescription")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* VILLAGE ACTIVITIES */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={ie("activities.eyebrow")}
          title={ie("activities.title")}
          description={ie("activities.description")}
        />

        <Grid container spacing={2.5}>
          {activities.map((item) => (
            <Grid key={item.key} size={{ xs: 12, sm: 6, md: 4 }}>
              <ActivityCard item={item} translate={ie} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* COMMUNITY PARTICIPATION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            borderRadius: 4,
            background: `linear-gradient(120deg, ${COLORS.darkGreen}, ${COLORS.green})`,
            color: COLORS.white,
            p: { xs: 3, sm: 4, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
              <MapPin size={19} color="#F5B36F" />

              <Typography
                sx={{
                  color: "#F5B36F",
                  fontWeight: 800,
                  letterSpacing: 1,
                  fontSize: "0.78rem",
                }}
              >
                {ie("closing.eyebrow")}
              </Typography>
            </Stack>

            <Typography
              component="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.6rem", md: "2.1rem" },
                mb: 1.2,
              }}
            >
              {ie("closing.title")}
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
              {ie("closing.description")}
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            endIcon={<ArrowRight size={18} />}
            sx={{
              flexShrink: 0,
              bgcolor: COLORS.orange,
              color: COLORS.white,
              px: 3,
              py: 1.4,
              borderRadius: 2,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": { bgcolor: "#D96512" },
            }}
          >
            {ie("closing.button")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
