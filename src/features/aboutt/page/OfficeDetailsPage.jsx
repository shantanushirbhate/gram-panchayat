
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
} from "@mui/material";

import {
  Landmark,
  MapPin,
  Clock,
  Phone,
  CalendarDays,
  Building2,
} from "lucide-react";

import { useTranslation } from "react-i18next";

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

function DetailCard({ icon: Icon, title, description, value }) {
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
          transform: "translateY(-4px)",
          borderColor: COLORS.orange,
          boxShadow: "0 14px 30px rgba(23,59,42,0.08)",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          "&:last-child": { pb: 3 },
        }}
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
            mb: 2.2,
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
          sx={{ whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>

        {value && (
          <Typography
            mt={2}
            color={COLORS.green}
            fontWeight={800}
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              overflowWrap: "anywhere",
            }}
          >
            {value}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

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

export default function OfficeDetailsPage() {
  // Namespace must match the registration in src/locales/index.js.
  const { t, ready } = useTranslation("about/officeDetails");

  // Your JSON contains the outer "officeDetails" object.
  const od = (key) => t(`officeDetails.${key}`);

  if (!ready) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          bgcolor: COLORS.cream,
        }}
      >
        <Typography color={COLORS.green} fontWeight={700}>
          Loading office details...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.cream,
        minHeight: "100vh",
        pb: { xs: 6, md: 9 },
        overflowX: "hidden",
      }}
    >
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
            icon={<Landmark size={16} />}
            label={od("heroBadge")}
            sx={{
              mb: 2.5,
              bgcolor: "rgba(255,255,255,0.12)",
              color: COLORS.white,
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: 700,
              "& .MuiChip-icon": {
                color: "#F5B36F",
              },
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "3.6rem",
              },
              lineHeight: 1.2,
              maxWidth: 850,
              mb: 2,
            }}
          >
            {od("heroTitle")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
              lineHeight: 1.9,
            }}
          >
            {od("heroDescription")}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            mt={3.5}
          >
            <MapPin size={20} color="#F5B36F" />

            <Typography
              variant="body2"
              color="rgba(255,255,255,0.9)"
              fontWeight={600}
            >
              {od("locationShort")}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* OFFICE INTRODUCTION */}
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
              {od("introEyebrow")}
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
              {od("introTitle")}
            </Typography>

            <Typography color={COLORS.muted} lineHeight={1.9}>
              {od("introDescription")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                minHeight: { xs: 220, md: 280 },
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
                <Building2 size={32} />
              </Box>

              <Typography
                variant="h5"
                fontWeight={900}
                mb={1.5}
                position="relative"
              >
                {od("highlightTitle")}
              </Typography>

              <Typography
                lineHeight={1.9}
                color="rgba(255,255,255,0.85)"
                position="relative"
              >
                {od("highlightDescription")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* OFFICE INFORMATION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={od("informationEyebrow")}
          title={od("informationTitle")}
          description={od("informationDescription")}
        />

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={MapPin}
              title={od("locationTitle")}
              description={od("locationDescription")}
              value={od("address")}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={Phone}
              title={od("phoneTitle")}
              description={od("phoneDescription")}
              value={od("phoneUnavailable")}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={CalendarDays}
              title={od("workingDaysTitle")}
              description={od("workingDaysDescription")}
              value={od("workingDaysValue")}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={Clock}
              title={od("timingTitle")}
              description={od("timingDescription")}
              value={od("timingValue")}
            />
          </Grid>
        </Grid>
      </Container>

      {/* OFFICE LOCATION CTA */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            borderRadius: 4,
            background: `linear-gradient(120deg, ${COLORS.darkGreen}, ${COLORS.green})`,
            color: COLORS.white,
            p: { xs: 3, sm: 4, md: 5 },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Typography
              color="#F5B36F"
              fontWeight={800}
              letterSpacing={1}
              fontSize="0.78rem"
              mb={1.5}
            >
              {od("closingEyebrow")}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={900}
              fontSize={{ xs: "1.5rem", md: "2.1rem" }}
              mb={1.2}
            >
              {od("closingTitle")}
            </Typography>

            <Typography
              color="rgba(255,255,255,0.85)"
              lineHeight={1.8}
            >
              {od("closingDescription")}
            </Typography>
          </Box>

          <Box
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Sategaon+Anjangaon+Surji+Amravati+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              bgcolor: COLORS.orange,
              color: COLORS.white,
              fontWeight: 800,
              textDecoration: "none",
              transition: "0.2s ease",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                bgcolor: "#D96512",
              },
            }}
          >
            <MapPin size={19} />
            {od("directionsButton")}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
