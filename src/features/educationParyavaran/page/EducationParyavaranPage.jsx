
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
import { HeartHandshake, Sprout, ShieldCheck } from "lucide-react";

import EducationParyavaranHero from "../components/EducationParyavaranHero";
import EducationParyavaranCard from "../components/EducationParyavaranCard";
import EducationSectionHeading from "../components/EducationSectionHeading";

import {
  educationParyavaranCards,
  educationPrinciples,
} from "../data/educationParyavaranData";

const EducationParyavaranPage = () => {
  const { t } = useTranslation();

  const principles = educationPrinciples.map((item) => ({
    ...item,
    title: t(`educationParyavaran.principles.${item.key}.title`),
    description: t(
      `educationParyavaran.principles.${item.key}.description`
    ),
  }));

  const cards = educationParyavaranCards.map((item) => ({
    ...item,
    title: t(`educationParyavaran.cards.${item.key}.title`),
    description: t(
      `educationParyavaran.cards.${item.key}.description`
    ),
    buttonText: t("educationParyavaran.viewDetails"),
  }));

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      <EducationParyavaranHero
        title={t("educationParyavaran.hero.title")}
        subtitle={t("educationParyavaran.hero.description")}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("educationParyavaran.intro.eyebrow")}
          title={t("educationParyavaran.intro.title")}
          description={t("educationParyavaran.intro.description")}
        />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3.5, md: 4 },
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5EDE6",
            maxWidth: 950,
            mx: "auto",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Box
              sx={{
                width: 62,
                height: 62,
                minWidth: 62,
                borderRadius: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EDF5EE",
                color: "#14532D",
              }}
            >
              <HeartHandshake size={30} />
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
                {t("educationParyavaran.intro.messageTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 14,
                  lineHeight: 1.9,
                }}
              >
                {t("educationParyavaran.intro.messageDescription")}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Information Cards */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <EducationSectionHeading
            eyebrow={t("educationParyavaran.section.eyebrow")}
            title={t("educationParyavaran.section.title")}
            description={t("educationParyavaran.section.description")}
          />

          <Grid container spacing={3}>
            {cards.map((item) => (
              <Grid
                key={item.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <EducationParyavaranCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Village Commitment */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <EducationSectionHeading
          eyebrow={t("educationParyavaran.commitment.eyebrow")}
          title={t("educationParyavaran.commitment.title")}
          description={t("educationParyavaran.commitment.description")}
        />

        <Grid container spacing={3}>
          {principles.map((item) => {
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
                  }}
                >
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      mx: "auto",
                      mb: 2,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#14532D",
                      backgroundColor: "#EDF5EE",
                    }}
                  >
                    <Icon size={25} />
                  </Box>

                  <Typography
                    sx={{
                      color: "#173B2A",
                      fontWeight: 750,
                      fontSize: 17,
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

      {/* Closing Note */}
      <Box sx={{ pb: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              background:
                "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Sprout
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
              {t("educationParyavaran.note.title")}
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
              {t("educationParyavaran.note.description")}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default EducationParyavaranPage;
