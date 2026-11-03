
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
      sx={{
    backgroundColor: "#FFE0B2",
    color: "#78350F",
    py: 1,
  
  }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          {/* Panchayat Name */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <MapPin size={16} />

            <Typography variant="body2">
              {t("header.panchayatName")}
            </Typography>
          </Stack>

          {/* Contact Information */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.5, sm: 3 }}
            alignItems="center"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone size={14} />

              <Typography variant="body2">
                {t("header.contact")}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Mail size={14} />

              <Typography variant="body2">
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
