
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

import {
  UsersRound,
  Building2,
  UserRound,
} from "lucide-react";

import ProfileCard from "../components/ProfileCard";

const COLORS = {
  green: "#14532D",
  darkGreen: "#0B2E1A",
  orange: "#E87519",
  cream: "#FFF8EF",
  muted: "#64748B",
  white: "#FFFFFF",
};

function EmployeeListPage() {
  const { t } = useTranslation("about/employeeList");

  // Employee information from the selected language JSON file.
  const employees = t("employeeList.employees", {
    returnObjects: true,
    defaultValue: [],
  });

  const employeeList = Array.isArray(employees) ? employees : [];

  // Translation helper with fallback values.
  const tr = (key, fallback) =>
    t(`employeeList.${key}`, {
      defaultValue: fallback,
    });

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        bgcolor: COLORS.white,
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 7, sm: 9, md: 12 },
          color: COLORS.white,
          background: `linear-gradient(120deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 65%, #287044 100%)`,

          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 220, md: 430 },
            height: { xs: 220, md: 430 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            right: { xs: -100, md: -70 },
            top: { xs: -100, md: -180 },
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            border: "35px solid rgba(255,255,255,0.04)",
            right: { xs: 20, md: 180 },
            bottom: -170,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 800, minWidth: 0 }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                display: "inline-flex",
                maxWidth: "100%",
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#FED7AA",
                px: 2,
                py: 1,
                borderRadius: 50,
                mb: 3,
              }}
            >
              <UsersRound size={17} />

              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: { xs: 0.5, sm: 1.5 },
                  overflowWrap: "anywhere",
                }}
              >
                {tr("hero.eyebrow", "OUR TEAM")}
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 32, sm: 46, md: 58 },
                fontWeight: 900,
                lineHeight: 1.5,
                mb: 2.5,
                overflowWrap: "anywhere",
              }}
            >
              {tr("hero.title", "Village Government Employees")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.84)",
                fontSize: { xs: 14, sm: 16, md: 18 },
                lineHeight: 2,
                maxWidth: 700,
                overflowWrap: "anywhere",
              }}
            >
              {tr(
                "hero.description",
                "Details and contact numbers of government employees serving our village."
              )}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                mt: 3.5,
                color: "#FED7AA",
                minWidth: 0,
              }}
            >
              <Building2 size={19} />

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 13.5 },
                  fontWeight: 800,
                  overflowWrap: "anywhere",
                }}
              >
                {tr(
                  "hero.location",
                  "Pimpalkhuta Budruk, Warud, Amravati"
                )}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* EMPLOYEE LIST SECTION */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        {/* SECTION HEADING */}
        <Box
          sx={{
            maxWidth: 750,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              color: COLORS.orange,
              fontWeight: 900,
              fontSize: 11,
              letterSpacing: 2,
              mb: 1.2,
              textTransform: "uppercase",
            }}
          >
            {tr("section.eyebrow", "OUR STAFF")}
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: COLORS.green,
              fontSize: { xs: 26, sm: 34, md: 40 },
              fontWeight: 900,
              lineHeight: 1.5,
              mb: 1.5,
              overflowWrap: "anywhere",
            }}
          >
            {tr(
              "section.title",
              "Village Government Employees and Their Contact Numbers"
            )}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 14, md: 15.5 },
              lineHeight: 2,
              overflowWrap: "anywhere",
            }}
          >
            {tr(
              "section.description",
              "Contact information of government employees working for our village."
            )}
          </Typography>
        </Box>

        {/* EMPLOYEE CARDS */}
        {employeeList.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2.5, md: 3 },
              width: "100%",
              minWidth: 0,
            }}
          >
            {employeeList.map((employee) => (
              <ProfileCard
                key={employee.id}
                employee={employee}
              />
            ))}
          </Box>
        ) : (
          /* EMPTY STATE */
          <Paper
            elevation={0}
            sx={{
              maxWidth: 760,
              mx: "auto",
              p: { xs: 3, sm: 5, md: 6 },
              borderRadius: 4,
              bgcolor: COLORS.cream,
              border: "1px solid #F1E6D9",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 76,
                height: 76,
                borderRadius: "22px",
                bgcolor: "#EAF3EC",
                color: COLORS.green,
                display: "grid",
                placeItems: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <UserRound size={36} />
            </Box>

            <Typography
              component="h3"
              sx={{
                color: COLORS.green,
                fontWeight: 900,
                fontSize: { xs: 20, md: 24 },
                mb: 1.5,
                lineHeight: 1.5,
              }}
            >
              {tr(
                "empty.title",
                "Employee Information Coming Soon"
              )}
            </Typography>

            <Typography
              sx={{
                color: COLORS.muted,
                fontSize: { xs: 13.5, md: 15 },
                lineHeight: 2,
                maxWidth: 560,
                mx: "auto",
              }}
            >
              {tr(
                "empty.description",
                "Employee details will be published after verification."
              )}
            </Typography>
          </Paper>
        )}
      </Container>

      {/* BOTTOM INFORMATION */}
      <Box
        sx={{
          bgcolor: "#F1F6F1",
          py: { xs: 5, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <UsersRound size={25} color={COLORS.green} />

            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 800,
                fontSize: { xs: 13, md: 15 },
                lineHeight: 2,
                overflowWrap: "anywhere",
              }}
            >
              {tr(
                "footer.message",
                "Our employees are committed to serving our village."
              )}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default EmployeeListPage;
