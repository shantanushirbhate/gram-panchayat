
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  Users,
  Sprout,
  Landmark,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import AboutHero from "../components/AboutHero";
import AboutSectionHeading from "../components/AboutSectionHeading";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#E87519",
  cream: "#FFF8EF",
  lightGreen: "#EAF2EC",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E2EAE4",
  background: "#F7F9F7",
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

const journeyItems = [
  {
    key: "community",
    icon: Users,
    color: "#26734D",
    background: "#EAF4ED",
  },
  {
    key: "agriculture",
    icon: Sprout,
    color: "#B66A16",
    background: "#FFF3E2",
  },
  {
    key: "administration",
    icon: Landmark,
    color: "#3869A0",
    background: "#EAF1FA",
  },
  {
    key: "development",
    icon: TrendingUp,
    color: "#7954A3",
    background: "#F2ECF8",
  },
];

const themeItems = [
  {
    key: "community",
    icon: Users,
  },
  {
    key: "agriculture",
    icon: Sprout,
  },
  {
    key: "administration",
    icon: Landmark,
  },
  {
    key: "development",
    icon: TrendingUp,
  },
];

function VillageHistoryPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: COLORS.background, overflow: "hidden" }}>
      {/* HERO SECTION */}

      <AboutHero
        title={t("villageHistory.heroTitle")}
        subtitle={t("villageHistory.heroDescription")}
      />

      {/* INTRODUCTION SECTION */}

      <Container
        maxWidth={false}
        sx={{
          ...pageContainerSx,
          py: { xs: 6, md: 9 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: 20,
                  bgcolor: COLORS.lightGreen,
                  mb: 2,
                }}
              >
                <BookOpen size={16} color={COLORS.green} />

                <Typography
                  sx={{
                    color: COLORS.green,
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                  }}
                >
                  {t("villageHistory.introEyebrow")}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: { xs: 27, sm: 32, md: 39 },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                {t("villageHistory.introTitle")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.9,
                  mb: 2,
                }}
              >
                {t("villageHistory.introDescription")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.9,
                }}
              >
                {t("villageHistory.introDescription2")}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                minHeight: { xs: 240, md: 310 },
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                color: COLORS.white,
                background: `linear-gradient(145deg, ${COLORS.green}, ${COLORS.darkGreen})`,
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
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.13)",
                  right: -55,
                  top: -55,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.13)",
                  right: -25,
                  top: -25,
                }}
              />

              <Landmark size={42} color="#FFB15C" />

              <Typography
                sx={{
                  mt: 3,
                  fontSize: { xs: 21, md: 25 },
                  fontWeight: 800,
                  lineHeight: 1.4,
                  position: "relative",
                }}
              >
                {t("villageHistory.panchayatName")}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  position: "relative",
                }}
              >
                {t("villageHistory.location")}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  width: 55,
                  height: 4,
                  borderRadius: 5,
                  bgcolor: COLORS.orange,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* HISTORICAL BACKGROUND */}

      <Box sx={{ bgcolor: COLORS.white, py: { xs: 6, md: 9 } }}>
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.backgroundEyebrow")}
            title={t("villageHistory.backgroundTitle")}
            description={t("villageHistory.backgroundDescription")}
            align="center"
          />

          <Paper
            elevation={0}
            sx={{
              mt: 5,
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 4,
              border: `1px solid ${COLORS.border}`,
              bgcolor: COLORS.cream,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 6,
                height: "100%",
                bgcolor: COLORS.orange,
              }}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Box
                sx={{
                  width: 68,
                  height: 68,
                  flexShrink: 0,
                  borderRadius: 3,
                  bgcolor: COLORS.lightGreen,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <BookOpen size={32} color={COLORS.green} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: COLORS.green,
                    fontSize: { xs: 21, md: 25 },
                    fontWeight: 800,
                    mb: 1.5,
                  }}
                >
                  {t("villageHistory.backgroundCardTitle")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: 15,
                    lineHeight: 1.9,
                  }}
                >
                  {t("villageHistory.backgroundCardDescription")}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* VILLAGE JOURNEY */}

      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.journeyEyebrow")}
            title={t("villageHistory.journeyTitle")}
            description={t("villageHistory.journeyDescription")}
            align="center"
          />

          <Grid container spacing={3} sx={{ mt: 3 }}>
            {journeyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  key={item.key}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      height: { xs: "auto", sm: 340 },
                      minHeight: 340,
                      boxSizing: "border-box",
                      p: { xs: 3, md: 3.5 },
                      borderRadius: 4,
                      bgcolor: COLORS.white,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow:
                          "0 14px 35px rgba(23,59,42,0.09)",
                        borderColor: item.color,
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          flexShrink: 0,
                          borderRadius: 3,
                          bgcolor: item.background,
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Icon size={28} color={item.color} />
                      </Box>

                      <Typography
                        sx={{
                          color: "#B7C4BA",
                          fontWeight: 800,
                          fontSize: 20,
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        mt: 3,
                        mb: 1,
                        color: item.color,
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1,
                        minHeight: 18,
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.label`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontSize: 18,
                        fontWeight: 800,
                        lineHeight: 1.4,
                        mb: 1.5,
                        minHeight: 52,
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 14,
                        lineHeight: 1.8,
                        flexGrow: 1,
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.description`
                      )}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* VILLAGE THEMES */}

      <Box sx={{ bgcolor: COLORS.white, py: { xs: 6, md: 9 } }}>
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.themesEyebrow")}
            title={t("villageHistory.themesTitle")}
            description={t("villageHistory.themesDescription")}
            align="center"
          />

          <Grid container spacing={3} sx={{ mt: 3 }}>
            {themeItems.map((item) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={item.key}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      height: { xs: "auto", sm: 155 },
                      minHeight: 155,
                      boxSizing: "border-box",
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      gap: 2.5,
                      alignItems: "center",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: COLORS.orange,
                        bgcolor: COLORS.cream,
                        boxShadow:
                          "0 10px 25px rgba(23,59,42,0.07)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        flexShrink: 0,
                        borderRadius: 2.5,
                        bgcolor: COLORS.lightGreen,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon size={25} color={COLORS.green} />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          color: COLORS.green,
                          fontSize: 18,
                          fontWeight: 800,
                          mb: 0.8,
                        }}
                      >
                        {t(
                          `villageHistory.themes.${item.key}.title`
                        )}
                      </Typography>

                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: 14,
                          lineHeight: 1.8,
                        }}
                      >
                        {t(
                          `villageHistory.themes.${item.key}.description`
                        )}
                      </Typography>
                    </Box>

                    <ArrowUpRight
                      size={19}
                      color={COLORS.orange}
                      style={{ flexShrink: 0 }}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CLOSING SECTION */}

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          bgcolor: COLORS.green,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <Typography
            sx={{
              color: "#FFB15C",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            {t("villageHistory.panchayatName")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.white,
              fontSize: { xs: 27, sm: 32, md: 39 },
              fontWeight: 800,
              lineHeight: 1.25,
              mb: 2,
            }}
          >
            {t("villageHistory.closingTitle")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.78)",
              maxWidth: 760,
              mx: "auto",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.9,
            }}
          >
            {t("villageHistory.closingDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              bgcolor: COLORS.orange,
              mx: "auto",
              mt: 3,
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default VillageHistoryPage;
