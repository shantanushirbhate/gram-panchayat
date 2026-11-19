
import React from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Users, ChevronRight, Home } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const SamitiyaHero = ({
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
          "linear-gradient(120deg, #123D27 0%, #14532D 55%, #1B6840 100%)",
        py: { xs: 7, sm: 8, md: 10 },
        color: "#FFFFFF",
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
          right: { xs: -80, md: 60 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 140, md: 200 },
          height: { xs: 140, md: 200 },
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.04)",
          bottom: -100,
          left: { xs: -60, md: 100 },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="flex-start">
          {/* Breadcrumb */}
          <Breadcrumbs
            separator={
              <ChevronRight size={15} color="rgba(255,255,255,0.6)" />
            }
            aria-label="breadcrumb"
            sx={{
              color: "rgba(255,255,255,0.75)",
              "& .MuiBreadcrumbs-ol": {
                flexWrap: "wrap",
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.7,
                color: "rgba(255,255,255,0.75)",
                fontSize: { xs: 12, sm: 13 },
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              <Home size={14} />
              {t("navbar.home")}
            </Link>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: 12, sm: 13 },
                fontWeight: 600,
              }}
            >
              {breadcrumb || t("navbar.samitiya")}
            </Typography>
          </Breadcrumbs>

          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.8,
              py: 0.8,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.22)",
              backgroundColor: "rgba(255,255,255,0.09)",
            }}
          >
            <Users size={16} color="#FFB15C" />
            <Typography
              sx={{
                color: "#FFD29B",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.3,
                textTransform: "uppercase",
              }}
            >
              {t("samitiya.badge")}
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            component="h1"
            sx={{
              maxWidth: 850,
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.4rem",
              },
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "-0.8px",
              color: "#FFFFFF",
            }}
          >
            {title || t("samitiya.hero.title")}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: 14, sm: 16, md: 17 },
              lineHeight: 1.9,
            }}
          >
            {subtitle || t("samitiya.hero.description")}
          </Typography>

          {/* Orange accent */}
          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: "#E87519",
              mt: 0.5,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default SamitiyaHero;
