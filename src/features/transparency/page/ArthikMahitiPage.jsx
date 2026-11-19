
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Stack,
  Breadcrumbs,
  Link,
  Divider,
  Chip,
} from "@mui/material";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ClipboardCheck,
  FileText,
  ArrowRight,
  Home,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GREEN = "#14532D";
const DARK_GREEN = "#123D27";
const ORANGE = "#E87519";
const CREAM = "#FFF8EF";

const ArthikMahitiPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    {
      key: "budget",
      icon: Wallet,
      color: GREEN,
    },
    {
      key: "income",
      icon: TrendingUp,
      color: "#16845B",
    },
    {
      key: "expenses",
      icon: TrendingDown,
      color: ORANGE,
    },
    {
      key: "audit",
      icon: ClipboardCheck,
      color: "#64748B",
    },
  ];

  return (
    <Box sx={{ bgcolor: CREAM, minHeight: "100vh", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(120deg, ${DARK_GREEN} 0%, ${GREEN} 65%, #287447 100%)`,
          color: "#fff",
          py: { xs: 5, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            top: -100,
            right: -50,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Breadcrumbs
            separator="›"
            sx={{
              mb: 3,
              color: "rgba(255,255,255,0.7)",
              "& a": {
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
              },
            }}
          >
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.7 }}
            >
              <Home size={15} />
              {t("navbar.home")}
            </Link>

            <Link
              component="button"
              onClick={() => navigate("/transparency")}
              underline="hover"
            >
              {t("navbar.transparency")}
            </Link>

            <Typography color="#fff" fontSize={14}>
              {t("transparency.finance.hero.breadcrumb")}
            </Typography>
          </Breadcrumbs>

          <Chip
            icon={<ShieldCheck size={16} color="#fff" />}
            label={t("transparency.badge")}
            sx={{
              bgcolor: "rgba(255,255,255,0.14)",
              color: "#fff",
              fontWeight: 600,
              mb: 2,
              "& .MuiChip-icon": { ml: 1 },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, sm: 36, md: 46 },
              lineHeight: 1.25,
              mb: 2,
              maxWidth: 750,
            }}
          >
            {t("transparency.finance.hero.title")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: 14, md: 17 },
              lineHeight: 1.8,
              maxWidth: 750,
            }}
          >
            {t("transparency.finance.hero.description")}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introduction */}
        <Box sx={{ textAlign: "center", py: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              color: ORANGE,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            {t("transparency.finance.intro.eyebrow")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: DARK_GREEN,
              fontWeight: 800,
              fontSize: { xs: 24, md: 34 },
              mb: 2,
            }}
          >
            {t("transparency.finance.intro.title")}
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              maxWidth: 750,
              mx: "auto",
              lineHeight: 1.9,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            {t("transparency.finance.intro.description")}
          </Typography>
        </Box>

        {/* Financial Information Cards */}
        <Grid container spacing={3}>
          {sections.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    border: "1px solid #E8EDE8",
                    bgcolor: "#fff",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(20,83,45,0.10)",
                      borderColor: item.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      bgcolor: `${item.color}14`,
                      color: item.color,
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
                      fontSize: 18,
                      fontWeight: 750,
                      color: DARK_GREEN,
                      mb: 1,
                    }}
                  >
                    {t(`transparency.finance.sections.${item.key}.title`)}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    {t(
                      `transparency.finance.sections.${item.key}.description`
                    )}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Records Section */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography
                sx={{
                  color: ORANGE,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 1.3,
                  mb: 1,
                }}
              >
                {t("transparency.finance.records.eyebrow")}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: 23, md: 30 },
                }}
              >
                {t("transparency.finance.records.title")}
              </Typography>
            </Box>

            <Chip
              icon={<FileText size={16} />}
              label={t("transparency.finance.records.eyebrow")}
              sx={{
                bgcolor: "#E8F2E9",
                color: GREEN,
                fontWeight: 650,
              }}
            />
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #E5EDE5",
              bgcolor: "#fff",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                bgcolor: "#E8F2E9",
                color: GREEN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <FileText size={32} />
            </Box>

            <Typography
              variant="h6"
              sx={{ color: DARK_GREEN, fontWeight: 750, mb: 1 }}
            >
              {t("transparency.finance.records.emptyTitle")}
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                lineHeight: 1.9,
                maxWidth: 620,
                mx: "auto",
              }}
            >
              {t("transparency.finance.records.emptyDescription")}
            </Typography>
          </Paper>
        </Box>

        {/* Transparency Note */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 3,
            bgcolor: "#FFF1E3",
            border: "1px solid #F7D8B8",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box sx={{ color: ORANGE, mt: 0.3 }}>
              <ShieldCheck size={25} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 750,
                  color: DARK_GREEN,
                  fontSize: 17,
                  mb: 0.8,
                }}
              >
                {t("transparency.finance.note.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#665343",
                  fontSize: 14,
                  lineHeight: 1.9,
                }}
              >
                {t("transparency.finance.note.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Back Button */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Link
            component="button"
            underline="none"
            onClick={() => navigate("/transparency")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: GREEN,
              fontWeight: 750,
              fontSize: 15,
              "&:hover": { color: ORANGE },
            }}
          >
            {t("navbar.transparency")}
            <ArrowRight size={18} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ArthikMahitiPage;
