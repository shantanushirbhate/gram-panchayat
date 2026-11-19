
import React from "react";
import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

function TransparencyHero({ title, subtitle, breadcrumb }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, sm: 8, md: 10 },
        color: "#fff",
        background:
          "linear-gradient(120deg, #123D27 0%, #14532D 65%, #1E7040 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "45px solid rgba(255,255,255,0.06)",
          right: { xs: -120, md: 60 },
          top: -120,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Breadcrumbs
          sx={{
            mb: 3,
            color: "rgba(255,255,255,0.75)",
            "& a": { color: "inherit", textDecoration: "none" },
          }}
        >
          <Link component={RouterLink} to="/">
            {t("navbar.home")}
          </Link>
          <Link component={RouterLink} to="/transparency">
            {t("navbar.transparency")}
          </Link>
          {breadcrumb && <Typography color="inherit">{breadcrumb}</Typography>}
        </Breadcrumbs>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <ShieldCheck size={23} color="#FDBA74" />
          <Typography
            sx={{
              color: "#FDBA74",
              fontWeight: 700,
              letterSpacing: 1.5,
              fontSize: 13,
            }}
          >
            {t("transparency.badge")}
          </Typography>
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 29, sm: 38, md: 48 },
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: 800,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            color: "rgba(255,255,255,0.85)",
            fontSize: { xs: 14, sm: 16, md: 18 },
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}

export default TransparencyHero;
