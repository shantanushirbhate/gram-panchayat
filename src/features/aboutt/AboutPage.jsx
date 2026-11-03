import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import Bharatsarkarlogo from "../../assets/Emblem_of_India_(Government_Gazette).svg";

import {
  Landmark,
  Sprout,
  ShieldCheck,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Leaf,
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
    title: "about.water",
    description: "about.waterDesc",
    icon: Droplets,
    color: "#0284C7",
    bg: "#E0F2FE",
  },
  {
    title: "about.cleanliness",
    description: "about.cleanlinessDesc",
    icon: Leaf,
    color: "#15803D",
    bg: "#DCFCE7",
  },
  {
    title: "about.education",
    description: "about.educationDesc",
    icon: GraduationCap,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    title: "about.welfare",
    description: "about.welfareDesc",
    icon: HeartHandshake,
    color: "#C65A16",
    bg: "#FFEDD5",
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

function SectionLabel({ children }) {
  return (
    <Typography
      sx={{
        color: COLORS.orange,
        fontWeight: 800,
        fontSize: { xs: 11, sm: 13 },
        letterSpacing: 2,
        textTransform: "uppercase",
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  );
}

function SectionDivider() {
  return (
    <Box
      sx={{
        width: 75,
        height: 5,
        borderRadius: 5,
        background:
          "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        mt: 2,
        mb: 3,
      }}
    />
  );
}

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ overflow: "hidden", backgroundColor: COLORS.background }}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 430, sm: 480, md: 560 },
          display: "flex",
          alignItems: "center",
          backgroundImage: `
            linear-gradient(90deg, rgba(16,45,32,0.96), rgba(16,45,32,0.72)),
            url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: COLORS.white,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: { xs: 220, md: 420 },
            height: { xs: 220, md: 420 },
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              width: 6,
              height: 75,
              backgroundColor: COLORS.saffron,
              borderRadius: 5,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#FDE5C8",
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            {t("about.breadcrumb")}
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.15,
              maxWidth: 850,
            }}
          >
            {t("about.heroTitle")}
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#E2E8E5",
              fontSize: { xs: 14, sm: 16, md: 18 },
              lineHeight: 1.9,
              maxWidth: 700,
            }}
          >
            {t("about.heroDescription")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: 130,
              height: 5,
              borderRadius: 5,
              overflow: "hidden",
              mt: 4,
            }}
          >
            <Box sx={{ flex: 1, bgcolor: "#FF9933" }} />
            <Box sx={{ flex: 1, bgcolor: "#FFFFFF" }} />
            <Box sx={{ flex: 1, bgcolor: "#138808" }} />
          </Box>
        </Container>
      </Box>

      {/* ================= INTRODUCTION SECTION ================= */}
      <Box sx={{ py: { xs: 7, sm: 9, md: 12 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            alignItems="center"
          >
            {/* GOVERNMENT EMBLEM */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: 550,
                  width: "100%",
                  mx: "auto",
                }}
              >
                {/* Emblem display panel */}
                <Box
                  sx={{
                    width: "100%",
                    minHeight: { xs: 320, sm: 390, md: 450 },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: { xs: 3, md: 5 },
                    background:
                      "radial-gradient(circle at center, #FFFFFF 0%, #F4F8F4 75%, #EAF2EC 100%)",
                    border: "1px solid #DCE7DE",
                    boxShadow: "0 20px 55px rgba(23,59,42,0.12)",
                    p: { xs: 3, sm: 5, md: 6 },
                  }}
                >
                  {/* Background decorative circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: { xs: 220, sm: 290, md: 350 },
                      height: { xs: 220, sm: 290, md: 350 },
                      border: "1px solid rgba(23,59,42,0.08)",
                      borderRadius: "50%",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      width: { xs: 175, sm: 235, md: 285 },
                      height: { xs: 175, sm: 235, md: 285 },
                      border: "1px dashed rgba(255,153,51,0.30)",
                      borderRadius: "50%",
                    }}
                  />

                  {/* Government of India emblem */}
                  <Box
                    component="img"
                    src={Bharatsarkarlogo}
                    alt="Emblem of India - Government of India"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      width: { xs: 140, sm: 180, md: 210 },
                      height: { xs: 210, sm: 260, md: 300 },
                      objectFit: "contain",
                      filter:
                        "drop-shadow(0 8px 12px rgba(23,59,42,0.12))",
                    }}
                  />

                  {/* Saffron corner */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: { xs: 65, md: 95 },
                      height: { xs: 65, md: 95 },
                      borderTop: "5px solid #FF9933",
                      borderLeft: "5px solid #FF9933",
                      borderRadius: "18px 0 0 0",
                    }}
                  />

                  {/* Green corner */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: { xs: 65, md: 95 },
                      height: { xs: 65, md: 95 },
                      borderBottom: "5px solid #138808",
                      borderRight: "5px solid #138808",
                      borderRadius: "0 0 18px 0",
                    }}
                  />

                  {/* Tricolour accent */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "25%",
                      width: "50%",
                      height: 4,
                      background:
                        "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
                      borderRadius: 5,
                    }}
                  />
                </Box>

                {/* Panchayat information card */}
                <Card
                  elevation={0}
                  sx={{
                    mt: 2.5,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 3,
                    boxShadow: "0 10px 30px rgba(23,59,42,0.07)",
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          flexShrink: 0,
                          borderRadius: 2,
                          backgroundColor: "#FFF0DF",
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
                            fontSize: { xs: 13, sm: 15 },
                          }}
                        >
                          {t("about.panchayatName")}
                        </Typography>

                        <Typography
                          sx={{
                            color: COLORS.muted,
                            fontSize: { xs: 12, sm: 13 },
                            mt: 0.5,
                          }}
                        >
                          {t("about.panchayatSubname")}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* INTRODUCTION CONTENT */}
            <Grid item xs={12} md={6}>
              <Box>
                <SectionLabel>
                  {t("about.introSubtitle")}
                </SectionLabel>

                <Typography sx={sectionHeading}>
                  {t("about.introTitle")}
                </Typography>

                <SectionDivider />

                <Typography
                  sx={{
                    color: COLORS.text,
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    lineHeight: 2,
                    mb: 2,
                  }}
                >
                  {t("about.introDescription")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: { xs: 14, sm: 15 },
                    lineHeight: 2,
                  }}
                >
                  {t("about.introDescription2")}
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 3,
                    backgroundColor: "#F0F7F1",
                    borderLeft: "5px solid #16803D",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <ShieldCheck
                      size={32}
                      color={COLORS.green}
                      style={{ flexShrink: 0 }}
                    />

                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 700,
                        fontSize: { xs: 13, sm: 15 },
                        lineHeight: 1.8,
                      }}
                    >
                      {t("about.panchayatDescription")}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= VISION AND MISSION ================= */}
      <Box
        sx={{
          py: { xs: 7, sm: 9, md: 11 },
          backgroundColor: COLORS.background,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <SectionLabel>
              {t("about.directionSubtitle")}
            </SectionLabel>

            <Typography sx={sectionHeading}>
              {t("about.directionTitle")}
            </Typography>

            <Box
              sx={{
                width: 75,
                height: 5,
                borderRadius: 5,
                mx: "auto",
                mt: 2,
                background:
                  "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {/* Vision */}
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  p: { xs: 2.5, sm: 4 },
                  background:
                    "linear-gradient(145deg, #FFFFFF, #F0F7F1)",
                  border: `1px solid ${COLORS.border}`,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 35px rgba(23,59,42,0.10)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 3,
                      bgcolor: "#DDF1E2",
                      color: COLORS.green,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <ShieldCheck size={34} />
                  </Box>

                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: { xs: 23, sm: 28 },
                      mb: 2,
                    }}
                  >
                    {t("about.visionTitle")}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.text,
                      lineHeight: 2,
                      fontSize: { xs: 14, sm: 15 },
                    }}
                  >
                    {t("about.visionDescription")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Mission */}
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  p: { xs: 2.5, sm: 4 },
                  background:
                    "linear-gradient(145deg, #FFFFFF, #FFF6EC)",
                  border: "1px solid #F2E4D4",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 35px rgba(198,90,22,0.10)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 3,
                      bgcolor: "#FFE8D0",
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
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: { xs: 23, sm: 28 },
                      mb: 2,
                    }}
                  >
                    {t("about.missionTitle")}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.text,
                      lineHeight: 2,
                      fontSize: { xs: 14, sm: 15 },
                    }}
                  >
                    {t("about.missionDescription")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= RESPONSIBILITIES SECTION ================= */}
      <Box
        sx={{
          py: { xs: 7, sm: 9, md: 11 },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <SectionLabel>
              {t("about.responsibilitySubtitle")}
            </SectionLabel>

            <Typography sx={sectionHeading}>
              {t("about.responsibilityTitle")}
            </Typography>

            <Typography
              sx={{
                color: COLORS.muted,
                maxWidth: 700,
                mx: "auto",
                mt: 2,
                lineHeight: 1.9,
                fontSize: { xs: 14, sm: 15 },
              }}
            >
              {t("about.responsibilityDescription")}
            </Typography>

            <Box
              sx={{
                width: 75,
                height: 5,
                borderRadius: 5,
                mx: "auto",
                mt: 2,
                background:
                  "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
              }}
            />
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
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 4,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-7px)",
                        boxShadow:
                          "0 18px 35px rgba(23,59,42,0.10)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: 3,
                          bgcolor: item.bg,
                          color: item.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                        }}
                      >
                        <Icon size={30} />
                      </Box>

                      <Typography
                        sx={{
                          color: COLORS.green,
                          fontWeight: 800,
                          fontSize: 18,
                          mb: 1.5,
                        }}
                      >
                        {t(item.title)}
                      </Typography>

                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: 14,
                          lineHeight: 1.9,
                        }}
                      >
                        {t(item.description)}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 3,
                          color: item.color,
                        }}
                      >
                        <CheckCircle2 size={17} />
                        <Typography
                          sx={{ fontSize: 12, fontWeight: 700 }}
                        >
                          {t("about.ourResponsibility")}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ================= DEVELOPMENT SECTION ================= */}
      <Box
        sx={{
          py: { xs: 7, sm: 9, md: 12 },
          backgroundColor: COLORS.background,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <SectionLabel>
                {t("about.developmentSubtitle")}
              </SectionLabel>

              <Typography sx={sectionHeading}>
                {t("about.developmentTitle")}
              </Typography>

              <SectionDivider />

              <Typography
                sx={{
                  color: COLORS.text,
                  lineHeight: 2,
                  fontSize: { xs: 14, sm: 15 },
                  mb: 3,
                }}
              >
                {t("about.developmentDescription")}
              </Typography>

              <Stack spacing={2}>
                {[
                  "about.developmentPoint1",
                  "about.developmentPoint2",
                  "about.developmentPoint3",
                ].map((point) => (
                  <Stack
                    key={point}
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                  >
                    <CheckCircle2
                      size={21}
                      color="#16803D"
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />

                    <Typography
                      sx={{
                        color: COLORS.text,
                        fontSize: { xs: 14, sm: 15 },
                        lineHeight: 1.8,
                      }}
                    >
                      {t(point)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  color: COLORS.green,
                }}
              >
                <Building2 size={25} />
                <Typography fontWeight={800}>
                  {t("about.panchayatName")}
                </Typography>
                <MoveUpRight size={19} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: { xs: 3, md: 5 },
                  overflow: "hidden",
                  boxShadow: "0 22px 55px rgba(23,59,42,0.16)",
                  minHeight: { xs: 280, sm: 370, md: 450 },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
                  alt="Agriculture and rural development"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 280, sm: 370, md: 450 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 45%, rgba(16,45,32,0.85) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2.5, sm: 3.5 },
                    color: "#FFFFFF",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: COLORS.saffron,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: COLORS.darkGreen,
                      }}
                    >
                      <Sprout size={27} />
                    </Box>

                    <Box>
                      <Typography fontWeight={800} fontSize={18}>
                        {t("about.developmentTitle")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#E2E8E5",
                          mt: 0.5,
                        }}
                      >
                        {t("about.panchayatName")}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= BOTTOM TRICOLOUR STRIP ================= */}
      <Box
        sx={{
          display: "flex",
          height: 7,
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1, bgcolor: "#FF9933" }} />
        <Box sx={{ flex: 1, bgcolor: "#FFFFFF" }} />
        <Box sx={{ flex: 1, bgcolor: "#138808" }} />
      </Box>
    </Box>
  );
}