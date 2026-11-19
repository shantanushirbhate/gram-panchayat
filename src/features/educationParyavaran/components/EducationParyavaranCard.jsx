
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { ArrowRight, Leaf } from "lucide-react";

const EducationParyavaranCard = ({ item }) => {
  const navigate = useNavigate();

  const Icon = item.icon || Leaf;

  return (
    <Card
      onClick={() => item.path && navigate(item.path)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: "1px solid #E5EDE6",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 5px 20px rgba(18,61,39,0.05)",
        cursor: item.path ? "pointer" : "default",
        transition: "all 0.3s ease",
        "&:hover": item.path
          ? {
              transform: "translateY(-6px)",
              boxShadow: "0 14px 30px rgba(18,61,39,0.12)",
              borderColor: "#E87519",
              "& .card-arrow": {
                transform: "translateX(5px)",
              },
            }
          : {},
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          flexGrow: 1,
          "&:last-child": {
            pb: { xs: 2.5, sm: 3 },
          },
        }}
      >
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EDF5EE",
            color: "#14532D",
            mb: 2.5,
          }}
        >
          <Icon size={27} strokeWidth={1.8} />
        </Box>

        <Typography
          component="h3"
          sx={{
            fontSize: { xs: 17, sm: 19 },
            fontWeight: 750,
            color: "#173B2A",
            mb: 1.2,
            lineHeight: 1.4,
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

        {item.path && (
          <Button
            disableRipple
            endIcon={
              <ArrowRight
                size={17}
                className="card-arrow"
                style={{ transition: "transform 0.3s ease" }}
              />
            }
            onClick={(event) => {
              event.stopPropagation();
              navigate(item.path);
            }}
            sx={{
              p: 0,
              color: "#14532D",
              fontWeight: 700,
              fontSize: 13,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#E87519",
              },
            }}
          >
            {item.buttonText}
          </Button>
        )}
      </CardContent>

      <Box
        sx={{
          height: 4,
          width: "100%",
          background: "linear-gradient(90deg, #14532D, #E87519)",
          opacity: 0.85,
        }}
      />
    </Card>
  );
};

export default EducationParyavaranCard;
