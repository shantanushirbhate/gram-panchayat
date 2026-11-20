
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  Users,
  Sprout,
  Landmark,
  TrendingUp,
  ArrowUpRight,
  History,
  MapPin,
  Quote,
} from "lucide-react";

import AboutHero from "../components/AboutHero";
import AboutSectionHeading from "../components/AboutSectionHeading";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#E87519",
  cream: "#FFF8EF",
  lightGreen: "#EAF2EC",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E2EAE4",
  background: "#F7F9F7",
};

const pageContainerSx = {
  width: "100%",
  maxWidth: "none",
  px: {
    xs: 2,
    sm: 3,
    md: 5,
    lg: 8,
    xl: 12,
  },
  mx: "auto",
  boxSizing: "border-box",
};

const journeyItems = [
  {
    key: "community",
    icon: Users,
    color: "#26734D",
    background: "#EAF4ED",
  },
  {
    key: "agriculture",
    icon: Sprout,
    color: "#B66A16",
    background: "#FFF3E2",
  },
  {
    key: "administration",
    icon: Landmark,
    color: "#3869A0",
    background: "#EAF1FA",
  },
  {
    key: "development",
    icon: TrendingUp,
    color: "#7954A3",
    background: "#F2ECF8",
  },
];

const themeItems = [
  {
    key: "community",
    icon: Users,
  },
  {
    key: "agriculture",
    icon: Sprout,
  },
  {
    key: "administration",
    icon: Landmark,
  },
  {
    key: "development",
    icon: TrendingUp,
  },
];

function VillageHistoryPage() {
  const { t } = useTranslation("about/villageHistory");

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        bgcolor: COLORS.background,
        overflowX: "clip",
      }}
    >
      {/* HERO SECTION */}
      <AboutHero
        title={t("villageHistory.heroTitle")}
        subtitle={t("villageHistory.heroDescription")}
      />

      {/* INTRODUCTION SECTION */}
      <Box
        component="section"
        sx={{
          width: "100%",
          py: {
            xs: 5,
            sm: 6,
            md: 9,
          },
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <Grid
            container
            spacing={{
              xs: 4,
              md: 5,
              lg: 7,
            }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ width: "100%", minWidth: 0 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 0.9,
                    borderRadius: 20,
                    bgcolor: COLORS.lightGreen,
                    mb: 2.5,
                  }}
                >
                  <MapPin size={16} color={COLORS.green} />

                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: 1,
                    }}
                  >
                    {t("villageHistory.introEyebrow")}
                  </Typography>
                </Box>

                <Typography
                  component="h2"
                  sx={{
                    color: COLORS.green,
                    fontSize: {
                      xs: 27,
                      sm: 32,
                      md: 38,
                      lg: 42,
                    },
                    fontWeight: 800,
                    lineHeight: 1.25,
                    mb: {
                      xs: 2,
                      md: 2.5,
                    },
                    overflowWrap: "anywhere",
                  }}
                >
                  {t("villageHistory.introTitle")}
                </Typography>

                <Stack spacing={2}>
                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: {
                        xs: 14,
                        sm: 15,
                        md: 16,
                      },
                      lineHeight: {
                        xs: 1.85,
                        md: 1.95,
                      },
                      textAlign: "justify",
                      overflowWrap: "break-word",
                    }}
                  >
                    {t("villageHistory.introDescription")}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: {
                        xs: 14,
                        sm: 15,
                        md: 16,
                      },
                      lineHeight: {
                        xs: 1.85,
                        md: 1.95,
                      },
                      textAlign: "justify",
                      overflowWrap: "break-word",
                    }}
                  >
                    {t("villageHistory.introDescription2")}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  minHeight: {
                    xs: 230,
                    sm: 260,
                    md: 300,
                  },
                  boxSizing: "border-box",
                  p: {
                    xs: 3,
                    sm: 3.5,
                    md: 4,
                    lg: 4.5,
                  },
                  borderRadius: {
                    xs: 3,
                    md: 4,
                  },
                  color: COLORS.white,
                  background: `linear-gradient(145deg, ${COLORS.green}, ${COLORS.darkGreen})`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    width: 190,
                    height: 190,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.13)",
                    right: -65,
                    top: -65,
                    pointerEvents: "none",
                  }}
                />

                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.13)",
                    right: -30,
                    top: -30,
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative" }}>
                  <Landmark
                    size={42}
                    color="#FFB15C"
                  />

                  <Typography
                    component="h3"
                    sx={{
                      mt: 2.5,
                      fontSize: {
                        xs: 21,
                        sm: 23,
                        md: 25,
                      },
                      fontWeight: 800,
                      lineHeight: 1.4,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {t("villageHistory.panchayatName")}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      color: "rgba(255,255,255,0.8)",
                      fontSize: {
                        xs: 13,
                        sm: 14,
                      },
                      lineHeight: 1.8,
                    }}
                  >
                    {t("villageHistory.location")}
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                      width: 55,
                      height: 4,
                      borderRadius: 5,
                      bgcolor: COLORS.orange,
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* HISTORICAL BACKGROUND */}
      <Box
        component="section"
        sx={{
          bgcolor: COLORS.white,
          py: {
            xs: 5,
            sm: 6,
            md: 9,
          },
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.backgroundEyebrow")}
            title={t("villageHistory.backgroundTitle")}
            description={t("villageHistory.backgroundDescription")}
            align="center"
          />

          <Paper
            elevation={0}
            sx={{
              width: "100%",
              mt: {
                xs: 3,
                md: 5,
              },
              p: {
                xs: 2.5,
                sm: 3.5,
                md: 4.5,
                lg: 5,
              },
              borderRadius: {
                xs: 3,
                md: 4,
              },
              border: `1px solid ${COLORS.border}`,
              bgcolor: COLORS.cream,
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 5,
                height: "100%",
                bgcolor: COLORS.orange,
              }}
            />

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{
                xs: 2.5,
                sm: 3,
              }}
              alignItems={{
                xs: "flex-start",
                sm: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 56,
                    sm: 64,
                    md: 68,
                  },
                  height: {
                    xs: 56,
                    sm: 64,
                    md: 68,
                  },
                  flexShrink: 0,
                  borderRadius: 3,
                  bgcolor: COLORS.lightGreen,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <History
                  size={30}
                  color={COLORS.green}
                />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  component="h3"
                  sx={{
                    color: COLORS.green,
                    fontSize: {
                      xs: 20,
                      sm: 22,
                      md: 25,
                    },
                    fontWeight: 800,
                    lineHeight: 1.4,
                    mb: 1.5,
                    overflowWrap: "anywhere",
                  }}
                >
                  {t("villageHistory.backgroundCardTitle")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: {
                      xs: 14,
                      sm: 15,
                    },
                    lineHeight: 1.95,
                    textAlign: "justify",
                    overflowWrap: "break-word",
                  }}
                >
                  {t("villageHistory.backgroundCardDescription")}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* VILLAGE JOURNEY */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 5,
            sm: 6,
            md: 9,
          },
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.journeyEyebrow")}
            title={t("villageHistory.journeyTitle")}
            description={t("villageHistory.journeyDescription")}
            align="center"
          />

          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            sx={{
              mt: {
                xs: 2,
                md: 3,
              },
              alignItems: "stretch",
            }}
          >
            {journeyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                  key={item.key}
                  sx={{
                    display: "flex",
                    minWidth: 0,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      height: "100%",
                      minHeight: {
                        xs: 0,
                        sm: 300,
                        md: 330,
                      },
                      boxSizing: "border-box",
                      p: {
                        xs: 2.5,
                        sm: 3,
                        md: 3,
                      },
                      borderRadius: {
                        xs: 3,
                        md: 4,
                      },
                      bgcolor: COLORS.white,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      flexDirection: "column",
                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

                      "&:hover": {
                        transform: {
                          xs: "none",
                          md: "translateY(-5px)",
                        },
                        boxShadow:
                          "0 14px 35px rgba(23,59,42,0.09)",
                        borderColor: item.color,
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          flexShrink: 0,
                          borderRadius: 3,
                          bgcolor: item.background,
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Icon
                          size={27}
                          color={item.color}
                        />
                      </Box>

                      <Typography
                        sx={{
                          color: "#B7C4BA",
                          fontWeight: 800,
                          fontSize: 19,
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        mt: 2.5,
                        mb: 1,
                        color: item.color,
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1,
                        lineHeight: 1.5,
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.label`
                      )}
                    </Typography>

                    <Typography
                      component="h3"
                      sx={{
                        color: COLORS.green,
                        fontSize: {
                          xs: 17,
                          sm: 18,
                          md: 18,
                        },
                        fontWeight: 800,
                        lineHeight: 1.45,
                        mb: 1.5,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: {
                          xs: 13.5,
                          sm: 14,
                        },
                        lineHeight: 1.85,
                        flexGrow: 1,
                        textAlign: "left",
                        overflowWrap: "break-word",
                      }}
                    >
                      {t(
                        `villageHistory.journeyItems.${item.key}.description`
                      )}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* VILLAGE THEMES */}
      <Box
        component="section"
        sx={{
          bgcolor: COLORS.white,
          py: {
            xs: 5,
            sm: 6,
            md: 9,
          },
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <AboutSectionHeading
            eyebrow={t("villageHistory.themesEyebrow")}
            title={t("villageHistory.themesTitle")}
            description={t("villageHistory.themesDescription")}
            align="center"
          />

          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            sx={{
              mt: {
                xs: 2,
                md: 3,
              },
              alignItems: "stretch",
            }}
          >
            {themeItems.map((item) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                  key={item.key}
                  sx={{
                    display: "flex",
                    minWidth: 0,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      minHeight: {
                        xs: 0,
                        sm: 145,
                        md: 155,
                      },
                      height: "100%",
                      boxSizing: "border-box",
                      p: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5,
                      },
                      borderRadius: {
                        xs: 3,
                        md: 3.5,
                      },
                      border: `1px solid ${COLORS.border}`,
                      bgcolor: COLORS.white,
                      display: "flex",
                      gap: {
                        xs: 2,
                        sm: 2.5,
                      },
                      alignItems: "flex-start",
                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

                      "&:hover": {
                        transform: {
                          xs: "none",
                          md: "translateY(-4px)",
                        },
                        borderColor: COLORS.orange,
                        bgcolor: COLORS.cream,
                        boxShadow:
                          "0 10px 25px rgba(23,59,42,0.07)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: 46,
                          sm: 50,
                          md: 54,
                        },
                        height: {
                          xs: 46,
                          sm: 50,
                          md: 54,
                        },
                        flexShrink: 0,
                        borderRadius: 2.5,
                        bgcolor: COLORS.lightGreen,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon
                        size={24}
                        color={COLORS.green}
                      />
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        component="h3"
                        sx={{
                          color: COLORS.green,
                          fontSize: {
                            xs: 16,
                            sm: 17,
                            md: 18,
                          },
                          fontWeight: 800,
                          lineHeight: 1.45,
                          mb: 0.8,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {t(
                          `villageHistory.themes.${item.key}.title`
                        )}
                      </Typography>

                      <Typography
                        sx={{
                          color: COLORS.muted,
                          fontSize: {
                            xs: 13,
                            sm: 14,
                          },
                          lineHeight: 1.8,
                          overflowWrap: "break-word",
                        }}
                      >
                        {t(
                          `villageHistory.themes.${item.key}.description`
                        )}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        flexShrink: 0,
                        pt: 0.5,
                      }}
                    >
                      <ArrowUpRight
                        size={19}
                        color={COLORS.orange}
                      />
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CLOSING SECTION */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 5,
            sm: 6,
            md: 8,
          },
          bgcolor: COLORS.green,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth={false} sx={pageContainerSx}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Quote
              size={30}
              color="#FFB15C"
            />
          </Box>

          <Typography
            sx={{
              color: "#FFB15C",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            {t("villageHistory.panchayatName")}
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: COLORS.white,
              fontSize: {
                xs: 25,
                sm: 31,
                md: 39,
              },
              fontWeight: 800,
              lineHeight: 1.4,
              mb: 2,
              overflowWrap: "anywhere",
            }}
          >
            {t("villageHistory.closingTitle")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 760,
              mx: "auto",
              fontSize: {
                xs: 14,
                sm: 15,
                md: 16,
              },
              lineHeight: 1.9,
            }}
          >
            {t("villageHistory.closingDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              bgcolor: COLORS.orange,
              mx: "auto",
              mt: 3,
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default VillageHistoryPage;
