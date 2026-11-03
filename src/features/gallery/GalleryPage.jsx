
import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";

import {
  X,
  Images,
  Camera,
  ArrowUpRight,
} from "lucide-react";

import { useTranslation } from "react-i18next";

const galleryImages = [
  {
    id: 1,
    category: "village",
    title: "Village View",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900",
  },
  {
    id: 2,
    category: "development",
    title: "Village Development",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
  },
  {
    id: 3,
    category: "nature",
    title: "Green Fields",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
  },
  {
    id: 4,
    category: "events",
    title: "Village Celebration",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
  },
  {
    id: 5,
    category: "village",
    title: "Village Life",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900",
  },
  {
    id: 6,
    category: "development",
    title: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
  },
  {
    id: 7,
    category: "nature",
    title: "Beautiful Nature",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
  },
  {
    id: 8,
    category: "events",
    title: "Community Event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
  },
];

function GalleryPage() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", label: t("gallery.categories.all") },
    { id: "village", label: t("gallery.categories.village") },
    { id: "development", label: t("gallery.categories.development") },
    { id: "events", label: t("gallery.categories.events") },
    { id: "nature", label: t("gallery.categories.nature") },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <Box sx={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(120deg, #FFF0DF 0%, #F0F5F1 100%)",
          py: { xs: 7, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: 65,
              height: 65,
              mx: "auto",
              mb: 2,
              borderRadius: 3,
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#C65A16",
            }}
          >
            <Images size={32} />
          </Box>

          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            {t("gallery.label")}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 30, sm: 38, md: 46 },
              mb: 2,
            }}
          >
            {t("gallery.title")}
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              maxWidth: 650,
              mx: "auto",
              fontSize: { xs: 14, sm: 16 },
              lineHeight: 1.8,
            }}
          >
            {t("gallery.description")}
          </Typography>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{
              color: "#C65A16",
              fontWeight: 700,
              fontSize: 14,
              mb: 1,
            }}
          >
            {t("gallery.sectionLabel")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#173B2A",
              fontWeight: 800,
              fontSize: { xs: 25, md: 34 },
              mb: 1.5,
            }}
          >
            {t("gallery.sectionTitle")}
          </Typography>

          <Typography sx={{ color: "#64748B", fontSize: 15 }}>
            {t("gallery.sectionDescription")}
          </Typography>
        </Box>

        {/* Category Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 5,
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={
                activeCategory === category.id
                  ? "contained"
                  : "outlined"
              }
              sx={{
                borderRadius: 50,
                px: 2.5,
                py: 1,
                textTransform: "none",
                fontWeight: 700,
                borderColor: "#D5DFD8",
                color:
                  activeCategory === category.id
                    ? "#FFFFFF"
                    : "#173B2A",
                backgroundColor:
                  activeCategory === category.id
                    ? "#173B2A"
                    : "#FFFFFF",
                "&:hover": {
                  backgroundColor:
                    activeCategory === category.id
                      ? "#24583D"
                      : "#F0F5F1",
                  borderColor: "#173B2A",
                },
              }}
            >
              {category.label}
            </Button>
          ))}
        </Box>

        {/* Image Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              onClick={() => setSelectedImage(image)}
              elevation={0}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 3,
                border: "1px solid #E2E8F0",
                position: "relative",
                "&:hover img": {
                  transform: "scale(1.08)",
                },
                "&:hover .gallery-overlay": {
                  opacity: 1,
                },
              }}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={image.image}
                  alt={image.title}
                  sx={{
                    height: { xs: 240, sm: 250, md: 260 },
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />

                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    opacity: { xs: 1, md: 0 },
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    p: 2.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 17,
                    }}
                  >
                    {image.title}
                  </Typography>

                  <ArrowUpRight color="#FFFFFF" size={22} />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <Typography textAlign="center" color="text.secondary">
            {t("gallery.noImages")}
          </Typography>
        )}
      </Container>

      {/* Image Preview Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
        aria-labelledby="gallery-image-title"
      >
        {selectedImage && (
          <Box sx={{ position: "relative", backgroundColor: "#111827" }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                color: "#FFFFFF",
                backgroundColor: "rgba(0,0,0,0.55)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.8)",
                },
              }}
            >
              <X />
            </IconButton>

            <Box
              component="img"
              src={selectedImage.image}
              alt={selectedImage.title}
              sx={{
                width: "100%",
                maxHeight: { xs: "70vh", md: "75vh" },
                objectFit: "contain",
                display: "block",
              }}
            />

            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography
                id="gallery-image-title"
                sx={{ color: "#FFFFFF", fontWeight: 700 }}
              >
                {selectedImage.title}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>

      {/* Bottom CTA */}
      <Box sx={{ pb: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#173B2A",
              borderRadius: 4,
              px: 3,
              py: { xs: 4, md: 5 },
              textAlign: "center",
            }}
          >
            <Camera size={35} color="#FFB45E" />

            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: { xs: 23, md: 30 },
                mt: 2,
                mb: 1.5,
              }}
            >
              {t("gallery.ctaTitle")}
            </Typography>

            <Typography
              sx={{
                color: "#D1E4D7",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {t("gallery.ctaDescription")}
            </Typography>

            <Button
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#FF9933",
                color: "#173B2A",
                fontWeight: 700,
                px: 3,
                py: 1.3,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#FFB45E",
                },
              }}
            >
              {t("gallery.ctaButton")}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default GalleryPage;
