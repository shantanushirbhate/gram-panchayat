
import { useEffect, useState } from "react";

import {
  AppBar,
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
  Menu as MuiMenu,
  MenuItem,
  Collapse,
  useMediaQuery,
} from "@mui/material";

import {
  Menu,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitchr";
import navigationMenu from "../config/navigationMenu.js";

import indiaEmblem from "../assets/Emblem_of_India_(Government_Gazette).svg";
import maharashtraSeal from "../assets/Seal_of_Maharashtra.svg.webp";

const COLORS = {
  green: "#14532D",
  darkGreen: "#123D27",
  deepGreen: "#0B2E1A",
  orange: "#E87519",
  cream: "#FFF8EF",
  lightGreen: "#EAF3EC",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

const LOGO_URL = "https://www.pimpalkhutabk.in/icon/logo_gp.png";

const containerSpacing = {
  px: {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 7,
  },
};

// ================= SHORT NAVIGATION LABELS =================
//in transparancy add this three dropdown
//1.arthik mahiti
//2.kamachi mahiti
//3.gram sabha corner

//in education and environment add this add this drop down
//1.paryavaran v shasvat vikas
//2.shikshan ani yuvak kopra
//3.shikshan v payavaran

//in seva add this drop down
//1.suchana v jahirati
//2.online kar bharna
//3.nagrik seva
//4.shaskiya yojna
//5.mahiticha adhikar


//in adhik add this dropdown
//1.rojgar v kaushalya
//2.udyog v upkram
//3.swyam sahayata gut
//4.mahatvache duve
//5.takrar,suchana,salla,abhipray
//6.sitemap

const shortLabels = {
  en: {
    home: "Home",
    about: "About",
    transparency: "Transparency",
    educationParyavaran: "Education & Paryavaran",
    samitiya: "Samitiya",
    seva: "Seva",
    adhik: "Adhik",
    dashboard: "Dashboard",
  },

  mr: {
    home: "मुख्यपृष्ठ",
    about: "परिचय",
    transparency: "पारदर्शकता",
    educationParyavaran: "शिक्षण व पर्यावरण",
    samitiya: "समित्या",
    seva: "सेवा",
    adhik: "अधिक",
    dashboard: "डॅशबोर्ड",
  },
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isDesktop = useMediaQuery("(min-width: 900px)");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopAnchor, setDesktopAnchor] = useState(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  // ================= LANGUAGE =================

  const currentLanguage = i18n.resolvedLanguage?.startsWith("mr")
    ? "mr"
    : "en";

  // ================= TRANSLATION HELPERS =================

  const getLabel = (label) => t(`navbar.${label}`);

  const getShortLabel = (label) => {
    return shortLabels[currentLanguage]?.[label] || getLabel(label);
  };

  // ================= ROUTE CHANGE =================

  useEffect(() => {
    const activeItem = navigationMenu.find((item) =>
      item.children?.some(
        (child) =>
          location.pathname === child.path ||
          location.pathname.startsWith(`${child.path}/`)
      )
    );

    setExpandedMobileMenu(activeItem?.label ?? null);
    setMobileOpen(false);
    setDesktopAnchor(null);
    setActiveDesktopMenu(null);
  }, [location.pathname]);

  // ================= RESPONSIVE DRAWER =================

  useEffect(() => {
    if (isDesktop) {
      setMobileOpen(false);
    }
  }, [isDesktop]);

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const closeDesktopMenu = () => {
    setDesktopAnchor(null);
    setActiveDesktopMenu(null);
  };

  // ================= DESKTOP DROPDOWN =================

  const handleDesktopMenu = (event, label) => {
    if (activeDesktopMenu === label && desktopAnchor) {
      closeDesktopMenu();
      return;
    }

    setDesktopAnchor(event.currentTarget);
    setActiveDesktopMenu(label);
  };

  // ================= MOBILE SUBMENU =================

  const toggleMobileMenu = (label) => {
    setExpandedMobileMenu((previous) =>
      previous === label ? null : label
    );
  };

  // ================= ACTIVE ROUTE =================

  const isParentActive = (item) => {
    if (item.path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === item.path ||
      location.pathname.startsWith(`${item.path}/`) ||
      item.children?.some(
        (child) =>
          location.pathname === child.path ||
          location.pathname.startsWith(`${child.path}/`)
      )
    );
  };

  const activeDesktopItem = navigationMenu.find(
    (item) => item.label === activeDesktopMenu
  );

  // ================= DESKTOP NAVIGATION ITEM =================

  const renderDesktopItem = (item) => {
    const active = isParentActive(item);

    const buttonStyles = {
      width: "auto",
      minWidth: 0,
      minHeight: {
        md: 42,
        lg: 44,
      },
      height: "100%",
      px: {
        md: 0.8,
        lg: 1.2,
        xl: 1.5,
      },
      py: 0.2,
      borderRadius: 1,
      color: COLORS.white,
      fontWeight: 700,
      fontSize: {
        md: 11,
        lg: 12,
        xl: 13,
      },
      lineHeight: 1.3,
      textTransform: "none",
      whiteSpace: "nowrap",
      textAlign: "center",
      justifyContent: "center",
      overflow: "visible",
      transition: "color 0.2s ease",
      flexShrink: 0,

      "&:hover": {
        backgroundColor: "transparent",
        color: COLORS.orange,
      },
    };

    return (
      <Box
        key={item.path}
        sx={{
          flex: "0 0 auto",
          width: "auto",
          minWidth: 0,
          display: "flex",
        }}
      >
        {item.children?.length > 0 ? (
          <Button
            fullWidth
            title={getLabel(item.label)}
            onClick={(event) =>
              handleDesktopMenu(event, item.label)
            }
            endIcon={<ChevronDown size={12} />}
            sx={{
              ...buttonStyles,
              backgroundColor:
                activeDesktopMenu === item.label || active
                  ? "rgba(255,255,255,0.10)"
                  : "transparent",

              "& .MuiButton-endIcon": {
                ml: 0.2,
                mr: 0,
                flexShrink: 0,
              },
            }}
          >
            {getShortLabel(item.label)}
          </Button>
        ) : (
          <Button
            component={NavLink}
            to={item.path}
            end={item.path === "/"}
            fullWidth
            title={getLabel(item.label)}
            sx={{
              ...buttonStyles,
              position: "relative",

              "&.active": {
                backgroundColor: "rgba(255,255,255,0.10)",
                color: COLORS.white,
                boxShadow: "none",
              },

              "&.active::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "25%",
                right: "25%",
                height: 3,
                borderRadius: "4px 4px 0 0",
                backgroundColor: COLORS.orange,
              },
            }}
          >
            {getShortLabel(item.label)}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <>
      {/* ================= BRAND HEADER ================= */}

      <Box
        sx={{
          backgroundColor: COLORS.white,
          borderBottom: `1px solid ${COLORS.border}`,
          width: "100%",
          position: {
            xs: "sticky",
            md: "relative",
          },
          top: 0,
          zIndex: 1200,
          boxShadow: {
            xs: "0 3px 15px rgba(0,0,0,0.07)",
            md: "none",
          },
        }}
      >
        <Container maxWidth="xl" sx={containerSpacing}>
          <Box
            sx={{
              minHeight: {
                xs: 76,
                sm: 90,
                md: 112,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: {
                xs: 0.5,
                sm: 1.5,
                md: 2,
              },
              width: "100%",
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
                sx={{ flexShrink: 0 }}
              >
                <Box
                  component="img"
                  src={LOGO_URL}
                  alt="Gram Panchayat Logo"
                  sx={{
                    width: { xs: 37, sm: 54, md: 72 },
                    height: { xs: 37, sm: 54, md: 72 },
                    objectFit: "contain",
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: { xs: 24, sm: 38, md: 48 },
                  }}
                >
                  <Box
                    component="img"
                    src={indiaEmblem}
                    alt="Government of India"
                    sx={{
                      width: { xs: 22, sm: 33, md: 43 },
                      height: { xs: 30, sm: 44, md: 56 },
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: 5, sm: 8, md: 10 },
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      color: COLORS.text,
                    }}
                  >
                    भारत सरकार
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: { xs: 26, sm: 40, md: 50 },
                  }}
                >
                  <Box
                    component="img"
                    src={maharashtraSeal}
                    alt="Maharashtra Government"
                    sx={{
                      width: { xs: 24, sm: 36, md: 46 },
                      height: { xs: 30, sm: 44, md: 56 },
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: 5, sm: 8, md: 10 },
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

              <Box sx={{ minWidth: 0, overflow: "hidden" }}>
                <Typography
                  sx={{
                    color: COLORS.green,
                    fontWeight: 900,
                    fontSize: {
                      xs: 11,
                      sm: 17,
                      md: 23,
                      lg: 26,
                    },
                    lineHeight: 1.4,
                    whiteSpace: {
                      xs: "normal",
                      sm: "nowrap",
                    },
                    overflowWrap: "anywhere",
                  }}
                >
                  {t("navbar.panchayatName")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.text,
                    fontWeight: 700,
                    fontSize: { xs: 7, sm: 10, md: 13 },
                    lineHeight: 1.5,
                  }}
                >
                  {t("navbar.englishName")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: { xs: 6, sm: 8, md: 10 },
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
              spacing={{ lg: 1.5, xl: 2.5 }}
              sx={{
                display: { xs: "none", lg: "flex" },
                flexShrink: 0,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    backgroundColor: "#FFF3E8",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Phone size={17} color={COLORS.orange} />
                </Box>

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
                      "&:hover": { color: COLORS.orange },
                    }}
                  >
                    9920942994
                  </Typography>
                </Box>
              </Stack>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: COLORS.border }}
              />

              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    backgroundColor: "#FFF3E8",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Mail size={17} color={COLORS.orange} />
                </Box>

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
                      "&:hover": { color: COLORS.orange },
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
              spacing={{ xs: 0.3, sm: 1 }}
              sx={{ flexShrink: 0 }}
            >
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <LanguageSwitcher />
              </Box>

              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: COLORS.green,
                  backgroundColor: "#F0F5F1",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 2,
                  p: { xs: 0.7, sm: 1 },
                  "&:hover": {
                    backgroundColor: COLORS.lightGreen,
                  },
                }}
              >
                <Menu size={22} />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ================= DESKTOP NAVIGATION ================= */}

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: COLORS.green,
          zIndex: 1100,
          borderBottom: `3px solid ${COLORS.orange}`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        <Container maxWidth="xl" sx={containerSpacing}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              minHeight: { md: 52, lg: 56 },
              gap: { md: 1, lg: 2 },
              py: 0.3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flex: 1,
                minWidth: 0,
                gap: { md: 0.15, lg: 0.3 },
                overflow: "visible",
              }}
            >
              {navigationMenu.map(renderDesktopItem)}
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
              sx={{
                flexShrink: 0,
                ml: { md: 0.5, lg: 1.5 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: COLORS.orange,
                  borderRadius: 2,
                  px: 0.7,
                  py: 0.1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.35)",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                  whiteSpace: "nowrap",

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

              <Box
                component="img"
                src={maharashtraSeal}
                alt="Maharashtra Government Seal"
                sx={{
                  width: 32,
                  height: 36,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            </Stack>
          </Box>
        </Container>

        {/* DESKTOP DROPDOWN */}

        <MuiMenu
          anchorEl={desktopAnchor}
          open={Boolean(desktopAnchor)}
          onClose={closeDesktopMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              sx: {
                mt: 0.8,
                minWidth: 245,
                maxWidth: 360,
                maxHeight: 440,
                overflowY: "auto",
                borderRadius: 2,
                borderTop: `4px solid ${COLORS.orange}`,
                boxShadow: "0 12px 30px rgba(0,0,0,0.17)",
                py: 0.8,
              },
            },
          }}
        >
          {activeDesktopItem && (
            <MenuItem
              component={NavLink}
              to={activeDesktopItem.path}
              end
              onClick={closeDesktopMenu}
              sx={{
                py: 1.2,
                px: 2,
                fontSize: 13,
                fontWeight: 800,
                color: COLORS.green,
                backgroundColor: "#F0F5F1",
                borderBottom: `1px solid ${COLORS.border}`,
                whiteSpace: "normal",
                "&:hover": {
                  backgroundColor: COLORS.lightGreen,
                },
              }}
            >
              {getLabel(activeDesktopItem.label)} - Overview
            </MenuItem>
          )}

          {activeDesktopItem?.children?.map((child) => (
            <MenuItem
              key={child.path}
              component={NavLink}
              to={child.path}
              onClick={closeDesktopMenu}
              sx={{
                py: 1.2,
                px: 2,
                fontSize: 13,
                fontWeight: 600,
                color: COLORS.text,
                whiteSpace: "normal",

                "&:hover": {
                  backgroundColor: COLORS.lightGreen,
                  color: COLORS.green,
                },

                "&.active": {
                  backgroundColor: COLORS.lightGreen,
                  color: COLORS.green,
                  borderLeft: `3px solid ${COLORS.orange}`,
                },
              }}
            >
              <ChevronRight
                size={15}
                style={{ marginRight: 9, flexShrink: 0 }}
              />
              {getLabel(child.label)}
            </MenuItem>
          ))}
        </MuiMenu>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen && !isDesktop}
        onClose={closeDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            sx: {
              position: "fixed",
              top: { xs: 10, sm: 14 },
              right: { xs: 10, sm: 14 },
              bottom: { xs: 10, sm: 14 },
              height: "auto",
              width: { xs: "88%", sm: 350 },
              maxWidth: 350,
              boxSizing: "border-box",
              borderRadius: {
                xs: "16px 0 0 16px",
                sm: 2,
              },
              backgroundColor: COLORS.white,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "-8px 0 30px rgba(0,0,0,0.18)",
            },
          },
        }}
      >
        {/* DRAWER HEADER */}

        <Box
          sx={{
            background: `linear-gradient(135deg, ${COLORS.deepGreen}, ${COLORS.green})`,
            color: COLORS.white,
            p: 1.5,
            borderBottom: `3px solid ${COLORS.orange}`,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Stack direction="row" alignItems="center" spacing={1.2}>
              <Box
                component="img"
                src={LOGO_URL}
                alt="Gram Panchayat Logo"
                sx={{
                  width: 42,
                  height: 42,
                  objectFit: "contain",
                  backgroundColor: COLORS.white,
                  borderRadius: 2,
                  p: 0.4,
                }}
              />

              <Box>
                <Typography fontWeight={900} fontSize={12}>
                  {t("navbar.panchayatName")}
                </Typography>

                <Typography
                  fontSize={9}
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  ग्रामपंचायत
                </Typography>

                <Typography
                  fontSize={7}
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  ता. वरुड, जि. अमरावती
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* DRAWER CONTENT */}

        <Box
          sx={{
            p: 1.5,
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#FCFDFC",
          }}
        >
          <Typography
            sx={{
              color: COLORS.muted,
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: 0.7,
              mb: 1,
              px: 0.5,
            }}
          >
            {currentLanguage === "en" ? "MAIN MENU" : "मुख्य मेनू"}
          </Typography>

          <List disablePadding>
            {navigationMenu.map((item) => (
              <Box key={item.path}>
                {item.children?.length > 0 ? (
                  <>
                    <ListItemButton
                      onClick={() => toggleMobileMenu(item.label)}
                      aria-expanded={expandedMobileMenu === item.label}
                      sx={{
                        borderRadius: 1.5,
                        mb: 0.4,
                        py: 0.8,
                        px: 1.2,
                        minHeight: 36,
                        color: isParentActive(item)
                          ? COLORS.green
                          : COLORS.text,
                        backgroundColor: isParentActive(item)
                          ? COLORS.lightGreen
                          : "transparent",
                        borderLeft: isParentActive(item)
                          ? `3px solid ${COLORS.orange}`
                          : "3px solid transparent",

                        "&:hover": {
                          backgroundColor: "#F0F5F1",
                        },
                      }}
                    >
                      <ListItemText
                        primary={getLabel(item.label)}
                        slotProps={{
                          primary: {
                            sx: {
                              fontWeight: 700,
                              fontSize: 11,
                              lineHeight: 1.35,
                            },
                          },
                        }}
                      />

                      {expandedMobileMenu === item.label ? (
                        <ChevronUp size={15} />
                      ) : (
                        <ChevronDown size={15} />
                      )}
                    </ListItemButton>

                    <Collapse
                      in={expandedMobileMenu === item.label}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List
                        disablePadding
                        sx={{
                          ml: 1.5,
                          mb: 0.7,
                          borderLeft: `2px solid ${COLORS.orange}`,
                        }}
                      >
                        {/* MOBILE OVERVIEW ITEM */}

                        <ListItemButton
                          component={NavLink}
                          to={item.path}
                          end
                          onClick={closeDrawer}
                          sx={{
                            borderRadius: 1,
                            py: 0.5,
                            pl: 1.5,
                            minHeight: 29,

                            "&.active": {
                              backgroundColor: COLORS.lightGreen,
                              color: COLORS.green,
                            },
                          }}
                        >
                          <ListItemText
                            primary={`${getLabel(item.label)} - ${
                              currentLanguage === "en"
                                ? "Overview"
                                : "मुख्य माहिती"
                            }`}
                            slotProps={{
                              primary: {
                                sx: {
                                  fontSize: 8,
                                  fontWeight: 800,
                                  lineHeight: 1.3,
                                },
                              },
                            }}
                          />
                        </ListItemButton>

                        {/* MOBILE SUBMENU ITEMS */}

                        {item.children.map((child) => (
                          <ListItemButton
                            key={child.path}
                            component={NavLink}
                            to={child.path}
                            onClick={closeDrawer}
                            sx={{
                              borderRadius: 1,
                              py: 0.5,
                              pl: 1.5,
                              minHeight: 29,

                              "&.active": {
                                backgroundColor: COLORS.lightGreen,
                                color: COLORS.green,
                                borderLeft: `3px solid ${COLORS.orange}`,
                              },
                            }}
                          >
                            <ListItemText
                              primary={getLabel(child.label)}
                              slotProps={{
                                primary: {
                                  sx: {
                                    fontSize: 9,
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                  },
                                },
                              }}
                            />

                            <ChevronRight size={12} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeDrawer}
                    sx={{
                      borderRadius: 1.5,
                      mb: 0.4,
                      py: 0.8,
                      px: 1.2,
                      minHeight: 36,
                      color: COLORS.text,

                      "&.active": {
                        backgroundColor: COLORS.lightGreen,
                        color: COLORS.green,
                        fontWeight: 800,
                        borderLeft: `3px solid ${COLORS.orange}`,
                      },

                      "&:hover": {
                        backgroundColor: "#F0F5F1",
                      },
                    }}
                  >
                    <ListItemText
                      primary={getLabel(item.label)}
                      slotProps={{
                        primary: {
                          sx: {
                            fontWeight: 700,
                            fontSize: 11,
                            lineHeight: 1.35,
                          },
                        },
                      }}
                    />

                    <ChevronRight size={14} />
                  </ListItemButton>
                )}
              </Box>
            ))}
          </List>

          <Divider sx={{ my: 1.5, borderColor: COLORS.border }} />

          {/* CONTACT INFORMATION */}

          <Typography
            sx={{
              color: COLORS.muted,
              fontWeight: 800,
              fontSize: 9,
              letterSpacing: 0.7,
              mb: 1.2,
              px: 0.5,
            }}
          >
            {currentLanguage === "en"
              ? "CONTACT INFORMATION"
              : "संपर्क माहिती"}
          </Typography>

          <Stack spacing={1.3}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1.5,
                  backgroundColor: "#FFF3E8",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={14} color={COLORS.orange} />
              </Box>

              <Box>
                <Typography fontSize={9} color={COLORS.muted}>
                  संपर्क क्रमांक
                </Typography>

                <Typography
                  component="a"
                  href="tel:9920942994"
                  fontWeight={800}
                  fontSize={11}
                  color={COLORS.green}
                  sx={{ textDecoration: "none" }}
                >
                  9920942994
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1.5,
                  backgroundColor: "#FFF3E8",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={14} color={COLORS.orange} />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography fontSize={9} color={COLORS.muted}>
                  ई-मेल
                </Typography>

                <Typography
                  component="a"
                  href="mailto:gppimpalkhuta30@gmail.com"
                  fontWeight={700}
                  fontSize={10}
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

            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1.5,
                  backgroundColor: "#FFF3E8",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={14} color={COLORS.orange} />
              </Box>

              <Typography
                fontSize={10}
                color={COLORS.text}
                fontWeight={600}
                lineHeight={1.4}
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
            borderTop: `1px solid ${COLORS.border}`,
            p: 1.5,
            textAlign: "center",
          }}
        >
          <Typography
            color={COLORS.green}
            fontSize={10}
            fontWeight={900}
          >
            सेवा • समर्पण • पारदर्शकता
          </Typography>

          <Typography
            color={COLORS.muted}
            fontSize={8}
            sx={{ mt: 0.4 }}
          >
            {t("navbar.englishName")}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
