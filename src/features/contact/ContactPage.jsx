import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Clock,
  Building2,
  ArrowRight,
  Send,
  MessageCircle,
  Navigation,
  Sparkles,
  User,
  FileText,
} from "lucide-react";

import { Link } from "react-router-dom";
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

const PAGE_SPACING = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 6,
};

const contactDetails = [
  {
    key: "address",
    icon: MapPin,
    color: "#C65A16",
    bg: "#FFF7ED",
  },
  {
    key: "phone",
    icon: Phone,
    color: "#0284C7",
    bg: "#F0F9FF",
  },
  {
    key: "email",
    icon: Mail,
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    key: "office",
    icon: Clock,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

// ======================================================
// WHATSAPP ICON
// ======================================================

function WhatsAppIcon({ size = 25 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16.02 3C8.85 3 3.02 8.78 3.02 15.9c0 2.28.6 4.5 1.74 6.48L3 29l6.82-1.78a13.1 13.1 0 0 0 6.2 1.56h.01c7.17 0 13-5.78 13-12.9 0-3.45-1.35-6.69-3.8-9.12A12.94 12.94 0 0 0 16.02 3Zm0 23.6h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-4.05 1.06 1.08-3.92-.26-.41a10.65 10.65 0 0 1-1.65-5.7c0-5.95 4.87-10.8 10.8-10.8 2.87 0 5.57 1.12 7.6 3.15a10.7 10.7 0 0 1 3.16 7.64c0 5.95-4.86 10.8-10.77 10.8Zm5.93-8.08c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.6-1.9-1.8-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.67 0 1.58 1.16 3.1 1.32 3.31.16.21 2.27 3.45 5.5 4.83.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

// ======================================================
// FLOATING WHATSAPP & MOBILE BUTTONS
// ======================================================

function FloatingContactButtons() {
  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 12, sm: 18, md: 22 },
        bottom: { xs: 85, sm: 30 },
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        alignItems: "center",
      }}
    >
      {/* WhatsApp Button */}

      <Button
        component="a"
        href="https://wa.me/919920942994"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        sx={{
          minWidth: 0,
          width: { xs: 46, sm: 52 },
          height: { xs: 46, sm: 52 },
          p: 0,
          borderRadius: "50%",
          color: "#FFFFFF",
          backgroundColor: "#25D366",
          boxShadow: "0 5px 18px rgba(37,211,102,0.35)",
          transition: "all 0.25s ease",

          "&:hover": {
            backgroundColor: "#1DA851",
            transform: "translateY(-4px)",
            boxShadow: "0 9px 22px rgba(37,211,102,0.4)",
          },
        }}
      >
        <WhatsAppIcon size={26} />
      </Button>

      {/* Mobile / Call Button */}

      <Button
        component="a"
        href="tel:9920942994"
        aria-label="Call Gram Panchayat"
        title="Call Gram Panchayat"
        sx={{
          minWidth: 0,
          width: { xs: 46, sm: 52 },
          height: { xs: 46, sm: 52 },
          p: 0,
          borderRadius: "50%",
          color: "#FFFFFF",
          backgroundColor: COLORS.green,
          boxShadow: "0 5px 18px rgba(23,59,42,0.3)",
          transition: "all 0.25s ease",

          "&:hover": {
            backgroundColor: COLORS.darkGreen,
            transform: "translateY(-4px)",
            boxShadow: "0 9px 22px rgba(23,59,42,0.4)",
          },
        }}
      >
        <Smartphone size={24} strokeWidth={2.2} />
      </Button>
    </Box>
  );
}

// ======================================================
// SECTION LABEL
// ======================================================

function SectionLabel({ children, centered = false }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={centered ? "center" : "flex-start"}
      spacing={1.2}
      sx={{ mb: 1.5 }}
    >
      <Box
        sx={{
          width: 30,
          height: 3,
          borderRadius: 5,
          backgroundColor: COLORS.saffron,
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 800,
          fontSize: 12,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
}

// ======================================================
// CONTACT PAGE
// ======================================================

function ContactPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    window.alert(t("contact.successMessage"));

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",
      borderRadius: 2.5,
      fontSize: 14,

      "& fieldset": {
        borderColor: COLORS.border,
      },

      "&:hover fieldset": {
        borderColor: "#A8BCAF",
      },

      "&.Mui-focused fieldset": {
        borderColor: COLORS.green,
        borderWidth: 1.5,
      },
    },

    "& .MuiInputLabel-root": {
      color: COLORS.muted,
      fontSize: 14,
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: COLORS.green,
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        overflowX: "clip",
      }}
    >
      {/* ================= HERO SECTION ================= */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `
            linear-gradient(
              115deg,
              rgba(10, 39, 25, 0.97),
              rgba(23, 59, 42, 0.94),
              rgba(23, 59, 42, 0.82)
            )
          `,
          py: { xs: 8, sm: 10, md: 13 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 450 },
            height: { xs: 220, md: 450 },
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "50%",
            top: -180,
            right: { xs: -100, md: 80 },
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 300, md: 600 },
            height: { xs: 300, md: 600 },
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            bottom: -420,
            right: { xs: -120, md: 200 },
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 7,
            height: 120,
            backgroundColor: COLORS.saffron,
            borderRadius: "0 5px 5px 0",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            px: PAGE_SPACING,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              maxWidth: 850,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{
                display: "inline-flex",
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10,
                px: 2,
                py: 1,
                mb: 3,
                backdropFilter: "blur(8px)",
              }}
            >
              <Building2 size={17} color={COLORS.saffron} />

              <Typography
                sx={{
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1.3,
                }}
              >
                {t("contact.label")}
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                color: COLORS.white,
                fontWeight: 900,
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4rem",
                },
                lineHeight: 1.2,
                mb: 2.5,
                letterSpacing: "-1px",
              }}
            >
              {t("contact.title")}
            </Typography>

            <Box
              sx={{
                width: 75,
                height: 5,
                borderRadius: 5,
                backgroundColor: COLORS.saffron,
                mx: "auto",
                mb: 3,
              }}
            />

            <Typography
              sx={{
                color: "#E0EAE3",
                maxWidth: 720,
                mx: "auto",
                lineHeight: 2,
                fontSize: { xs: 14, sm: 16, md: 17 },
              }}
            >
              {t("contact.description")}
            </Typography>
          </Box>
        </Container>

        {/* Tiranga Accent */}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 6,
            background: `
              linear-gradient(
                90deg,
                ${COLORS.saffron} 0%,
                ${COLORS.saffron} 33%,
                #FFFFFF 33%,
                #FFFFFF 66%,
                #16803D 66%,
                #16803D 100%
              )
            `,
          }}
        />
      </Box>

      {/* ================= CONTACT INTRO ================= */}

      <Container
        maxWidth="xl"
        sx={{
          px: PAGE_SPACING,
          pt: { xs: 7, sm: 8, md: 10 },
          pb: { xs: 4, md: 5 },
        }}
      >
        <Box
          textAlign="center"
          sx={{
            maxWidth: 750,
            mx: "auto",
          }}
        >
          <SectionLabel centered>
            {t("contact.sectionLabel")}
          </SectionLabel>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: {
                xs: "1.8rem",
                sm: "2.3rem",
                md: "2.8rem",
              },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            {t("contact.sectionTitle")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, sm: 15 },
              lineHeight: 1.9,
            }}
          >
            {t("contact.sectionDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.saffron,
              mx: "auto",
              mt: 2.5,
            }}
          />
        </Box>
      </Container>

      {/* ================= CONTACT INFORMATION CARDS ================= */}

      <Container
        maxWidth="xl"
        sx={{
          px: PAGE_SPACING,
          pb: { xs: 7, sm: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: {
              xs: 2.5,
              sm: 3,
              md: 3.5,
            },
            alignItems: "stretch",
          }}
        >
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.key}
                elevation={0}
                sx={{
                  width: "100%",
                  height: "100%",
                  minWidth: 0,
                  minHeight: { xs: 225, md: 255 },
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: { xs: 3, md: 4 },
                  backgroundColor: COLORS.white,
                  boxShadow: "0 8px 25px rgba(23,59,42,0.045)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-8px)" },
                    boxShadow: "0 20px 45px rgba(23,59,42,0.11)",
                    borderColor: "#E7BC91",
                  },

                  "&:hover .contact-icon": {
                    transform: "rotate(-7deg) scale(1.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    backgroundColor: item.color,
                  }}
                />

                <Typography
                  sx={{
                    position: "absolute",
                    top: 17,
                    right: 20,
                    color: "#E8EDE9",
                    fontSize: 25,
                    fontWeight: 900,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>

                <CardContent
                  sx={{
                    p: { xs: 2.7, sm: 3, md: 3.2 },
                    "&:last-child": {
                      pb: { xs: 2.7, sm: 3, md: 3.2 },
                    },
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <Box
                    className="contact-icon"
                    sx={{
                      width: 62,
                      height: 62,
                      flexShrink: 0,
                      borderRadius: 3,
                      backgroundColor: item.bg,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      transition: "0.3s ease",
                    }}
                  >
                    <Icon size={29} strokeWidth={1.8} />
                  </Box>

                  <Typography
                    sx={{
                      color: COLORS.green,
                      fontWeight: 800,
                      fontSize: 17,
                      mb: 1.2,
                    }}
                  >
                    {t(`contact.${item.key}Title`)}
                  </Typography>

                  <Typography
                    sx={{
                      color: COLORS.muted,
                      fontSize: 14,
                      lineHeight: 1.9,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {t(`contact.${item.key}`)}
                  </Typography>

                  <Box sx={{ mt: "auto", pt: 2 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 3,
                        borderRadius: 5,
                        backgroundColor: item.color,
                        opacity: 0.65,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>

      {/* ================= CONTACT FORM ================= */}

      <Box
        sx={{
          backgroundColor: COLORS.cream,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: PAGE_SPACING }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.15fr",
              },
              gap: { xs: 4, md: 5, lg: 7 },
              alignItems: "stretch",
            }}
          >
            {/* Left Information Panel */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <SectionLabel>
                {t("contact.formLabel")}
              </SectionLabel>

              <Typography
                variant="h2"
                sx={{
                  color: COLORS.green,
                  fontWeight: 900,
                  fontSize: {
                    xs: "1.9rem",
                    sm: "2.3rem",
                    md: "2.7rem",
                  },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {t("contact.formTitle")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.muted,
                  fontSize: 15,
                  lineHeight: 2,
                  mb: 4,
                }}
              >
                {t("contact.formDescription")}
              </Typography>

              <Stack spacing={2.5}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2.5,
                      backgroundColor: COLORS.white,
                      color: COLORS.green,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 15px rgba(23,59,42,0.06)",
                    }}
                  >
                    <MessageCircle size={22} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 800,
                        fontSize: 14,
                      }}
                    >
                      {t("contact.responseTitle")}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 13,
                        mt: 0.4,
                      }}
                    >
                      {t("contact.responseDescription")}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2.5,
                      backgroundColor: COLORS.white,
                      color: COLORS.green,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 15px rgba(23,59,42,0.06)",
                    }}
                  >
                    <Building2 size={22} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 800,
                        fontSize: 14,
                      }}
                    >
                      {t("contact.visitTitle")}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 13,
                        mt: 0.4,
                      }}
                    >
                      {t("contact.visitDescription")}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>

            {/* Form Card */}

            <Card
              elevation={0}
              sx={{
                width: "100%",
                border: `1px solid ${COLORS.border}`,
                borderRadius: { xs: 3, md: 4 },
                backgroundColor: COLORS.white,
                boxShadow: "0 15px 40px rgba(23,59,42,0.07)",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2.5, sm: 3.5, md: 4.5 },
                  "&:last-child": {
                    pb: { xs: 2.5, sm: 3.5, md: 4.5 },
                  },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  sx={{ mb: 3 }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2.5,
                      backgroundColor: COLORS.lightGreen,
                      color: COLORS.green,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={21} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 900,
                        fontSize: 20,
                      }}
                    >
                      {t("contact.formCardTitle")}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 13,
                      }}
                    >
                      {t("contact.formCardDescription")}
                    </Typography>
                  </Box>
                </Stack>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, minmax(0, 1fr))",
                      },
                      gap: 2.5,
                    }}
                  >
                    <TextField
                      fullWidth
                      required
                      name="name"
                      label={t("contact.nameLabel")}
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      sx={inputStyles}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <User size={18} color={COLORS.muted} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      required
                      type="email"
                      name="email"
                      label={t("contact.emailLabel")}
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      sx={inputStyles}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Mail size={18} color={COLORS.muted} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      name="phone"
                      label={t("contact.phoneLabel")}
                      placeholder={t("contact.phonePlaceholder")}
                      value={formData.phone}
                      onChange={handleChange}
                      sx={inputStyles}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone size={18} color={COLORS.muted} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      required
                      name="subject"
                      label={t("contact.subjectLabel")}
                      placeholder={t("contact.subjectPlaceholder")}
                      value={formData.subject}
                      onChange={handleChange}
                      sx={inputStyles}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FileText size={18} color={COLORS.muted} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "1",
                          sm: "1 / -1",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={5}
                        name="message"
                        label={t("contact.messageLabel")}
                        placeholder={t("contact.messagePlaceholder")}
                        value={formData.message}
                        onChange={handleChange}
                        sx={inputStyles}
                      />
                    </Box>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowRight size={19} />}
                    sx={{
                      mt: 3,
                      py: 1.7,
                      borderRadius: 2.5,
                      backgroundColor: COLORS.green,
                      color: COLORS.white,
                      fontSize: 15,
                      fontWeight: 800,
                      textTransform: "none",
                      boxShadow: "0 8px 20px rgba(23,59,42,0.15)",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        backgroundColor: COLORS.darkGreen,
                        transform: { xs: "none", md: "translateY(-3px)" },
                        boxShadow: "0 12px 25px rgba(23,59,42,0.20)",
                      },
                    }}
                  >
                    {t("contact.sendButton")}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* ================= LOCATION / MAP SECTION ================= */}

      <Container
        maxWidth="xl"
        sx={{
          px: PAGE_SPACING,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Box
          textAlign="center"
          sx={{
            maxWidth: 750,
            mx: "auto",
            mb: 5,
          }}
        >
          <SectionLabel centered>
            {t("contact.mapLabel")}
          </SectionLabel>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: {
                xs: "1.8rem",
                sm: "2.3rem",
                md: "2.8rem",
              },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            {t("contact.mapTitle")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, sm: 15 },
              lineHeight: 1.9,
            }}
          >
            {t("contact.mapDescription")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.saffron,
              mx: "auto",
              mt: 2.5,
            }}
          />
        </Box>

        <Card
          elevation={0}
          sx={{
            width: "100%",
            overflow: "hidden",
            borderRadius: { xs: 3, md: 4 },
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 12px 35px rgba(23,59,42,0.07)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
              px: { xs: 2.5, sm: 3, md: 4 },
              py: 2.5,
              backgroundColor: COLORS.white,
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: 2.5,
                  backgroundColor: COLORS.lightGreen,
                  color: COLORS.green,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={22} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: COLORS.green,
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {t("contact.addressTitle")}
                </Typography>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: 13,
                  }}
                >
                  {t("contact.address")}
                </Typography>
              </Box>
            </Stack>

            <Button
              component="a"
              href="https://www.google.com/maps/search/?api=1&query=Pimpalkhuta+Budruk+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<Navigation size={17} />}
              sx={{
                color: COLORS.orange,
                fontWeight: 800,
                textTransform: "none",
                whiteSpace: "nowrap",

                "&:hover": {
                  backgroundColor: COLORS.cream,
                },
              }}
            >
              {t("contact.directionsButton")}
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: { xs: 280, sm: 350, md: 430 },
              backgroundColor: COLORS.lightGreen,
            }}
          >
            <Box
              component="iframe"
              title="Gram Panchayat Pimpalkhuta Budruk Location"
              src="https://www.google.com/maps?q=Pimpalkhuta+Budruk+Maharashtra&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                border: 0,
                display: "block",
              }}
            />
          </Box>
        </Card>
      </Container>

      {/* ================= CONTACT CTA ================= */}

      <Box
        sx={{
          pb: { xs: 7, sm: 9, md: 11 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: PAGE_SPACING }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(115deg, ${COLORS.darkGreen}, ${COLORS.green})`,
              borderRadius: { xs: 3, md: 5 },
              px: { xs: 3, sm: 4, md: 7 },
              py: { xs: 5, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              boxShadow: "0 15px 40px rgba(16,45,32,0.13)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 240,
                height: 240,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "50%",
                top: -140,
                right: "25%",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 350,
                height: 350,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                bottom: -260,
                right: -80,
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: { xs: "center", md: "left" },
                maxWidth: 650,
                minWidth: 0,
              }}
            >
              <Stack
                direction="row"
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
                spacing={1}
                sx={{ mb: 2 }}
              >
                <Sparkles size={18} color={COLORS.saffron} />

                <Typography
                  sx={{
                    color: COLORS.saffron,
                    fontWeight: 800,
                    fontSize: 12,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {t("contact.label")}
                </Typography>
              </Stack>

              <Typography
                variant="h4"
                sx={{
                  color: COLORS.white,
                  fontWeight: 900,
                  fontSize: { xs: 23, sm: 27, md: 32 },
                  lineHeight: 1.3,
                  mb: 1.5,
                }}
              >
                {t("contact.ctaTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E4D7",
                  lineHeight: 1.9,
                  fontSize: { xs: 14, sm: 15 },
                }}
              >
                {t("contact.ctaDescription")}
              </Typography>
            </Box>

            <Button
              component={Link}
              to="/services"
              variant="contained"
              endIcon={<ArrowRight size={19} />}
              sx={{
                position: "relative",
                zIndex: 1,
                flexShrink: 0,
                backgroundColor: COLORS.saffron,
                color: COLORS.darkGreen,
                fontWeight: 800,
                px: { xs: 3, md: 4 },
                py: 1.7,
                borderRadius: 2.5,
                whiteSpace: "nowrap",
                textTransform: "none",
                fontSize: 15,
                boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                transition: "all 0.25s ease",

                "&:hover": {
                  backgroundColor: "#FFB45E",
                  transform: { xs: "none", md: "translateY(-3px)" },
                  boxShadow: "0 12px 25px rgba(0,0,0,0.20)",
                },
              }}
            >
              {t("contact.ctaButton")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}

      <FloatingContactButtons />

      {/* ================= BOTTOM ACCENT ================= */}

      <Box
        sx={{
          height: 6,
          background: `
            linear-gradient(
              90deg,
              ${COLORS.saffron} 0%,
              ${COLORS.saffron} 33%,
              #FFFFFF 33%,
              #FFFFFF 66%,
              #16803D 66%,
              #16803D 100%
            )
          `,
        }}
      />
    </Box>
  );
}

export default ContactPage;