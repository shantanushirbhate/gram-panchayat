
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Leaf,
  TreePine,
  Recycle,
  Droplets,
  Sun,
  Sprout,
  ShieldCheck,
  Earth,
  Flower2,
} from "lucide-react";

import EducationParyavaranHero from "../components/EducationParyavaranHero";
import EducationSectionHeading from "../components/EducationSectionHeading";

const activities = [
  { id: "01", key: "treePlantation", icon: TreePine },
  { id: "02", key: "cleanliness", icon: Recycle },
  { id: "03", key: "waterConservation", icon: Droplets },
  { id: "04", key: "renewableEnergy", icon: Sun },
  { id: "05", key: "greenery", icon: Sprout },
  { id: "06", key: "awareness", icon: ShieldCheck },
];

const ParyavaranVShasvatVikasPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <EducationParyavaranHero
        title={t("environment.hero.title")}
        subtitle={t("environment.hero.description")}
        breadcrumb={t("environment.hero.breadcrumb")}
      />

      {/* Introduction */}
      <Box sx={{ py: { xs: 5, md: 9 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            sx={{ alignItems: "stretch" }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#E87519",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  {t("environment.intro.eyebrow")}
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    color: "#173B2A",
                    fontWeight: 850,
                    fontSize: { xs: 27, sm: 34, md: 40 },
                    lineHeight: 1.25,
                    mb: 2,
                  }}
                >
                  {t("environment.intro.title")}
                </Typography>

                <Box
                  sx={{
                    width: 65,
                    height: 4,
                    borderRadius: 5,
                    backgroundColor: "#E87519",
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: 14, sm: 15 },
                    lineHeight: 2,
                  }}
                >
                  {t("environment.intro.description")}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 270,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  background: "linear-gradient(145deg, #E9F3E9, #F5F8EF)",
                  border: "1px solid #DCE9DC",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: 190,
                    height: 190,
                    borderRadius: "50%",
                    backgroundColor: "rgba(20,83,45,0.05)",
                    right: -65,
                    top: -65,
                  }}
                />

                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 3,
                      backgroundColor: "#14532D",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Leaf size={34} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 800,
                        fontSize: { xs: 19, sm: 22 },
                        mb: 1.5,
                      }}
                    >
                      {t("environment.message.title")}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#52695A",
                        fontSize: 14,
                        lineHeight: 1.9,
                      }}
                    >
                      {t("environment.message.description")}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Earth size={43} color="#14532D" strokeWidth={1.3} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Environmental Activities */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <EducationSectionHeading
            eyebrow={t("environment.activities.eyebrow")}
            title={t("environment.activities.title")}
            description={t("environment.activities.description")}
          />

          <Grid container spacing={2.5}>
            {activities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      minHeight: 225,
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: 3,
                      border: "1px solid #E7EDE7",
                      backgroundColor:
                        index % 2 === 0 ? "#FFFFFF" : "#FAFCF9",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "#E87519",
                        boxShadow: "0 14px 30px rgba(18,61,39,0.09)",
                      },
                      "&:hover .activity-icon": {
                        backgroundColor: "#14532D",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Box
                        className="activity-icon"
                        sx={{
                          width: 55,
                          height: 55,
                          borderRadius: 2.5,
                          backgroundColor: "#EDF5EE",
                          color: "#14532D",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Icon size={27} strokeWidth={1.8} />
                      </Box>

                      <Typography
                        sx={{
                          color: "#DCE7DD",
                          fontWeight: 800,
                          fontSize: 30,
                          lineHeight: 1,
                        }}
                      >
                        {item.id}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 800,
                        fontSize: { xs: 17, sm: 18 },
                        mb: 1,
                      }}
                    >
                      {t(
                        `environment.activities.items.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                        lineHeight: 1.85,
                      }}
                    >
                      {t(
                        `environment.activities.items.${item.key}.description`
                      )}
                    </Typography>

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 3,
                        backgroundColor: "#E87519",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                        ".MuiPaper-root:hover &": {
                          transform: "scaleX(1)",
                        },
                      }}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Sustainable Development */}
      <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#FFF8EF" }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
              color: "#FFFFFF",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 2.5,
                      backgroundColor: "rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Sprout size={30} color="#F5B66A" />
                  </Box>

                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: 22, sm: 27, md: 31 },
                      fontWeight: 800,
                      lineHeight: 1.3,
                      mb: 2,
                    }}
                  >
                    {t("environment.commitment.title")}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      fontSize: { xs: 14, sm: 15 },
                      lineHeight: 1.95,
                    }}
                  >
                    {t("environment.commitment.description")}
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: "100%",
                    minHeight: { xs: 170, md: "100%" },
                    backgroundColor: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: 220,
                      height: 220,
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      width: 165,
                      height: 165,
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                    }}
                  />

                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Flower2
                      size={85}
                      color="#F5B66A"
                      strokeWidth={1.1}
                    />

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 2,
                        mt: 1,
                      }}
                    >
                      {t("environment.greenFuture")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Closing Section */}
      <Box sx={{ pb: { xs: 5, md: 7 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", px: { xs: 1, sm: 3 } }}>
            <Leaf size={30} color="#E87519" />

            <Typography
              sx={{
                color: "#173B2A",
                fontWeight: 800,
                fontSize: { xs: 18, sm: 21 },
                mt: 1.5,
              }}
            >
              {t("environment.hero.title")}
            </Typography>

            <Divider
              sx={{
                width: 55,
                mx: "auto",
                my: 2,
                borderColor: "#E87519",
                borderBottomWidth: 3,
              }}
            />

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              {t("environment.hero.description")}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ParyavaranVShasvatVikasPage;
