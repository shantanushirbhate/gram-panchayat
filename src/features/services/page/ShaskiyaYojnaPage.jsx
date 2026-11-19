
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Landmark,
  UsersRound,
  Home,
  GraduationCap,
  HeartPulse,
  Sprout,
  FileCheck,
  Info,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const schemeCategories = [
  { id: 1, key: "socialWelfare", icon: UsersRound },
  { id: 2, key: "housingSchemes", icon: Home },
  { id: 3, key: "educationSchemes", icon: GraduationCap },
  { id: 4, key: "healthSchemes", icon: HeartPulse },
  { id: 5, key: "agricultureSchemes", icon: Sprout },
  { id: 6, key: "otherSchemes", icon: FileCheck },
];

const ShaskiyaYojnaPage = () => {
  const { t } = useTranslation();

  const applicationSteps = [
    "stepOne",
    "stepTwo",
    "stepThree",
    "stepFour",
  ];

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      <ServicesHero
        title={t("services.schemes.hero.title")}
        subtitle={t("services.schemes.hero.description")}
        breadcrumb={t("services.schemes.hero.breadcrumb")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <ServicesSectionHeading
          eyebrow={t("services.schemes.intro.eyebrow")}
          title={t("services.schemes.intro.title")}
          description={t("services.schemes.intro.description")}
        />

        {/* Scheme Categories */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
          {schemeCategories.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 190,
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#E87519",
                      boxShadow: "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack spacing={2}>
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

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                      }}
                    >
                      {t(`services.schemes.categories.${item.key}.title`)}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.88rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {t(`services.schemes.categories.${item.key}.description`)}
                    </Typography>
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
              <Grid key={step} size={{ xs: 12, sm: 6, md: 3 }}>
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

        {/* Information Note */}
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
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Info size={23} color="#C46A14" />
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
