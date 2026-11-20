
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
  Megaphone,
  BellRing,
  FileText,
  CalendarDays,
  Info,
  Clock3,
  AlertCircle,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const noticeCategories = [
  { id: 1, key: "publicNotices", icon: Megaphone },
  { id: 2, key: "announcements", icon: BellRing },
  { id: 3, key: "circulars", icon: FileText },
  { id: 4, key: "importantUpdates", icon: CalendarDays },
];

const noticeItems = [
  {
    id: 1,
    key: "roadRepair",
    icon: FileText,
    type: "publicNotices",
  },
  {
    id: 2,
    key: "specialGramSabha",
    icon: CalendarDays,
    type: "announcements",
  },
  {
    id: 3,
    key: "waterSupply",
    icon: AlertCircle,
    type: "importantUpdates",
  },
  {
    id: 4,
    key: "solarPump",
    icon: FileText,
    type: "publicNotices",
  },
  {
    id: 5,
    key: "cleanlinessDrive",
    icon: BellRing,
    type: "announcements",
  },
  {
    id: 6,
    key: "taxPayment",
    icon: FileText,
    type: "circulars",
  },
];

const SuchanaVJahiratiPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      {/* ================= HERO SECTION ================= */}
      <ServicesHero
        title={t("services.notices.hero.title")}
        subtitle={t("services.notices.hero.description")}
        breadcrumb={t("services.notices.hero.breadcrumb")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        {/* ================= INTRODUCTION ================= */}
        <ServicesSectionHeading
          eyebrow={t("services.notices.intro.eyebrow")}
          title={t("services.notices.intro.title")}
          description={t("services.notices.intro.description")}
        />

        {/* ================= NOTICE CATEGORIES ================= */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ mt: 2 }}
        >
          {noticeCategories.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#E87519",
                      boxShadow:
                        "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack spacing={1.5}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={25} />
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 800,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                      }}
                    >
                      {t(
                        `services.notices.categories.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {t(
                        `services.notices.categories.${item.key}.description`
                      )}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* ================= NOTICE LIST ================= */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <ServicesSectionHeading
            eyebrow={t("services.notices.list.eyebrow")}
            title={t("services.notices.list.title")}
            description={t("services.notices.list.description")}
            align="left"
          />

          <Stack spacing={2.5} sx={{ mt: 3 }}>
            {noticeItems.map((item) => {
              const Icon = item.icon;
              const noticeKey = `services.notices.items.${item.key}`;

              return (
                <Paper
                  key={item.id}
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 3.5 },
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#D4E5D7",
                      boxShadow:
                        "0 12px 28px rgba(20,83,45,0.07)",
                    },
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2.5}
                    alignItems={{ xs: "flex-start", sm: "flex-start" }}
                  >
                    {/* Notice Icon */}
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={25} />
                    </Box>

                    {/* Notice Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                        alignItems="center"
                        sx={{ mb: 1 }}
                      >
                        <Chip
                          size="small"
                          label={t(
                            `services.notices.categories.${item.type}.title`
                          )}
                          sx={{
                            bgcolor: "#EAF4EC",
                            color: "#14532D",
                            fontWeight: 700,
                            fontSize: 11,
                          }}
                        />

                        <Chip
                          size="small"
                          label={t("services.notices.status.expired")}
                          icon={<Clock3 size={13} />}
                          sx={{
                            bgcolor: "#F1F5F9",
                            color: "#64748B",
                            fontWeight: 700,
                            fontSize: 11,
                          }}
                        />
                      </Stack>

                      <Typography
                        component="h3"
                        sx={{
                          color: "#173B2A",
                          fontWeight: 800,
                          fontSize: { xs: 16, sm: 18 },
                          lineHeight: 1.6,
                          mb: 1.5,
                        }}
                      >
                        {t(`${noticeKey}.title`)}
                      </Typography>

                      {/* Date and Deadline */}
                      <Stack
                        direction="row"
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{ mb: 1.5 }}
                      >
                        <Stack
                          direction="row"
                          spacing={0.8}
                          alignItems="center"
                        >
                          <CalendarDays
                            size={15}
                            color="#E87519"
                          />
                          <Typography
                            sx={{
                              color: "#64748B",
                              fontSize: 12,
                            }}
                          >
                            {t("services.notices.labels.date")}:{" "}
                            {t(`${noticeKey}.date`)}
                          </Typography>
                        </Stack>

                        {t(`${noticeKey}.deadline`, {
                          defaultValue: "",
                        }) && (
                          <Stack
                            direction="row"
                            spacing={0.8}
                            alignItems="center"
                          >
                            <Clock3
                              size={15}
                              color="#E87519"
                            />
                            <Typography
                              sx={{
                                color: "#64748B",
                                fontSize: 12,
                              }}
                            >
                              {t("services.notices.labels.deadline")}:{" "}
                              {t(`${noticeKey}.deadline`)}
                            </Typography>
                          </Stack>
                        )}
                      </Stack>

                      {/* Notice Description */}
                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: { xs: 13, sm: 14 },
                          lineHeight: 1.9,
                        }}
                      >
                        {t(`${noticeKey}.description`)}
                      </Typography>

                      {/* Additional Information */}
                      {t(`${noticeKey}.additional`, {
                        defaultValue: "",
                      }) && (
                        <Box
                          sx={{
                            mt: 2,
                            p: 1.8,
                            borderRadius: 2.5,
                            bgcolor: "#FFF8EF",
                            borderLeft: "3px solid #E87519",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#8A6B4D",
                              fontSize: 13,
                              lineHeight: 1.8,
                            }}
                          >
                            {t(`${noticeKey}.additional`)}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Stack>
                </Paper>
              );
            })}
          </Stack>
        </Box>

        {/* ================= IMPORTANT INFORMATION ================= */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={t("services.notices.information.eyebrow")}
            title={t("services.notices.information.title")}
            description={t("services.notices.information.description")}
            align="left"
          />

          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: 4,
              bgcolor: "#FFFFFF",
              border: "1px solid #E5EDE7",
            }}
          >
            <Stack spacing={2.5}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
              >
                <Info
                  size={22}
                  color="#E87519"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />

                <Typography
                  sx={{
                    color: "#475569",
                    lineHeight: 1.85,
                    fontSize: "0.93rem",
                  }}
                >
                  {t("services.notices.information.message")}
                </Typography>
              </Stack>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: "#FFF8EF",
                  borderLeft: "4px solid #E87519",
                }}
              >
                <Typography
                  sx={{
                    color: "#173B2A",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                  }}
                >
                  {t("services.notices.information.note")}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default SuchanaVJahiratiPage;
