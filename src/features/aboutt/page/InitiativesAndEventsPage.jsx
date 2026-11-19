
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

const initiatives = [
  { key: "cleanliness", icon: Sparkles },
  { key: "treePlantation", icon: TreePine },
  { key: "waterConservation", icon: Droplets },
  { key: "education", icon: GraduationCap },
  { key: "villageDevelopment", icon: Building2 },
  { key: "publicAwareness", icon: Megaphone },
];

const eventTypes = [
  { key: "cultural", icon: Users },
  { key: "environmental", icon: Leaf },
  { key: "social", icon: HeartHandshake },
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
        variant="h3"
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

function InitiativeCard({ item, title, description }) {
  const Icon = item.icon;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: `1px solid ${COLORS.border}`,
        bgcolor: COLORS.white,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: COLORS.orange,
          boxShadow: "0 14px 30px rgba(23,59,42,0.09)",
        },
      }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <Box
          sx={{
            width: 54,
            height: 54,
            borderRadius: 2.5,
            bgcolor: COLORS.lightGreen,
            color: COLORS.green,
            display: "grid",
            placeItems: "center",
            mb: 2.5,
          }}
        >
          <Icon size={26} />
        </Box>

        <Typography
          variant="h6"
          fontWeight={800}
          color={COLORS.green}
          mb={1}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color={COLORS.muted}
          lineHeight={1.8}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function EventTypeCard({ item, title, description }) {
  const Icon = item.icon;

  return (
    <Box
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 3,
        bgcolor: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: COLORS.orange,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            bgcolor: "#FFF1E5",
            color: COLORS.orange,
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={23} />
        </Box>

        <Box>
          <Typography
            fontWeight={800}
            color={COLORS.green}
            mb={0.7}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color={COLORS.muted}
            lineHeight={1.8}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default function InitiativesAndEventsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ie = (key) => t(`initiativesAndEvents.${key}`);

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
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -130, md: 70 },
            top: -120,
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
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Chip
            icon={<CalendarDays size={16} />}
            label={ie("heroBadge")}
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
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.6rem" },
              lineHeight: 1.15,
              maxWidth: 800,
              mb: 2,
            }}
          >
            {ie("heroTitle")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
              lineHeight: 1.9,
            }}
          >
            {ie("heroDescription")}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            mt={3.5}
          >
            <HandHeart size={21} color="#F5B36F" />

            <Typography
              variant="body2"
              color="rgba(255,255,255,0.85)"
              fontWeight={600}
            >
              {ie("heroCaption")}
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
              {ie("introEyebrow")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: COLORS.green,
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                lineHeight: 1.25,
                mb: 2,
              }}
            >
              {ie("introTitle")}
            </Typography>

            <Typography color={COLORS.muted} lineHeight={1.9} mb={2}>
              {ie("introDescription")}
            </Typography>

            <Typography color={COLORS.muted} lineHeight={1.9}>
              {ie("introDescription2")}
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
                variant="h5"
                fontWeight={900}
                mb={1.5}
                position="relative"
              >
                {ie("highlightTitle")}
              </Typography>

              <Typography
                lineHeight={1.9}
                color="rgba(255,255,255,0.82)"
                position="relative"
              >
                {ie("highlightDescription")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* DEVELOPMENT INITIATIVES */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={ie("initiativesEyebrow")}
          title={ie("initiativesTitle")}
          description={ie("initiativesDescription")}
        />

        <Grid container spacing={2.5}>
          {initiatives.map((item) => (
            <Grid key={item.key} size={{ xs: 12, sm: 6, md: 4 }}>
              <InitiativeCard
                item={item}
                title={ie(`initiatives.${item.key}.title`)}
                description={ie(`initiatives.${item.key}.description`)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* EVENTS */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={ie("eventsEyebrow")}
          title={ie("eventsTitle")}
          description={ie("eventsDescription")}
        />

        <Grid container spacing={2.5}>
          {eventTypes.map((item) => (
            <Grid key={item.key} size={{ xs: 12, md: 4 }}>
              <EventTypeCard
                item={item}
                title={ie(`events.${item.key}.title`)}
                description={ie(`events.${item.key}.description`)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* UPCOMING EVENTS / ANNOUNCEMENTS */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            bgcolor: COLORS.white,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            p: { xs: 2.5, sm: 4, md: 5 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", sm: "center" }}
            mb={3}
          >
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: 2.5,
                bgcolor: COLORS.lightGreen,
                color: COLORS.green,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <CalendarDays size={27} />
            </Box>

            <Box>
              <Typography
                variant="h5"
                fontWeight={900}
                color={COLORS.green}
              >
                {ie("upcomingTitle")}
              </Typography>

              <Typography color={COLORS.muted} variant="body2">
                {ie("upcomingDescription")}
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: 3,
              bgcolor: COLORS.lightGreen,
              border: "1px dashed #B9D0BE",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                mx: "auto",
                mb: 1.5,
                borderRadius: "50%",
                bgcolor: COLORS.white,
                color: COLORS.green,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Clock size={25} />
            </Box>

            <Typography
              fontWeight={800}
              color={COLORS.green}
              mb={0.8}
            >
              {ie("noEventsTitle")}
            </Typography>

            <Typography
              variant="body2"
              color={COLORS.muted}
              lineHeight={1.8}
              maxWidth={550}
              mx="auto"
            >
              {ie("noEventsDescription")}
            </Typography>
          </Box>
        </Box>
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
            <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
              <MapPin size={19} color="#F5B36F" />

              <Typography
                color="#F5B36F"
                fontWeight={800}
                letterSpacing={1}
                fontSize="0.78rem"
              >
                {ie("closingEyebrow")}
              </Typography>
            </Stack>

            <Typography
              variant="h4"
              fontWeight={900}
              fontSize={{ xs: "1.6rem", md: "2.1rem" }}
              mb={1.2}
            >
              {ie("closingTitle")}
            </Typography>

            <Typography
              color="rgba(255,255,255,0.8)"
              lineHeight={1.8}
            >
              {ie("closingDescription")}
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
            {ie("contactButton")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
