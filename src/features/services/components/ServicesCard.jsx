
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const ServicesCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <Paper
      component={RouterLink}
      to={item.path}
      elevation={0}
      sx={{
        height: "100%",
        minHeight: 250,
        p: { xs: 2.5, sm: 3 },
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        borderRadius: 4,
        border: "1px solid #E5EDE7",
        backgroundColor: "#FFFFFF",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-7px)",
          borderColor: "#E87519",
          boxShadow: "0 14px 35px rgba(20,83,45,0.10)",
          "& .service-icon": {
            backgroundColor: "#14532D",
            color: "#FFFFFF",
          },
          "& .service-arrow": {
            transform: "translate(4px, -4px)",
            color: "#E87519",
          },
        },
        "&:focus-visible": {
          outline: "3px solid #E87519",
          outlineOffset: 3,
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        mb={2.5}
      >
        <Box
          className="service-icon"
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            display: "grid",
            placeItems: "center",
            backgroundColor: "#EDF5EF",
            color: "#14532D",
            transition: "all 0.3s ease",
          }}
        >
          {Icon && <Icon size={29} strokeWidth={1.8} />}
        </Box>

        <Box
          className="service-arrow"
          sx={{
            color: "#94A3B8",
            transition: "all 0.3s ease",
          }}
        >
          <ArrowUpRight size={22} />
        </Box>
      </Stack>

      <Typography
        component="h3"
        sx={{
          color: "#173B2A",
          fontSize: { xs: "1.08rem", sm: "1.18rem" },
          fontWeight: 800,
          lineHeight: 1.5,
          mb: 1,
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: "0.9rem",
          lineHeight: 1.8,
          mb: 2.5,
          flexGrow: 1,
        }}
      >
        {item.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          color: "#14532D",
          fontSize: "0.88rem",
          fontWeight: 800,
        }}
      >
        View Details
        <ArrowUpRight size={16} />
      </Box>
    </Paper>
  );
};

export default ServicesCard;
