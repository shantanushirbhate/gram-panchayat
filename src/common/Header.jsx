
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        backgroundColor: "#FFE0B2",
        color: "#78350F",
        py: 1,
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            width: "100%",
          }}
        >
          {/* Panchayat Name */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <MapPin size={16} />

            <Typography
              variant="body2"
              fontWeight={500}
              textAlign="center"
            >
              {t("header.panchayatName")}
            </Typography>
          </Stack>

          {/* Contact Information */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.8, sm: 3, md: 4 }}
            alignItems="center"
          >
            {/* Phone */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Phone size={14} />

              <Typography variant="body2" fontWeight={500}>
                {t("header.contact")}
              </Typography>
            </Stack>

            {/* Email / Portal */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Mail size={14} />

              <Typography variant="body2" fontWeight={500}>
                {t("header.portal")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
