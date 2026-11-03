
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  lightGreen: "#EAF2EC",
  orange: "#FF9933",
  cream: "#FFF7ED",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E2EAE4",
};

function ContactPage() {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: MapPin,
      title: t("contact.addressTitle"),
      value: t("contact.address"),
      color: "#C65A16",
      bg: "#FFF0DF",
    },
    {
      icon: Phone,
      title: t("contact.phoneTitle"),
      value: t("contact.phone"),
      color: "#16A34A",
      bg: "#F0FDF4",
    },
    {
      icon: Mail,
      title: t("contact.emailTitle"),
      value: t("contact.email"),
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      icon: Clock,
      title: t("contact.officeTitle"),
      value: t("contact.officeHours"),
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(t("contact.successMessage"));
    event.target.reset();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      {/* ================= HERO SECTION ================= */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(circle at 10% 20%, rgba(255,153,51,0.16), transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.08), transparent 30%),
            linear-gradient(135deg, ${COLORS.darkGreen}, ${COLORS.green} 65%, #28563D)
          `,
          py: { xs: 7, sm: 9, md: 11 },
          textAlign: "center",
        }}
      >
        {/* Decorative circles */}

        <Box
          sx={{
            position: "absolute",
            width: { xs: 160, md: 300 },
            height: { xs: 160, md: 300 },
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
            top: -100,
            left: -80,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 200, md: 380 },
            height: { xs: 200, md: 380 },
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            bottom: -180,
            right: -120,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              width: 70,
              height: 70,
              mx: "auto",
              mb: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              color: "#FFB45E",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <MessageCircle size={34} />
          </Box>

          <Typography
            sx={{
              color: "#FFB45E",
              fontWeight: 800,
              fontSize: { xs: 12, sm: 14 },
              letterSpacing: 2,
              mb: 1.5,
            }}
          >
            {t("contact.label")}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: COLORS.white,
              fontWeight: 900,
              fontSize: { xs: 30, sm: 42, md: 54 },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {t("contact.title")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.orange,
              mx: "auto",
              mb: 2.5,
            }}
          />

          <Typography
            sx={{
              color: "#D5E3D9",
              maxWidth: 680,
              mx: "auto",
              fontSize: { xs: 14, sm: 16 },
              lineHeight: 1.9,
              px: { xs: 1, sm: 2 },
            }}
          >
            {t("contact.description")}
          </Typography>
        </Container>
      </Box>

      {/* ================= CONTACT INFORMATION ================= */}

      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Section Heading */}

        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              color: COLORS.orange,
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: 1.5,
              mb: 1,
            }}
          >
            {t("contact.sectionLabel")}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: { xs: 25, sm: 31, md: 38 },
            }}
          >
            {t("contact.sectionTitle")}
          </Typography>

          <Box
            sx={{
              width: 55,
              height: 4,
              borderRadius: 5,
              backgroundColor: COLORS.orange,
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        {/* Contact Cards */}

        <Grid container spacing={2.5}>
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 3,
                    backgroundColor: COLORS.white,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: {
                        xs: "none",
                        md: "translateY(-7px)",
                      },
                      boxShadow: "0 15px 35px rgba(23,59,42,0.09)",
                      borderColor: "#F3BD89",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        backgroundColor: item.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <Icon size={27} color={item.color} />
                    </Box>

                    <Typography
                      sx={{
                        color: COLORS.green,
                        fontWeight: 800,
                        fontSize: 16,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 14,
                        lineHeight: 1.8,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* ================= FORM AND MAP ================= */}

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ mt: { xs: 3, md: 4 } }}
        >
          {/* Contact Form */}

          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 3.5,
                backgroundColor: COLORS.white,
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ mb: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2,
                      backgroundColor: COLORS.cream,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle color="#C65A16" size={24} />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: COLORS.green,
                      fontWeight: 900,
                      fontSize: { xs: 19, sm: 23 },
                    }}
                  >
                    {t("contact.formTitle")}
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    color: COLORS.muted,
                    fontSize: 14,
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {t("contact.formDescription")}
                </Typography>

                <Divider sx={{ mb: 3, borderColor: COLORS.border }} />

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2.5}>
                    <TextField
                      label={t("contact.name")}
                      name="name"
                      fullWidth
                      required
                      size="medium"
                    />

                    <TextField
                      label={t("contact.email")}
                      name="email"
                      type="email"
                      fullWidth
                      required
                    />

                    <TextField
                      label={t("contact.phone")}
                      name="phone"
                      type="tel"
                      fullWidth
                    />

                    <TextField
                      label={t("contact.subject")}
                      name="subject"
                      fullWidth
                      required
                    />

                    <TextField
                      label={t("contact.message")}
                      name="message"
                      multiline
                      rows={4}
                      fullWidth
                      required
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<Send size={18} />}
                      fullWidth
                      sx={{
                        backgroundColor: COLORS.green,
                        color: COLORS.white,
                        py: 1.6,
                        fontWeight: 800,
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: 15,
                        boxShadow: "0 6px 15px rgba(23,59,42,0.15)",
                        "&:hover": {
                          backgroundColor: "#24583D",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 22px rgba(23,59,42,0.2)",
                        },
                        transition: "all 0.25s ease",
                      }}
                    >
                      {t("contact.sendButton")}
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Map Section */}

          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                minHeight: { xs: 430, sm: 480 },
                border: `1px solid ${COLORS.border}`,
                borderRadius: 3.5,
                overflow: "hidden",
                backgroundColor: COLORS.white,
              }}
            >
              <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      flexShrink: 0,
                      borderRadius: 2,
                      backgroundColor: "#FFF0DF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={24} color="#C65A16" />
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: COLORS.green,
                        fontWeight: 900,
                        fontSize: { xs: 19, sm: 23 },
                      }}
                    >
                      {t("contact.mapTitle")}
                    </Typography>

                    <Typography
                      sx={{
                        color: COLORS.muted,
                        fontSize: 13,
                        mt: 0.5,
                      }}
                    >
                      {t("contact.mapDescription")}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box
                sx={{
                  height: { xs: 340, sm: 400, md: 440 },
                  width: "100%",
                  backgroundColor: "#E8EEE9",
                }}
              >
                <iframe
                  title="Gram Panchayat Pimpalkhuta Budruk Location"
                  src="https://www.google.com/maps?q=Pimpalkhuta+Budruk+Maharashtra&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ================= BOTTOM CTA ================= */}

      <Box
        sx={{
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background: `
                radial-gradient(circle at 90% 10%, rgba(255,153,51,0.17), transparent 30%),
                linear-gradient(120deg, ${COLORS.darkGreen}, ${COLORS.green})
              `,
              borderRadius: { xs: 3, md: 4 },
              px: { xs: 2.5, sm: 4, md: 6 },
              py: { xs: 4.5, sm: 5, md: 6 },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 220,
                height: 220,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                top: -110,
                left: -80,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <MessageCircle size={38} color="#FFB45E" />

              <Typography
                variant="h2"
                sx={{
                  color: COLORS.white,
                  fontWeight: 900,
                  fontSize: { xs: 23, sm: 29, md: 36 },
                  mt: 2,
                  mb: 1.5,
                }}
              >
                {t("contact.ctaTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E4D7",
                  maxWidth: 620,
                  mx: "auto",
                  fontSize: { xs: 13, sm: 15 },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {t("contact.ctaDescription")}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= FLOATING CONTACT ICONS ================= */}

      <Stack
        spacing={1.5}
        sx={{
          position: "fixed",
          right: { xs: 14, sm: 22 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          alignItems: "center",
        }}
      >
        {/* Blue Phone Icon */}

        <IconButton
          aria-label="Phone"
          sx={{
            width: { xs: 50, sm: 56 },
            height: { xs: 50, sm: 56 },
            backgroundColor: "#1976D2",
            color: "#FFFFFF",
            boxShadow: "0 4px 12px rgba(0,0,0,0.22)",
            "&:hover": {
              backgroundColor: "#1565C0",
              transform: "scale(1.08)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <Phone size={25} fill="white" />
        </IconButton>

        {/* Green WhatsApp Icon */}

        <IconButton
          aria-label="WhatsApp"
          sx={{
            width: { xs: 50, sm: 56 },
            height: { xs: 50, sm: 56 },
            backgroundColor: "#16D66A",
            color: "#FFFFFF",
            boxShadow: "0 4px 12px rgba(0,0,0,0.22)",
            "&:hover": {
              backgroundColor: "#12B85A",
              transform: "scale(1.08)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <FaWhatsapp size={28} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ContactPage;
