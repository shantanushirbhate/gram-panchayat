
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import {
  ArrowRight,
  Users,
  UserRound,
  BriefcaseBusiness,
  ClipboardList,
  Landmark,
  Handshake,
  ShieldCheck,
  Wallet,
  Leaf,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Building2,
} from "lucide-react";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#0B2E1A",
  lightGreen: "#EAF3EC",
  orange: "#E87519",
  cream: "#FFF8EF",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E6EDE7",
};

const roleIcons = [
  Landmark,
  UserRound,
  Users,
  BriefcaseBusiness,
];

const committeeIcons = [
  Leaf,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
];

const responsibilityIcons = [
  Building2,
  Wallet,
  ClipboardList,
  Handshake,
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <Box
      sx={{
        maxWidth: centered ? 760 : 820,
        mx: centered ? "auto" : 0,
        mb: 4,
        textAlign: centered ? "center" : "left",
      }}
    >
      <Typography
        sx={{
          color: COLORS.orange,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 800,
          fontSize: { xs: 25, sm: 30, md: 36 },
          lineHeight: 1.25,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: COLORS.muted,
          fontSize: { xs: 14, sm: 15 },
          lineHeight: 1.8,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

function RolesAndResponsibilitiesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const tr = (key) => t(`rolesResponsibilities.${key}`);

  const roles = [
    {
      title: tr("roles.sarpanch.title"),
      description: tr("roles.sarpanch.description"),
      responsibilities: [
        tr("roles.sarpanch.points.one"),
        tr("roles.sarpanch.points.two"),
        tr("roles.sarpanch.points.three"),
        tr("roles.sarpanch.points.four"),
      ],
    },
    {
      title: tr("roles.deputy.title"),
      description: tr("roles.deputy.description"),
      responsibilities: [
        tr("roles.deputy.points.one"),
        tr("roles.deputy.points.two"),
        tr("roles.deputy.points.three"),
        tr("roles.deputy.points.four"),
      ],
    },
    {
      title: tr("roles.members.title"),
      description: tr("roles.members.description"),
      responsibilities: [
        tr("roles.members.points.one"),
        tr("roles.members.points.two"),
        tr("roles.members.points.three"),
        tr("roles.members.points.four"),
      ],
    },
    {
      title: tr("roles.secretary.title"),
      description: tr("roles.secretary.description"),
      responsibilities: [
        tr("roles.secretary.points.one"),
        tr("roles.secretary.points.two"),
        tr("roles.secretary.points.three"),
        tr("roles.secretary.points.four"),
      ],
    },
  ];

  const committees = [
    {
      title: tr("committees.sanitation.title"),
      description: tr("committees.sanitation.description"),
    },
    {
      title: tr("committees.education.title"),
      description: tr("committees.education.description"),
    },
    {
      title: tr("committees.social.title"),
      description: tr("committees.social.description"),
    },
    {
      title: tr("committees.development.title"),
      description: tr("committees.development.description"),
    },
  ];

  const responsibilities = [
    {
      title: tr("areas.development.title"),
      description: tr("areas.development.description"),
    },
    {
      title: tr("areas.finance.title"),
      description: tr("areas.finance.description"),
    },
    {
      title: tr("areas.publicServices.title"),
      description: tr("areas.publicServices.description"),
    },
    {
      title: tr("areas.environment.title"),
      description: tr("areas.environment.description"),
    },
  ];

  const citizenPoints = [
    tr("citizens.points.one"),
    tr("citizens.points.two"),
    tr("citizens.points.three"),
    tr("citizens.points.four"),
    tr("citizens.points.five"),
    tr("citizens.points.six"),
  ];

  return (
    <Box sx={{ bgcolor: COLORS.white, overflow: "hidden" }}>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 65%, #285B3D 100%)`,
          py: { xs: 7, sm: 9, md: 12 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 420 },
            height: { xs: 220, md: 420 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -100, md: -80 },
            top: -150,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: { xs: 160, md: 280 },
            height: { xs: 160, md: 280 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            right: { xs: -50, md: 80 },
            bottom: -170,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 35,
                height: 3,
                bgcolor: COLORS.orange,
                borderRadius: 5,
              }}
            />
            <Typography
              sx={{
                color: "#F9C28F",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.6,
              }}
            >
              {tr("hero.eyebrow")}
            </Typography>
          </Stack>

          <Typography
            component="h1"
            sx={{
              color: COLORS.white,
              fontWeight: 900,
              fontSize: { xs: 32, sm: 42, md: 54 },
              lineHeight: 1.18,
              maxWidth: 850,
              mb: 2.5,
            }}
          >
            {tr("hero.title")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: 15, sm: 17 },
              lineHeight: 1.9,
              maxWidth: 760,
            }}
          >
            {tr("hero.description")}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1.2}
            sx={{ mt: 3.5 }}
          >
            <Chip
              icon={<Users size={16} />}
              label={tr("hero.chipOne")}
              sx={{
                color: COLORS.white,
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                "& .MuiChip-icon": { color: "#F9C28F" },
              }}
            />
            <Chip
              icon={<ShieldCheck size={16} />}
              label={tr("hero.chipTwo")}
              sx={{
                color: COLORS.white,
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                "& .MuiChip-icon": { color: "#F9C28F" },
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* INTRODUCTION */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: COLORS.cream }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: COLORS.green,
                  borderRadius: 4,
                  p: { xs: 3, sm: 4 },
                  color: COLORS.white,
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { md: 290 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Landmark
                  size={54}
                  strokeWidth={1.4}
                  color="#F5B879"
                />
                <Typography
                  sx={{
                    mt: 2.5,
                    fontWeight: 800,
                    fontSize: { xs: 23, md: 29 },
                    lineHeight: 1.35,
                  }}
                >
                  {tr("intro.highlightTitle")}
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.8,
                    fontSize: 14,
                  }}
                >
                  {tr("intro.highlightDescription")}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    width: 150,
                    height: 150,
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    right: -65,
                    bottom: -70,
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: COLORS.orange,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1.4,
                  mb: 1,
                }}
              >
                {tr("intro.eyebrow")}
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: COLORS.green,
                  fontWeight: 800,
                  fontSize: { xs: 25, sm: 30, md: 35 },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {tr("intro.title")}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: 15,
                  lineHeight: 1.9,
                  mb: 2,
                }}
              >
                {tr("intro.description")}
              </Typography>
              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: 15,
                  lineHeight: 1.9,
                }}
              >
                {tr("intro.descriptionTwo")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* KEY ROLES */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={tr("roles.eyebrow")}
            title={tr("roles.sectionTitle")}
            description={tr("roles.sectionDescription")}
            centered
          />

          <Grid container spacing={2.5}>
            {roles.map((role, index) => {
              const Icon = roleIcons[index];

              return (
                <Grid size={{ xs: 12, sm: 6 }} key={role.title}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 3,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 14px 35px rgba(23,59,42,0.09)",
                        borderColor: "#B7D1BE",
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 2 }}
                      >
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 2.5,
                            bgcolor: COLORS.lightGreen,
                            color: COLORS.green,
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={25} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: COLORS.green,
                              fontWeight: 800,
                              fontSize: { xs: 17, sm: 19 },
                            }}
                          >
                            {role.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: COLORS.orange,
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            {tr("roles.roleLabel")}
                          </Typography>
                        </Box>
                      </Stack>

                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: 14,
                          lineHeight: 1.8,
                          mb: 2,
                        }}
                      >
                        {role.description}
                      </Typography>

                      <Divider sx={{ borderColor: COLORS.border, mb: 2 }} />

                      <Stack spacing={1.5}>
                        {role.responsibilities.map((point, pointIndex) => (
                          <Stack
                            direction="row"
                            spacing={1.2}
                            alignItems="flex-start"
                            key={pointIndex}
                          >
                            <CheckCircle2
                              size={17}
                              color={COLORS.orange}
                              style={{ flexShrink: 0, marginTop: 3 }}
                            />
                            <Typography
                              sx={{
                                color: COLORS.text,
                                fontSize: 13.5,
                                lineHeight: 1.7,
                              }}
                            >
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* COMMITTEES */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: COLORS.cream }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={tr("committees.eyebrow")}
            title={tr("committees.title")}
            description={tr("committees.description")}
            centered
          />

          <Grid container spacing={2.5}>
            {committees.map((committee, index) => {
              const Icon = committeeIcons[index];

              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={committee.title}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: COLORS.white,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: COLORS.lightGreen,
                          color: COLORS.green,
                          display: "grid",
                          placeItems: "center",
                          mb: 2,
                        }}
                      >
                        <Icon size={23} />
                      </Box>
                      <Typography
                        sx={{
                          color: COLORS.green,
                          fontWeight: 800,
                          fontSize: 17,
                          mb: 1,
                        }}
                      >
                        {committee.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: 13.5,
                          lineHeight: 1.8,
                        }}
                      >
                        {committee.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* AREAS OF RESPONSIBILITY */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={tr("areas.eyebrow")}
            title={tr("areas.title")}
            description={tr("areas.description")}
          />

          <Grid container spacing={2}>
            {responsibilities.map((item, index) => {
              const Icon = responsibilityIcons[index];

              return (
                <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      p: { xs: 2, sm: 2.5 },
                      height: "100%",
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 3,
                      bgcolor: COLORS.white,
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        flexShrink: 0,
                        borderRadius: 2,
                        bgcolor: COLORS.lightGreen,
                        color: COLORS.green,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon size={22} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: COLORS.green,
                          fontWeight: 800,
                          fontSize: 16,
                          mb: 0.7,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: 13.5,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CITIZEN RESPONSIBILITIES */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: COLORS.lightGreen }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: COLORS.green,
                  color: COLORS.white,
                  borderRadius: 4,
                  p: { xs: 3, sm: 4 },
                }}
              >
                <Handshake size={48} color="#F5B879" />
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: 25, md: 32 },
                    lineHeight: 1.3,
                    mt: 2,
                    mb: 1.5,
                  }}
                >
                  {tr("citizens.highlightTitle")}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 14,
                    lineHeight: 1.8,
                  }}
                >
                  {tr("citizens.highlightDescription")}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: COLORS.orange,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1.3,
                  mb: 1,
                }}
              >
                {tr("citizens.eyebrow")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: COLORS.green,
                  fontWeight: 800,
                  fontSize: { xs: 25, md: 33 },
                  lineHeight: 1.3,
                  mb: 2.5,
                }}
              >
                {tr("citizens.title")}
              </Typography>

              <Stack spacing={1.8}>
                {citizenPoints.map((point, index) => (
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                    key={index}
                  >
                    <CheckCircle2
                      size={19}
                      color={COLORS.green}
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />
                    <Typography
                      sx={{
                        color: COLORS.text,
                        fontSize: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      {point}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CLOSING CTA */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: `linear-gradient(120deg, ${COLORS.darkGreen}, ${COLORS.green})`,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.12)",
                color: "#F5B879",
                display: "grid",
                placeItems: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <Users size={29} />
            </Box>

            <Typography
              component="h2"
              sx={{
                color: COLORS.white,
                fontWeight: 800,
                fontSize: { xs: 25, sm: 31, md: 36 },
                mb: 1.5,
              }}
            >
              {tr("closing.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 14.5,
                lineHeight: 1.8,
                maxWidth: 650,
                mx: "auto",
                mb: 3,
              }}
            >
              {tr("closing.description")}
            </Typography>

            <Button
              onClick={() => navigate("/contact")}
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                bgcolor: COLORS.orange,
                color: COLORS.white,
                px: 3,
                py: 1.3,
                borderRadius: 2,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#CF5E10" },
              }}
            >
              {tr("closing.button")}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default RolesAndResponsibilitiesPage;
