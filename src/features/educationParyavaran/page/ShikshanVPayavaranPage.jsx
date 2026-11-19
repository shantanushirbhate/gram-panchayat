
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
  BookOpen,
  School,
  GraduationCap,
  TreePine,
  Leaf,
  Recycle,
  Droplets,
  UsersRound,
  FileText,
  ShieldCheck,
} from "lucide-react";

import EducationParyavaranHero from "../components/EducationParyavaranHero";
import EducationSectionHeading from "../components/EducationSectionHeading";

const ShikshanVPayavaranPage = () => {
  const { t } = useTranslation();

  const educationItems = [
    { id: 1, key: "schoolInformation", icon: School },
    { id: 2, key: "educationFacilities", icon: BookOpen },
    { id: 3, key: "higherEducation", icon: GraduationCap },
  ];

  const environmentItems = [
    { id: 1, key: "environmentProtection", icon: Leaf },
    { id: 2, key: "treePlantation", icon: TreePine },
    { id: 3, key: "wasteManagement", icon: Recycle },
    { id: 4, key: "waterConservation", icon: Droplets },
  ];

  const informationItems = [
    { id: 1, key: "publicAwareness", icon: UsersRound },
    { id: 2, key: "officialInformation", icon: FileText },
    { id: 3, key: "communityParticipation", icon: ShieldCheck },
  ];

  const renderItems = (items, translationPath) => (
    <Grid container spacing={3}>
      {items.map((item) => {
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
                backgroundColor: "#FFFFFF",
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
                {t(`${translationPath}.${item.key}.title`)}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.8,
                }}
              >
                {t(`${translationPath}.${item.key}.description`)}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <EducationParyavaranHero
        title={t("information.hero.title")}
        subtitle={t("information.hero.description")}
        breadcrumb={t("information.hero.breadcrumb")}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("information.intro.eyebrow")}
          title={t("information.intro.title")}
          description={t("information.intro.description")}
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
              <BookOpen size={32} />
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
                {t("information.message.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.9,
                }}
              >
                {t("information.message.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Education Information */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <EducationSectionHeading
            eyebrow={t("information.education.eyebrow")}
            title={t("information.education.title")}
            description={t("information.education.description")}
          />

          {renderItems(
            educationItems,
            "information.education.items"
          )}
        </Container>
      </Box>

      {/* Environment Information */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("information.environment.eyebrow")}
          title={t("information.environment.title")}
          description={t("information.environment.description")}
        />

        {renderItems(
          environmentItems,
          "information.environment.items"
        )}
      </Container>

      {/* Public Participation */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <EducationSectionHeading
            eyebrow={t("information.participation.eyebrow")}
            title={t("information.participation.title")}
            description={t("information.participation.description")}
          />

          {renderItems(
            informationItems,
            "information.participation.items"
          )}
        </Container>
      </Box>

      {/* Closing Note */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
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
            <Leaf
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
              {t("information.note.title")}
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
              {t("information.note.description")}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ShikshanVPayavaranPage;
