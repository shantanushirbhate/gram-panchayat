
// src/Features/About/components/InformationCard.jsx

import { Card, CardContent, Box, Typography } from "@mui/material";

export default function InformationCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid #E6EDE7",
        borderRadius: 3,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: "#E87519",
          boxShadow: "0 12px 28px rgba(20,83,45,0.09)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            bgcolor: "#EDF5EF",
            color: "#14532D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {Icon && <Icon size={23} />}
        </Box>

        <Typography fontWeight={800} color="#173B2A" fontSize={17}>
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
