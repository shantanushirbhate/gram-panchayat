
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
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
  Eye,
  Target,
  Scale,
  Bus,
  Zap,
  UsersRound,
  Home,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  MoveUpRight,
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
  white: "#FFFFFF",
  paleOrange: "#FFF3E8",
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

const sectionSx = {
  mt: { xs: 8, sm: 9, md: 11 },
};

const profileItems = [
  { label: "profile.village", value: "profile.villageValue", icon: Landmark },
  { label: "profile.taluka", value: "profile.talukaValue", icon: MapPin },
  { label: "profile.district", value: "profile.districtValue", icon: Building2 },
  { label: "profile.state", value: "profile.stateValue", icon: MapPin },
  { label: "profile.country", value: "profile.countryValue", icon: ShieldCheck },
  { label: "profile.character", value: "profile.characterValue", icon: Sprout },
];

const villageFeatures = [
  {
    title: "features.agriculture.title",
    description: "features.agriculture.description",
    icon: Sprout,
    color: "#27834B",
    bg: "#E8F5EB",
  },
  {
    title: "features.community.title",
    description: "features.community.description",
    icon: Users,
    color: "#2876B9",
    bg: "#E8F2FC",
  },
  {
    title: "features.environment.title",
    description: "features.environment.description",
    icon: TreePine,
    color: "#16836A",
    bg: "#E5F5EF",
  },
  {
    title: "features.governance.title",
    description: "features.governance.description",
    icon: Landmark,
    color: "#C66A20",
    bg: "#FFF1E3",
  },
];

const visionMissionItems = [
  {
    title: "visionMission.visionTitle",
    description: "visionMission.visionDescription",
    icon: Eye,
    color: "#2876B9",
    bg: "#E8F2FC",
  },
  {
    title: "visionMission.missionTitle",
    description: "visionMission.missionDescription",
    icon: Target,
    color: "#27834B",
    bg: "#E8F5EB",
  },
  {
    title: "visionMission.valuesTitle",
    description: "visionMission.valuesDescription",
    icon: Scale,
    color: "#C66A20",
    bg: "#FFF1E3",
  },
];

const statisticsItems = [
  {
    label: "statistics.totalPopulation",
    value: "statistics.totalPopulationValue",
    icon: UsersRound,
  },
  {
    label: "statistics.male",
    value: "statistics.maleValue",
    icon: Users,
  },
  {
    label: "statistics.female",
    value: "statistics.femaleValue",
    icon: Users,
  },
  {
    label: "statistics.literacy",
    value: "statistics.literacyValue",
    icon: GraduationCap,
  },
  {
    label: "statistics.sc",
    value: "statistics.scValue",
    icon: UsersRound,
  },
  {
    label: "statistics.st",
    value: "statistics.stValue",
    icon: UsersRound,
  },
  {
    label: "statistics.sexRatio",
    value: "statistics.sexRatioValue",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    label: "statistics.totalHouses",
    value: "statistics.totalHousesValue",
    icon: Home,
  },
];

const publicFacilities = [
  {
    title: "facilities.roads.title",
    description: "facilities.roads.description",
    icon: Route,
  },
  {
    title: "facilities.transport.title",
    description: "facilities.transport.description",
    icon: Bus,
  },
  {
    title: "facilities.water.title",
    description: "facilities.water.description",
    icon: Droplets,
  },
  {
    title: "facilities.electricity.title",
    description: "facilities.electricity.description",
    icon: Zap,
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

// SECTION DECORATION
function SectionAccent() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: 65,
        height: 4,
        borderRadius: 5,
        background: "linear-gradient(90deg, #E87519, #14532D)",
        mt: 2,
      }}
    />
  );
}

// PROFILE CARD
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
        bgcolor: "#FFFFFF",
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: COLORS.orange,
          transform: "translateY(-5px)",
          boxShadow: "0 12px 28px rgba(20,83,45,0.09)",
        },
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          flexShrink: 0,
          borderRadius: 2.5,
          bgcolor: COLORS.lightGreen,
          color: COLORS.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={24} />
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
          sx={{ mt: 0.5, overflowWrap: "anywhere" }}
        >
          {t(item.value)}
        </Typography>
      </Box>
    </Paper>
  );
}

// INFORMATION CARD
function InformationCard({ item, t }) {
  const Icon = item.icon;
  const color = item.color || COLORS.green;
  const bg = item.bg || COLORS.lightGreen;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2.5, sm: 3 },
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3.5,
        bgcolor: "#FFFFFF",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: COLORS.orange,
          boxShadow: "0 14px 32px rgba(20,83,45,0.09)",
        },
      }}
    >
      <Box
        sx={{
          width: 54,
          height: 54,
          mb: 2.5,
          borderRadius: 2.5,
          bgcolor: bg,
          color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={26} />
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

      <Box
        sx={{
          mt: 2.5,
          width: 35,
          height: 3,
          borderRadius: 3,
          bgcolor: color,
        }}
      />
    </Paper>
  );
}

// VISION / MISSION / VALUES CARD
function VisionMissionCard({ item, t }) {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 3, sm: 3.5 },
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3.5,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 15px 32px rgba(20,83,45,0.09)",
          borderColor: COLORS.orange,
        },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: 125,
          height: 125,
          borderRadius: "50%",
          bgcolor: item.bg,
          top: -65,
          right: -55,
          opacity: 0.75,
        }}
      />

      <Box
        sx={{
          position: "relative",
          width: 58,
          height: 58,
          borderRadius: 2.5,
          bgcolor: item.bg,
          color: item.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Icon size={28} />
      </Box>

      <Typography
        fontSize={{ xs: 18, sm: 20 }}
        fontWeight={800}
        color={COLORS.heading}
        mb={1.5}
      >
        {t(item.title)}
      </Typography>

      <Typography
        fontSize={14}
        lineHeight={2}
        color={COLORS.text}
      >
        {t(item.description)}
      </Typography>
    </Paper>
  );
}

// STATISTICS CARD
function StatisticsCard({ item, t }) {
  const Icon = item.icon;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2, sm: 2.7 },
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3.5,
        textAlign: "center",
        bgcolor: "#FFFFFF",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: COLORS.orange,
          boxShadow: "0 12px 28px rgba(20,83,45,0.09)",
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          mx: "auto",
          mb: 1.5,
          borderRadius: 2.5,
          bgcolor: COLORS.lightGreen,
          color: COLORS.green,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={23} />
      </Box>

      <Typography
        fontSize={{ xs: 21, sm: 26 }}
        fontWeight={900}
        color={COLORS.green}
        sx={{ overflowWrap: "anywhere" }}
      >
        {t(item.value)}
      </Typography>

      <Typography
        fontSize={{ xs: 11, sm: 13 }}
        fontWeight={600}
        color={COLORS.muted}
        mt={0.8}
        lineHeight={1.6}
      >
        {t(item.label)}
      </Typography>
    </Paper>
  );
}

// MAIN PAGE
export default function VillageInformationPage() {
  const { t } = useTranslation("about/villageInformation");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: COLORS.background,
        minHeight: "100vh",
        pb: 8,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ height: "100%", py: { md: 2 } }}>
              <AboutSectionHeading
                eyebrow={t("villageInformation.introEyebrow")}
                title={t("villageInformation.introTitle")}
              />

              <SectionAccent />

              <Typography
                sx={{
                  color: COLORS.text,
                  fontSize: { xs: 14, sm: 15 },
                  lineHeight: 2,
                  mt: 3,
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

              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{
                  mt: 3,
                  color: COLORS.green,
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={20} />
                <Typography fontSize={13} fontWeight={700}>
                  {t("villageInformation.villageName")}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: { xs: 290, sm: 330 },
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, #14532D 0%, #0B2E1A 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#FFFFFF",
                boxShadow: "0 18px 40px rgba(11,46,26,0.16)",
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  width: 250,
                  height: 250,
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                }}
              />

              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  width: 190,
                  height: 190,
                  border: "1px dashed rgba(255,255,255,0.17)",
                  borderRadius: "50%",
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: 82,
                  height: 82,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sprout size={45} color="#F5B36F" />
              </Box>

              <Typography
                fontSize={{ xs: 21, sm: 25 }}
                fontWeight={900}
                mt={3}
                sx={{ position: "relative", zIndex: 1 }}
              >
                {t("villageInformation.villageName")}
              </Typography>

              <Typography
                fontSize={14}
                color="#DCE9DF"
                mt={1}
                sx={{ position: "relative", zIndex: 1 }}
              >
                {t("villageInformation.location")}
              </Typography>

              <Box
                sx={{
                  width: 65,
                  height: 4,
                  borderRadius: 5,
                  bgcolor: COLORS.orange,
                  mt: 2.5,
                  position: "relative",
                  zIndex: 1,
                }}
              />

              <Typography
                fontSize={13}
                color="#DCE9DF"
                mt={2}
                sx={{ position: "relative", zIndex: 1 }}
              >
                {t("villageInformation.cardCaption")}
              </Typography>

              <MapPin
                size={22}
                color="#F5B36F"
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 22,
                  opacity: 0.65,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* VILLAGE PROFILE */}
        <Box sx={sectionSx}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.profileEyebrow")}
            title={t("villageInformation.profileTitle")}
            description={t("villageInformation.profileDescription")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 3 }}
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
        <Box sx={sectionSx}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.featuresEyebrow")}
            title={t("villageInformation.featuresTitle")}
            description={t("villageInformation.featuresDescription")}
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 3 }}
            alignItems="stretch"
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

        {/* VISION, MISSION AND VALUES */}
        <Box
          sx={{
            ...sectionSx,
            mx: { xs: -2, sm: -3, md: "-48px", lg: "-96px" },
            px: { xs: 2, sm: 3, md: "48px", lg: "96px" },
            py: { xs: 5, sm: 6, md: 7 },
            bgcolor: "#F1F6F1",
          }}
        >
          <AboutSectionHeading
            eyebrow={t("visionMission.eyebrow")}
            title={t("visionMission.heading")}
            description={t("visionMission.description")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 3 }}
            alignItems="stretch"
          >
            {visionMissionItems.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, md: 4 }}
              >
                <VisionMissionCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* POPULATION STATISTICS */}
        <Box sx={sectionSx}>
          <Box
            sx={{
              p: { xs: 2.5, sm: 4, md: 5 },
              borderRadius: 4,
              background:
                "linear-gradient(145deg, #0B2E1A 0%, #14532D 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                width: 260,
                height: 260,
                right: -100,
                top: -130,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "50%",
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                mb: 4,
              }}
            >
              <Typography
                color="#F5B36F"
                fontSize={12}
                fontWeight={800}
                letterSpacing={2}
                textTransform="uppercase"
              >
                {t("statistics.eyebrow")}
              </Typography>

              <Typography
                component="h2"
                fontSize={{ xs: 24, sm: 30, md: 35 }}
                fontWeight={900}
                color="#FFFFFF"
                mt={1}
              >
                {t("statistics.heading")}
              </Typography>

              <Typography
                color="#DCE9DF"
                fontSize={14}
                lineHeight={1.9}
                maxWidth={650}
                mx="auto"
                mt={1.5}
              >
                {t("statistics.description")}
              </Typography>

              <Box
                sx={{
                  width: 60,
                  height: 4,
                  borderRadius: 4,
                  bgcolor: COLORS.orange,
                  mx: "auto",
                  mt: 2,
                }}
              />
            </Box>

            <Grid
              container
              spacing={2}
              alignItems="stretch"
              sx={{ position: "relative", zIndex: 1 }}
            >
              {statisticsItems.map((item) => (
                <Grid
                  key={item.label}
                  size={{ xs: 6, sm: 4, md: 3 }}
                >
                  <StatisticsCard item={item} t={t} />
                </Grid>
              ))}
            </Grid>

            <Typography
              fontSize={12}
              color="#DCE9DF"
              textAlign="right"
              mt={3}
              sx={{ position: "relative", zIndex: 1, lineHeight: 1.8 }}
            >
              {t("statistics.source")}
            </Typography>
          </Box>
        </Box>

        {/* PUBLIC FACILITIES */}
        <Box sx={sectionSx}>
          <AboutSectionHeading
            eyebrow={t("villageInformation.facilitiesEyebrow")}
            title={t("villageInformation.facilitiesTitle")}
            description={t("villageInformation.facilitiesDescription")}
            align="center"
          />

          <Grid
            container
            spacing={2.5}
            sx={{ mt: 3 }}
            alignItems="stretch"
          >
            {publicFacilities.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <InformationCard item={item} t={t} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* LOCATION INFORMATION */}
        <Box sx={sectionSx}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 280,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: COLORS.lightGreen,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    width: 150,
                    height: 150,
                    border: "1px solid rgba(20,83,45,0.10)",
                    borderRadius: "50%",
                    right: -55,
                    bottom: -65,
                  }}
                />

                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    bgcolor: COLORS.green,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={30} />
                </Box>

                <Typography
                  fontSize={{ xs: 21, sm: 25 }}
                  fontWeight={900}
                  color={COLORS.heading}
                  mt={3}
                >
                  {t("villageInformation.locationTitle")}
                </Typography>

                <Typography
                  fontSize={14}
                  color={COLORS.text}
                  lineHeight={1.9}
                  mt={1.5}
                >
                  {t("villageInformation.locationDescription")}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  mt={3}
                  color={COLORS.green}
                >
                  <Landmark size={19} />
                  <Typography fontSize={13} fontWeight={800}>
                    {t("profile.villageValue")}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 4,
                  border: `1px solid ${COLORS.border}`,
                  bgcolor: "#FFFFFF",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  mb={3}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: COLORS.paleOrange,
                      color: COLORS.orange,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Building2 size={22} />
                  </Box>

                  <Typography
                    fontSize={{ xs: 17, sm: 19 }}
                    fontWeight={900}
                    color={COLORS.heading}
                  >
                    {t("villageInformation.locationDetailsTitle")}
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  {profileItems.slice(0, 5).map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Box key={item.label}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          gap={2}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.2}
                            sx={{ minWidth: 0 }}
                          >
                            <Icon size={17} color={COLORS.green} />

                            <Typography
                              fontSize={{ xs: 12, sm: 14 }}
                              color={COLORS.muted}
                            >
                              {t(item.label)}
                            </Typography>
                          </Stack>

                          <Typography
                            fontSize={{ xs: 12, sm: 14 }}
                            fontWeight={800}
                            color={COLORS.heading}
                            textAlign="right"
                            sx={{ overflowWrap: "anywhere" }}
                          >
                            {t(item.value)}
                          </Typography>
                        </Stack>

                        {index !== 4 && (
                          <Divider
                            sx={{
                              mt: 2,
                              borderColor: COLORS.border,
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CONTACT CTA */}
        <Box
          sx={{
            mt: { xs: 8, md: 11 },
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 4,
            background:
              "linear-gradient(120deg, #14532D 0%, #0B2E1A 100%)",
            textAlign: "center",
            color: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: 190,
              height: 190,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              top: -105,
              left: -65,
            }}
          />

          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "50%",
              bottom: -135,
              right: -70,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                width: 58,
                height: 58,
                mx: "auto",
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Landmark size={29} color="#F5B36F" />
            </Box>

            <Typography
              component="h2"
              fontSize={{ xs: 21, sm: 26, md: 30 }}
              fontWeight={900}
              mt={2.5}
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

            <Button
              onClick={() => navigate("/contact")}
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                mt: 3,
                px: 3.5,
                py: 1.4,
                borderRadius: 2,
                bgcolor: COLORS.orange,
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: 14,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#D76512",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {t("villageInformation.contactButton")}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* BOTTOM TRICOLOUR STRIP */}
      <Box
        aria-hidden="true"
        sx={{
          display: "flex",
          height: 6,
          width: "100%",
          mt: 3,
        }}
      >
        <Box sx={{ flex: 1, bgcolor: "#FF9933" }} />
        <Box sx={{ flex: 1, bgcolor: "#FFFFFF" }} />
        <Box sx={{ flex: 1, bgcolor: "#138808" }} />
      </Box>
    </Box>
  );
}
