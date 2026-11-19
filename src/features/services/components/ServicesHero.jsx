
import React from "react";
import { Box, Container, Stack, Typography, Breadcrumbs, Link } from "@mui/material";
import { Home, HandHelping, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const ServicesHero = ({
  title,
  subtitle,
  breadcrumb,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, sm: 9, md: 11 },
        background:
          "linear-gradient(125deg, #123D27 0%, #14532D 55%, #1D6538 100%)",
        color: "#FFFFFF",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.10)",
          top: -100,
          right: { xs: -70, md: 70 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          bottom: -90,
          left: { xs: -40, md: 100 },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          {/* Breadcrumb */}
          <Breadcrumbs
            separator={<ChevronRight size={15} color="#F6B36B" />}
            sx={{
              color: "rgba(255,255,255,0.75)",
              "& .MuiBreadcrumbs-ol": {
                justifyContent: "center",
                flexWrap: "wrap",
              },
              "& a": {
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                fontSize: { xs: 12, sm: 14 },
                "&:hover": { color: "#FFFFFF" },
              },
            }}
          >
            <Link component={RouterLink} to="/">
              <Home size={15} />
              {t("navbar.home")}
            </Link>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: 12, sm: 14 },
              }}
            >
              {breadcrumb || t("navbar.seva")}
            </Typography>
          </Breadcrumbs>

          {/* Icon */}
          <Box
            sx={{
              width: { xs: 64, sm: 76 },
              height: { xs: 64, sm: 76 },
              borderRadius: "22px",
              display: "grid",
              placeItems: "center",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FFB45E",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          >
            <HandHelping size={38} strokeWidth={1.7} />
          </Box>

          {/* Title */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "1.9rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              maxWidth: 850,
            }}
          >
            {title || t("services.hero.title")}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 720,
              fontSize: { xs: "0.92rem", sm: "1.05rem" },
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.82)",
              px: { xs: 1, sm: 2 },
            }}
          >
            {subtitle || t("services.hero.description")}
          </Typography>

          {/* Accent */}
          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              bgcolor: "#F28C28",
              mt: 1,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesHero;
