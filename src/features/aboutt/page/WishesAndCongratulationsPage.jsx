
import React from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {
  Cake,
  Heart,
  Trophy,
  PartyPopper,
  Sparkles,
  Users,
  ArrowRight,
  Star,
  HandHeart,
  GraduationCap,
  Medal,
  BadgeCheck,
  School,
  Quote,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GREEN = "#14532D";
const DARK_GREEN = "#123D27";
const ORANGE = "#E87519";
const CREAM = "#FFF8EF";
const MUTED = "#64748B";

function WishesAndCongratulationsPage() {
  const { t } = useTranslation("about/wishesAndCongratulations");
  const navigate = useNavigate();

  const w = (key) =>
    t(`wishesAndCongratulations.${key}`, {
      defaultValue: "",
    });

  const wishCards = [
    { key: "birthday", icon: Cake, color: "#E87519", background: "#FFF1E5" },
    { key: "anniversary", icon: Heart, color: "#BE4566", background: "#FFF0F3" },
    { key: "achievement", icon: Trophy, color: "#B7791F", background: "#FFF8E6" },
    { key: "success", icon: Star, color: "#287A55", background: "#EAF5EE" },
  ];

  const celebrationCards = [
    { key: "festivals", icon: PartyPopper },
    { key: "community", icon: Users },
    { key: "special", icon: Sparkles },
  ];

  const principles = ["respect", "togetherness", "encouragement"];

  const studentAchievements = [
    { key: "ajay", icon: BadgeCheck, color: "#287A55", background: "#EAF5EE" },
    { key: "sneha", icon: GraduationCap, color: "#6B55A0", background: "#F1EDFA" },
    { key: "vijay", icon: Medal, color: "#B7791F", background: "#FFF8E6" },
    { key: "sayali", icon: School, color: "#28718A", background: "#EAF5F8" },
  ];

  const sscStudents = [
    { key: "aditi", icon: Medal, rank: "🥈", highlight: false },
    { key: "rahul", icon: Trophy, rank: "🥇", highlight: true },
    { key: "soham", icon: Medal, rank: "🥉", highlight: false },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${DARK_GREEN} 0%, ${GREEN} 65%, #23633B 100%)`,
          color: "#FFFFFF",
          py: { xs: 7, sm: 9, md: 12 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 190, md: 360 },
            height: { xs: 190, md: 360 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -75, md: -80 },
            top: { xs: -65, md: -130 },
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 130, md: 230 },
            height: { xs: 130, md: 230 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.10)",
            right: { xs: 15, md: 100 },
            bottom: -100,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={2} sx={{ maxWidth: 780 }}>
            <Chip
              icon={<Sparkles size={15} color="#FFFFFF" />}
              label={w("hero.badge")}
              sx={{
                alignSelf: "flex-start",
                color: "#FFFFFF",
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                fontWeight: 700,
                letterSpacing: 1,
                "& .MuiChip-label": { px: 1.5 },
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.15rem", sm: "2.8rem", md: "3.7rem" },
                fontWeight: 800,
                lineHeight: 1.3,
                letterSpacing: "-1.2px",
                overflowWrap: "anywhere",
              }}
            >
              {w("hero.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: "0.98rem", md: "1.12rem" },
                lineHeight: 1.9,
                maxWidth: 700,
              }}
            >
              {w("hero.description")}
            </Typography>

            <Stack
              direction="row"
              gap={1}
              sx={{ pt: 1, flexWrap: "wrap" }}
            >
              <Chip
                icon={<Heart size={14} color="#FFFFFF" />}
                label={w("hero.chipOne")}
                sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.12)" }}
              />

              <Chip
                icon={<PartyPopper size={14} color="#FFFFFF" />}
                label={w("hero.chipTwo")}
                sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.12)" }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* INTRODUCTION */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: CREAM }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: ORANGE,
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  letterSpacing: 2,
                  mb: 1.5,
                }}
              >
                {w("intro.eyebrow")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  lineHeight: 1.35,
                  mb: 2,
                }}
              >
                {w("intro.title")}
              </Typography>

              <Typography
                sx={{
                  color: MUTED,
                  lineHeight: 1.9,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  mb: 2,
                }}
              >
                {w("intro.description")}
              </Typography>

              <Typography
                sx={{
                  color: MUTED,
                  lineHeight: 1.9,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                {w("intro.descriptionTwo")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  minHeight: { xs: 220, md: 290 },
                  borderRadius: 5,
                  p: { xs: 3, md: 4 },
                  color: "#FFFFFF",
                  background: `linear-gradient(145deg, ${GREEN}, ${DARK_GREEN})`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(20,83,45,0.16)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.13)",
                    right: -55,
                    top: -65,
                  }}
                />

                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.14)",
                      display: "grid",
                      placeItems: "center",
                      mb: 2.5,
                    }}
                  >
                    <HandHeart size={29} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "1.35rem", md: "1.65rem" },
                      fontWeight: 800,
                      mb: 1.2,
                    }}
                  >
                    {w("intro.highlightTitle")}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    {w("intro.highlightDescription")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WISHES AND CONGRATULATIONS */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 5 }}>
            <Typography
              sx={{
                color: ORANGE,
                fontWeight: 800,
                fontSize: "0.78rem",
                letterSpacing: 2,
                mb: 1.5,
              }}
            >
              {w("wishes.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: DARK_GREEN,
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              {w("wishes.title")}
            </Typography>

            <Typography sx={{ color: MUTED, lineHeight: 1.8 }}>
              {w("wishes.description")}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {wishCards.map((item) => {
              const Icon = item.icon;

              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.key}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      border: "1px solid #E8EEE9",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-6px)" },
                        boxShadow: "0 15px 35px rgba(20,83,45,0.10)",
                        borderColor: "#D4E3D7",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: 3,
                          bgcolor: item.background,
                          color: item.color,
                          display: "grid",
                          placeItems: "center",
                          mb: 2.5,
                        }}
                      >
                        <Icon size={28} />
                      </Box>

                      <Typography
                        sx={{
                          color: DARK_GREEN,
                          fontWeight: 800,
                          fontSize: "1.12rem",
                          mb: 1.2,
                        }}
                      >
                        {w(`wishes.items.${item.key}.title`)}
                      </Typography>

                      <Typography
                        sx={{ color: MUTED, fontSize: "0.91rem", lineHeight: 1.8 }}
                      >
                        {w(`wishes.items.${item.key}.description`)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* STUDENT FELICITATION CEREMONY */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          bgcolor: "#FBFDFB",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid #EDF2ED",
          borderBottom: "1px solid #EDF2ED",
        }}
      >
        <Container maxWidth="lg">
          {/* SECTION HEADING */}
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 850,
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            <Chip
              icon={<GraduationCap size={17} />}
              label={w("students.badge")}
              sx={{
                mb: 2,
                bgcolor: "#EAF3EC",
                color: GREEN,
                fontWeight: 800,
                border: "1px solid #D5E6D8",
                "& .MuiChip-icon": { color: GREEN },
              }}
            />

            <Typography
              component="h2"
              sx={{
                color: DARK_GREEN,
                fontWeight: 900,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.7rem" },
                lineHeight: 1.45,
                mb: 1.5,
              }}
            >
              {w("students.title")}
            </Typography>

            <Typography
              sx={{
                color: MUTED,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.9,
              }}
            >
              {w("students.subtitle")}
            </Typography>
          </Box>

          {/* SSC ACHIEVERS */}
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
              sx={{ mb: 3.5, flexWrap: "wrap" }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  borderRadius: 2.5,
                  bgcolor: "#FFF0E3",
                  color: ORANGE,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Trophy size={23} />
              </Box>

              <Typography
                component="h3"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 900,
                  fontSize: { xs: "1.15rem", md: "1.55rem" },
                }}
              >
                {w("students.sscTitle")}
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {sscStudents.map((student) => {
                const Icon = student.icon;

                return (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={student.key}>
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 4,
                        border: student.highlight
                          ? "1px solid #E8BD69"
                          : "1px solid #E7ECE8",
                        background: student.highlight
                          ? "linear-gradient(145deg, #FFFCF3, #FFFFFF)"
                          : "#FFFFFF",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: { xs: "none", md: "translateY(-6px)" },
                          boxShadow: "0 16px 35px rgba(20,83,45,0.10)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 5,
                          background: student.highlight
                            ? "linear-gradient(90deg, #D69B26, #F5D47A)"
                            : `linear-gradient(90deg, ${GREEN}, ${ORANGE})`,
                        }}
                      />

                      <CardContent sx={{ p: 3.5, textAlign: "center" }}>
                        <Box
                          sx={{
                            width: 76,
                            height: 76,
                            mx: "auto",
                            mb: 2,
                            borderRadius: "50%",
                            bgcolor: student.highlight ? "#FFF2CE" : "#EAF3EC",
                            color: student.highlight ? "#B7791F" : GREEN,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <Icon size={38} />
                        </Box>

                        <Typography sx={{ fontSize: 29, mb: 1 }}>
                          {student.rank}
                        </Typography>

                        {student.highlight && (
                          <Chip
                            icon={<Star size={14} />}
                            label={w("students.firstBadge")}
                            size="small"
                            sx={{
                              mb: 1.5,
                              bgcolor: "#FFF0C2",
                              color: "#93620E",
                              fontWeight: 900,
                              "& .MuiChip-icon": { color: "#B7791F" },
                            }}
                          />
                        )}

                        <Typography
                          sx={{
                            color: MUTED,
                            fontSize: 12,
                            fontWeight: 800,
                            letterSpacing: 1,
                            mb: 0.8,
                          }}
                        >
                          {w("students.class")}
                        </Typography>

                        <Typography
                          component="h4"
                          sx={{
                            color: DARK_GREEN,
                            fontWeight: 900,
                            fontSize: "1.2rem",
                            mb: 1.5,
                          }}
                        >
                          {w(`students.ssc.${student.key}.name`)}
                        </Typography>

                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 0.8,
                            px: 2.5,
                            py: 1,
                            borderRadius: 2,
                            bgcolor: student.highlight ? "#FFF0C2" : "#EAF3EC",
                            color: student.highlight ? "#93620E" : GREEN,
                          }}
                        >
                          <Star size={17} />
                          <Typography sx={{ fontWeight: 900, fontSize: "1.35rem" }}>
                            {w(`students.ssc.${student.key}.marks`)}
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            color: MUTED,
                            fontSize: 12,
                            fontWeight: 700,
                            mt: 1,
                          }}
                        >
                          {w("students.percentage")}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* SPECIAL ACHIEVEMENTS */}
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
              sx={{ mb: 3.5, flexWrap: "wrap" }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  borderRadius: 2.5,
                  bgcolor: "#EAF3EC",
                  color: GREEN,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Sparkles size={23} />
              </Box>

              <Typography
                component="h3"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 900,
                  fontSize: { xs: "1.15rem", md: "1.55rem" },
                }}
              >
                {w("students.specialTitle")}
              </Typography>
            </Stack>

            <Grid container spacing={2.5}>
              {studentAchievements.map((item) => {
                const Icon = item.icon;

                return (
                  <Grid size={{ xs: 12, sm: 6 }} key={item.key}>
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: 3.5,
                        border: "1px solid #E7ECE8",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "#C9DCCF",
                          boxShadow: "0 12px 28px rgba(20,83,45,0.08)",
                          transform: { xs: "none", md: "translateY(-4px)" },
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              flexShrink: 0,
                              borderRadius: 3,
                              bgcolor: item.background,
                              color: item.color,
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <Icon size={28} />
                          </Box>

                          <Box sx={{ minWidth: 0 }}>
                            <Typography
                              sx={{
                                color: DARK_GREEN,
                                fontWeight: 900,
                                fontSize: "1.05rem",
                                mb: 0.5,
                              }}
                            >
                              {w(`students.special.${item.key}.name`)}
                            </Typography>

                            <Typography
                              sx={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}
                            >
                              {w(`students.special.${item.key}.achievement`)}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* SARPANCH MESSAGE */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 4,
              color: "#FFFFFF",
              background: `linear-gradient(125deg, ${DARK_GREEN}, ${GREEN})`,
              boxShadow: "0 16px 40px rgba(20,83,45,0.14)",
              "&::after": {
                content: '""',
                position: "absolute",
                width: 190,
                height: 190,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                right: -70,
                bottom: -100,
                pointerEvents: "none",
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: 2.5,
                    bgcolor: "rgba(255,255,255,0.13)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Quote size={25} color="#F5B36F" />
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "1.1rem", md: "1.45rem" },
                  }}
                >
                  {w("students.messageTitle")}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 2.1,
                  fontStyle: "italic",
                  maxWidth: 900,
                }}
              >
                “{w("students.message")}”
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", my: 2.5 }} />

              <Typography
                sx={{
                  color: "#F5B36F",
                  fontWeight: 800,
                  fontSize: { xs: 13, md: 15 },
                  lineHeight: 1.8,
                }}
              >
                {w("students.signature")}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* COMMUNITY CELEBRATIONS */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: CREAM }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 5 }}>
            <Typography
              sx={{
                color: ORANGE,
                fontWeight: 800,
                fontSize: "0.78rem",
                letterSpacing: 2,
                mb: 1.5,
              }}
            >
              {w("celebrations.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: DARK_GREEN,
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              {w("celebrations.title")}
            </Typography>

            <Typography sx={{ color: MUTED, lineHeight: 1.8 }}>
              {w("celebrations.description")}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {celebrationCards.map((item) => {
              const Icon = item.icon;

              return (
                <Grid size={{ xs: 12, md: 4 }} key={item.key}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      bgcolor: "#FFFFFF",
                      borderRadius: 4,
                      border: "1px solid #E9EDE8",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-5px)" },
                        boxShadow: "0 14px 30px rgba(20,83,45,0.08)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 3,
                          bgcolor: "#EAF3EC",
                          color: GREEN,
                          mb: 2,
                        }}
                      >
                        <Icon size={25} />
                      </Box>

                      <Typography
                        sx={{
                          color: DARK_GREEN,
                          fontWeight: 800,
                          fontSize: "1.15rem",
                          mb: 1,
                        }}
                      >
                        {w(`celebrations.items.${item.key}.title`)}
                      </Typography>

                      <Typography
                        sx={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.8 }}
                      >
                        {w(`celebrations.items.${item.key}.description`)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* VALUES SECTION */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  color: ORANGE,
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  letterSpacing: 2,
                  mb: 1.5,
                }}
              >
                {w("values.eyebrow")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.35rem" },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {w("values.title")}
              </Typography>

              <Typography sx={{ color: MUTED, lineHeight: 1.9 }}>
                {w("values.description")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                {principles.map((key, index) => (
                  <Box key={key}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                      sx={{ py: 1.5 }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          bgcolor: "#EAF3EC",
                          color: GREEN,
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 800,
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Box>
                        <Typography
                          sx={{ color: DARK_GREEN, fontWeight: 800, mb: 0.5 }}
                        >
                          {w(`values.items.${key}.title`)}
                        </Typography>

                        <Typography
                          sx={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.8 }}
                        >
                          {w(`values.items.${key}.description`)}
                        </Typography>
                      </Box>
                    </Stack>

                    {index !== principles.length - 1 && (
                      <Divider sx={{ borderColor: "#E8EEE9" }} />
                    )}
                  </Box>
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
          background: `linear-gradient(120deg, ${DARK_GREEN}, ${GREEN})`,
          color: "#FFFFFF",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 58,
                height: 58,
                mx: "auto",
                mb: 2.5,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.14)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Heart size={28} />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "1.7rem", md: "2.4rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              {w("closing.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.9,
                maxWidth: 680,
                mx: "auto",
                mb: 3.5,
              }}
            >
              {w("closing.description")}
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              endIcon={<ArrowRight size={18} />}
              sx={{
                px: 3.5,
                py: 1.4,
                borderRadius: 2.5,
                bgcolor: ORANGE,
                color: "#FFFFFF",
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#D96612" },
              }}
            >
              {w("closing.button")}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default WishesAndCongratulationsPage;
