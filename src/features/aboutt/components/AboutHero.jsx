
// src/Features/About/components/AboutHero.jsx

import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function AboutHero({ title, subtitle }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 5, sm: 6, md: 8 },
        background:
          "linear-gradient(120deg, #0B2E1A 0%, #14532D 65%, #1D7040 100%)",
        color: "#fff",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          right: { xs: -100, md: 80 },
          top: -130,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(232,117,25,0.12)",
          right: { xs: -50, md: 250 },
          bottom: -110,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Breadcrumbs
          separator={<ChevronRight size={15} color="#F5B36F" />}
          sx={{
            mb: 2,
            "& .MuiBreadcrumbs-li": { color: "#E5E7EB" },
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{ color: "#E5E7EB", display: "flex", alignItems: "center", gap: 0.7 }}
          >
            <Home size={15} />
            Home
          </Link>

          <Typography color="#F5B36F" fontSize={13}>
            {title}
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 27, sm: 34, md: 43 },
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              mt: 1.5,
              color: "#DCE9DF",
              fontSize: { xs: 14, sm: 16 },
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
