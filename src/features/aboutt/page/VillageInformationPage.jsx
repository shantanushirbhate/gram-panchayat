
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
  Sprout,
  Users,
  Building2,
  Landmark,
  TreePine,
  Droplets,
  Route,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

const profileItems = [
  {
    label: "profile.village",
    value: "profile.villageValue",
    icon: Landmark,
  },
  {
    label: "profile.taluka",
    value: "profile.talukaValue",
    icon: MapPin,
  },
  {
    label: "profile.district",
    value: "profile.districtValue",
    icon: Building2,
  },
  {
    label: "profile.state",
    value: "profile.stateValue",
    icon: MapPin,
  },
  {
    label: "profile.country",
    value: "profile.countryValue",
    icon: ShieldCheck,
  },
  {
    label: "profile.character",
    value: "profile.characterValue",
    icon: Sprout,
  },
];

const villageFeatures = [
  {
    title: "features.agriculture.title",
    description: "features.agriculture.description",
    icon: Sprout,
  },
  {
    title: "features.community.title",
    description: "features.community.description",
    icon: Users,
  },
  {
    title: "features.environment.title",
    description: "features.environment.description",
    icon: TreePine,
  },
  {
    title: "features.governance.title",
    description: "features.governance.description",
    icon: Landmark,
  },
];

const publicFacilities = [
  {
    title: "facilities.water.title",
    description: "facilities.water.description",
    icon: Droplets,
  },
  {
    title: "facilities.roads.title",
    description: "facilities.roads.description",
    icon: Route,
  },
  {
    title: "facilities.education.title",
    description: "facilities.education.description",
    icon: GraduationCap,
  },
  {
    title: "facilities.health.title",
    description: "facilities.health.description",
    icon: HeartPulse,
  },
];

function ProfileCard({ item, t }) {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2, sm: 2.5 },
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
          width: 48,
          height: 48,
          flexShrink: 0,
          borderRadius: 2,
          bgcolor: COLORS.lightGreen,
          color: COLORS.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={23} />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          fontSize={12}
          fontWeight={600}
          color={COLORS.muted}
        >
          {t(item.label)}
        </Typography>

        <Typography
          fontSize={{ xs: 14, sm: 15 }}
          fontWeight={800}
          color={COLORS.heading}
          sx={{
            mt: 0.4,
            overflowWrap: "anywhere",
          }}
        >
          {t(item.value)}
        </Typography>
      </Box>
    </Paper>
  );
}

function InformationCard({ item, t }) {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2.5, sm: 3 },
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3,
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: COLORS.orange,
          boxShadow: "0 12px 28px rgba(20,83,45,0.07)",
        },
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          mb: 2,
          borderRadius: 2,
          bgcolor: COLORS.lightGreen,
          color: COLORS.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={25} />
      </Box>

      <Typography
        fontSize={{ xs: 16, sm: 18 }}
        fontWeight={800}
        color={COLORS.heading}
        mb={1}
      >
        {t(item.title)}
      </Typography>

      <Typography
        fontSize={14}
        lineHeight={1.9}
        color={COLORS.text}
      >
        {t(item.description)}
      </Typography>
    </Paper>
  );
}

export default function VillageInformationPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
        title={t("villageInformation.heroTitle")}
        subtitle={t("villageInformation.heroDescription")}
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
              eyebrow={t("villageInformation.introEyebrow")}
              title={t("villageInformation.introTitle")}
            />

            <Typography
              sx={{
                color: COLORS.text,
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 2,
                mb: 2,
              }}
            >
              {t("villageInformation.introDescription")}
            </Typography>

            <Typography
              sx={{
                color: COLORS.text,
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 2,
              }}
            >
              {t("villageInformation.introDescription2")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                minHeight: { xs: 250, sm: 300 },
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
              <Sprout size={58} color="#F5B36F" />

              <Typography
                fontSize={{ xs: 21, sm: 24 }}
                fontWeight={800}
                mt={2}
              >
                {t("villageInformation.villageName")}
              </Typography>

              <Typography
                fontSize={14}
                color="#DCE9DF"
                mt={1}
              >
                {t("villageInformation.location")}
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

              <Typography
                fontSize={13}
                color="#DCE9DF"
                mt={2}
              >
                {t("villageInformation.cardCaption")}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* VILLAGE PROFILE */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.profileEyebrow")}
            title={t("villageInformation.profileTitle")}
            description={t("villageInformation.profileDescription")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 2 }}
            alignItems="stretch"
          >
            {profileItems.map((item) => (
              <Grid
                key={item.label}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <ProfileCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* VILLAGE CHARACTERISTICS */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.featuresEyebrow")}
            title={t("villageInformation.featuresTitle")}
            description={t("villageInformation.featuresDescription")}
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 2 }}
          >
            {villageFeatures.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <InformationCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* PUBLIC FACILITIES */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.facilitiesEyebrow")}
            title={t("villageInformation.facilitiesTitle")}
            description={t("villageInformation.facilitiesDescription")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 2 }}
          >
            {publicFacilities.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <InformationCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* LOCATION INFORMATION */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 240,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  bgcolor: COLORS.lightGreen,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <MapPin size={38} color={COLORS.green} />

                <Typography
                  fontSize={{ xs: 20, sm: 23 }}
                  fontWeight={800}
                  color={COLORS.heading}
                  mt={2}
                >
                  {t("villageInformation.locationTitle")}
                </Typography>

                <Typography
                  fontSize={14}
                  color={COLORS.text}
                  lineHeight={1.9}
                  mt={1}
                >
                  {t("villageInformation.locationDescription")}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={800}
                  color={COLORS.heading}
                  mb={2.5}
                >
                  {t("villageInformation.locationDetailsTitle")}
                </Typography>

                <Stack spacing={2}>
                  {profileItems.slice(0, 5).map((item, index) => (
                    <Box key={item.label}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap={2}
                      >
                        <Typography
                          fontSize={{ xs: 13, sm: 14 }}
                          color={COLORS.muted}
                        >
                          {t(item.label)}
                        </Typography>

                        <Typography
                          fontSize={{ xs: 13, sm: 14 }}
                          fontWeight={700}
                          color={COLORS.heading}
                          textAlign="right"
                        >
                          {t(item.value)}
                        </Typography>
                      </Stack>

                      {index !== 4 && (
                        <Divider sx={{ mt: 2, borderColor: COLORS.border }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            background:
              "linear-gradient(120deg, #14532D, #0B2E1A)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography
            fontSize={{ xs: 20, sm: 24, md: 28 }}
            fontWeight={800}
          >
            {t("villageInformation.closingTitle")}
          </Typography>

          <Typography
            color="#DCE9DF"
            fontSize={{ xs: 13, sm: 14 }}
            lineHeight={1.9}
            sx={{
              maxWidth: 750,
              mx: "auto",
              mt: 1.5,
            }}
          >
            {t("villageInformation.closingDescription")}
          </Typography>

          <Box
            component="button"
            onClick={() => navigate("/contact")}
            sx={{
              mt: 3,
              px: 3,
              py: 1.4,
              border: 0,
              borderRadius: 2,
              bgcolor: COLORS.orange,
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              transition: "0.2s ease",
              "&:hover": {
                bgcolor: "#D76512",
                transform: "translateY(-2px)",
              },
            }}
          >
            {t("villageInformation.contactButton")}
            <ArrowRight size={17} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
