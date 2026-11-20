
// src/Features/About/components/AboutHero.jsx

import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import { ChevronRight, Home } from "lucide-react";

import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#14532D",
  darkGreen: "#0B2E1A",
  orange: "#E87519",
  white: "#FFFFFF",
};

export default function AboutHero({ title, subtitle }) {
  const { t } = useTranslation("common");

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 5, sm: 6, md: 8 },
        background:
          "linear-gradient(120deg, #0B2E1A 0%, #14532D 65%, #1D7040 100%)",
        color: COLORS.white,

        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: 190, md: 260 },
          height: { xs: 190, md: 260 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          right: { xs: -100, md: 80 },
          top: -130,
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: { xs: 140, md: 180 },
          height: { xs: 140, md: 180 },
          borderRadius: "50%",
          background: "rgba(232,117,25,0.12)",
          right: { xs: -50, md: 250 },
          bottom: -110,
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Breadcrumbs
          separator={
            <ChevronRight
              size={15}
              color="#F5B36F"
              aria-hidden="true"
            />
          }
          aria-label="breadcrumb"
          sx={{
            mb: 2,
            "& .MuiBreadcrumbs-li": {
              color: "#E5E7EB",
            },
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{
              color: "#E5E7EB",
              display: "flex",
              alignItems: "center",
              gap: 0.7,
              fontSize: { xs: 12, sm: 14 },
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            <Home size={15} aria-hidden="true" />
            {t("home", "Home")}
          </Link>

          <Typography
            component="span"
            sx={{
              color: "#F5B36F",
              fontSize: { xs: 12, sm: 13 },
            }}
          >
            {title}
          </Typography>
        </Breadcrumbs>

        <Typography
          component="h1"
          sx={{
            fontWeight: 900,
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
            },
            maxWidth: 800,
            lineHeight: 1.2,
            overflowWrap: "break-word",
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            component="p"
            sx={{
              mt: 1.5,
              color: "#DCE9DF",
              fontSize: { xs: 13, sm: 15, md: 16 },
              maxWidth: 700,
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
