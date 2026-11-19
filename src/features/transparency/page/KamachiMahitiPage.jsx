
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";

import {
  HardHat,
  CheckCircle2,
  Clock,
  ClipboardList,
  Building2,
  MapPin,
  CalendarDays,
  IndianRupee,
  FileText,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import TransparencyHero from "../components/TransparencyHero";
import TransparencySectionHeading from "../components/TransparencySectionHeading";

function KamachiMahitiPage() {
  const { t } = useTranslation();

  // Replace these sample records with verified Gram Panchayat information.
  const workCategories = [
    {
      icon: CheckCircle2,
      title: t("transparency.works.categories.completed.title"),
      description: t("transparency.works.categories.completed.description"),
      color: "#15803D",
      bg: "#DCFCE7",
    },
    {
      icon: Clock,
      title: t("transparency.works.categories.ongoing.title"),
      description: t("transparency.works.categories.ongoing.description"),
      color: "#D97706",
      bg: "#FEF3C7",
    },
    {
      icon: ClipboardList,
      title: t("transparency.works.categories.proposed.title"),
      description: t("transparency.works.categories.proposed.description"),
      color: "#2563EB",
      bg: "#DBEAFE",
    },
  ];

  const workDetails = [
    {
      id: 1,
      title: t("transparency.works.records.work1.title"),
      description: t("transparency.works.records.work1.description"),
      status: t("transparency.works.records.work1.status"),
      progress: null,
      location: t("transparency.works.records.work1.location"),
      year: t("transparency.works.records.work1.year"),
      cost: t("transparency.works.records.work1.cost"),
      statusColor: "success",
    },
    {
      id: 2,
      title: t("transparency.works.records.work2.title"),
      description: t("transparency.works.records.work2.description"),
      status: t("transparency.works.records.work2.status"),
      progress: null,
      location: t("transparency.works.records.work2.location"),
      year: t("transparency.works.records.work2.year"),
      cost: t("transparency.works.records.work2.cost"),
      statusColor: "warning",
    },
    {
      id: 3,
      title: t("transparency.works.records.work3.title"),
      description: t("transparency.works.records.work3.description"),
      status: t("transparency.works.records.work3.status"),
      progress: null,
      location: t("transparency.works.records.work3.location"),
      year: t("transparency.works.records.work3.year"),
      cost: t("transparency.works.records.work3.cost"),
      statusColor: "info",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <TransparencyHero
        title={t("transparency.works.hero.title")}
        subtitle={t("transparency.works.hero.description")}
        breadcrumb={t("transparency.works.hero.breadcrumb")}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <TransparencySectionHeading
          eyebrow={t("transparency.works.intro.eyebrow")}
          title={t("transparency.works.intro.title")}
          description={t("transparency.works.intro.description")}
        />

        {/* Work Categories */}
        <Grid container spacing={3}>
          {workCategories.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    border: "1px solid #E7EEE8",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 28px rgba(20,83,45,0.09)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      backgroundColor: item.bg,
                      mb: 2.5,
                    }}
                  >
                    <Icon size={27} />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      color: "#173B2A",
                      fontSize: 19,
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 14,
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

      {/* Development Work Records */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <TransparencySectionHeading
            eyebrow={t("transparency.works.records.eyebrow")}
            title={t("transparency.works.records.title")}
            description={t("transparency.works.records.description")}
          />

          <Grid container spacing={3}>
            {workDetails.map((work) => (
              <Grid key={work.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: 4,
                    border: "1px solid #E7EEE8",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(20,83,45,0.10)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 8,
                      background:
                        "linear-gradient(90deg, #14532D, #E87519)",
                    }}
                  />

                  <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={1}
                      sx={{ mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          borderRadius: 2.5,
                          backgroundColor: "#EAF4EC",
                          color: "#14532D",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Building2 size={23} />
                      </Box>

                      <Chip
                        label={work.status}
                        color={work.statusColor}
                        size="small"
                        sx={{ fontWeight: 700 }}
                      />
                    </Stack>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: 19,
                        fontWeight: 800,
                        color: "#173B2A",
                        mb: 1,
                      }}
                    >
                      {work.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                        lineHeight: 1.8,
                        mb: 2.5,
                      }}
                    >
                      {work.description}
                    </Typography>

                    <Stack spacing={1.5}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <MapPin size={17} color="#E87519" />
                        <Typography
                          sx={{ color: "#475569", fontSize: 13 }}
                        >
                          {work.location}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CalendarDays size={17} color="#E87519" />
                        <Typography
                          sx={{ color: "#475569", fontSize: 13 }}
                        >
                          {work.year}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IndianRupee size={17} color="#E87519" />
                        <Typography
                          sx={{ color: "#475569", fontSize: 13 }}
                        >
                          {work.cost}
                        </Typography>
                      </Stack>
                    </Stack>

                    {work.progress !== null && (
                      <Box sx={{ mt: 2.5 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ mb: 1 }}
                        >
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#475569",
                            }}
                          >
                            {t("transparency.works.progress")}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: 800,
                              color: "#14532D",
                            }}
                          >
                            {work.progress}%
                          </Typography>
                        </Stack>

                        <LinearProgress
                          variant="determinate"
                          value={work.progress}
                          sx={{
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#15803D",
                              borderRadius: 5,
                            },
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Official Information Note */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3.5, md: 4 },
            borderRadius: 4,
            border: "1px solid #F5D7B8",
            backgroundColor: "#FFF4E8",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: 3,
                flexShrink: 0,
                backgroundColor: "#FCE3CB",
                color: "#C45B12",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FileText size={25} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#8A3F0B",
                  fontSize: 17,
                  fontWeight: 800,
                  mb: 0.5,
                }}
              >
                {t("transparency.works.note.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#854D0E",
                  fontSize: 14,
                  lineHeight: 1.8,
                }}
              >
                {t("transparency.works.note.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default KamachiMahitiPage;
