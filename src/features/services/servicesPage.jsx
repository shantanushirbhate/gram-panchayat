
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

import {
  FileText,
  Home,
  ReceiptText,
  Droplets,
  Trash2,
  Landmark,
  MessageCircleWarning,
  ArrowRight,
  // CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#C65A16",
  saffron: "#FF9933",
  cream: "#FFF7ED",
  lightGreen: "#EAF2EC",
  white: "#FFFFFF",
  text: "#334155",
  muted: "#64748B",
  border: "#E2EAE4",
  background: "#F7F9F7",
};

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

function SectionLabel({ children, centered = false }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={centered ? "center" : "flex-start"}
      spacing={1.2}
      sx={{ mb: 1.5 }}
    >
      <Box
        sx={{
          width: 30,
          height: 3,
          borderRadius: 5,
          backgroundColor: COLORS.saffron,
        }}
      />

      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 800,
          fontSize: 12,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
}

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO SECTION ================= */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `
            linear-gradient(
              115deg,
              rgba(10, 39, 25, 0.97),
              rgba(23, 59, 42, 0.94),
              rgba(23, 59, 42, 0.82)
            )
          `,
          py: { xs: 8, sm: 10, md: 13 },
        }}
      >
        {/* Decorative circles */}

        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 450 },
            height: { xs: 220, md: 450 },
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "50%",
            top: -180,
            right: { xs: -100, md: 80 },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 300, md: 600 },
            height: { xs: 300, md: 600 },
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            bottom: -420,
            right: { xs: -120, md: 200 },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 7,
            height: 120,
            backgroundColor: COLORS.saffron,
            borderRadius: "0 5px 5px 0",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 850, mx: "auto", textAlign: "center" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{
                display: "inline-flex",
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10,
                px: 2,
                py: 1,
                mb: 3,
                backdropFilter: "blur(8px)",
              }}
            >
              <Building2 size={17} color={COLORS.saffron} />

              <Typography
                sx={{
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1.3,
                }}
              >
                {t("services.label")}
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                color: COLORS.white,
                fontWeight: 900,
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4rem",
                },
                lineHeight: 1.2,
                mb: 2.5,
                letterSpacing: "-1px",
              }}
            >
              {t("services.title")}
            </Typography>

            <Box
              sx={{
                width: 75,
                height: 5,
                borderRadius: 5,
                backgroundColor: COLORS.saffron,
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography
              sx={{
                color: "#E0EAE3",
                maxWidth: 720,
                mx: "auto",
                lineHeight: 2,
                fontSize: { xs: 14, sm: 16, md: 17 },
              }}
            >
              {t("services.description")}
            </Typography>
          </Box>
        </Container>

        {/* Tiranga accent */}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 6,
            background: `linear-gradient(90deg, ${COLORS.saffron} 0%, ${COLORS.saffron} 33%, #FFFFFF 33%, #FFFFFF 66%, #16803D 66%, #16803D 100%)`,
          }}
        />
      </Box>

      {/* ================= SERVICES INTRO ================= */}

      <Container maxWidth="xl" sx={{ pt: { xs: 7, md: 10 }, pb: 4 }}>
        <Box textAlign="center" sx={{ maxWidth: 750, mx: "auto" }}>
          <SectionLabel centered>
            {t("services.sectionLabel")}
          </SectionLabel>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: {
                xs: "1.8rem",
                sm: "2.3rem",
                md: "2.8rem",
              },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            {t("services.sectionTitle")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, sm: 15 },
              lineHeight: 1.9,
            }}
          >
            {t("services.sectionDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.saffron,
              mx: "auto",
              mt: 2.5,
            }}
          />
        </Box>
      </Container>

      {/* ================= SERVICES GRID ================= */}

      <Container maxWidth="xl" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.key}
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 290,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 4,
                  backgroundColor: COLORS.white,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-9px)" },
                    boxShadow: "0 20px 45px rgba(23,59,42,0.10)",
                    borderColor: "#E7BC91",
                  },

                  "&:hover .service-icon": {
                    transform: "rotate(-7deg) scale(1.08)",
                  },

                  "&:hover .service-arrow": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                {/* Top accent */}

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    backgroundColor: service.color,
                  }}
                />

                {/* Decorative number */}

                <Typography
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 20,
                    color: "#E8EDE9",
                    fontSize: 27,
                    fontWeight: 900,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>

                <CardContent
                  sx={{
                    p: { xs: 2.7, md: 3 },
                    "&:last-child": { pb: 3 },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 3,
                      backgroundColor: service.bg,
                      color: service.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      transition: "0.3s ease",
                    }}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: COLORS.green,
                      fontWeight: 800,
                      fontSize: 18,
                      mb: 1.5,
                    }}
                  >
                    {t(`services.items.${service.key}.title`)}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: 14,
                      lineHeight: 1.9,
                      minHeight: { xs: "auto", md: 80 },
                      mb: 2.5,
                    }}
                  >
                    {t(`services.items.${service.key}.description`)}
                  </Typography>

                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor: "#EDF1ED",
                      mb: 2,
                    }}
                  />

                  <Button
                    component={Link}
                    to="/contact"
                    endIcon={
                      <ArrowRight
                        size={17}
                        className="service-arrow"
                      />
                    }
                    sx={{
                      color: COLORS.orange,
                      fontWeight: 800,
                      fontSize: 14,
                      textTransform: "none",
                      p: 0,
                      transition: "0.25s ease",

                      "& .service-arrow": {
                        transition: "0.25s ease",
                      },

                      "&:hover": {
                        backgroundColor: "transparent",
                        color: COLORS.green,
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

      {/* ================= CONTACT CTA ================= */}

      <Box sx={{ pb: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(115deg, ${COLORS.darkGreen}, ${COLORS.green})`,
              borderRadius: { xs: 3, md: 5 },
              px: { xs: 3, sm: 4, md: 7 },
              py: { xs: 5, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Decorative background circles */}

            <Box
              sx={{
                position: "absolute",
                width: 240,
                height: 240,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "50%",
                top: -140,
                right: "25%",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 350,
                height: 350,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                bottom: -260,
                right: -80,
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: { xs: "center", md: "left" },
                maxWidth: 650,
              }}
            >
              <Stack
                direction="row"
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
                spacing={1}
                sx={{ mb: 2 }}
              >
                <Sparkles size={18} color={COLORS.saffron} />

                <Typography
                  sx={{
                    color: COLORS.saffron,
                    fontWeight: 800,
                    fontSize: 12,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {t("services.label")}
                </Typography>
              </Stack>

              <Typography
                variant="h4"
                sx={{
                  color: COLORS.white,
                  fontWeight: 900,
                  fontSize: { xs: 23, sm: 27, md: 32 },
                  lineHeight: 1.3,
                  mb: 1.5,
                }}
              >
                {t("services.ctaTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E4D7",
                  lineHeight: 1.9,
                  fontSize: { xs: 14, sm: 15 },
                }}
              >
                {t("services.ctaDescription")}
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowRight size={19} />}
              sx={{
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
                backgroundColor: COLORS.saffron,
                color: COLORS.darkGreen,
                fontWeight: 800,
                px: { xs: 3, md: 4 },
                py: 1.7,
                borderRadius: 2.5,
                whiteSpace: "nowrap",
                textTransform: "none",
                fontSize: 15,
                boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                transition: "all 0.25s ease",

                "&:hover": {
                  backgroundColor: "#FFB45E",
                  transform: { xs: "none", md: "translateY(-3px)" },
                  boxShadow: "0 12px 25px rgba(0,0,0,0.20)",
                },
              }}
            >
              {t("services.ctaButton")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= BOTTOM ACCENT ================= */}

      <Box
        sx={{
          height: 6,
          background: `linear-gradient(90deg, ${COLORS.saffron} 0%, ${COLORS.saffron} 33%, #FFFFFF 33%, #FFFFFF 66%, #16803D 66%, #16803D 100%)`,
        }}
      />
    </Box>
  );
}

export default ServicesPage;
