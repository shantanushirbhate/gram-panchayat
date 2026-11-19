
import React from "react";
import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, ChevronRight, Leaf } from "lucide-react";

const EducationParyavaranHero = ({
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
        py: { xs: 5, sm: 6, md: 8 },
        background:
          "linear-gradient(120deg, #123D27 0%, #14532D 60%, #1B6840 100%)",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.10)",
          top: -100,
          right: -60,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          bottom: -120,
          left: "20%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Breadcrumbs
          separator={<ChevronRight size={15} color="#F5B66A" />}
          sx={{
            mb: 3,
            "& .MuiBreadcrumbs-ol": {
              flexWrap: "wrap",
            },
            "& a": {
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              fontSize: { xs: 12, sm: 13 },
            },
          }}
        >
          <Link component={RouterLink} to="/">
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
              <Home size={14} />
              {t("navbar.home")}
            </Box>
          </Link>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: { xs: 12, sm: 13 },
            }}
          >
            {t("navbar.educationParyavaran")}
          </Typography>

          {breadcrumb && (
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: 12, sm: 13 },
                fontWeight: 600,
              }}
            >
              {breadcrumb}
            </Typography>
          )}
        </Breadcrumbs>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.8,
            mb: 2,
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.09)",
          }}
        >
          <Leaf size={15} color="#F5B66A" />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {t("educationParyavaran.badge")}
          </Typography>
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "1.8rem",
              sm: "2.3rem",
              md: "3rem",
            },
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: 850,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              maxWidth: 750,
              fontSize: { xs: 14, sm: 16, md: 17 },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            {subtitle}
          </Typography>
        )}

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

export default EducationParyavaranHero;
