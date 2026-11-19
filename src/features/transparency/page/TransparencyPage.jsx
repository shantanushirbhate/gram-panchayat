
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Eye, ShieldCheck, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import TransparencyHero from "../components/TransparencyHero";
import TransparencyCard from "../components/TransparencyCard";
import TransparencySectionHeading from "../components/TransparencySectionHeading";
import { transparencyData } from "../data/transparencyData";

function TransparencyPage() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: Eye,
      title: t("transparency.principles.openness.title"),
      description: t("transparency.principles.openness.description"),
    },
    {
      icon: ShieldCheck,
      title: t("transparency.principles.accountability.title"),
      description: t("transparency.principles.accountability.description"),
    },
    {
      icon: FileCheck,
      title: t("transparency.principles.access.title"),
      description: t("transparency.principles.access.description"),
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      <TransparencyHero
        title={t("transparency.hero.title")}
        subtitle={t("transparency.hero.description")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <TransparencySectionHeading
          eyebrow={t("transparency.section.eyebrow")}
          title={t("transparency.section.title")}
          description={t("transparency.section.description")}
        />

        <Grid container spacing={3}>
          {transparencyData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <TransparencyCard
                item={{
                  ...item,
                  title: t(item.titleKey),
                  description: t(item.descriptionKey),
                  buttonText: t(item.buttonKey),
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <TransparencySectionHeading
            eyebrow={t("transparency.principles.eyebrow")}
            title={t("transparency.principles.heading")}
            description={t("transparency.principles.intro")}
          />

          <Grid container spacing={3}>
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      height: "100%",
                      borderRadius: 4,
                      border: "1px solid #E7EEE8",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 58,
                        height: 58,
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#EAF4EC",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={27} />
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: 19,
                        fontWeight: 800,
                        color: "#14532D",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: "#64748B",
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
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            background: "linear-gradient(120deg, #123D27, #1E7040)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 22, md: 30 },
              fontWeight: 800,
              mb: 1.5,
            }}
          >
            {t("transparency.commitment.title")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.9,
            }}
          >
            {t("transparency.commitment.description")}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default TransparencyPage;
