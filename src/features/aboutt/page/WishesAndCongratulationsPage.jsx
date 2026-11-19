
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
  CalendarDays,
  Star,
  HandHeart,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GREEN = "#14532D";
const DARK_GREEN = "#123D27";
const ORANGE = "#E87519";
const CREAM = "#FFF8EF";
const TEXT = "#263B30";
const MUTED = "#64748B";

function WishesAndCongratulationsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const w = (key) => t(`wishesAndCongratulations.${key}`);

  const wishCards = [
    {
      key: "birthday",
      icon: Cake,
      color: "#E87519",
      background: "#FFF1E5",
    },
    {
      key: "anniversary",
      icon: Heart,
      color: "#BE4566",
      background: "#FFF0F3",
    },
    {
      key: "achievement",
      icon: Trophy,
      color: "#B7791F",
      background: "#FFF8E6",
    },
    {
      key: "success",
      icon: Star,
      color: "#287A55",
      background: "#EAF5EE",
    },
  ];

  const celebrationCards = [
    {
      key: "festivals",
      icon: PartyPopper,
    },
    {
      key: "community",
      icon: Users,
    },
    {
      key: "special",
      icon: Sparkles,
    },
  ];

  const principles = [
    "respect",
    "togetherness",
    "encouragement",
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
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={2} maxWidth={780}>
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
              variant="h1"
              sx={{
                fontSize: { xs: "2.15rem", sm: "2.8rem", md: "3.7rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1.2px",
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

            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 1 }}>
              <Chip
                icon={<Heart size={14} color="#FFFFFF" />}
                label={w("hero.chipOne")}
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "rgba(255,255,255,0.12)",
                }}
              />
              <Chip
                icon={<PartyPopper size={14} color="#FFFFFF" />}
                label={w("hero.chipTwo")}
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "rgba(255,255,255,0.12)",
                }}
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
                variant="h2"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  lineHeight: 1.25,
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
          <Box textAlign="center" maxWidth={760} mx="auto" mb={5}>
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
              variant="h2"
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
                        transform: "translateY(-6px)",
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
                        sx={{
                          color: MUTED,
                          fontSize: "0.91rem",
                          lineHeight: 1.8,
                        }}
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

      {/* COMMUNITY CELEBRATIONS */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: CREAM }}>
        <Container maxWidth="lg">
          <Box textAlign="center" maxWidth={760} mx="auto" mb={5}>
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
              variant="h2"
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
                        sx={{
                          color: MUTED,
                          fontSize: "0.93rem",
                          lineHeight: 1.8,
                        }}
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
                variant="h2"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.35rem" },
                  lineHeight: 1.25,
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
                          sx={{
                            color: DARK_GREEN,
                            fontWeight: 800,
                            mb: 0.5,
                          }}
                        >
                          {w(`values.items.${key}.title`)}
                        </Typography>

                        <Typography
                          sx={{
                            color: MUTED,
                            fontSize: "0.92rem",
                            lineHeight: 1.8,
                          }}
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
          <Box textAlign="center">
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
              variant="h2"
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
                "&:hover": {
                  bgcolor: "#D96612",
                },
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
