
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Divider,
} from "@mui/material";

import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitchr";

import indiaEmblem from "../assets/Emblem_of_India_(Government_Gazette).svg";
import maharashtraSeal from "../assets/Seal_of_Maharashtra.svg.webp";

const COLORS = {
  green: "#14532D",
  darkGreen: "#123D27",
  orange: "#E87519",
  cream: "#FFF8EF",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

const LOGO_URL = "https://www.pimpalkhutabk.in/icon/logo_gp.png";

const menuItems = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "services", path: "/services" },
  { label: "gallery", path: "/gallery" },
  { label: "contact", path: "/contact" },
];

function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      {/* BRAND HEADER */}
      <Box
        sx={{
          backgroundColor: COLORS.white,
          borderBottom: `1px solid ${COLORS.border}`,
          width: "100%",
          overflow: "visible",
          position: {
            xs: "sticky",
            md: "relative",
          },
          top: 0,
          zIndex: 1200,
          boxShadow: {
            xs: "0 3px 12px rgba(0,0,0,0.08)",
            md: "none",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 76,
                sm: 90,
                md: 108,
              },
              gap: {
                xs: 0.5,
                sm: 1.5,
                md: 2,
              },
              justifyContent: "space-between",
            }}
          >
            {/* BRANDING */}
            <Box
              component={NavLink}
              to="/"
              end
              onClick={closeDrawer}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: {
                  xs: 0.7,
                  sm: 1.5,
                  md: 2,
                },
                minWidth: 0,
                flex: 1,
                textDecoration: "none",
                overflow: "hidden",
              }}
            >
              {/* GOVERNMENT LOGOS */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={{
                  xs: 0.3,
                  sm: 0.8,
                  md: 1.3,
                }}
                sx={{
                  flexShrink: 0,
                }}
              >
                {/* PANCHAYAT LOGO */}
                <Box
                  component="img"
                  src={LOGO_URL}
                  alt="Gram Panchayat Logo"
                  sx={{
                    width: {
                      xs: 36,
                      sm: 53,
                      md: 70,
                    },
                    height: {
                      xs: 36,
                      sm: 53,
                      md: 70,
                    },
                    objectFit: "contain",
                  }}
                />

                {/* INDIA EMBLEM */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: {
                      xs: 24,
                      sm: 38,
                      md: 48,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={indiaEmblem}
                    alt="Government of India"
                    sx={{
                      width: {
                        xs: 22,
                        sm: 32,
                        md: 43,
                      },
                      height: {
                        xs: 30,
                        sm: 43,
                        md: 55,
                      },
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 5,
                        sm: 8,
                        md: 10,
                      },
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      color: COLORS.text,
                    }}
                  >
                    भारत सरकार
                  </Typography>
                </Box>

                {/* MAHARASHTRA SEAL */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: {
                      xs: 26,
                      sm: 40,
                      md: 50,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={maharashtraSeal}
                    alt="Maharashtra Government"
                    sx={{
                      width: {
                        xs: 24,
                        sm: 35,
                        md: 45,
                      },
                      height: {
                        xs: 30,
                        sm: 43,
                        md: 55,
                      },
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 5,
                        sm: 8,
                        md: 10,
                      },
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      color: COLORS.text,
                    }}
                  >
                    महाराष्ट्र शासन
                  </Typography>
                </Box>
              </Stack>

              {/* PANCHAYAT NAME */}
              <Box
                sx={{
                  minWidth: 0,
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.green,
                    fontWeight: 900,
                    fontSize: {
                      xs: 11,
                      sm: 17,
                      md: 23,
                      lg: 25,
                    },
                    lineHeight: 1.5,
                    whiteSpace: {
                      xs: "normal",
                      sm: "nowrap",
                    },
                    overflowWrap: "anywhere",
                  }}
                >
                  पिंपळखुटा बु. ग्रामपंचायत
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.text,
                    fontWeight: 700,
                    fontSize: {
                      xs: 7,
                      sm: 10,
                      md: 13,
                    },
                    lineHeight: 1.5,
                  }}
                >
                  Gram Panchayat Pimpalkhuta Budruk
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: {
                      xs: 6,
                      sm: 8,
                      md: 10,
                    },
                    mt: 0.3,
                  }}
                >
                  ता. वरुड, जिल्हा अमरावती, महाराष्ट्र
                </Typography>
              </Box>
            </Box>

            {/* DESKTOP CONTACT DETAILS */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                flexShrink: 0,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone size={17} color={COLORS.orange} />

                <Box>
                  <Typography fontSize={10} color={COLORS.muted}>
                    संपर्क क्रमांक
                  </Typography>

                  <Typography
                    component="a"
                    href="tel:9920942994"
                    sx={{
                      fontWeight: 800,
                      fontSize: 12,
                      color: COLORS.green,
                      textDecoration: "none",
                    }}
                  >
                    9920942994
                  </Typography>
                </Box>
              </Stack>

              <Divider orientation="vertical" flexItem />

              <Stack direction="row" alignItems="center" spacing={1}>
                <Mail size={17} color={COLORS.orange} />

                <Box>
                  <Typography fontSize={10} color={COLORS.muted}>
                    ई-मेल
                  </Typography>

                  <Typography
                    component="a"
                    href="mailto:gppimpalkhuta30@gmail.com"
                    sx={{
                      fontWeight: 700,
                      fontSize: 11,
                      color: COLORS.green,
                      textDecoration: "none",
                    }}
                  >
                    gppimpalkhuta30@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            {/* MOBILE LANGUAGE AND MENU */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={{
                xs: 0.3,
                sm: 1,
              }}
              sx={{
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <LanguageSwitcher />
              </Box>

              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  color: COLORS.green,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 2,
                  p: {
                    xs: 0.7,
                    sm: 1,
                  },
                }}
              >
                <Menu size={22} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </Box>

      {/* DESKTOP STICKY NAVIGATION */}
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: COLORS.green,
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: "55px !important",
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "space-between",
            }}
          >
            {/* ORIGINAL NAVIGATION LINKS - UNCHANGED */}
            <Stack direction="row" alignItems="center">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  end={item.path === "/"}
                  sx={{
                    height: 55,
                    px: {
                      md: 1.5,
                      lg: 2.2,
                    },
                    borderRadius: 0,
                    color: COLORS.white,
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: "none",

                    "&.active": {
                      backgroundColor: COLORS.white,
                      color: COLORS.green,
                    },

                    "&:hover": {
                      backgroundColor: "#F1F5F0",
                      color: COLORS.green,
                    },

                    "&.active::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: COLORS.orange,
                    },
                  }}
                >
                  {t(`navbar.${item.label}`)}
                </Button>
              ))}
            </Stack>

            {/* RIGHT SIDE: ORANGE LANGUAGE SWITCHER + MAHARASHTRA SEAL */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                flexShrink: 0,
              }}
            >
              {/* ORANGE LANGUAGE SWITCHER */}
              <Box
                sx={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.35)",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",

                  "& button": {
                    color: `${COLORS.white} !important`,
                    backgroundColor: "transparent",
                  },

                  "& button:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },

                  "& .MuiTypography-root": {
                    color: `${COLORS.white} !important`,
                  },

                  "& svg": {
                    color: `${COLORS.white} !important`,
                  },
                }}
              >
                <LanguageSwitcher />
              </Box>

              {/* MAHARASHTRA GOVERNMENT SEAL */}
              <Box
                component="img"
                src={maharashtraSeal}
                alt="Maharashtra Government Seal"
                sx={{
                  width: 38,
                  height: 42,
                  objectFit: "contain",
                }}
              />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: {
              xs: "85%",
              sm: 340,
            },
            maxWidth: 340,
            backgroundColor: COLORS.white,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* DRAWER HEADER */}
        <Box
          sx={{
            backgroundColor: COLORS.green,
            color: COLORS.white,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                component="img"
                src={LOGO_URL}
                alt="Gram Panchayat Logo"
                sx={{
                  width: 48,
                  height: 48,
                  objectFit: "contain",
                  backgroundColor: COLORS.white,
                  borderRadius: 1,
                }}
              />

              <Box>
                <Typography fontWeight={800} fontSize={14}>
                  पिंपळखुटा बु.
                </Typography>

                <Typography fontSize={11}>
                  ग्रामपंचायत
                </Typography>
              </Box>
            </Stack>

            <IconButton
              onClick={closeDrawer}
              aria-label="Close navigation menu"
              sx={{ color: COLORS.white }}
            >
              <X size={23} />
            </IconButton>
          </Stack>
        </Box>

        {/* DRAWER CONTENT */}
        <Box
          sx={{
            p: 2,
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Typography
            sx={{
              color: COLORS.muted,
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: 1,
              mb: 1.5,
            }}
          >
            मुख्य मेनू
          </Typography>

          <List disablePadding>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                onClick={closeDrawer}
                sx={{
                  borderRadius: 2,
                  mb: 0.7,
                  py: 1.4,
                  color: COLORS.text,

                  "&.active": {
                    backgroundColor: "#EAF3EC",
                    color: COLORS.green,
                    fontWeight: 800,
                    borderLeft: `4px solid ${COLORS.orange}`,
                  },

                  "&:hover": {
                    backgroundColor: "#F0F5F1",
                  },
                }}
              >
                <ListItemText
                  primary={t(`navbar.${item.label}`)}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                />

                <ChevronRight size={17} />
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* CONTACT INFORMATION */}
          <Typography
            sx={{
              color: COLORS.muted,
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: 1,
              mb: 2,
            }}
          >
            संपर्क माहिती
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Phone size={18} color={COLORS.orange} />

              <Box>
                <Typography fontSize={11} color={COLORS.muted}>
                  संपर्क क्रमांक
                </Typography>

                <Typography
                  component="a"
                  href="tel:9920942994"
                  fontWeight={700}
                  fontSize={13}
                  color={COLORS.green}
                  sx={{ textDecoration: "none" }}
                >
                  9920942994
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Mail size={18} color={COLORS.orange} />

              <Box sx={{ minWidth: 0 }}>
                <Typography fontSize={11} color={COLORS.muted}>
                  ई-मेल
                </Typography>

                <Typography
                  component="a"
                  href="mailto:gppimpalkhuta30@gmail.com"
                  fontWeight={700}
                  fontSize={12}
                  color={COLORS.green}
                  sx={{
                    textDecoration: "none",
                    overflowWrap: "anywhere",
                  }}
                >
                  gppimpalkhuta30@gmail.com
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <MapPin size={18} color={COLORS.orange} />

              <Typography
                fontSize={12}
                color={COLORS.text}
                fontWeight={600}
              >
                ता. वरुड, जि. अमरावती, महाराष्ट्र
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* DRAWER FOOTER */}
        <Box
          sx={{
            backgroundColor: COLORS.cream,
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography
            color={COLORS.green}
            fontSize={12}
            fontWeight={800}
          >
            सेवा • समर्पण • पारदर्शकता
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
