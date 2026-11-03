
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
  Stack,
  Chip,
} from "@mui/material";

import {
  X,
  Images,
  Camera,
  ArrowUpRight,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#FF9933",
  white: "#FFFFFF",
  text: "#263B30",
  muted: "#64748B",
  background: "#F7F9F7",
  border: "#E5EDE7",
};

const INITIAL_VISIBLE_IMAGES = 6;

const galleryImages = [
  {
    id: 1,
    category: "village",
    title: "Traditional Indian Village",
    image:
      "https://www.renuka-voyagerforlife.com/wp-content/uploads/2019/12/IMG-Dehna-Shahpur-District.jpg",
  },
  {
    id: 2,
    category: "village",
    title: "Maharashtra Village Street",
    image:
      "https://media.assettype.com/deccanherald/import/sites/dh/files/articleimages/2022/11/25/istock-468861698-1-1165615-1669370304.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200",
  },
  {
    id: 3,
    category: "agriculture",
    title: "Indian Rural Bullock Cart",
    image:
      "https://images.unsplash.com/photo-1604491671692-bb9413a6003b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    category: "agriculture",
    title: "Traditional Farming in Maharashtra",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2015-04/21/full/1429604783-413.jpg",
  },
  {
    id: 5,
    category: "village",
    title: "Rural Life in Maharashtra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rural_girl_riding_a_bullock_cart_in_village%2C_Beed%2C_Maharashtra.jpg/1200px-Rural_girl_riding_a_bullock_cart_in_village%2C_Beed%2C_Maharashtra.jpg",
  },
  {
    id: 6,
    category: "nature",
    title: "Indian Rural Green Fields",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/794607/TripDocument/1556621112_fireflies4.png",
  },
  {
    id: 7,
    category: "development",
    title: "Rural Water and Transportation",
    image:
      "https://media.assettype.com/indiawaterportal%2F2025-08-07%2Fk8ig0ngu%2FScreenshot-2025-08-07-122216.png",
  },
  {
    id: 8,
    category: "nature",
    title: "Indian Countryside",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];

function GalleryPage() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

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

  const visibleImages = showAllImages
    ? filteredImages
    : filteredImages.slice(0, INITIAL_VISIBLE_IMAGES);

  const remainingImages = Math.max(
    filteredImages.length - INITIAL_VISIBLE_IMAGES,
    0
  );

  const closePreview = () => setSelectedImage(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAllImages(false);
  };

  const toggleImages = () => {
    setShowAllImages((previous) => !previous);
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO SECTION ================= */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(circle at 10% 20%, rgba(255,153,51,0.15), transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.09), transparent 30%),
            linear-gradient(135deg, ${COLORS.darkGreen} 0%, ${COLORS.green} 60%, #28563D 100%)
          `,
          py: { xs: 7, sm: 9, md: 11 },
          textAlign: "center",
        }}
      >
        {/* Decorative circles */}

        <Box
          sx={{
            position: "absolute",
            width: { xs: 150, md: 280 },
            height: { xs: 150, md: 280 },
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
            top: { xs: -80, md: -130 },
            left: { xs: -70, md: -100 },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 200, md: 350 },
            height: { xs: 200, md: 350 },
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "50%",
            bottom: { xs: -130, md: -180 },
            right: { xs: -100, md: -120 },
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Box
            sx={{
              width: { xs: 62, sm: 76 },
              height: { xs: 62, sm: 76 },
              mx: "auto",
              mb: 2.5,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFB45E",
              backdropFilter: "blur(10px)",
            }}
          >
            <Images size={36} />
          </Box>

          <Typography
            sx={{
              color: "#FFB45E",
              fontWeight: 800,
              fontSize: { xs: 12, sm: 14 },
              letterSpacing: { xs: 1.5, sm: 2.5 },
              mb: 1.5,
            }}
          >
            {t("gallery.label")}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: COLORS.white,
              fontWeight: 900,
              fontSize: {
                xs: 30,
                sm: 42,
                md: 54,
              },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {t("gallery.title")}
          </Typography>

          <Box
            sx={{
              width: 65,
              height: 4,
              backgroundColor: COLORS.orange,
              borderRadius: 5,
              mx: "auto",
              mb: 2.5,
            }}
          />

          <Typography
            sx={{
              color: "#D5E3D9",
              maxWidth: 680,
              mx: "auto",
              fontSize: { xs: 14, sm: 16, md: 17 },
              lineHeight: 1.9,
              px: { xs: 1, sm: 2 },
            }}
          >
            {t("gallery.description")}
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ mt: 3 }}
          >
            <ImageIcon size={18} color="#FFB45E" />

            <Typography
              sx={{
                color: COLORS.white,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {galleryImages.length} Photos
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ================= GALLERY SECTION ================= */}

      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Section Heading */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ mb: 1.5 }}
          >
            <Sparkles size={17} color={COLORS.orange} />

            <Typography
              sx={{
                color: COLORS.orange,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: 1.5,
              }}
            >
              {t("gallery.sectionLabel")}
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: {
                xs: 25,
                sm: 32,
                md: 40,
              },
              mb: 1.5,
            }}
          >
            {t("gallery.sectionTitle")}
          </Typography>

          <Typography
            sx={{
              color: COLORS.muted,
              fontSize: { xs: 13, sm: 15 },
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.8,
              px: { xs: 1, sm: 0 },
            }}
          >
            {t("gallery.sectionDescription")}
          </Typography>
        </Box>

        {/* ================= CATEGORY FILTERS ================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            mb: { xs: 4, md: 5 },
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <Button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                variant="outlined"
                sx={{
                  minWidth: "auto",
                  borderRadius: 50,
                  px: { xs: 2, sm: 2.8 },
                  py: { xs: 0.8, sm: 1.1 },
                  fontSize: { xs: 12, sm: 14 },
                  textTransform: "none",
                  fontWeight: 800,
                  borderWidth: 1,
                  borderColor: isActive
                    ? COLORS.green
                    : "#D5DFD8",
                  color: isActive
                    ? COLORS.white
                    : COLORS.green,
                  backgroundColor: isActive
                    ? COLORS.green
                    : COLORS.white,
                  boxShadow: isActive
                    ? "0 5px 15px rgba(23,59,42,0.16)"
                    : "none",
                  "&:hover": {
                    backgroundColor: isActive
                      ? "#24583D"
                      : "#F0F5F1",
                    borderColor: COLORS.green,
                  },
                  transition: "all 0.25s ease",
                }}
              >
                {category.label}
              </Button>
            );
          })}
        </Box>

        {/* Gallery Count */}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2.5 }}
        >
          <Typography
            sx={{
              color: COLORS.green,
              fontWeight: 800,
              fontSize: { xs: 14, sm: 17 },
            }}
          >
            {t("gallery.sectionTitle")}
          </Typography>

          <Chip
            label={`${filteredImages.length} Photos`}
            size="small"
            sx={{
              color: COLORS.green,
              backgroundColor: "#E8F0E9",
              fontWeight: 800,
              borderRadius: 1.5,
              px: 0.5,
            }}
          />
        </Stack>

        {/* ================= RESPONSIVE IMAGE GRID ================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 2.5, sm: 3, md: 3.5 },
          }}
        >
          {visibleImages.map((image) => (
            <Card
              key={image.id}
              component="button"
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`View ${image.title}`}
              elevation={0}
              sx={{
                display: "block",
                width: "100%",
                minWidth: 0,
                padding: 0,
                border: "1px solid #E7EDE8",
                font: "inherit",
                textAlign: "left",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: { xs: 2.5, md: 3.5 },
                backgroundColor: COLORS.white,
                boxShadow: "0 5px 20px rgba(16,45,32,0.05)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: { xs: "none", md: "translateY(-7px)" },
                  boxShadow: "0 18px 35px rgba(16,45,32,0.13)",
                  borderColor: "#F5B477",
                },
                "&:hover .gallery-image": {
                  transform: { xs: "none", md: "scale(1.08)" },
                },
                "&:focus-visible": {
                  outline: `3px solid ${COLORS.orange}`,
                  outlineOffset: 3,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: {
                    xs: "4 / 3",
                    sm: "5 / 4",
                    md: "4 / 3",
                  },
                  backgroundColor: "#E8EEE9",
                }}
              >
                <CardMedia
                  component="img"
                  className="gallery-image"
                  image={image.image}
                  alt={image.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                />

                {/* Image Overlay */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0.75) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    p: { xs: 2, sm: 2.5 },
                  }}
                >
                  <Box sx={{ minWidth: 0, pr: 1 }}>
                    <Typography
                      sx={{
                        color: COLORS.white,
                        fontWeight: 800,
                        fontSize: { xs: 16, sm: 18, md: 20 },
                        overflowWrap: "anywhere",
                      }}
                    >
                      {image.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 12,
                        mt: 0.5,
                      }}
                    >
                      {t(`gallery.categories.${image.category}`)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: COLORS.orange,
                      color: COLORS.white,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowUpRight size={21} />
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* ================= SHOW MORE / SHOW LESS ================= */}

        {remainingImages > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, sm: 5, md: 6 },
            }}
          >
            <Button
              onClick={toggleImages}
              variant="contained"
              endIcon={
                showAllImages ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )
              }
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.2, sm: 1.5 },
                borderRadius: 50,
                backgroundColor: COLORS.green,
                color: COLORS.white,
                fontWeight: 800,
                fontSize: { xs: 13, sm: 15 },
                textTransform: "none",
                boxShadow: "0 6px 18px rgba(23,59,42,0.18)",
                "&:hover": {
                  backgroundColor: "#24583D",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 24px rgba(23,59,42,0.23)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {showAllImages
                ? "Show Less"
                : `Show ${remainingImages} More`}
            </Button>
          </Box>
        )}

        {/* Empty State */}

        {filteredImages.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              px: 2,
              backgroundColor: COLORS.white,
              borderRadius: 3,
              border: "1px dashed #CBD5CE",
            }}
          >
            <Images size={40} color={COLORS.orange} />

            <Typography
              sx={{
                mt: 2,
                color: COLORS.green,
                fontWeight: 800,
              }}
            >
              {t("gallery.noImages")}
            </Typography>
          </Box>
        )}
      </Container>

      {/* ================= IMAGE PREVIEW DIALOG ================= */}

      <Dialog
        open={Boolean(selectedImage)}
        onClose={closePreview}
        maxWidth="lg"
        fullWidth
        aria-labelledby="gallery-image-title"
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: { xs: "100%", sm: 900 },
            m: { xs: 1, sm: 2 },
            borderRadius: { xs: 2, sm: 3 },
            overflow: "hidden",
            backgroundColor: "#101A14",
          },
        }}
      >
        {selectedImage && (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={closePreview}
              aria-label="Close image preview"
              sx={{
                position: "absolute",
                top: { xs: 10, sm: 16 },
                right: { xs: 10, sm: 16 },
                zIndex: 3,
                color: COLORS.white,
                backgroundColor: "rgba(0,0,0,0.6)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.85)",
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
                height: { xs: "65vh", sm: "72vh", md: "75vh" },
                objectFit: "contain",
                display: "block",
                backgroundColor: "#101A14",
              }}
            />

            <Box
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                textAlign: "center",
                borderTop: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Typography
                id="gallery-image-title"
                sx={{
                  color: COLORS.white,
                  fontWeight: 800,
                  fontSize: { xs: 16, sm: 19 },
                }}
              >
                {selectedImage.title}
              </Typography>

              <Typography
                sx={{
                  color: "#B8C8BD",
                  fontSize: 13,
                  mt: 0.5,
                }}
              >
                {t(`gallery.categories.${selectedImage.category}`)}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>

      {/* ================= BOTTOM CTA ================= */}

      <Box
        sx={{
          pb: { xs: 6, sm: 7, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              background: `
                radial-gradient(circle at 90% 10%, rgba(255,153,51,0.16), transparent 30%),
                linear-gradient(120deg, ${COLORS.darkGreen}, ${COLORS.green})
              `,
              borderRadius: { xs: 3, md: 4 },
              px: { xs: 2.5, sm: 4, md: 6 },
              py: { xs: 4.5, sm: 5, md: 6 },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                top: -100,
                left: -70,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Camera size={38} color="#FFB45E" />

              <Typography
                variant="h2"
                sx={{
                  color: COLORS.white,
                  fontWeight: 900,
                  fontSize: { xs: 23, sm: 28, md: 34 },
                  mt: 2,
                  mb: 1.5,
                }}
              >
                {t("gallery.ctaTitle")}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E4D7",
                  maxWidth: 620,
                  mx: "auto",
                  fontSize: { xs: 13, sm: 15 },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {t("gallery.ctaDescription")}
              </Typography>

              <Button
                href="/contact"
                variant="contained"
                sx={{
                  backgroundColor: COLORS.orange,
                  color: COLORS.darkGreen,
                  fontWeight: 800,
                  px: { xs: 3, sm: 4 },
                  py: 1.4,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: { xs: 13, sm: 15 },
                  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                  "&:hover": {
                    backgroundColor: "#FFB45E",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                {t("gallery.ctaButton")}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default GalleryPage;
