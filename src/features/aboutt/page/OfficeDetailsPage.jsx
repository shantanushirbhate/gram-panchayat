
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
  Divider,
} from "@mui/material";

import {
  Landmark,
  MapPin,
  Clock,
  Phone,
  Mail,
  CalendarDays,
  Building2,
  Users,
  FileText,
  ShieldCheck,
  ArrowRight,
  Navigation,
  BriefcaseBusiness,
  Info,
  CheckCircle2,
  Globe,
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

const officeFacilities = [
  { key: "certificates", icon: FileText },
  { key: "publicServices", icon: Users },
  { key: "administration", icon: BriefcaseBusiness },
  { key: "schemes", icon: ShieldCheck },
];

const visitSteps = [1, 2, 3, 4];

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

function DetailCard({ icon: Icon, title, description, children }) {
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
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 2.5,
            bgcolor: COLORS.lightGreen,
            color: COLORS.green,
            display: "grid",
            placeItems: "center",
            mb: 2.2,
          }}
        >
          <Icon size={25} />
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

        {children}
      </CardContent>
    </Card>
  );
}

export default function OfficeDetailsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const od = (key) => t(`officeDetails.${key}`);

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
            icon={<Landmark size={16} />}
            label={od("heroBadge")}
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
            {od("heroTitle")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.82)",
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
              color="rgba(255,255,255,0.85)"
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

            <Typography color={COLORS.muted} lineHeight={1.9} mb={2}>
              {od("introDescription")}
            </Typography>

            <Typography color={COLORS.muted} lineHeight={1.9}>
              {od("introDescription2")}
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
                color="rgba(255,255,255,0.82)"
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
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <DetailCard
              icon={MapPin}
              title={od("locationTitle")}
              description={od("locationDescription")}
            >
              <Typography
                mt={2}
                color={COLORS.green}
                fontWeight={700}
                variant="body2"
              >
                {od("address")}
              </Typography>
            </DetailCard>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <DetailCard
              icon={Clock}
              title={od("timingTitle")}
              description={od("timingDescription")}
            >
              <Typography
                mt={2}
                color={COLORS.green}
                fontWeight={700}
                variant="body2"
              >
                {od("timingValue")}
              </Typography>
            </DetailCard>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <DetailCard
              icon={CalendarDays}
              title={od("workingDaysTitle")}
              description={od("workingDaysDescription")}
            >
              <Typography
                mt={2}
                color={COLORS.green}
                fontWeight={700}
                variant="body2"
              >
                {od("workingDaysValue")}
              </Typography>
            </DetailCard>
          </Grid>
        </Grid>
      </Container>

      {/* CONTACT INFORMATION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={od("contactEyebrow")}
          title={od("contactTitle")}
          description={od("contactDescription")}
        />

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={Phone}
              title={od("phoneTitle")}
              description={od("phoneDescription")}
            >
              <Button
                component="a"
                href="tel:9920942994"
                startIcon={<Phone size={17} />}
                sx={{
                  mt: 2,
                  color: COLORS.green,
                  fontWeight: 800,
                  textTransform: "none",
                  px: 0,
                  "&:hover": { bgcolor: "transparent", color: COLORS.orange },
                }}
              >
                9920942994
              </Button>
            </DetailCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DetailCard
              icon={Mail}
              title={od("emailTitle")}
              description={od("emailDescription")}
            >
              <Button
                component="a"
                href="mailto:gppimpalkhuta30@gmail.com"
                startIcon={<Mail size={17} />}
                sx={{
                  mt: 2,
                  color: COLORS.green,
                  fontWeight: 800,
                  textTransform: "none",
                  px: 0,
                  "&:hover": { bgcolor: "transparent", color: COLORS.orange },
                }}
              >
                gppimpalkhuta30@gmail.com
              </Button>
            </DetailCard>
          </Grid>
        </Grid>
      </Container>

      {/* FACILITIES */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <SectionHeading
          eyebrow={od("facilitiesEyebrow")}
          title={od("facilitiesTitle")}
          description={od("facilitiesDescription")}
        />

        <Grid container spacing={2.5}>
          {officeFacilities.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.key} size={{ xs: 12, sm: 6, md: 3 }}>
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
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.7 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2.5,
                        bgcolor: COLORS.lightGreen,
                        color: COLORS.green,
                        display: "grid",
                        placeItems: "center",
                        mb: 2,
                      }}
                    >
                      <Icon size={24} />
                    </Box>

                    <Typography
                      fontWeight={800}
                      color={COLORS.green}
                      mb={1}
                    >
                      {od(`facilities.${item.key}.title`)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color={COLORS.muted}
                      lineHeight={1.8}
                    >
                      {od(`facilities.${item.key}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* VISITING GUIDELINES */}
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
              <Info size={27} />
            </Box>

            <Box>
              <Typography
                variant="h5"
                fontWeight={900}
                color={COLORS.green}
              >
                {od("guidelinesTitle")}
              </Typography>

              <Typography color={COLORS.muted} variant="body2">
                {od("guidelinesDescription")}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: COLORS.border, mb: 3 }} />

          <Grid container spacing={2.5}>
            {visitSteps.map((number) => (
              <Grid key={number} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: COLORS.lightGreen,
                      color: COLORS.green,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    {number}
                  </Box>

                  <Typography color={COLORS.text} lineHeight={1.8}>
                    {od(`guidelines.${number}`)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* LOCATION CTA */}
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
              <Globe size={19} color="#F5B36F" />

              <Typography
                color="#F5B36F"
                fontWeight={800}
                letterSpacing={1}
                fontSize="0.78rem"
              >
                {od("closingEyebrow")}
              </Typography>
            </Stack>

            <Typography
              variant="h4"
              fontWeight={900}
              fontSize={{ xs: "1.6rem", md: "2.1rem" }}
              mb={1.2}
            >
              {od("closingTitle")}
            </Typography>

            <Typography
              color="rgba(255,255,255,0.8)"
              lineHeight={1.8}
            >
              {od("closingDescription")}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            width={{ xs: "100%", md: "auto" }}
          >
            <Button
              component="a"
              href="https://www.google.com/maps/search/?api=1&query=Gram+Panchayat+Pimpalkhuta+Budruk+Warud+Amravati+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<Navigation size={18} />}
              sx={{
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
              {od("directionsButton")}
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/contact")}
              endIcon={<ArrowRight size={18} />}
              sx={{
                color: COLORS.white,
                borderColor: "rgba(255,255,255,0.5)",
                px: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": {
                  borderColor: COLORS.white,
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              {od("contactButton")}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
