
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {
  Award,
  Trophy,
  Medal,
  Sparkles,
  ShieldCheck,
  Star,
  Crown,
  ArrowDown,
} from "lucide-react";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#0B2E1A",
  lightGreen: "#EAF3EC",
  orange: "#E87519",
  cream: "#FFF8EF",
  white: "#FFFFFF",
  muted: "#64748B",
  border: "#E6EDE7",
};

const awardIcons = [
  Sparkles,
  Trophy,
  ShieldCheck,
  Award,
  Medal,
];

function HonorsAndAwardsPage() {
  const { t } = useTranslation("about/honorsAndAwards");

  const awards = t("honorsAndAwards.awards", {
    returnObjects: true,
    defaultValue: [],
  });

  const awardList = Array.isArray(awards) ? awards : [];

  return (
    <Box
      sx={{
        bgcolor: COLORS.cream,
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
            radial-gradient(circle at 85% 25%, rgba(232,117,25,0.17), transparent 25%),
            linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 60%, #28583C 100%)
          `,
          color: COLORS.white,
          py: { xs: 8, sm: 10, md: 13 },

          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 250, md: 430 },
            height: { xs: 250, md: 430 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -150, md: 80 },
            top: { xs: -130, md: -190 },
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.035)",
            right: { xs: 20, md: 260 },
            bottom: -210,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Chip
                icon={<Award size={17} />}
                label={t("honorsAndAwards.hero.badge")}
                sx={{
                  mb: 3,
                  px: 1,
                  height: 36,
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: COLORS.white,
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontWeight: 800,
                  letterSpacing: 0.3,
                  "& .MuiChip-icon": {
                    color: "#F5B36F",
                  },
                }}
              />

              <Typography
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "2.15rem",
                    sm: "2.9rem",
                    md: "3.7rem",
                  },
                  lineHeight: 1.3,
                  mb: 2.5,
                  maxWidth: 750,
                  overflowWrap: "anywhere",
                }}
              >
                {t("honorsAndAwards.hero.title")}
              </Typography>

              <Typography
                sx={{
                  maxWidth: 680,
                  color: "rgba(255,255,255,0.82)",
                  fontSize: { xs: "0.95rem", md: "1.08rem" },
                  lineHeight: 2,
                }}
              >
                {t("honorsAndAwards.hero.description")}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.3}
                mt={3.5}
                sx={{
                  color: "#F5B36F",
                  flexWrap: "wrap",
                }}
              >
                <Trophy size={22} />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: { xs: 12, sm: 14 },
                    fontWeight: 700,
                    lineHeight: 1.8,
                  }}
                >
                  {t("honorsAndAwards.hero.caption")}
                </Typography>
              </Stack>
            </Grid>

            {/* HERO AWARD GRAPHIC */}
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 255,
                  height: 255,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(255,255,255,0.035)",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  sx={{
                    width: 190,
                    height: 190,
                    borderRadius: "50%",
                    border: "1px solid rgba(245,179,111,0.5)",
                    display: "grid",
                    placeItems: "center",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
                  }}
                >
                  <Box
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      bgcolor: "rgba(232,117,25,0.16)",
                      border: "1px solid rgba(245,179,111,0.45)",
                      display: "grid",
                      placeItems: "center",
                      color: "#F5B36F",
                    }}
                  >
                    <Trophy size={76} strokeWidth={1.3} />
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 30,
                    color: "#F5B36F",
                  }}
                >
                  <Sparkles size={27} />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 27,
                    left: 20,
                    color: "#F5B36F",
                  }}
                >
                  <Star size={23} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= AWARDS INTRODUCTION ================= */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            maxWidth: 820,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            mb={1.5}
          >
            <Box
              sx={{
                width: 30,
                height: 2,
                bgcolor: COLORS.orange,
                borderRadius: 5,
              }}
            />

            <Typography
              sx={{
                color: COLORS.orange,
                fontWeight: 900,
                letterSpacing: 1.7,
                fontSize: 12,
                textTransform: "uppercase",
              }}
            >
              {t("honorsAndAwards.section.eyebrow")}
            </Typography>

            <Box
              sx={{
                width: 30,
                height: 2,
                bgcolor: COLORS.orange,
                borderRadius: 5,
              }}
            />
          </Stack>

          <Typography
            component="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: { xs: 25, sm: 32, md: 40 },
              lineHeight: 1.4,
              mb: 2,
              overflowWrap: "anywhere",
            }}
          >
            {t("honorsAndAwards.section.title")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, md: 16 },
              lineHeight: 2,
              maxWidth: 720,
              mx: "auto",
            }}
          >
            {t("honorsAndAwards.section.description")}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.5,
              py: 1,
              borderRadius: 20,
              bgcolor: COLORS.lightGreen,
              border: "1px solid #D5E6D8",
            }}
          >
            <Trophy size={17} color={COLORS.green} />

            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              {awardList.length} Awards & Recognitions
            </Typography>
          </Box>
        </Box>

        {/* ================= AWARD CARDS ================= */}
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {awardList.map((award, index) => {
            const Icon = awardIcons[index % awardIcons.length];

            return (
              <Grid
                key={award.id || `${award.year}-${index}`}
                size={{ xs: 12, sm: 6, lg: 4 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 275, md: 310 },
                    borderRadius: 3.5,
                    border: `1px solid ${COLORS.border}`,
                    bgcolor: COLORS.white,
                    overflow: "hidden",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "translateY(-7px)",
                      },
                      borderColor: COLORS.orange,
                      boxShadow: "0 18px 38px rgba(23,59,42,0.11)",

                      "& .award-icon": {
                        bgcolor: COLORS.green,
                        color: COLORS.white,
                        transform: "rotate(-7deg)",
                      },

                      "& .award-top-line": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  <Box
                    className="award-top-line"
                    sx={{
                      height: 5,
                      width: "45%",
                      background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
                      transition: "width 0.35s ease",
                    }}
                  />

                  <CardContent
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      "&:last-child": { pb: 3 },
                    }}
                  >
                    {/* ICON AND YEAR */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={2}
                      mb={3}
                    >
                      <Box
                        className="award-icon"
                        sx={{
                          width: 62,
                          height: 62,
                          borderRadius: 3,
                          bgcolor: COLORS.lightGreen,
                          color: COLORS.green,
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Icon size={30} strokeWidth={1.8} />
                      </Box>

                      <Chip
                        icon={<Medal size={15} />}
                        label={award.year}
                        size="small"
                        sx={{
                          bgcolor: "#FFF0E3",
                          color: COLORS.orange,
                          fontWeight: 900,
                          fontSize: 12,
                          height: 31,
                          "& .MuiChip-icon": {
                            color: COLORS.orange,
                          },
                        }}
                      />
                    </Stack>

                    {/* AWARD NUMBER */}
                    <Typography
                      sx={{
                        color: "#B5C5B8",
                        fontWeight: 900,
                        fontSize: 12,
                        letterSpacing: 1.5,
                        mb: 0.8,
                      }}
                    >
                      RECOGNITION {String(index + 1).padStart(2, "0")}
                    </Typography>

                    {/* AWARD TITLE */}
                    <Typography
                      component="h3"
                      sx={{
                        color: COLORS.green,
                        fontWeight: 900,
                        fontSize: { xs: 17, md: 19 },
                        lineHeight: 1.6,
                        mb: 1.5,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {award.title}
                    </Typography>

                    <Divider
                      sx={{
                        borderColor: COLORS.border,
                        mb: 1.8,
                      }}
                    />

                    {/* AWARD DESCRIPTION */}
                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 14,
                        lineHeight: 1.95,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {award.description}
                    </Typography>

                    {/* OPTIONAL AWARD NOTE */}
                    {award.note && (
                      <Box
                        sx={{
                          mt: 2.5,
                          pt: 2,
                          borderTop: `1px solid ${COLORS.border}`,
                        }}
                      >
                        <Chip
                          icon={<ShieldCheck size={15} />}
                          label={award.note}
                          size="small"
                          sx={{
                            maxWidth: "100%",
                            height: "auto",
                            bgcolor: COLORS.lightGreen,
                            color: COLORS.green,
                            fontWeight: 800,
                            "& .MuiChip-label": {
                              whiteSpace: "normal",
                              py: 0.8,
                              lineHeight: 1.5,
                            },
                            "& .MuiChip-icon": {
                              color: COLORS.green,
                              alignSelf: "flex-start",
                              mt: 0.7,
                            },
                          }}
                        />
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* EMPTY STATE */}
        {awardList.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 7,
              px: 2,
              bgcolor: COLORS.white,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 3,
            }}
          >
            <Award size={42} color={COLORS.green} />

            <Typography
              sx={{
                mt: 2,
                color: COLORS.green,
                fontWeight: 800,
              }}
            >
              No awards available.
            </Typography>
          </Box>
        )}
      </Container>

      {/* ================= CLOSING SECTION ================= */}
      <Box
        sx={{
          mt: { xs: 7, md: 10 },
          position: "relative",
          overflow: "hidden",
          bgcolor: COLORS.lightGreen,
          borderTop: "1px solid #DCE9DE",
          py: { xs: 5, md: 7 },

          "&::before": {
            content: '""',
            position: "absolute",
            width: 180,
            height: 180,
            border: "25px solid rgba(23,59,42,0.035)",
            borderRadius: "50%",
            left: -90,
            top: -100,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: 180,
            height: 180,
            border: "25px solid rgba(23,59,42,0.035)",
            borderRadius: "50%",
            right: -90,
            bottom: -110,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                bgcolor: COLORS.white,
                color: COLORS.green,
                display: "grid",
                placeItems: "center",
                boxShadow: "0 6px 20px rgba(23,59,42,0.08)",
              }}
            >
              <Crown size={28} />
            </Box>

            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 900,
                fontSize: { xs: 19, sm: 24, md: 28 },
                lineHeight: 1.5,
              }}
            >
              {t("honorsAndAwards.footer.message")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: COLORS.orange,
                pt: 0.5,
              }}
            >
              <Sparkles size={17} />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                PRIDE • PROGRESS • RECOGNITION
              </Typography>
              <Sparkles size={17} />
            </Box>

            <ArrowDown
              size={19}
              color={COLORS.green}
              style={{ opacity: 0.45 }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default HonorsAndAwardsPage;
