
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
//   Stack,
} from "@mui/material";

import {
  FileText,
  Home,
  ReceiptText,
  Droplets,
  Trash2,
  Landmark,
  MessageCircleWarning,
//   Users,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "birth",
    icon: FileText,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    key: "death",
    icon: FileText,
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    key: "residence",
    icon: Home,
    color: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    key: "property",
    icon: ReceiptText,
    color: "#C65A16",
    bg: "#FFF7ED",
  },
  {
    key: "water",
    icon: Droplets,
    color: "#0284C7",
    bg: "#F0F9FF",
  },
  {
    key: "cleanliness",
    icon: Trash2,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    key: "schemes",
    icon: Landmark,
    color: "#B45309",
    bg: "#FFFBEB",
  },
  {
    key: "complaints",
    icon: MessageCircleWarning,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(120deg, #FFF0DF 0%, #F0F5F1 100%)",
          py: { xs: 7, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            {t("services.label")}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 30, sm: 38, md: 46 },
              mb: 2,
            }}
          >
            {t("services.title")}
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            {t("services.description")}
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              mb: 1,
            }}
          >
            {t("services.sectionLabel")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 25, md: 34 },
              mb: 1.5,
            }}
          >
            {t("services.sectionTitle")}
          </Typography>

          <Typography sx={{ color: "#64748B", fontSize: 15 }}>
            {t("services.sectionDescription")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.key}
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid #E2E8F0",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(23,59,42,0.10)",
                    borderColor: "#D6B58B",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    "&:last-child": { pb: 3 },
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 2.5,
                      backgroundColor: service.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Icon size={27} color={service.color} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#173B2A",
                      fontWeight: 700,
                      fontSize: 18,
                      mb: 1.5,
                    }}
                  >
                    {t(`services.items.${service.key}.title`)}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 14,
                      lineHeight: 1.8,
                      minHeight: 75,
                      mb: 2.5,
                    }}
                  >
                    {t(`services.items.${service.key}.description`)}
                  </Typography>

                  <Button
                    component={Link}
                    to="/contact"
                    endIcon={<ArrowRight size={17} />}
                    sx={{
                      color: "#C65A16",
                      fontWeight: 700,
                      textTransform: "none",
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#173B2A",
                      },
                    }}
                  >
                    {t("services.contactButton")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>

      {/* Contact CTA */}
      <Box sx={{ pb: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#173B2A",
              borderRadius: 4,
              px: { xs: 3, md: 7 },
              py: { xs: 5, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: { xs: 23, md: 30 },
                  mb: 1.5,
                }}
              >
                {t("services.ctaTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E4D7",
                  lineHeight: 1.8,
                  maxWidth: 550,
                }}
              >
                {t("services.ctaDescription")}
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                backgroundColor: "#FF9933",
                color: "#173B2A",
                fontWeight: 700,
                px: 3,
                py: 1.5,
                whiteSpace: "nowrap",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#FFB45E",
                },
              }}
            >
              {t("services.ctaButton")}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ServicesPage;
