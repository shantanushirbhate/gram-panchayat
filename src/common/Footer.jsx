
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  Divider,
} from "@mui/material";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
} from "lucide-react";

import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("footer.home"), path: "/" },
    { name: t("footer.about"), path: "/about" },
    { name: t("footer.services"), path: "/services" },
    { name: t("footer.gallery"), path: "/gallery" },
    { name: t("footer.contact"), path: "/contact" },
  ];

  const contactItems = [
    {
      icon: MapPin,
      text: t("footer.address"),
    },
    {
      icon: Phone,
      text: t("footer.office"),
    },
    {
      icon: Mail,
      text: t("footer.officialContact"),
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#102D20",
        color: "#FFFFFF",
        mt: 6,
        pt: { xs: 5, md: 6 },
        pb: { xs: 2.5, md: 3 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 3,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          },
        }}
      >
        {/* Main Footer Content */}
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            width: "100%",
            mx: "auto",
          }}
        >
          {/* Panchayat Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack
              spacing={2}
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ height: "100%" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    backgroundColor: "#FFFFFF",
                    color: "#166534",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 20,
                  }}
                >
                  GP
                </Box>

                <Box>
                  <Typography fontWeight={700} fontSize={17}>
                    {t("footer.panchayatName")}
                  </Typography>

                  <Typography fontSize={11} color="#CBD5E1">
                    {t("footer.englishName")}
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                textAlign={{ xs: "center", md: "left" }}
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.9,
                  maxWidth: 350,
                }}
              >
                {t("footer.description")}
              </Typography>

              <Globe size={21} color="#F59E0B" />
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              alignItems="center"
              spacing={2}
            >
              <Typography
                fontWeight={700}
                fontSize={18}
                textAlign="center"
              >
                {t("footer.quickLinks")}
              </Typography>

              <Stack spacing={1.5}>
                {quickLinks.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    underline="none"
                    sx={{
                      color: "#CBD5E1",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: 14,
                      transition: "0.2s ease",
                      "&:hover": {
                        color: "#F59E0B",
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    <ArrowRight size={15} />
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              spacing={2}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                fontWeight={700}
                fontSize={18}
                textAlign="center"
              >
                {t("footer.contactInformation")}
              </Typography>

              <Stack
                spacing={2.5}
                sx={{
                  width: "fit-content",
                  maxWidth: "100%",
                }}
              >
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          color: "#F59E0B",
                          mt: 0.2,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={19} />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#CBD5E1",
                          lineHeight: 1.7,
                          maxWidth: 260,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: "#355344",
            my: { xs: 3, md: 4 },
          }}
        />

        {/* Copyright */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography
            variant="body2"
            color="#CBD5E1"
            textAlign="center"
            fontSize={13}
          >
            © {new Date().getFullYear()} {t("footer.copyright")}
          </Typography>

          <Typography
            variant="body2"
            color="#CBD5E1"
            textAlign="center"
            fontSize={13}
          >
            {t("footer.tagline")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
