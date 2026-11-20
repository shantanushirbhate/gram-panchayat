import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Chip,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import {
  Home,
  Sprout,
  HardHat,
  HeartPulse,
  Droplets,
  Baby,
  Target,
  IndianRupee,
  ClipboardList,
  Info,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

// Government schemes displayed on the page.
// All text is loaded from the English and Marathi locale files.
const governmentSchemes = [
  {
    id: 1,
    key: "housing",
    icon: Home,
  },
  {
    id: 2,
    key: "agriculture",
    icon: Sprout,
  },
  {
    id: 3,
    key: "employment",
    icon: HardHat,
  },
  {
    id: 4,
    key: "health",
    icon: HeartPulse,
  },
  {
    id: 5,
    key: "water",
    icon: Droplets,
  },
  {
    id: 6,
    key: "womenChild",
    icon: Baby,
  },
];

const applicationSteps = [
  "stepOne",
  "stepTwo",
  "stepThree",
  "stepFour",
];

const ShaskiyaYojnaPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <ServicesHero
        title={t("services.schemes.hero.title")}
        subtitle={t("services.schemes.hero.description")}
        breadcrumb={t("services.schemes.hero.breadcrumb")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={t("services.schemes.intro.eyebrow")}
          title={t("services.schemes.intro.title")}
          description={t("services.schemes.intro.description")}
        />

        {/* Scheme Categories */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1.2}
          sx={{ mt: 3, mb: { xs: 3, md: 4 } }}
        >
          {governmentSchemes.map((scheme) => {
            const Icon = scheme.icon;

            return (
              <Chip
                key={scheme.id}
                icon={<Icon size={17} />}
                label={t(
                  `services.schemes.items.${scheme.key}.category`
                )}
                sx={{
                  height: 38,
                  px: 0.8,
                  borderRadius: 2,
                  bgcolor: "#EDF5EF",
                  color: "#14532D",
                  fontWeight: 700,
                  "& .MuiChip-icon": {
                    color: "#14532D",
                  },
                }}
              />
            );
          })}
        </Stack>

        {/* Government Scheme Cards */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {governmentSchemes.map((scheme) => {
            const Icon = scheme.icon;
            const schemeKey = `services.schemes.items.${scheme.key}`;

            return (
              <Grid
                key={scheme.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 350,
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#E87519",
                      boxShadow:
                        "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack spacing={2} sx={{ flex: 1 }}>
                    {/* Icon and Category */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 3,
                          bgcolor: "#EDF5EF",
                          color: "#14532D",
                        }}
                      >
                        <Icon size={27} />
                      </Box>

                      <Chip
                        size="small"
                        label={t(`${schemeKey}.category`)}
                        sx={{
                          bgcolor: "#FFF1DC",
                          color: "#A45B16",
                          fontWeight: 700,
                          borderRadius: 1.5,
                        }}
                      />
                    </Stack>

                    {/* Scheme Name */}
                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontSize: "1.08rem",
                        fontWeight: 800,
                        lineHeight: 1.55,
                        minHeight: 52,
                      }}
                    >
                      {t(`${schemeKey}.title`)}
                    </Typography>

                    {/* Objective */}
                    <Stack direction="row" spacing={1.2}>
                      <Box sx={{ color: "#14532D", pt: 0.3 }}>
                        <Target size={19} />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#173B2A",
                            fontSize: "0.84rem",
                            fontWeight: 800,
                            mb: 0.4,
                          }}
                        >
                          {t("services.schemes.labels.objective")}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748B",
                            fontSize: "0.86rem",
                            lineHeight: 1.75,
                          }}
                        >
                          {t(`${schemeKey}.objective`)}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Benefits */}
                    <Stack direction="row" spacing={1.2}>
                      <Box sx={{ color: "#E87519", pt: 0.3 }}>
                        <IndianRupee size={19} />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#173B2A",
                            fontSize: "0.84rem",
                            fontWeight: 800,
                            mb: 0.4,
                          }}
                        >
                          {t("services.schemes.labels.benefit")}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748B",
                            fontSize: "0.86rem",
                            lineHeight: 1.75,
                          }}
                        >
                          {t(`${schemeKey}.benefit`)}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Eligibility */}
                    <Stack direction="row" spacing={1.2}>
                      <Box sx={{ color: "#14532D", pt: 0.3 }}>
                        <ClipboardList size={19} />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#173B2A",
                            fontSize: "0.84rem",
                            fontWeight: 800,
                            mb: 0.4,
                          }}
                        >
                          {t("services.schemes.labels.eligibility")}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748B",
                            fontSize: "0.86rem",
                            lineHeight: 1.75,
                          }}
                        >
                          {t(`${schemeKey}.eligibility`)}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Application Guidance */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={t("services.schemes.process.eyebrow")}
            title={t("services.schemes.process.title")}
            description={t("services.schemes.process.description")}
            align="left"
          />

          <Grid container spacing={2.5}>
            {applicationSteps.map((step, index) => (
              <Grid
                key={step}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "50%",
                        bgcolor: "#14532D",
                        color: "#FFFFFF",
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 700,
                        lineHeight: 1.7,
                      }}
                    >
                      {t(`services.schemes.process.${step}`)}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Important Information */}
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 2.5, sm: 3.5 },
            borderRadius: 4,
            bgcolor: "#FFF1DC",
            border: "1px solid #F5D7AF",
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="flex-start"
          >
            <Box sx={{ flexShrink: 0, mt: 0.3 }}>
              <Info size={23} color="#C46A14" />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#8A4B10",
                  fontWeight: 800,
                  mb: 0.8,
                }}
              >
                {t("services.schemes.note.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#79552F",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                {t("services.schemes.note.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default ShaskiyaYojnaPage;