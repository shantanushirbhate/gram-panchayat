
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  PhoneCall,
  ShieldAlert,
  Ambulance,
  HeartPulse,
  Baby,
  Users,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  Phone,
  Landmark,
  Droplets,
  Siren,
  School,
  UserRound,
  HandHeart,
} from "lucide-react";

import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#0B2E1A",
  lightGreen: "#EAF3EC",
  orange: "#E87519",
  cream: "#FFF8EF",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  border: "#E6EDE7",
};

const officialItems = [
  {
    key: "sarpanch",
    icon: Landmark,
    phoneKey: "9800000000",
    featured: true,
  },
  {
    key: "gramsevak",
    icon: UserRound,
    phoneKey: "9900000000",
  },
];

const usefulItems = [
  {
    key: "police",
    icon: ShieldAlert,
    phoneKey: "100",
  },
  {
    key: "ambulance",
    icon: Ambulance,
    phoneKey: "108",
  },
  {
    key: "water",
    icon: Droplets,
  },
  {
    key: "helpline",
    icon: PhoneCall,
    phoneKey: "112",
    featured: true,
  },
  {
    key: "childline",
    icon: Baby,
    phoneKey: "1098",
  },
  {
    key: "snakeRescuer",
    icon: Siren,
  },
  {
    key: "school",
    icon: School,
  },
  {
    key: "anganwadi",
    icon: HandHeart,
  },
];

function ContactCard({
  item,
  title,
  name,
  number,
  callLabel,
  isOfficial = false,
}) {
  const Icon = item.icon;

  const phoneHref = item.phoneKey
    ? `tel:${item.phoneKey}`
    : null;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: `1px solid ${
          item.featured ? COLORS.green : COLORS.border
        }`,
        background: item.featured ? COLORS.green : COLORS.white,
        color: item.featured ? COLORS.white : COLORS.text,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 14px 32px rgba(23,59,42,0.10)",
          borderColor: COLORS.orange,
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          "&:last-child": { pb: 3 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2.5}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 2.5,
              display: "grid",
              placeItems: "center",
              bgcolor: item.featured
                ? "rgba(255,255,255,0.14)"
                : COLORS.lightGreen,
              color: item.featured ? COLORS.white : COLORS.green,
              flexShrink: 0,
            }}
          >
            <Icon size={25} />
          </Box>

          {item.featured && (
            <Chip
              label={isOfficial ? "OFFICIAL" : "24 × 7"}
              size="small"
              sx={{
                bgcolor: COLORS.orange,
                color: COLORS.white,
                fontWeight: 700,
                fontSize: "0.68rem",
              }}
            />
          )}
        </Stack>

        <Typography
          variant="h6"
          fontWeight={800}
          sx={{
            mb: name ? 0.6 : 1,
            color: "inherit",
            fontSize: { xs: "1.05rem", sm: "1.15rem" },
          }}
        >
          {title}
        </Typography>

        {name && (
          <Typography
            variant="body2"
            sx={{
              color: item.featured
                ? "rgba(255,255,255,0.78)"
                : COLORS.muted,
              mb: 1.5,
              lineHeight: 1.7,
            }}
          >
            {name}
          </Typography>
        )}

        <Typography
          sx={{
            mt: name ? 1 : 2,
            mb: 2,
            fontSize: { xs: "1.45rem", sm: "1.7rem" },
            lineHeight: 1.35,
            fontWeight: 900,
            letterSpacing: 0.3,
            color: item.featured ? COLORS.white : COLORS.green,
            overflowWrap: "anywhere",
          }}
        >
          {number}
        </Typography>

        {phoneHref ? (
          <Button
            component="a"
            href={phoneHref}
            fullWidth
            variant="contained"
            startIcon={<Phone size={17} />}
            endIcon={<ArrowUpRight size={16} />}
            sx={{
              py: 1.15,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 800,
              bgcolor: item.featured ? COLORS.orange : COLORS.green,
              color: COLORS.white,
              boxShadow: "none",
              "&:hover": {
                bgcolor: item.featured
                  ? "#D96512"
                  : COLORS.darkGreen,
                boxShadow: "none",
              },
            }}
          >
            {callLabel}
          </Button>
        ) : (
          <Button
            fullWidth
            disabled
            variant="contained"
            startIcon={<Phone size={17} />}
            sx={{
              py: 1.15,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 800,
              "&.Mui-disabled": {
                bgcolor: "#E9EDE9",
                color: "#829087",
              },
            }}
          >
            {callLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function ContactSection({
  eyebrow,
  title,
  description,
  items,
  translate,
  isOfficial = false,
}) {
  return (
    <Box sx={{ mt: { xs: 5, md: 7 } }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          sx={{
            color: COLORS.orange,
            fontWeight: 800,
            letterSpacing: 1.5,
            fontSize: "0.78rem",
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: COLORS.green,
            fontWeight: 900,
            fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
            mb: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: COLORS.muted,
            maxWidth: 680,
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {description}
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {items.map((item) => (
          <Grid
            key={item.key}
            size={{
              xs: 12,
              sm: 6,
              md: isOfficial ? 6 : 4,
            }}
          >
            <ContactCard
              item={item}
              isOfficial={isOfficial}
              title={translate(`${item.key}.title`)}
              name={
                isOfficial
                  ? translate(`${item.key}.name`)
                  : undefined
              }
              number={translate(`${item.key}.number`)}
              callLabel={translate(`${item.key}.callLabel`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function EmergencyContactsPage() {
  const { t } = useTranslation("about/emergencyContacts");

  const ec = (key) =>
    t(`emergencyContacts.${key}`, { defaultValue: "" });

  const officialTranslate = (key) =>
    ec(`officialContacts.${key}`);

  const usefulTranslate = (key) =>
    ec(`usefulContacts.${key}`);

  return (
    <Box
      sx={{
        bgcolor: COLORS.cream,
        minHeight: "100vh",
        pb: 8,
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 65%, #28583C 100%)`,
          color: COLORS.white,
          py: { xs: 7, md: 10 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -130, md: 70 },
            top: -120,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.10)",
            right: { xs: -90, md: 110 },
            bottom: -150,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Chip
            icon={<AlertTriangle size={15} />}
            label={ec("heroBadge")}
            sx={{
              mb: 2.5,
              bgcolor: "rgba(255,255,255,0.12)",
              color: COLORS.white,
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: 700,
              "& .MuiChip-icon": {
                color: COLORS.orange,
              },
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: {
                xs: "2.1rem",
                sm: "2.8rem",
                md: "3.6rem",
              },
              lineHeight: 1.15,
              maxWidth: 760,
              mb: 2,
            }}
          >
            {ec("heroTitle")}
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: "rgba(255,255,255,0.82)",
              fontSize: {
                xs: "0.98rem",
                md: "1.1rem",
              },
              lineHeight: 1.9,
            }}
          >
            {ec("heroDescription")}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            mt={3.5}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Button
              component="a"
              href="tel:112"
              variant="contained"
              startIcon={<PhoneCall size={18} />}
              sx={{
                bgcolor: COLORS.orange,
                color: COLORS.white,
                px: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#D96512",
                },
              }}
            >
              {ec("call112")}
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Clock size={17} color="#F5B36F" />

              <Typography
                color="rgba(255,255,255,0.82)"
                variant="body2"
              >
                {ec("available")}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Emergency notice */}
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 3, md: 4 } }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
            p: { xs: 2, md: 2.5 },
            borderRadius: 3,
            bgcolor: "#FFF1E5",
            border: "1px solid #F4D4B8",
          }}
        >
          <Box sx={{ color: COLORS.orange, mt: 0.2 }}>
            <AlertTriangle size={25} />
          </Box>

          <Box>
            <Typography
              fontWeight={800}
              color={COLORS.text}
              mb={0.5}
            >
              {ec("noticeTitle")}
            </Typography>

            <Typography
              variant="body2"
              color={COLORS.muted}
              lineHeight={1.75}
            >
              {ec("noticeDescription")}
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Official contacts */}
      <Container maxWidth="lg">
        <ContactSection
          eyebrow={ec("officialContacts.eyebrow")}
          title={ec("officialContacts.title")}
          description={ec("officialContacts.description")}
          items={officialItems}
          translate={officialTranslate}
          isOfficial
        />

        {/* Emergency and useful contacts */}
        <ContactSection
          eyebrow={ec("usefulContacts.eyebrow")}
          title={ec("usefulContacts.title")}
          description={ec("usefulContacts.description")}
          items={usefulItems}
          translate={usefulTranslate}
        />
      </Container>

      {/* Emergency guidelines */}
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 6, md: 8 } }}
      >
        <Box
          sx={{
            bgcolor: COLORS.white,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            p: { xs: 2.5, sm: 4, md: 5 },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", sm: "center" }}
            mb={3}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: 2.5,
                bgcolor: COLORS.lightGreen,
                color: COLORS.green,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <HeartPulse size={27} />
            </Box>

            <Box>
              <Typography
                variant="h5"
                fontWeight={900}
                color={COLORS.green}
              >
                {ec("guidelinesTitle")}
              </Typography>

              <Typography
                color={COLORS.muted}
                variant="body2"
              >
                {ec("guidelinesDescription")}
              </Typography>
            </Box>
          </Stack>

          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((number) => (
              <Grid
                key={number}
                size={{ xs: 12, sm: 6 }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      bgcolor: COLORS.lightGreen,
                      color: COLORS.green,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    {number}
                  </Box>

                  <Typography
                    color={COLORS.text}
                    lineHeight={1.75}
                    sx={{ pt: 0.2 }}
                  >
                    {ec(`guidelines.${number}`)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Panchayat information note */}
      <Container
        maxWidth="lg"
        sx={{ mt: 3 }}
      >
        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            bgcolor: COLORS.lightGreen,
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          <PhoneCall
            size={23}
            color={COLORS.green}
          />

          <Box>
            <Typography
              fontWeight={800}
              color={COLORS.green}
              mb={0.5}
            >
              {ec("panchayatNoteTitle")}
            </Typography>

            <Typography
              variant="body2"
              color={COLORS.text}
              lineHeight={1.8}
            >
              {ec("panchayatNoteDescription")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
