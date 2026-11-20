
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {
  Landmark,
  UserRound,
  Users,
  BriefcaseBusiness,
  Leaf,
  HeartPulse,
  Handshake,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  Scale,
} from "lucide-react";

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

const roleIcons = [
  Landmark,
  BriefcaseBusiness,
  Users,
];

const committeeIcons = [
  Droplets,
  HeartPulse,
  Scale,
  GraduationCap,
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <Box
      sx={{
        maxWidth: centered ? 760 : 820,
        mx: centered ? "auto" : 0,
        mb: 4,
        textAlign: centered ? "center" : "left",
      }}
    >
      <Typography
        sx={{
          color: COLORS.orange,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: 1.5,
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 800,
          fontSize: { xs: 25, sm: 30, md: 36 },
          lineHeight: 1.25,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: { xs: 14, sm: 15 },
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

function RoleCard({ role, index, roleLabel }) {
  const Icon = roleIcons[index];

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 14px 35px rgba(23,59,42,0.09)",
          borderColor: "#B7D1BE",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3.5 },
          "&:last-child": { pb: 3.5 },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Box
            sx={{
              width: 54,
              height: 54,
              borderRadius: 2.5,
              bgcolor: COLORS.lightGreen,
              color: COLORS.green,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={26} />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 800,
                fontSize: { xs: 17, sm: 19 },
                lineHeight: 1.4,
              }}
            >
              {role.title}
            </Typography>

            <Typography
              sx={{
                color: COLORS.orange,
                fontSize: 12,
                fontWeight: 700,
                mt: 0.4,
              }}
            >
              {roleLabel}
            </Typography>
          </Box>
        </Stack>

        <Divider
          sx={{
            borderColor: COLORS.border,
            mb: 2.2,
          }}
        />

        <Stack spacing={1.7}>
          {role.points.map((point, pointIndex) => (
            <Stack
              key={pointIndex}
              direction="row"
              spacing={1.2}
              alignItems="flex-start"
            >
              <CheckCircle2
                size={18}
                color={COLORS.orange}
                style={{
                  flexShrink: 0,
                  marginTop: 3,
                }}
              />

              <Typography
                sx={{
                  color: COLORS.text,
                  fontSize: { xs: 13.5, sm: 14 },
                  lineHeight: 1.8,
                }}
              >
                {point}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

function CommitteeCard({ committee, index }) {
  const Icon = committeeIcons[index];

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        bgcolor: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 3,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(23,59,42,0.08)",
          borderColor: "#B7D1BE",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          "&:last-child": { pb: 3 },
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2.5,
            bgcolor: COLORS.lightGreen,
            color: COLORS.green,
            display: "grid",
            placeItems: "center",
            mb: 2,
          }}
        >
          <Icon size={24} />
        </Box>

        <Typography
          sx={{
            color: COLORS.green,
            fontWeight: 800,
            fontSize: { xs: 16, sm: 18 },
            lineHeight: 1.5,
            mb: 1,
          }}
        >
          {committee.title}
        </Typography>

        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          {committee.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function RolesAndResponsibilitiesPage() {
  const { t } = useTranslation("about/rolesResponsibilities");

  const tr = (key) =>
    t(`rolesResponsibilities.${key}`, {
      defaultValue: "",
    });

  const roles = [
    {
      key: "sarpanchDeputy",
      points: [
        tr("roles.sarpanchDeputy.points.one"),
        tr("roles.sarpanchDeputy.points.two"),
        tr("roles.sarpanchDeputy.points.three"),
        tr("roles.sarpanchDeputy.points.four"),
        tr("roles.sarpanchDeputy.points.five"),
      ],
    },
    {
      key: "officer",
      points: [
        tr("roles.officer.points.one"),
        tr("roles.officer.points.two"),
        tr("roles.officer.points.three"),
        tr("roles.officer.points.four"),
        tr("roles.officer.points.five"),
      ],
    },
    {
      key: "members",
      points: [
        tr("roles.members.points.one"),
        tr("roles.members.points.two"),
        tr("roles.members.points.three"),
        tr("roles.members.points.four"),
        tr("roles.members.points.five"),
      ],
    },
  ].map((role) => ({
    ...role,
    title: tr(`roles.${role.key}.title`),
  }));

  const committees = [
    "waterSupply",
    "healthNutrition",
    "disputeFree",
    "education",
  ].map((key) => ({
    key,
    title: tr(`committees.${key}.title`),
    description: tr(`committees.${key}.description`),
  }));

  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 65%, #285B3D 100%)`,
          py: { xs: 7, sm: 9, md: 12 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 420 },
            height: { xs: 220, md: 420 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -100, md: -80 },
            top: -150,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 160, md: 280 },
            height: { xs: 160, md: 280 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            right: { xs: -50, md: 80 },
            bottom: -170,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 35,
                height: 3,
                bgcolor: COLORS.orange,
                borderRadius: 5,
              }}
            />

            <Typography
              sx={{
                color: "#F9C28F",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.6,
              }}
            >
              {tr("hero.eyebrow")}
            </Typography>
          </Stack>

          <Typography
            component="h1"
            sx={{
              color: COLORS.white,
              fontWeight: 900,
              fontSize: {
                xs: 32,
                sm: 42,
                md: 54,
              },
              lineHeight: 1.18,
              maxWidth: 850,
              mb: 2.5,
            }}
          >
            {tr("hero.title")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: {
                xs: 15,
                sm: 17,
              },
              lineHeight: 1.9,
              maxWidth: 760,
            }}
          >
            {tr("hero.description")}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1.2}
            sx={{ mt: 3.5 }}
          >
            <Chip
              icon={<Users size={16} />}
              label={tr("hero.chipOne")}
              sx={{
                color: COLORS.white,
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                "& .MuiChip-icon": {
                  color: "#F9C28F",
                },
              }}
            />

            <Chip
              icon={<ShieldCheck size={16} />}
              label={tr("hero.chipTwo")}
              sx={{
                color: COLORS.white,
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                "& .MuiChip-icon": {
                  color: "#F9C28F",
                },
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* KEY ROLES */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          bgcolor: COLORS.cream,
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={tr("roles.eyebrow")}
            title={tr("roles.sectionTitle")}
            description={tr("roles.sectionDescription")}
            centered
          />

          <Grid container spacing={2.5}>
            {roles.map((role, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={role.key}
              >
                <RoleCard
                  role={role}
                  index={index}
                  roleLabel={tr("roles.roleLabel")}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* COMMITTEES */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          bgcolor: COLORS.white,
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={tr("committees.eyebrow")}
            title={tr("committees.title")}
            description={tr("committees.description")}
            centered
          />

          <Grid container spacing={2.5}>
            {committees.map((committee, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={committee.key}
              >
                <CommitteeCard
                  committee={committee}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
