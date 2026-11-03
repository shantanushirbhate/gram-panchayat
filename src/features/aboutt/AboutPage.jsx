
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import {
  Landmark,
  Sprout,
  ShieldCheck,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Leaf,
  // ArrowUpRight,
  CheckCircle2,
  Building2,
  MoveUpRight,
} from "lucide-react";

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

const responsibilities = [
  {
    icon: Droplets,
    title: "water",
    description: "waterDesc",
    color: "#0284C7",
    bg: "#E0F2FE",
  },
  {
    icon: Leaf,
    title: "cleanliness",
    description: "cleanlinessDesc",
    color: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    icon: GraduationCap,
    title: "education",
    description: "educationDesc",
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
  {
    icon: HeartHandshake,
    title: "welfare",
    description: "welfareDesc",
    color: "#DB6B24",
    bg: "#FFF0DF",
  },
];

const sectionHeading = {
  color: COLORS.green,
  fontWeight: 900,
  fontSize: {
    xs: "1.8rem",
    sm: "2.3rem",
    md: "2.8rem",
  },
  lineHeight: 1.25,
};

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
          letterSpacing: 1.6,
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
}

function SectionDivider() {
  return (
    <Box
      sx={{
        width: 65,
        height: 4,
        borderRadius: 5,
        background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.orange})`,
        mt: 2,
      }}
    />
  );
}

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: COLORS.background, overflow: "hidden" }}>

      {/* ================= HERO SECTION ================= */}

      <Box
        sx={{
          minHeight: { xs: 430, sm: 480, md: 560 },
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(
              105deg,
              rgba(8, 35, 22, 0.97) 0%,
              rgba(15, 55, 34, 0.88) 48%,
              rgba(15, 55, 34, 0.48) 100%
            ),
            url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative background shapes */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 480 },
            height: { xs: 220, md: 480 },
            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: "50%",
            top: { xs: -130, md: -230 },
            right: { xs: -100, md: 20 },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 300, md: 650 },
            height: { xs: 300, md: 650 },
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            bottom: { xs: -230, md: -440 },
            right: { xs: -130, md: 120 },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 8,
            height: 130,
            backgroundColor: COLORS.saffron,
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "0 5px 5px 0",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 820, py: { xs: 7, md: 10 } }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              sx={{
                mb: 3,
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10,
                display: "inline-flex",
                px: 2,
                py: 1,
                backdropFilter: "blur(8px)",
              }}
            >
              <Landmark size={17} color={COLORS.saffron} />
              <Typography
                sx={{
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                {t("about.breadcrumb")}
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                color: COLORS.white,
                fontWeight: 900,
                fontSize: {
                  xs: "2.3rem",
                  sm: "3.3rem",
                  md: "4.4rem",
                },
                lineHeight: 1.13,
                mb: 3,
                maxWidth: 780,
                letterSpacing: "-1.2px",
              }}
            >
              {t("about.heroTitle")}
            </Typography>

            <Box
              sx={{
                width: 90,
                height: 5,
                borderRadius: 5,
                background: `linear-gradient(90deg, ${COLORS.saffron}, #F6C58F)`,
                mb: 3,
              }}
            />

            <Typography
              sx={{
                color: "#E5EEE7",
                fontSize: { xs: 14, sm: 16, md: 18 },
                lineHeight: 2,
                maxWidth: 680,
              }}
            >
              {t("about.heroDescription")}
            </Typography>
          </Box>
        </Container>

        {/* Bottom decorative strip */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 6,
            background: `linear-gradient(90deg, ${COLORS.saffron} 0%, ${COLORS.saffron} 33%, ${COLORS.white} 33%, ${COLORS.white} 66%, #16803D 66%, #16803D 100%)`,
          }}
        />
      </Box>

      {/* ================= INTRODUCTION SECTION ================= */}

      <Container maxWidth="xl" sx={{ py: { xs: 7, sm: 9, md: 13 } }}>
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 650,
                mx: "auto",
                px: { xs: 1.5, md: 2 },
                pb: { xs: 2, md: 3 },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1000"
                alt="Village and community development"
                sx={{
                  width: "100%",
                  height: { xs: 280, sm: 390, md: 480 },
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: { xs: 3, md: 5 },
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 25px 60px rgba(23,59,42,0.16)",
                }}
              />

              {/* Decorative frame */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "45%",
                  height: "40%",
                  borderTop: `5px solid ${COLORS.saffron}`,
                  borderLeft: `5px solid ${COLORS.saffron}`,
                  borderRadius: "18px 0 0 0",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "45%",
                  height: "40%",
                  borderBottom: `5px solid ${COLORS.green}`,
                  borderRight: `5px solid ${COLORS.green}`,
                  borderRadius: "0 0 18px 0",
                }}
              />

              {/* Image information card */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 12, md: 30 },
                  left: { xs: 12, md: 30 },
                  right: { xs: 12, md: "auto" },
                  maxWidth: { md: 330 },
                  zIndex: 2,
                  backgroundColor: COLORS.white,
                  borderRadius: 3,
                  p: { xs: 2, md: 2.5 },
                  boxShadow: "0 12px 35px rgba(0,0,0,0.16)",
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2.5,
                      backgroundColor: COLORS.cream,
                      color: COLORS.orange,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Landmark size={25} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 800,
                        fontSize: 14,
                      }}
                    >
                      {t("about.panchayatName")}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 12,
                        mt: 0.4,
                      }}
                    >
                      {t("about.panchayatSubname")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <SectionLabel>{t("about.introSubtitle")}</SectionLabel>

            <Typography variant="h2" sx={sectionHeading}>
              {t("about.introTitle")}
            </Typography>

            <SectionDivider />

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 2,
                mt: 3,
                mb: 2,
                fontSize: { xs: 14, sm: 15 },
              }}
            >
              {t("about.introDescription")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 2,
                mb: 3.5,
                fontSize: { xs: 14, sm: 15 },
              }}
            >
              {t("about.introDescription2")}
            </Typography>

            <Box
              sx={{
                p: { xs: 2, sm: 2.5 },
                background: "linear-gradient(110deg, #EAF2EC, #F5F8F5)",
                borderRadius: 3,
                borderLeft: `4px solid ${COLORS.saffron}`,
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.orange,
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={25} />
                </Box>

                <Box>
                  <Typography fontWeight={800} color={COLORS.green}>
                    {t("about.panchayatName")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t("about.panchayatSubname")}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ================= VISION AND MISSION ================= */}

      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: 7, sm: 9, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
            <SectionLabel centered>
              {t("about.directionSubtitle")}
            </SectionLabel>

            <Typography variant="h2" sx={sectionHeading}>
              {t("about.directionTitle")}
            </Typography>

            <Box
              sx={{
                width: 65,
                height: 4,
                borderRadius: 5,
                backgroundColor: COLORS.saffron,
                mx: "auto",
                mt: 2,
              }}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: `1px solid ${COLORS.border}`,
                  background: "linear-gradient(145deg, #FFF8EF, #FFFFFF)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-8px)" },
                    boxShadow: "0 22px 45px rgba(23,59,42,0.10)",
                    borderColor: "#F3BD89",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -45,
                    right: -45,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,153,51,0.07)",
                  }}
                />

                <CardContent sx={{ p: { xs: 3, md: 4 }, position: "relative" }}>
                  <Box
                    sx={{
                      width: 68,
                      height: 68,
                      borderRadius: 3,
                      backgroundColor: "#FFF0DF",
                      color: COLORS.orange,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Sprout size={34} />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: { xs: 22, md: 27 },
                      mb: 2,
                    }}
                  >
                    {t("about.visionTitle")}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 2, fontSize: 15 }}
                  >
                    {t("about.visionDescription")}
                  </Typography>

                  <Box
                    sx={{
                      width: 55,
                      height: 4,
                      borderRadius: 5,
                      backgroundColor: COLORS.saffron,
                      mt: 3,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #DCE9DE",
                  background: "linear-gradient(145deg, #EFF8F0, #FFFFFF)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-8px)" },
                    boxShadow: "0 22px 45px rgba(23,59,42,0.10)",
                    borderColor: "#A7D4B0",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -45,
                    right: -45,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "rgba(22,163,74,0.07)",
                  }}
                />

                <CardContent sx={{ p: { xs: 3, md: 4 }, position: "relative" }}>
                  <Box
                    sx={{
                      width: 68,
                      height: 68,
                      borderRadius: 3,
                      backgroundColor: "#E1F2E5",
                      color: "#166534",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <ShieldCheck size={34} />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: { xs: 22, md: 27 },
                      mb: 2,
                    }}
                  >
                    {t("about.missionTitle")}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 2, fontSize: 15 }}
                  >
                    {t("about.missionDescription")}
                  </Typography>

                  <Box
                    sx={{
                      width: 55,
                      height: 4,
                      borderRadius: 5,
                      backgroundColor: "#16A34A",
                      mt: 3,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= RESPONSIBILITIES ================= */}

      <Container maxWidth="xl" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
        <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <SectionLabel centered>
            {t("about.responsibilitySubtitle")}
          </SectionLabel>

          <Typography variant="h2" sx={sectionHeading}>
            {t("about.responsibilityTitle")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 680,
              mx: "auto",
              lineHeight: 1.9,
              fontSize: 15,
            }}
          >
            {t("about.responsibilityDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.saffron,
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {responsibilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 275,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 4,
                    backgroundColor: COLORS.white,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: { xs: "none", md: "translateY(-9px)" },
                      boxShadow: "0 20px 40px rgba(23,59,42,0.10)",
                      borderColor: "#F3BD89",
                    },
                    "&:hover .responsibility-icon": {
                      transform: "rotate(-7deg) scale(1.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: 4,
                      width: "100%",
                      backgroundColor: item.color,
                    }}
                  />

                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 3 }}
                    >
                      <Box
                        className="responsibility-icon"
                        sx={{
                          width: 62,
                          height: 62,
                          borderRadius: 3,
                          backgroundColor: item.bg,
                          color: item.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "0.3s ease",
                        }}
                      >
                        <Icon size={30} />
                      </Box>

                      <Typography
                        sx={{
                          color: "#CBD5CE",
                          fontWeight: 900,
                          fontSize: 28,
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: COLORS.green,
                        fontSize: 19,
                        mb: 1.5,
                      }}
                    >
                      {t(`about.${item.title}`)}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: 1.9, fontSize: 14 }}
                    >
                      {t(`about.${item.description}`)}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.8}
                      sx={{ mt: 2.5, color: item.color }}
                    >
                      <CheckCircle2 size={16} />
                      <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                        {t("about.panchayatName")}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* ================= DEVELOPMENT SECTION ================= */}

      <Box
        sx={{
          background: "linear-gradient(135deg, #EAF2EC 0%, #F5F8F5 100%)",
          py: { xs: 7, sm: 9, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            border: "1px solid rgba(23,59,42,0.07)",
            top: -180,
            left: -160,
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <SectionLabel>
                {t("about.developmentSubtitle")}
              </SectionLabel>

              <Typography variant="h2" sx={sectionHeading}>
                {t("about.developmentTitle")}
              </Typography>

              <SectionDivider />

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 2,
                  mt: 3,
                  mb: 3.5,
                  fontSize: 15,
                }}
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
                    sx={{
                      backgroundColor: COLORS.white,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 3,
                      p: { xs: 1.8, sm: 2 },
                      boxShadow: "0 5px 16px rgba(23,59,42,0.035)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#E9B17D",
                        boxShadow: "0 10px 25px rgba(23,59,42,0.08)",
                        transform: { xs: "none", md: "translateX(6px)" },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 44,
                        height: 44,
                        borderRadius: 2.5,
                        backgroundColor: COLORS.cream,
                        color: COLORS.orange,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: 17,
                      }}
                    >
                      {number}
                    </Box>

                    <Typography
                      color={COLORS.text}
                      fontWeight={700}
                      sx={{
                        flex: 1,
                        fontSize: { xs: 13, sm: 15 },
                        lineHeight: 1.8,
                      }}
                    >
                      {t(`about.developmentPoint${number}`)}
                    </Typography>

                    <Box sx={{ color: "#16A34A", flexShrink: 0 }}>
                      <MoveUpRight size={19} />
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 650,
                  mx: "auto",
                  pb: 2,
                  pr: 2,
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                  alt="Agriculture and rural development"
                  sx={{
                    width: "100%",
                    height: { xs: 290, sm: 380, md: 490 },
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: { xs: 3, md: 5 },
                    display: "block",
                    boxShadow: "0 25px 55px rgba(23,59,42,0.16)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 10, md: 28 },
                    left: { xs: 10, md: 25 },
                    right: { xs: 10, md: "auto" },
                    backgroundColor: COLORS.white,
                    borderRadius: 3,
                    px: 2.5,
                    py: 2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    maxWidth: { md: 310 },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      backgroundColor: "#E1F2E5",
                      color: "#16803D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Sprout size={28} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: COLORS.green,
                      fontSize: 14,
                    }}
                  >
                    {t("about.developmentSubtitle")}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: -12,
                    right: 0,
                    width: 90,
                    height: 90,
                    borderTop: `5px solid ${COLORS.saffron}`,
                    borderRight: `5px solid ${COLORS.saffron}`,
                    borderRadius: "0 15px 0 0",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= BOTTOM ACCENT ================= */}

      <Box
        sx={{
          height: 7,
          background: `linear-gradient(90deg, ${COLORS.saffron} 0%, ${COLORS.saffron} 33%, ${COLORS.white} 33%, ${COLORS.white} 66%, #16803D 66%, #16803D 100%)`,
        }}
      />
    </Box>
  );
}

export default AboutPage;
