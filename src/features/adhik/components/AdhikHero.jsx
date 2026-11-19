
import React from "react";
import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Network } from "lucide-react";
import { useTranslation } from "react-i18next";

const AdhikHero = ({
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
        background:
          "linear-gradient(135deg, #123D27 0%, #14532D 55%, #1B6338 100%)",
        py: { xs: 7, sm: 8, md: 10 },
        color: "#fff",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 280 },
          height: { xs: 180, md: 280 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.10)",
          top: -100,
          right: { xs: -70, md: 80 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          bottom: -110,
          left: { xs: -70, md: 100 },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            mb: 3,
            color: "rgba(255,255,255,0.75)",
            "& .MuiBreadcrumbs-separator": {
              color: "rgba(255,255,255,0.5)",
            },
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 14,
              "&:hover": { color: "#fff" },
            }}
          >
            {t("navbar.home", "मुख्यपृष्ठ")}
          </Link>

          <Link
            component={RouterLink}
            to="/adhik"
            underline="hover"
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 14,
              "&:hover": { color: "#fff" },
            }}
          >
            {t("navbar.adhik", "अधिक")}
          </Link>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {breadcrumb || title}
          </Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Network size={25} color="#fff" />
          </Box>

          <Typography
            sx={{
              color: "#FBBF24",
              fontSize: { xs: 12, sm: 13 },
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {t("adhik.badge", "अधिक माहिती")}
          </Typography>
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 28, sm: 36, md: 46 },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
            maxWidth: 850,
          }}
        >
          {title || t("adhik.hero.title", "अधिक माहिती")}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.82)",
            fontSize: { xs: 14, sm: 16, md: 17 },
            lineHeight: 1.8,
            maxWidth: 750,
          }}
        >
          {subtitle || t(
            "adhik.hero.description",
            "ग्रामपंचायतीशी संबंधित रोजगार, उद्योग, उपक्रम आणि नागरिकांसाठी उपयुक्त माहिती."
          )}
        </Typography>

        <Box
          sx={{
            width: 65,
            height: 4,
            borderRadius: 5,
            backgroundColor: "#E87519",
            mt: 3,
          }}
        />
      </Container>
    </Box>
  );
};

export default AdhikHero;
