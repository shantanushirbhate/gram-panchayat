
import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Paper,
  Typography,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";

import {
  UserRound,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

const COLORS = {
  green: "#14532D",
  orange: "#E87519",
  cream: "#FFF8EF",
  muted: "#64748B",
  border: "#E5EBE5",
};

function ProfileCard({ employee }) {
  const { t } = useTranslation("about/employeeList");

  const name =
    employee.name ||
    t("employeeList.card.namePending", {
      defaultValue: "Name not available",
    });

  const designation =
    employee.role ||
    t("employeeList.card.designationPending", {
      defaultValue: "Designation not available",
    });

  const department =
    employee.department ||
    t("employeeList.card.departmentPending", {
      defaultValue: "Department not available",
    });

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        minWidth: 0,
        overflow: "hidden",
        borderRadius: 4,
        border: `1px solid ${COLORS.border}`,
        bgcolor: "#FFFFFF",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: { xs: "none", md: "translateY(-6px)" },
          boxShadow: "0 15px 35px rgba(20,83,45,0.10)",
          borderColor: "#B8D2BE",
        },
      }}
    >
      {/* TOP ACCENT */}
      <Box
        sx={{
          height: 7,
          background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
        }}
      />

      <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
        <Stack alignItems="center" textAlign="center">
          {/* EMPLOYEE IMAGE */}
          <Avatar
            src={employee.image || undefined}
            alt={name}
            sx={{
              width: 112,
              height: 112,
              mb: 2,
              bgcolor: COLORS.cream,
              color: COLORS.green,
              border: "4px solid #EAF3EC",
            }}
          >
            {!employee.image && <UserRound size={48} />}
          </Avatar>

          {/* EMPLOYEE NAME */}
          <Typography
            component="h3"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: 18,
              lineHeight: 1.5,
              overflowWrap: "break-word",
            }}
          >
            {name}
          </Typography>

          {/* DESIGNATION */}
          <Chip
            label={designation}
            size="small"
            sx={{
              mt: 1.2,
              maxWidth: "100%",
              height: "auto",
              minHeight: 28,
              bgcolor: "#FFF0E3",
              color: COLORS.orange,
              fontWeight: 800,
              "& .MuiChip-label": {
                py: 0.7,
                whiteSpace: "normal",
                textAlign: "center",
              },
            }}
          />

          {/* DEPARTMENT */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 2,
              color: COLORS.muted,
              minWidth: 0,
              maxWidth: "100%",
            }}
          >
            <Building2 size={16} />

            <Typography
              sx={{
                fontSize: 13,
                overflowWrap: "anywhere",
              }}
            >
              {department}
            </Typography>
          </Stack>
        </Stack>

        {/* CONTACT DETAILS */}
        {(employee.phone || employee.email) && (
          <Box
            sx={{
              mt: 2.5,
              pt: 2,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {/* PHONE */}
            {employee.phone && (
              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{ mb: 1.2, minWidth: 0 }}
              >
                <Phone size={16} color={COLORS.green} />

                <Typography
                  component="a"
                  href={`tel:${employee.phone.replace(/\s/g, "")}`}
                  sx={{
                    color: COLORS.muted,
                    fontSize: 13,
                    textDecoration: "none",
                    overflowWrap: "anywhere",
                    "&:hover": {
                      color: COLORS.green,
                    },
                  }}
                >
                  {employee.phone}
                </Typography>
              </Stack>
            )}

            {/* EMAIL */}
            {employee.email && (
              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{ minWidth: 0 }}
              >
                <Mail size={16} color={COLORS.green} />

                <Typography
                  component="a"
                  href={`mailto:${employee.email}`}
                  sx={{
                    color: COLORS.muted,
                    fontSize: 13,
                    textDecoration: "none",
                    overflowWrap: "anywhere",
                    "&:hover": {
                      color: COLORS.green,
                    },
                  }}
                >
                  {employee.email}
                </Typography>
              </Stack>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default ProfileCard;
