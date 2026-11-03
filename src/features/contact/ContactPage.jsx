
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
} from "@mui/material";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

import { useTranslation } from "react-i18next";

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
    <Box sx={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(120deg, #FFF0DF 0%, #F0F5F1 100%)",
          py: { xs: 7, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            {t("contact.label")}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 30, sm: 38, md: 46 },
              mb: 2,
            }}
          >
            {t("contact.title")}
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              maxWidth: 650,
              mx: "auto",
              fontSize: { xs: 14, sm: 16 },
              lineHeight: 1.8,
            }}
          >
            {t("contact.description")}
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>

        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              mb: 1,
            }}
          >
            {t("contact.sectionLabel")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 25, md: 34 },
            }}
          >
            {t("contact.sectionTitle")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid #E2E8F0",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        "0 10px 25px rgba(23,59,42,0.08)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        borderRadius: 2.5,
                        backgroundColor: item.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <Icon size={26} color={item.color} />
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
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

        {/* Contact Form and Map */}
        <Grid container spacing={4} sx={{ mt: 4 }}>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #E2E8F0",
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
                  <MessageCircle color="#C65A16" size={25} />

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#173B2A",
                      fontWeight: 800,
                    }}
                  >
                    {t("contact.formTitle")}
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 14,
                    mb: 3,
                  }}
                >
                  {t("contact.formDescription")}
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                >
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
                      sx={{
                        backgroundColor: "#173B2A",
                        py: 1.5,
                        fontWeight: 700,
                        textTransform: "none",
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#24583D",
                        },
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
            <Box
              sx={{
                height: "100%",
                minHeight: 450,
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box sx={{ p: 2.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#173B2A",
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {t("contact.mapTitle")}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 14,
                  }}
                >
                  {t("contact.mapDescription")}
                </Typography>
              </Box>

              <Box
                sx={{
                  height: { xs: 350, md: 420 },
                  width: "100%",
                }}
              >
                <iframe
                  title="Gram Panchayat Pimpalkhuta Budruk Location"
                  src="https://www.google.com/maps?q=Pimpalkhuta+Budruk+Maharashtra&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Container>

      {/* Bottom CTA */}
      <Box sx={{ pb: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#173B2A",
              borderRadius: 4,
              px: 3,
              py: { xs: 4, md: 5 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: { xs: 23, md: 30 },
                mb: 1.5,
              }}
            >
              {t("contact.ctaTitle")}
            </Typography>

            <Typography
              sx={{
                color: "#D1E4D7",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {t("contact.ctaDescription")}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ContactPage;
