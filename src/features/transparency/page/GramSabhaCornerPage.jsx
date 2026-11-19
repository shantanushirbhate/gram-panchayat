
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {
  UsersRound,
  CalendarDays,
  FileText,
  ClipboardList,
  Megaphone,
  Landmark,
  Info,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import TransparencyHero from "../components/TransparencyHero";
import TransparencySectionHeading from "../components/TransparencySectionHeading";

const GramSabhaCornerPage = () => {
  const { t } = useTranslation();

  const informationCards = [
    {
      icon: CalendarDays,
      title: t("transparency.gramSabha.sections.meetings.title"),
      description: t(
        "transparency.gramSabha.sections.meetings.description"
      ),
    },
    {
      icon: Megaphone,
      title: t("transparency.gramSabha.sections.notices.title"),
      description: t(
        "transparency.gramSabha.sections.notices.description"
      ),
    },
    {
      icon: ClipboardList,
      title: t("transparency.gramSabha.sections.resolutions.title"),
      description: t(
        "transparency.gramSabha.sections.resolutions.description"
      ),
    },
    {
      icon: FileText,
      title: t("transparency.gramSabha.sections.minutes.title"),
      description: t(
        "transparency.gramSabha.sections.minutes.description"
      ),
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFDF9", minHeight: "100vh" }}>
      {/* Hero Section */}
      <TransparencyHero
        title={t("transparency.gramSabha.hero.title")}
        subtitle={t("transparency.gramSabha.hero.description")}
        breadcrumb={t("transparency.gramSabha.hero.breadcrumb")}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <TransparencySectionHeading
          eyebrow={t("transparency.gramSabha.intro.eyebrow")}
          title={t("transparency.gramSabha.intro.title")}
          description={t("transparency.gramSabha.intro.description")}
        />

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {informationCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={index}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    border: "1px solid #E5E7EB",
                    bgcolor: "#FFFFFF",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(20,83,45,0.09)",
                      borderColor: "#14532D",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      bgcolor: "#EAF3EC",
                      color: "#14532D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Icon size={25} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: "#173B2A",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Gram Sabha Information */}
      <Box sx={{ bgcolor: "#F3F7F2", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <TransparencySectionHeading
            eyebrow={t("transparency.gramSabha.records.eyebrow")}
            title={t("transparency.gramSabha.records.title")}
            description={t("transparency.gramSabha.records.description")}
          />

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 3,
                  height: "100%",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      bgcolor: "#EAF3EC",
                      color: "#14532D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <UsersRound size={24} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#173B2A",
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("transparency.gramSabha.records.meetingTitle")}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2.5 }} />

                <Typography
                  sx={{
                    color: "#64748B",
                    lineHeight: 1.9,
                    fontSize: "0.95rem",
                  }}
                >
                  {t("transparency.gramSabha.records.meetingDescription")}
                </Typography>

                <Chip
                  icon={<CalendarDays size={15} />}
                  label={t("transparency.gramSabha.records.meetingStatus")}
                  sx={{
                    mt: 2.5,
                    bgcolor: "#FFF3E6",
                    color: "#B45309",
                    fontWeight: 700,
                  }}
                />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 3,
                  height: "100%",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      bgcolor: "#FFF1E6",
                      color: "#E87519",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Landmark size={24} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#173B2A",
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("transparency.gramSabha.records.decisionTitle")}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2.5 }} />

                <Typography
                  sx={{
                    color: "#64748B",
                    lineHeight: 1.9,
                    fontSize: "0.95rem",
                  }}
                >
                  {t("transparency.gramSabha.records.decisionDescription")}
                </Typography>

                <Chip
                  icon={<FileText size={15} />}
                  label={t("transparency.gramSabha.records.decisionStatus")}
                  sx={{
                    mt: 2.5,
                    bgcolor: "#EAF3EC",
                    color: "#14532D",
                    fontWeight: 700,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Information Notice */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 4 },
            borderRadius: 3,
            border: "1px solid #F3D5B8",
            bgcolor: "#FFF8EF",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                flexShrink: 0,
                borderRadius: 2,
                bgcolor: "#FCE8D5",
                color: "#C45B12",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Info size={25} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#173B2A",
                  fontSize: "1.05rem",
                  mb: 0.7,
                }}
              >
                {t("transparency.gramSabha.note.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 1.8,
                  fontSize: "0.92rem",
                }}
              >
                {t("transparency.gramSabha.note.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default GramSabhaCornerPage;
