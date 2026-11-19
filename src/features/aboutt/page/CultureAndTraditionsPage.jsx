
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

import {
  Sparkles,
  UsersRound,
  CalendarDays,
  Utensils,
  Palette,
  Music2,
  HeartHandshake,
  Leaf,
  Landmark,
  ArrowRight,
  Flower2,
  HandHeart,
  Sun,
} from "lucide-react";

const COLORS = {
  green: "#14532D",
  darkGreen: "#0B2E1A",
  orange: "#E87519",
  cream: "#FFF8EF",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  lightGreen: "#EFF6F0",
  border: "#E5EBE5",
};

const traditions = [
  {
    icon: UsersRound,
    title: "traditions.community.title",
    description: "traditions.community.description",
    number: "01",
  },
  {
    icon: CalendarDays,
    title: "traditions.festivals.title",
    description: "traditions.festivals.description",
    number: "02",
  },
  {
    icon: Utensils,
    title: "traditions.food.title",
    description: "traditions.food.description",
    number: "03",
  },
  {
    icon: Palette,
    title: "traditions.art.title",
    description: "traditions.art.description",
    number: "04",
  },
];

const festivals = [
  {
    icon: Flower2,
    title: "festivals.diwali.title",
    description: "festivals.diwali.description",
  },
  {
    icon: Sparkles,
    title: "festivals.holi.title",
    description: "festivals.holi.description",
  },
  {
    icon: Music2,
    title: "festivals.ganesh.title",
    description: "festivals.ganesh.description",
  },
  {
    icon: Leaf,
    title: "festivals.harvest.title",
    description: "festivals.harvest.description",
  },
];

const values = [
  { key: "values.cooperation", icon: HeartHandshake },
  { key: "values.respect", icon: HandHeart },
  { key: "values.hospitality", icon: UsersRound },
  { key: "values.heritage", icon: Landmark },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        maxWidth: centered ? 780 : 720,
        mx: centered ? "auto" : 0,
        textAlign: centered ? "center" : "left",
        mb: { xs: 3.5, md: 5 },
      }}
    >
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 900,
          fontSize: 11,
          letterSpacing: 2,
          mb: 1.2,
          textTransform: "uppercase",
          overflowWrap: "anywhere",
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: {
            xs: 26,
            sm: 33,
            md: 39,
          },
          lineHeight: 1.25,
          mb: 1.5,
          overflowWrap: "break-word",
          wordBreak: "normal",
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: { xs: 14, md: 15.5 },
            lineHeight: 1.9,
            overflowWrap: "break-word",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

function IconBox({ icon: Icon, color = "green", size = 25 }) {
  const isOrange = color === "orange";

  return (
    <Box
      sx={{
        width: 58,
        height: 58,
        minWidth: 58,
        borderRadius: "17px",
        bgcolor: isOrange ? "#FFF0E3" : "#EAF3EC",
        color: isOrange ? COLORS.orange : COLORS.green,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
      }}
    >
      <Icon size={size} strokeWidth={1.9} />
    </Box>
  );
}

function CultureAndTraditionsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const tr = (key) => t(`cultureAndTraditions.${key}`);

  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        width: "100%",
        minWidth: 0,
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 62%, #287044 100%)`,
          color: COLORS.white,
          py: { xs: 8, sm: 10, md: 12 },

          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 230, md: 460 },
            height: { xs: 230, md: 460 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -120, md: -80 },
            top: { xs: -100, md: -180 },
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: 170, md: 300 },
            height: { xs: 170, md: 300 },
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.035)",
            right: { xs: 20, md: 180 },
            bottom: -180,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 850, width: "100%" }}>
            <Chip
              icon={<Flower2 size={16} />}
              label={tr("hero.eyebrow")}
              sx={{
                mb: 3,
                height: 36,
                maxWidth: "100%",
                color: "#FED7AA",
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.17)",
                fontWeight: 800,
                letterSpacing: 0.8,
                "& .MuiChip-icon": {
                  color: "#FDBA74",
                  flexShrink: 0,
                },
                "& .MuiChip-label": {
                  px: 1.5,
                  whiteSpace: "normal",
                },
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 32,
                  sm: 46,
                  md: 60,
                },
                fontWeight: 900,
                lineHeight: 1.16,
                letterSpacing: "-0.8px",
                mb: 2.5,
                maxWidth: 780,
                overflowWrap: "break-word",
              }}
            >
              {tr("hero.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: 14.5, sm: 16, md: 18 },
                lineHeight: 1.95,
                maxWidth: 720,
                overflowWrap: "break-word",
              }}
            >
              {tr("hero.description")}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              sx={{
                mt: 3.5,
                color: "#FED7AA",
                flexWrap: "wrap",
                rowGap: 1,
              }}
            >
              <Landmark size={19} />
              <Typography
                sx={{
                  fontSize: 13.5,
                  fontWeight: 800,
                  overflowWrap: "break-word",
                }}
              >
                {tr("hero.location")}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* INTRODUCTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 0.88fr) minmax(0, 1.12fr)",
            },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
            width: "100%",
            minWidth: 0,
          }}
        >
          {/* Highlight Card */}
          <Paper
            elevation={0}
            sx={{
              minWidth: 0,
              minHeight: { xs: 270, sm: 300, md: 390 },
              borderRadius: { xs: 4, md: 5 },
              p: { xs: 3, sm: 4, md: 5 },
              background: "linear-gradient(145deg, #FFF8EF 0%, #FDE8D3 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #F5E6D6",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "28px solid rgba(20,83,45,0.055)",
                right: -80,
                top: -80,
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  width: 62,
                  height: 62,
                  borderRadius: "18px",
                  bgcolor: COLORS.green,
                  color: COLORS.white,
                  display: "grid",
                  placeItems: "center",
                  mb: 3,
                  boxShadow: "0 8px 20px rgba(20,83,45,0.16)",
                }}
              >
                <Flower2 size={30} />
              </Box>

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: { xs: 25, sm: 29, md: 34 },
                  fontWeight: 900,
                  lineHeight: 1.35,
                  maxWidth: 370,
                  overflowWrap: "break-word",
                }}
              >
                {tr("intro.highlight")}
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                mt: 4,
                position: "relative",
                zIndex: 1,
                color: COLORS.green,
                flexWrap: "wrap",
              }}
            >
              <Sun size={19} color={COLORS.orange} />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 13.5,
                  overflowWrap: "break-word",
                }}
              >
                {tr("intro.caption")}
              </Typography>
            </Stack>
          </Paper>

          {/* Introduction Text */}
          <Box sx={{ minWidth: 0, width: "100%" }}>
            <SectionHeading
              eyebrow={tr("intro.eyebrow")}
              title={tr("intro.title")}
              description={tr("intro.description")}
            />

            <Typography
              sx={{
                color: COLORS.muted,
                fontSize: { xs: 14, md: 15 },
                lineHeight: 2,
                mt: -2,
                overflowWrap: "break-word",
              }}
            >
              {tr("intro.description2")}
            </Typography>

            <Paper
              elevation={0}
              sx={{
                mt: 3,
                p: { xs: 2, md: 2.5 },
                borderRadius: 3,
                bgcolor: "#F2F7F2",
                borderLeft: `4px solid ${COLORS.orange}`,
                minWidth: 0,
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <HeartHandshake
                  size={25}
                  color={COLORS.green}
                  style={{ flexShrink: 0 }}
                />

                <Typography
                  sx={{
                    color: COLORS.green,
                    fontWeight: 800,
                    fontSize: { xs: 13, md: 14 },
                    lineHeight: 1.7,
                    minWidth: 0,
                    overflowWrap: "break-word",
                  }}
                >
                  {tr("intro.message")}
                </Typography>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* CULTURAL TRADITIONS */}
      <Box
        sx={{
          bgcolor: COLORS.cream,
          py: { xs: 7, md: 10 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            centered
            eyebrow={tr("traditions.eyebrow")}
            title={tr("traditions.title")}
            description={tr("traditions.description")}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 2.5 },
              width: "100%",
            }}
          >
            {traditions.map((item) => {
              const Icon = item.icon;

              return (
                <Paper
                  key={item.number}
                  elevation={0}
                  sx={{
                    p: { xs: 2.8, md: 3 },
                    borderRadius: 4,
                    border: `1px solid ${COLORS.border}`,
                    height: "100%",
                    minWidth: 0,
                    bgcolor: COLORS.white,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "translateY(-7px)",
                      },
                      boxShadow: "0 16px 35px rgba(20,83,45,0.09)",
                      borderColor: "#B8D2BE",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 3 }}
                  >
                    <IconBox icon={Icon} />

                    <Typography
                      sx={{
                        color: "#D7E0D8",
                        fontSize: 27,
                        fontWeight: 900,
                      }}
                    >
                      {item.number}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: 18,
                      mb: 1.3,
                      overflowWrap: "break-word",
                    }}
                  >
                    {tr(item.title)}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: 13.5,
                      lineHeight: 1.9,
                      overflowWrap: "break-word",
                    }}
                  >
                    {tr(item.description)}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* FESTIVALS */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionHeading
          eyebrow={tr("festivals.eyebrow")}
          title={tr("festivals.title")}
          description={tr("festivals.description")}
          centered
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
            width: "100%",
          }}
        >
          {festivals.map((item, index) => {
            const Icon = item.icon;

            return (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: 2, md: 2.5 },
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  borderRadius: 4,
                  border: `1px solid ${COLORS.border}`,
                  bgcolor: COLORS.white,
                  minWidth: 0,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#C5D8C8",
                    boxShadow: "0 12px 28px rgba(20,83,45,0.07)",
                  },
                }}
              >
                <IconBox
                  icon={Icon}
                  color={index % 2 === 0 ? "orange" : "green"}
                  size={24}
                />

                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 900,
                      mb: 1,
                      overflowWrap: "break-word",
                    }}
                  >
                    {tr(item.title)}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: 13.5,
                      lineHeight: 1.9,
                      overflowWrap: "break-word",
                    }}
                  >
                    {tr(item.description)}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>

      {/* FOOD AND FOLK ART */}
      <Box
        sx={{
          bgcolor: "#F3F7F2",
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            centered
            eyebrow={tr("heritage.eyebrow")}
            title={tr("heritage.title")}
            description={tr("heritage.description")}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: { xs: 2.5, md: 3 },
              width: "100%",
            }}
          >
            {/* Food */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 3.5, md: 4 },
                borderRadius: 4,
                bgcolor: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                borderTop: `4px solid ${COLORS.orange}`,
                minWidth: 0,
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: {
                    xs: "none",
                    md: "translateY(-5px)",
                  },
                  boxShadow: "0 15px 30px rgba(20,83,45,0.07)",
                },
              }}
            >
              <IconBox icon={Utensils} color="orange" size={27} />

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: { xs: 20, md: 23 },
                  fontWeight: 900,
                  mt: 2.5,
                  mb: 1.5,
                  overflowWrap: "break-word",
                }}
              >
                {tr("heritage.foodTitle")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: 14,
                  lineHeight: 2,
                  overflowWrap: "break-word",
                }}
              >
                {tr("heritage.foodDescription")}
              </Typography>
            </Paper>

            {/* Art */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 3.5, md: 4 },
                borderRadius: 4,
                bgcolor: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                borderTop: `4px solid ${COLORS.green}`,
                minWidth: 0,
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: {
                    xs: "none",
                    md: "translateY(-5px)",
                  },
                  boxShadow: "0 15px 30px rgba(20,83,45,0.07)",
                },
              }}
            >
              <IconBox icon={Music2} size={27} />

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: { xs: 20, md: 23 },
                  fontWeight: 900,
                  mt: 2.5,
                  mb: 1.5,
                  overflowWrap: "break-word",
                }}
              >
                {tr("heritage.artTitle")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: 14,
                  lineHeight: 2,
                  overflowWrap: "break-word",
                }}
              >
                {tr("heritage.artDescription")}
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* COMMUNITY VALUES */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            },
            gap: { xs: 3.5, md: 7 },
            alignItems: "center",
            width: "100%",
            minWidth: 0,
          }}
        >
          <Box sx={{ minWidth: 0, width: "100%" }}>
            <SectionHeading
              eyebrow={tr("valuesEyebrow")}
              title={tr("valuesTitle")}
              description={tr("valuesDescription")}
            />

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                color: COLORS.orange,
                mt: -2,
                flexWrap: "wrap",
              }}
            >
              <Flower2 size={20} />

              <Typography
                sx={{
                  fontSize: 13,
                  color: COLORS.green,
                  fontWeight: 800,
                  overflowWrap: "break-word",
                }}
              >
                {tr("hero.location")}
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
              width: "100%",
              minWidth: 0,
            }}
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Paper
                  key={item.key}
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3.5,
                    bgcolor:
                      index % 2 === 0 ? COLORS.cream : "#EFF6F0",
                    border: "1px solid rgba(20,83,45,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.8,
                    minHeight: 100,
                    minWidth: 0,
                    width: "100%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#B8D2BE",
                      transform: {
                        xs: "none",
                        md: "translateY(-3px)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      minWidth: 42,
                      borderRadius: "13px",
                      bgcolor: COLORS.white,
                      color: COLORS.green,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={21} />
                  </Box>

                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontWeight: 800,
                      fontSize: 14,
                      lineHeight: 1.6,
                      minWidth: 0,
                      overflowWrap: "break-word",
                    }}
                  >
                    {tr(item.key)}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Container>

      {/* CLOSING CTA */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: COLORS.darkGreen,
          py: { xs: 6, md: 8 },
          color: COLORS.white,

          "&::before": {
            content: '""',
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.035)",
            left: -100,
            top: -120,
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: 230,
            height: 230,
            borderRadius: "50%",
            border: "30px solid rgba(255,255,255,0.035)",
            right: -80,
            bottom: -130,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 65,
                height: 65,
                borderRadius: "20px",
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#FDBA74",
                display: "grid",
                placeItems: "center",
                mx: "auto",
              }}
            >
              <Flower2 size={32} />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 25, sm: 30, md: 37 },
                fontWeight: 900,
                lineHeight: 1.3,
                mt: 2.5,
                mb: 2,
                overflowWrap: "break-word",
              }}
            >
              {tr("closing.title")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 13.5, md: 15 },
                lineHeight: 2,
                maxWidth: 700,
                mx: "auto",
                mb: 3.5,
                overflowWrap: "break-word",
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
                borderRadius: 50,
                px: { xs: 3, md: 4 },
                py: 1.4,
                fontWeight: 800,
                fontSize: 14,
                textTransform: "none",
                boxShadow: "0 8px 22px rgba(232,117,25,0.22)",
                "&:hover": {
                  bgcolor: "#C85D10",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 25px rgba(232,117,25,0.3)",
                },
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

export default CultureAndTraditionsPage;
