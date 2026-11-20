
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Users,
  Handshake,
  ClipboardCheck,
  Eye,
  HeartHandshake,
} from "lucide-react";

import SamitiyaHero from "../components/SamitiyaHero";
import SamitiyaCard from "../components/SamitiyaCard";
import SamitiyaSectionHeading from "../components/SamitiyaSectionHeading";

import {
  samitiyaCards,
  samitiyaResponsibilities,
} from "../data/samitiyaData";

const responsibilityIcons = [
  ClipboardCheck,
  Users,
  Eye,
  Handshake,
];

const SamitiyaPage = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF8EF",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <SamitiyaHero
        title={t("samitiya.hero.title")}
        subtitle={t("samitiya.hero.description")}
        breadcrumb={t("samitiya.hero.breadcrumb")}
      />

      {/* ================= INTRODUCTION SECTION ================= */}
      <Box sx={{ py: { xs: 6, sm: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <SamitiyaSectionHeading
            eyebrow={t("samitiya.intro.eyebrow")}
            title={t("samitiya.intro.title")}
            description={t("samitiya.intro.description")}
          />

          <Paper
            elevation={0}
            sx={{
              mt: { xs: 3, md: 4 },
              p: { xs: 2.5, sm: 3.5, md: 4 },
              borderRadius: { xs: 3, md: 4 },
              background:
                "linear-gradient(120deg, #EAF4EC 0%, #F4F8F2 100%)",
              border: "1px solid #DDEBDD",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Box
                sx={{
                  width: 58,
                  height: 58,
                  flexShrink: 0,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#14532D",
                  color: "#FFFFFF",
                }}
              >
                <Users size={28} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  component="h3"
                  sx={{
                    color: "#173B2A",
                    fontSize: { xs: 17, sm: 19 },
                    fontWeight: 800,
                    mb: 0.8,
                  }}
                >
                  {t("samitiya.intro.messageTitle")}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: 13, sm: 14 },
                    lineHeight: 1.9,
                  }}
                >
                  {t("samitiya.intro.messageDescription")}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* ================= COMMITTEES SECTION ================= */}
      <Box
        sx={{
          py: { xs: 6, sm: 7, md: 9 },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <SamitiyaSectionHeading
            eyebrow={t("samitiya.committees.eyebrow")}
            title={t("samitiya.committees.title")}
            description={t("samitiya.committees.description")}
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{ mt: { xs: 2, md: 3 } }}
          >
            {samitiyaCards.map((item) => {
              const committeeKey = `samitiya.committees.items.${item.key}`;

              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <SamitiyaCard
                    item={{
                      // Committee icon
                      icon: item.icon,

                      // Committee information
                      title: t(`${committeeKey}.title`),
                      description: t(`${committeeKey}.description`),

                      // Chairperson information
                      chairpersonLabel: t(
                        `${committeeKey}.chairpersonLabel`
                      ),
                      chairperson: t(
                        `${committeeKey}.chairperson`
                      ),

                      // Contact information
                      contactLabel: t(
                        `${committeeKey}.contactLabel`
                      ),
                      phone: t(`${committeeKey}.phone`),

                      // Optional responsibilities
                      responsibilities: item.responsibilities || [],
                      responsibilitiesTitle:
                        item.responsibilitiesTitle,
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Typography
            sx={{
              mt: 3,
              color: "#8A6B4D",
              fontSize: { xs: 11, sm: 12 },
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            {t("samitiya.committees.note")}
          </Typography>
        </Container>
      </Box>

      {/* ================= RESPONSIBILITIES SECTION ================= */}
      <Box sx={{ py: { xs: 6, sm: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <SamitiyaSectionHeading
            eyebrow={t("samitiya.responsibilities.eyebrow")}
            title={t("samitiya.responsibilities.title")}
            description={t("samitiya.responsibilities.description")}
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{ mt: { xs: 2, md: 3 } }}
          >
            {samitiyaResponsibilities.map((item, index) => {
              const Icon = responsibilityIcons[index];

              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 3 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: 3,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5EDE7",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#E87519",
                        boxShadow:
                          "0 12px 28px rgba(20,83,45,0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#EAF4EC",
                        color: "#14532D",
                        mb: 2,
                      }}
                    >
                      {Icon && <Icon size={23} />}
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 700,
                        fontSize: { xs: 13, sm: 14 },
                        lineHeight: 1.8,
                      }}
                    >
                      {t(
                        `samitiya.responsibilities.items.${item.key}`
                      )}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ================= COMMUNITY PARTICIPATION ================= */}
      <Box
        sx={{
          py: { xs: 6, sm: 7, md: 8 },
          px: { xs: 2, sm: 0 },
          background:
            "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="md">
          <Stack
            spacing={2.5}
            alignItems="center"
            textAlign="center"
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#FFD29B",
              }}
            >
              <HeartHandshake size={32} />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: 23,
                  sm: 29,
                  md: 34,
                },
                fontWeight: 800,
                lineHeight: 1.4,
              }}
            >
              {t("samitiya.participation.title")}
            </Typography>

            <Typography
              sx={{
                maxWidth: 700,
                color: "rgba(255,255,255,0.82)",
                fontSize: { xs: 13, sm: 15 },
                lineHeight: 1.9,
              }}
            >
              {t("samitiya.participation.description")}
            </Typography>

            <Box
              sx={{
                width: 55,
                height: 4,
                borderRadius: 5,
                backgroundColor: "#E87519",
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* ================= COMMITMENT SECTION ================= */}
      <Box sx={{ py: { xs: 5, sm: 6, md: 7 } }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 4.5 },
              borderRadius: { xs: 3, md: 4 },
              textAlign: "center",
              border: "1px solid #E5EDE7",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                color: "#E87519",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.5,
                mb: 1.5,
              }}
            >
              {t("samitiya.commitment.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#173B2A",
                fontWeight: 800,
                fontSize: { xs: 21, sm: 26 },
                lineHeight: 1.4,
                mb: 1.5,
              }}
            >
              {t("samitiya.commitment.title")}
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.9,
              }}
            >
              {t("samitiya.commitment.description")}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default SamitiyaPage;
