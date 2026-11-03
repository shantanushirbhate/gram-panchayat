
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

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#102D20",
        color: "#FFFFFF",
        pt: { xs: 5, md: 7 },
        pb: 2,
        mt: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* Panchayat Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#FFFFFF",
                    color: "#166534",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 20,
                    flexShrink: 0,
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
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.9,
                  maxWidth: 350,
                }}
              >
                {t("footer.description")}
              </Typography>

              <Globe size={20} color="#F59E0B" />
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography fontWeight={700} fontSize={18} mb={2}>
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
                    "&:hover": { color: "#F59E0B" },
                  }}
                >
                  <ArrowRight size={15} />
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography fontWeight={700} fontSize={18} mb={2}>
              {t("footer.contactInformation")}
            </Typography>

            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MapPin size={19} color="#F59E0B" />

                <Typography variant="body2" color="#CBD5E1">
                  {t("footer.address")}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <Phone size={19} color="#F59E0B" />

                <Typography variant="body2" color="#CBD5E1">
                  {t("footer.office")}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <Mail size={19} color="#F59E0B" />

                <Typography variant="body2" color="#CBD5E1">
                  {t("footer.officialContact")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#355344", my: 4 }} />

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
          >
            © {new Date().getFullYear()} {t("footer.copyright")}
          </Typography>

          <Typography variant="body2" color="#CBD5E1" textAlign="center">
            {t("footer.tagline")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
