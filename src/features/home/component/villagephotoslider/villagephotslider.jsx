
import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../../assets/homesliderimage/1.jpeg";
import image2 from "../../../../assets/homesliderimage/2.jpeg";
import image3 from "../../../../assets/homesliderimage/3.jpeg";
import image4 from "../../../../assets/homesliderimage/4.jpeg";
import image5 from "../../../../assets/homesliderimage/5.jpeg";
import image6 from "../../../../assets/homesliderimage/6.jpeg";
import image7 from "../../../../assets/homesliderimage/7.jpeg";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#FF6820",
  cream: "#FFF8F0",
  muted: "#64748B",
  white: "#FFFFFF",
};

const villageImages = [
  { image: image1, title: "गावाचे सुंदर दृश्य", subtitle: "Beautiful Village View" },
  { image: image2, title: "गावाचा निसर्ग", subtitle: "Village Nature" },
  { image: image3, title: "ग्रामपंचायत परिसर", subtitle: "Gram Panchayat Area" },
  { image: image4, title: "गावातील विकासकामे", subtitle: "Village Development" },
  { image: image5, title: "आपले गाव", subtitle: "Our Beautiful Village" },
  { image: image6, title: "गावातील उपक्रम", subtitle: "Village Activities" },
  { image: image7, title: "निसर्गरम्य परिसर", subtitle: "Natural Surroundings" },
];

export default function VillagePhotSlider() {
  const [swiper, setSwiper] = useState(null);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, sm: 8, md: 10 },
        backgroundColor: COLORS.cream,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">

        {/* SECTION HEADING */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Typography
              sx={{
                color: COLORS.orange,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: 2,
                mb: 1,
              }}
            >
              OUR VILLAGE GALLERY
            </Typography>

            <Typography
              sx={{
                color: COLORS.green,
                fontWeight: 800,
                fontSize: { xs: 28, sm: 34, md: 42 },
                lineHeight: 1.2,
                mb: 1.5,
              }}
            >
              आमच्या गावाची सुंदर झलक
            </Typography>

            <Typography
              sx={{
                color: COLORS.muted,
                fontSize: { xs: 14, sm: 16 },
                lineHeight: 1.8,
              }}
            >
              आपल्या गावातील सुंदर क्षण, निसर्ग आणि विकासकामांची
              छायाचित्रे पाहा.
            </Typography>
          </Box>

          {/* OUTSIDE SLIDER ARROW BUTTONS */}
          <Stack direction="row" spacing={1.5}>
            <IconButton
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous images"
              sx={{
                width: 48,
                height: 48,
                border: `1px solid ${COLORS.green}`,
                color: COLORS.green,
                backgroundColor: "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: COLORS.green,
                  color: COLORS.white,
                  transform: "translateX(-3px)",
                },
              }}
            >
              <ChevronLeft size={24} />
            </IconButton>

            <IconButton
              onClick={() => swiper?.slideNext()}
              aria-label="Next images"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: COLORS.green,
                color: COLORS.white,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: COLORS.orange,
                  transform: "translateX(3px)",
                },
              }}
            >
              <ChevronRight size={24} />
            </IconButton>
          </Stack>
        </Stack>

        {/* IMAGE SLIDER */}
        <Box
          sx={{
            position: "relative",
            "& .swiper": {
              overflow: "visible",
              pb: 5,
            },
            "& .swiper-slide": {
              height: "auto",
            },
            "& .swiper-pagination": {
              bottom: "0px",
            },
            "& .swiper-pagination-bullet": {
              width: 8,
              height: 8,
              backgroundColor: COLORS.green,
              opacity: 0.3,
              transition: "all 0.3s ease",
            },
            "& .swiper-pagination-bullet-active": {
              width: 25,
              borderRadius: 10,
              opacity: 1,
              backgroundColor: COLORS.orange,
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={setSwiper}
            loop
            speed={900}
            spaceBetween={18}
            slidesPerView={1.15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
          >
            {villageImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 260, sm: 300, md: 340 },
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "#E5E7EB",
                    boxShadow: "0 8px 25px rgba(23,59,42,0.10)",
                    cursor: "pointer",
                    "&:hover .village-image": {
                      transform: "scale(1.08)",
                    },
                    "&:hover .village-image-overlay": {
                      opacity: 1,
                    },
                    "&:hover .village-image-arrow": {
                      transform: "translate(0, 0)",
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="village-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.7s ease",
                    }}
                  />

                  {/* IMAGE GRADIENT */}
                  <Box
                    className="village-image-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,35,20,0.92) 0%, rgba(10,35,20,0.25) 45%, transparent 75%)",
                      opacity: 0.9,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  {/* IMAGE NUMBER */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      color: COLORS.white,
                      backgroundColor: "rgba(23,59,42,0.75)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.5,
                      fontSize: 12,
                      fontWeight: 700,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  {/* IMAGE TITLE */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 20,
                      right: 20,
                      bottom: 20,
                      color: COLORS.white,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 17, md: 20 },
                        fontWeight: 800,
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {item.subtitle}
                      </Typography>

                      <Box
                        className="village-image-arrow"
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          backgroundColor: COLORS.orange,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transform: "translate(8px, 8px)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <ArrowUpRight size={19} color="white" />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
