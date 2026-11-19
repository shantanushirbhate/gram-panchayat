
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TransparencyCard({ item }) {
  const navigate = useNavigate();
  const Icon = item.icon;

  return (
    <Card
      onClick={() => navigate(item.path)}
      sx={{
        height: "100%",
        cursor: "pointer",
        borderRadius: 4,
        border: "1px solid #E7EEE8",
        backgroundColor: "#fff",
        boxShadow: "0 5px 22px rgba(20,83,45,0.06)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-7px)",
          boxShadow: "0 15px 35px rgba(20,83,45,0.13)",
          borderColor: "#14532D",
          "& .card-icon": {
            backgroundColor: "#14532D",
            color: "#fff",
          },
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, "&:last-child": { pb: 3 } }}>
        <Box
          className="card-icon"
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EAF4EC",
            color: "#14532D",
            mb: 2.5,
            transition: "all 0.3s ease",
          }}
        >
          {Icon && <Icon size={28} />}
        </Box>

        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            color: "#173B2A",
            fontSize: { xs: 18, sm: 20 },
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
            mb: 2.5,
          }}
        >
          {item.description}
        </Typography>

        <Button
          endIcon={<ArrowRight size={17} />}
          sx={{
            p: 0,
            color: "#E87519",
            fontWeight: 800,
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent", color: "#14532D" },
          }}
        >
          {item.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default TransparencyCard;
