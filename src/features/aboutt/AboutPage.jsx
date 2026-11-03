
// import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  // Button,
  Stack,
} from "@mui/material";

import {
  // ArrowRight,
  Landmark,
  Sprout,
  ShieldCheck,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Leaf,
  // Building2,
} from "lucide-react";

// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const responsibilities = [
  {
    icon: Droplets,
    title: "water",
    description: "waterDesc",
  },
  {
    icon: Leaf,
    title: "cleanliness",
    description: "cleanlinessDesc",
  },
  {
    icon: GraduationCap,
    title: "education",
    description: "educationDesc",
  },
  {
    icon: HeartHandshake,
    title: "welfare",
    description: "welfareDesc",
  },
];

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#F8FAFC", overflow: "hidden" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: { xs: 300, md: 400 },
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(15, 45, 29, 0.90),
              rgba(15, 45, 29, 0.55)
            ),
            url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 750, py: 7 }}>
            <Typography
              sx={{
                color: "#FFE0B2",
                fontWeight: 700,
                mb: 2,
                letterSpacing: 1,
              }}
            >
              {t("about.breadcrumb")}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {t("about.heroTitle")}
            </Typography>

            <Typography
              sx={{
                color: "#F1F5F9",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.9,
                maxWidth: 650,
              }}
            >
              {t("about.heroDescription")}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* INTRODUCTION SECTION */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1000"
              alt="Village and community development"
              sx={{
                width: "100%",
                height: { xs: 260, sm: 350, md: 430 },
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#C65A16",
                fontWeight: 700,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              {t("about.introSubtitle")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#173B2A",
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                lineHeight: 1.3,
                mb: 2.5,
              }}
            >
              {t("about.introTitle")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 2, mb: 2 }}
            >
              {t("about.introDescription")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 2, mb: 3 }}
            >
              {t("about.introDescription2")}
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: 2,
                  backgroundColor: "#FFF0DF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C65A16",
                }}
              >
                <Landmark size={24} />
              </Box>

              <Box>
                <Typography fontWeight={700} color="#173B2A">
                  {t("about.panchayatName")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("about.panchayatSubname")}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* VISION AND MISSION */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 9 } }}>
        <Container maxWidth="xl">
          <Box textAlign="center" sx={{ mb: 5 }}>
            <Typography
              sx={{
                color: "#C65A16",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {t("about.directionSubtitle")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#173B2A",
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              {t("about.directionTitle")}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #E5E7EB",
                  p: { xs: 2, md: 3 },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: "#FFF0DF",
                      color: "#C65A16",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Sprout size={30} />
                  </Box>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                    color="#173B2A"
                    gutterBottom
                  >
                    {t("about.visionTitle")}
                  </Typography>

                  <Typography color="text.secondary" lineHeight={2}>
                    {t("about.visionDescription")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #E5E7EB",
                  p: { xs: 2, md: 3 },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: "#E8F3EA",
                      color: "#166534",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <ShieldCheck size={30} />
                  </Box>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                    color="#173B2A"
                    gutterBottom
                  >
                    {t("about.missionTitle")}
                  </Typography>

                  <Typography color="text.secondary" lineHeight={2}>
                    {t("about.missionDescription")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* RESPONSIBILITIES */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              mb: 1,
            }}
          >
            {t("about.responsibilitySubtitle")}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            {t("about.responsibilityTitle")}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {t("about.responsibilityDescription")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {responsibilities.map((item) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid #E5E7EB",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 28px rgba(0,0,0,0.07)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        borderRadius: 2,
                        backgroundColor: "#FFF0DF",
                        color: "#C65A16",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Icon size={27} />
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="#173B2A"
                      gutterBottom
                    >
                      {t(`about.${item.title}`)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.9}
                    >
                      {t(`about.${item.description}`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* DEVELOPMENT SECTION */}
      <Box sx={{ backgroundColor: "#F0F5F1", py: { xs: 6, md: 9 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#C65A16",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t("about.developmentSubtitle")}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#173B2A",
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {t("about.developmentTitle")}
              </Typography>

              <Typography
                color="text.secondary"
                lineHeight={2}
                sx={{ mb: 3 }}
              >
                {t("about.developmentDescription")}
              </Typography>

              <Stack spacing={2}>
                {[1, 2, 3].map((number) => (
                  <Stack
                    key={number}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        minWidth: 35,
                        height: 35,
                        borderRadius: "50%",
                        backgroundColor: "#FFE0B2",
                        color: "#78350F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                      }}
                    >
                      {number}
                    </Box>

                    <Typography color="#334155" fontWeight={600}>
                      {t(`about.developmentPoint${number}`)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                alt="Agriculture and rural development"
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 350, md: 420 },
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CONTACT SECTION */}
      {/* <Box sx={{ backgroundColor: "#173B2A", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 1 }}
              >
                <Building2 color="#FFE0B2" size={28} />

                <Typography
                  variant="h5"
                  fontWeight={800}
                  color="#FFFFFF"
                >
                  {t("about.contactTitle")}
                </Typography>
              </Stack>

              <Typography color="#D1D5DB">
                {t("about.contactDescription")}
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                backgroundColor: "#FFE0B2",
                color: "#78350F",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#FFD19A",
                },
              }}
            >
              {t("about.contactButton")}
            </Button>
          </Stack>
        </Container>
      </Box> */}

    </Box>
  );
}

export default AboutPage;
