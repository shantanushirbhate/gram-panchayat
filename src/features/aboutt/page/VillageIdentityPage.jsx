
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

import {
  MapPin,
  Landmark,
  Building2,
  Map,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import AboutHero from "../components/AboutHero";
import AboutSectionHeading from "../components/AboutSectionHeading";

const COLORS = {
  green: "#14532D",
  darkGreen: "#0B2E1A",
  heading: "#173B2A",
  text: "#52645A",
  muted: "#718096",
  orange: "#E87519",
  border: "#E4EDE5",
  background: "#FFFDF9",
  lightGreen: "#EDF5EF",
};

// Consistent desktop spacing
const pageContainerSx = {
  width: "100%",
  maxWidth: "none",
  px: {
    xs: 2,
    sm: 3,
    md: "48px",
    lg: "96px",
  },
  mx: "auto",
  boxSizing: "border-box",
};

const identityDetails = [
  {
    label: "villageIdentity.details.villageName",
    value: "villageIdentity.details.villageValue",
    icon: Landmark,
  },
  {
    label: "villageIdentity.details.administrativeBody",
    value: "villageIdentity.details.administrativeBodyValue",
    icon: Building2,
  },
  {
    label: "villageIdentity.details.taluka",
    value: "villageIdentity.details.talukaValue",
    icon: MapPin,
  },
  {
    label: "villageIdentity.details.district",
    value: "villageIdentity.details.districtValue",
    icon: Map,
  },
  {
    label: "villageIdentity.details.state",
    value: "villageIdentity.details.stateValue",
    icon: ShieldCheck,
  },
  {
    label: "villageIdentity.details.environment",
    value: "villageIdentity.details.environmentValue",
    icon: Sprout,
  },
];

const locationDetails = [
  ["villageIdentity.location.village", "villageIdentity.location.villageValue"],
  ["villageIdentity.location.taluka", "villageIdentity.location.talukaValue"],
  ["villageIdentity.location.district", "villageIdentity.location.districtValue"],
  ["villageIdentity.location.state", "villageIdentity.location.stateValue"],
  ["villageIdentity.location.country", "villageIdentity.location.countryValue"],
];

function IdentityCard({ item, t }) {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5 },
        height: "100%",
        boxSizing: "border-box",
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "0.25s ease",
        "&:hover": {
          borderColor: COLORS.orange,
          transform: "translateY(-4px)",
          boxShadow: "0 10px 25px rgba(20,83,45,0.08)",
        },
      }}
    >
      <Box
        sx={{
          minWidth: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: COLORS.lightGreen,
          color: COLORS.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={23} />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          fontSize={12}
          color={COLORS.muted}
          fontWeight={600}
        >
          {t(item.label)}
        </Typography>

        <Typography
          fontSize={{ xs: 14, sm: 15 }}
          fontWeight={800}
          color={COLORS.heading}
          sx={{
            overflowWrap: "anywhere",
            mt: 0.4,
          }}
        >
          {t(item.value)}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function VillageIdentityPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: COLORS.background,
        minHeight: "100vh",
        pb: 7,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <AboutHero
        title={t("villageIdentity.heroTitle")}
        subtitle={t("villageIdentity.heroDescription")}
      />

      <Container
        maxWidth={false}
        sx={{
          ...pageContainerSx,
          py: { xs: 5, sm: 6, md: 8 },
        }}
      >
        {/* INTRODUCTION */}
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <AboutSectionHeading
              eyebrow={t("villageIdentity.introEyebrow")}
              title={t("villageIdentity.introTitle")}
            />

            <Typography
              sx={{
                color: COLORS.text,
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 2,
                mb: 2,
              }}
            >
              {t("villageIdentity.introDescription")}
            </Typography>

            <Typography
              sx={{
                color: COLORS.text,
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 2,
              }}
            >
              {t("villageIdentity.introDescription2")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                minHeight: { xs: 240, sm: 300 },
                height: "100%",
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                background:
                  "linear-gradient(145deg, #14532D, #0B2E1A)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Landmark size={58} color="#F5B36F" />

              <Typography
                fontSize={{ xs: 21, sm: 23 }}
                fontWeight={800}
                mt={2}
              >
                {t("villageIdentity.panchayatLabel")}
              </Typography>

              <Typography
                fontSize={{ xs: 19, sm: 20 }}
                fontWeight={700}
                mt={0.5}
              >
                {t("villageIdentity.villageShortName")}
              </Typography>

              <Typography
                fontSize={14}
                color="#DCE9DF"
                mt={1}
              >
                {t("villageIdentity.talukaDistrict")}
              </Typography>

              <Divider
                sx={{
                  width: 65,
                  borderColor: COLORS.orange,
                  borderBottomWidth: 4,
                  mt: 2.5,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* VILLAGE DETAILS */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <AboutSectionHeading
            eyebrow={t("villageIdentity.detailsEyebrow")}
            title={t("villageIdentity.detailsTitle")}
            description={t("villageIdentity.detailsDescription")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 2 }}
            alignItems="stretch"
          >
            {identityDetails.map((item) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={item.label}
                sx={{ display: "flex" }}
              >
                <IdentityCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ADMINISTRATIVE LOCATION */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <AboutSectionHeading
            eyebrow={t("villageIdentity.locationEyebrow")}
            title={t("villageIdentity.locationTitle")}
            description={t("villageIdentity.locationDescription")}
          />

          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: 3,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <Stack spacing={2}>
              {locationDetails.map(([label, value]) => (
                <Stack
                  key={label}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={2}
                >
                  <Typography
                    color={COLORS.muted}
                    fontSize={{ xs: 13, sm: 14 }}
                  >
                    {t(label)}
                  </Typography>

                  <Typography
                    color={COLORS.heading}
                    fontWeight={700}
                    fontSize={{ xs: 13, sm: 15 }}
                    textAlign="right"
                  >
                    {t(value)}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Box>

        {/* CLOSING MESSAGE */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            bgcolor: "#F0F6F0",
            borderLeft: `5px solid ${COLORS.orange}`,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            color={COLORS.green}
            fontWeight={800}
            fontSize={{ xs: 19, md: 24 }}
          >
            {t("villageIdentity.closingTitle")}
          </Typography>

          <Typography
            color="#64748B"
            mt={1}
            fontSize={{ xs: 13, sm: 14 }}
            lineHeight={1.8}
          >
            {t("villageIdentity.closingDescription")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
