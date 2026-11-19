
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
  Megaphone,
  BellRing,
  FileText,
  CalendarDays,
  Info,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const noticeCategories = [
  { id: 1, key: "publicNotices", icon: Megaphone },
  { id: 2, key: "announcements", icon: BellRing },
  { id: 3, key: "circulars", icon: FileText },
  { id: 4, key: "importantUpdates", icon: CalendarDays },
];

const SuchanaVJahiratiPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      <ServicesHero
        title={t("services.notices.hero.title")}
        subtitle={t("services.notices.hero.description")}
        breadcrumb={t("services.notices.hero.breadcrumb")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <ServicesSectionHeading
          eyebrow={t("services.notices.intro.eyebrow")}
          title={t("services.notices.intro.title")}
          description={t("services.notices.intro.description")}
        />

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 2 }}>
          {noticeCategories.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
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
                      boxShadow: "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={27} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#173B2A",
                          fontWeight: 800,
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                          mb: 0.5,
                        }}
                      >
                        {t(`services.notices.categories.${item.key}.title`)}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "0.88rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {t(`services.notices.categories.${item.key}.description`)}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Notice Information */}
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
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <Info size={22} color="#E87519" />
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
