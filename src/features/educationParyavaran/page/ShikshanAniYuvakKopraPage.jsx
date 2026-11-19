
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  BookOpen,
  School,
  Award,
  UsersRound,
  Laptop,
  BriefcaseBusiness,
  Lightbulb,
  Target,
} from "lucide-react";

import EducationParyavaranHero from "../components/EducationParyavaranHero";
import EducationSectionHeading from "../components/EducationSectionHeading";

const ShikshanAniYuvakKopraPage = () => {
  const { t } = useTranslation();

  const opportunities = [
    { id: 1, key: "schoolEducation", icon: School },
    { id: 2, key: "higherEducation", icon: GraduationCap },
    { id: 3, key: "scholarships", icon: Award },
    { id: 4, key: "digitalLearning", icon: Laptop },
    { id: 5, key: "skillDevelopment", icon: BriefcaseBusiness },
    { id: 6, key: "careerGuidance", icon: Target },
  ];

  const youthActivities = [
    { id: 1, key: "youthParticipation", icon: UsersRound },
    { id: 2, key: "readingCulture", icon: BookOpen },
    { id: 3, key: "innovation", icon: Lightbulb },
  ];

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <EducationParyavaranHero
        title={t("youth.hero.title")}
        subtitle={t("youth.hero.description")}
        breadcrumb={t("youth.hero.breadcrumb")}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("youth.intro.eyebrow")}
          title={t("youth.intro.title")}
          description={t("youth.intro.description")}
        />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3.5, md: 4 },
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5EDE6",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                minWidth: 64,
                borderRadius: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EDF5EE",
                color: "#14532D",
              }}
            >
              <GraduationCap size={32} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#173B2A",
                  fontSize: { xs: 17, sm: 19 },
                  fontWeight: 750,
                  mb: 1,
                }}
              >
                {t("youth.message.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.9,
                }}
              >
                {t("youth.message.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Education Opportunities */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <EducationSectionHeading
            eyebrow={t("youth.opportunities.eyebrow")}
            title={t("youth.opportunities.title")}
            description={t("youth.opportunities.description")}
          />

          <Grid container spacing={3}>
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: 3,
                      border: "1px solid #E5EDE6",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "#E87519",
                        boxShadow: "0 12px 25px rgba(18,61,39,0.09)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#EDF5EE",
                        color: "#14532D",
                        mb: 2,
                      }}
                    >
                      <Icon size={26} />
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 750,
                        fontSize: 17,
                        mb: 1,
                      }}
                    >
                      {t(
                        `youth.opportunities.items.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      {t(
                        `youth.opportunities.items.${item.key}.description`
                      )}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Youth Development */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("youth.activities.eyebrow")}
          title={t("youth.activities.title")}
          description={t("youth.activities.description")}
        />

        <Grid container spacing={3}>
          {youthActivities.map((item) => {
            const Icon = item.icon;

            return (
              <Grid
                key={item.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5EDE6",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#E87519",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      mx: "auto",
                      mb: 2,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#EDF5EE",
                      color: "#14532D",
                    }}
                  >
                    <Icon size={27} />
                  </Box>

                  <Typography
                    sx={{
                      color: "#173B2A",
                      fontWeight: 750,
                      fontSize: 17,
                      mb: 1,
                    }}
                  >
                    {t(
                      `youth.activities.items.${item.key}.title`
                    )}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    {t(
                      `youth.activities.items.${item.key}.description`
                    )}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Closing Note */}
      <Box sx={{ pb: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              background: "linear-gradient(120deg, #123D27, #14532D)",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <BookOpen
              size={34}
              color="#F5B66A"
              style={{ marginBottom: 12 }}
            />

            <Typography
              sx={{
                fontSize: { xs: 19, sm: 23 },
                fontWeight: 800,
                mb: 1.5,
              }}
            >
              {t("youth.note.title")}
            </Typography>

            <Typography
              sx={{
                maxWidth: 750,
                mx: "auto",
                color: "rgba(255,255,255,0.82)",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              {t("youth.note.description")}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ShikshanAniYuvakKopraPage;
