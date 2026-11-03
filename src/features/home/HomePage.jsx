
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  LinearProgress,
  Divider,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import MinisterSection from "./component/villagephotoslider/ministerphotos";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// HERO SLIDER IMAGES
import heroImage1 from "../../assets/ceremanyimages/202405061632141092-1024x683.jpg";
import heroImage2 from "../../assets/ceremanyimages/496115-pti12052024000234b.webp";
import heroImage3 from "../../assets/ceremanyimages/images (2).jfif";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Users,
  Sprout,
  Ruler,
  FileText,
  HeartPulse,
  Droplets,
  GraduationCap,
  Sun,
  Building2,
  Clock,
  Landmark,
  House,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import VillagePhotSlider from "./component/villagephotoslider/villagephotslider";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#FF6820",
  saffron: "#FFE0B2",
  cream: "#FFF8F0",
  lightGreen: "#F0F5F1",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

// HERO SLIDES
const heroSlides = [
  {
    subtitle: "सेवा • समर्पण • पारदर्शकता",
    subtitleEn: "SERVICE • DEDICATION • TRANSPARENCY",

    title: "पिंपळखुटा बु. ग्रामपंचायतीमध्ये आपले स्वागत आहे",
    titleEn: "Welcome to Gram Panchayat Pimpalkhuta Budruk",

    description:
      "गावाचा विकास, नागरिकांना सुविधा आणि पारदर्शक प्रशासन हेच आमचे ध्येय.",

    descriptionEn:
      "Working towards village development, better public services and transparent administration.",

    image: heroImage1,

    button: "गावाबद्दल जाणून घ्या",
    buttonEn: "Explore Our Village",

    link: "/about",
  },

  {
    subtitle: "आपले गाव • आपली जबाबदारी",
    subtitleEn: "OUR VILLAGE • OUR RESPONSIBILITY",

    title: "स्वच्छ, सुंदर आणि विकसित गाव",
    titleEn: "Towards a Clean, Green and Developed Village",

    description:
      "स्वच्छता, पाणीपुरवठा, आरोग्य आणि मूलभूत सुविधांच्या विकासासाठी ग्रामपंचायत कटिबद्ध आहे.",

    descriptionEn:
      "Committed to improving sanitation, water supply, healthcare and essential village infrastructure.",

    image: heroImage2,

    button: "आमचे उपक्रम",
    buttonEn: "Our Services",

    link: "/services",
  },

  {
    subtitle: "कृषी • संस्कृती • विकास",
    subtitleEn: "AGRICULTURE • CULTURE • DEVELOPMENT",

    title: "समृद्ध गावासाठी एकत्रित प्रयत्न",
    titleEn: "Together for a Better Village",

    description:
      "कृषीप्रधान गावाची परंपरा जपत शिक्षण, आरोग्य आणि विकासाच्या दिशेने वाटचाल.",

    descriptionEn:
      "Preserving our agricultural roots while moving forward in education, healthcare and development.",

    image: heroImage3,

    button: "फोटो गॅलरी",
    buttonEn: "Explore Gallery",

    link: "/gallery",
  },
];

// VILLAGE STATISTICS
const villageStats = [
  {
    icon: Users,
    value: "1,244",
    title: "एकूण लोकसंख्या",
    titleEn: "Group Panchayat Population",
    description: "गट ग्रामपंचायत बावरूळी",
    descriptionEn: "Group Gram Panchayat Bawurli",
  },
  {
    icon: Ruler,
    value: "25.67",
    title: "क्षेत्रफळ",
    titleEn: "Geographical Area",
    description: "चौ. कि.मी.",
    descriptionEn: "Square kilometres",
  },
  {
    icon: Sprout,
    value: "कृषी",
    title: "मुख्य व्यवसाय",
    titleEn: "Main Occupation",
    description: "शेती आणि कृषी व्यवसाय",
    descriptionEn: "Agriculture and farming",
  },
  {
    icon: Landmark,
    value: "1959",
    title: "ग्रामपंचायत स्थापना",
    titleEn: "Gram Panchayat Since",
    description: "समाजसेवेचा प्रवास",
    descriptionEn: "Years of community service",
  },
];

// DEVELOPMENT PROGRESS
const progressItems = [
  {
    icon: HeartPulse,
    title: "लसीकरण पूर्ण",
    titleEn: "Vaccination Completed",
    value: 95,
  },
  {
    icon: ShieldCheck,
    title: "हागणदारी मुक्त",
    titleEn: "Open Defecation Free",
    value: 100,
  },
  {
    icon: Sun,
    title: "सौर पथदिवे",
    titleEn: "Solar Street Lights",
    value: 85,
  },
  {
    icon: GraduationCap,
    title: "डिजिटल साक्षरता",
    titleEn: "Digital Literacy",
    value: 70,
  },
];

// PUBLIC SERVICES
const services = [
  {
    icon: FileText,
    title: "जन्म नोंदणी",
    titleEn: "Birth Registration",
    fee: "₹20",
    time: "7 दिवस",
    timeEn: "7 days",
  },
  {
    icon: FileText,
    title: "मृत्यू नोंदणी",
    titleEn: "Death Registration",
    fee: "₹20",
    time: "3 कार्यदिवस",
    timeEn: "3 working days",
  },
  {
    icon: Users,
    title: "विवाह नोंदणी",
    titleEn: "Marriage Registration",
    fee: "₹20",
    time: "7–15 दिवस",
    timeEn: "7–15 days",
  },
  {
    icon: House,
    title: "रहिवासी दाखला",
    titleEn: "Residency Certificate",
    fee: "₹25",
    time: "3 कार्यदिवस",
    timeEn: "3 working days",
  },
];

// SECTION HEADING
function SectionHeading({ subtitle, title, description, english }) {
  return (
    <Box textAlign="center" sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 800,
          fontSize: 14,
          mb: 1,
          letterSpacing: 1,
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        sx={{
          color: COLORS.green,
          fontWeight: 800,
          fontSize: { xs: 25, sm: 30, md: 36 },
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      {english && (
        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: { xs: 13, md: 15 },
            mt: 0.5,
            fontWeight: 600,
          }}
        >
          {english}
        </Typography>
      )}

      {description && (
        <Typography
          color="text.secondary"
          sx={{
            mt: 1.5,
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.8,
            fontSize: 14,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

function HomePage() {
  const { i18n } = useTranslation();

  const isMarathi = i18n.language?.startsWith("mr");

  const text = (marathi, english) =>
    isMarathi ? marathi : english;

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* HERO SLIDER */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",

          "& .home-hero-swiper": {
            width: "100%",
            height: "100%",
          },

          "& .home-hero-swiper .swiper-slide": {
            height: "auto",
          },

          "& .swiper-pagination": {
            bottom: "25px !important",
          },

          "& .swiper-pagination-bullet": {
            width: 9,
            height: 9,
            backgroundColor: "#FFFFFF",
            opacity: 0.65,
          },

          "& .swiper-pagination-bullet-active": {
            width: 28,
            borderRadius: 5,
            backgroundColor: "#FF9933",
            opacity: 1,
          },
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          speed={900}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          pagination={{
            clickable: true,
          }}
          allowTouchMove
          className="home-hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",

                  // FULL WIDTH AND RESPONSIVE HEIGHT
                  width: "100%",
                  height: {
                    xs: "75vh",
                    sm: "85vh",
                    md: "90vh",
                  },

                  minHeight: {
                    xs: 550,
                    sm: 600,
                    md: 650,
                  },

                  maxHeight: 900,

                  display: "flex",
                  alignItems: "center",

                  // FULL BACKGROUND IMAGE
                  backgroundImage: `
                    linear-gradient(
                      90deg,
                      rgba(10, 35, 20, 0.85) 0%,
                      rgba(10, 35, 20, 0.60) 50%,
                      rgba(10, 35, 20, 0.15) 100%
                    ),
                    url("${slide.image}")
                  `,

                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Container maxWidth="xl">
                  <Box
                    sx={{
                      maxWidth: 780,
                      py: { xs: 8, md: 11 },
                      pb: { xs: 10, md: 12 },
                    }}
                  >
                    <Chip
                      label={text(slide.subtitle, slide.subtitleEn)}
                      sx={{
                        mb: 3,
                        backgroundColor: COLORS.saffron,
                        color: "#78350F",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        borderRadius: 1.5,
                      }}
                    />

                    <Typography
                      sx={{
                        color: COLORS.white,
                        fontWeight: 900,
                        fontSize: {
                          xs: 31,
                          sm: 43,
                          md: 57,
                        },
                        lineHeight: 1.25,
                        mb: 2.5,
                        maxWidth: 750,
                      }}
                    >
                      {text(slide.title, slide.titleEn)}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#F1F5F9",
                        fontSize: {
                          xs: 15,
                          md: 18,
                        },
                        lineHeight: 1.9,
                        maxWidth: 650,
                        mb: 4,
                      }}
                    >
                      {text(slide.description, slide.descriptionEn)}
                    </Typography>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >
                      <Button
                        component={Link}
                        to={slide.link}
                        variant="contained"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                          backgroundColor: COLORS.orange,
                          color: COLORS.white,
                          px: 3.5,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 700,
                          width: { xs: "fit-content", sm: "auto" },
                          "&:hover": {
                            backgroundColor: "#E85B16",
                          },
                        }}
                      >
                        {text(slide.button, slide.buttonEn)}
                      </Button>

                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        sx={{
                          color: COLORS.white,
                          borderColor: COLORS.white,
                          px: 3.5,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 700,
                          width: { xs: "fit-content", sm: "auto" },
                          "&:hover": {
                            borderColor: COLORS.saffron,
                            backgroundColor: "rgba(255,255,255,0.12)",
                          },
                        }}
                      >
                        {text("संपर्क साधा", "Contact Us")}
                      </Button>
                    </Stack>
                  </Box>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VILLAGE LOCATION LABEL */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 65, md: 75 },
            right: { xs: 16, md: 55 },
            zIndex: 5,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(255,255,255,0.95)",
            px: 2,
            py: 1.2,
            borderRadius: 2,
          }}
        >
          <MapPin size={18} color={COLORS.orange} />

          <Typography
            fontWeight={700}
            fontSize={13}
            color={COLORS.green}
          >
            {text(
              "वरुड, अमरावती, महाराष्ट्र",
              "Warud, Amravati, Maharashtra"
            )}
          </Typography>
        </Box>
      </Box>

      {/* CONTINUOUS ANNOUNCEMENT BAR */}
      <Box
        sx={{
          backgroundColor: COLORS.green,
          color: COLORS.white,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          minHeight: { xs: 48, sm: 54 },
          borderBottom: `3px solid ${COLORS.orange}`,

          "&:hover .announcement-track": {
            animationPlayState: "paused",
          },

          "@media (prefers-reduced-motion: reduce)": {
            "& .announcement-track": {
              animation: "none",
            },
          },

          "@keyframes blinkStar": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.3 },
          },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            backgroundColor: COLORS.orange,
            color: COLORS.white,
            px: { xs: 1.5, sm: 2.5 },
            py: 1.5,
            fontWeight: 900,
            fontSize: { xs: 12, sm: 14 },
            zIndex: 2,
            position: "relative",
          }}
        >
          {text("महत्त्वाच्या सूचना", "ANNOUNCEMENTS")}
        </Box>

        <Box
          className="announcement-track"
          sx={{
            display: "flex",
            width: "max-content",
            flexShrink: 0,
            animation: "announcementScroll 28s linear infinite",

            "@keyframes announcementScroll": {
              "0%": {
                transform: "translateX(0)",
              },
              "100%": {
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          {[0, 1].map((group) => (
            <Stack
              key={group}
              direction="row"
              alignItems="center"
              spacing={5}
              sx={{
                pr: 5,
                whiteSpace: "nowrap",
              }}
              aria-hidden={group === 1}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Box
                  component="span"
                  sx={{
                    animation: "blinkStar 1s infinite",
                  }}
                >
                  ⭐
                </Box>

                <Typography
                  component="span"
                  fontWeight={800}
                  fontSize={{ xs: 12, sm: 14 }}
                >
                  {text(
                    "ग्रामसभा नोटीस - मार्च 2026",
                    "Gram Sabha Notice - March 2026"
                  )}
                </Typography>

                <Chip
                  label="🆕 New"
                  size="small"
                  sx={{
                    height: 23,
                    backgroundColor: "#FDE68A",
                    color: "#78350F",
                    fontWeight: 900,
                    fontSize: 11,
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Box component="span">⭐</Box>

                <Typography
                  component="span"
                  fontWeight={800}
                  fontSize={{ xs: 12, sm: 14 }}
                >
                  {text(
                    "प्रधानमंत्री आवास योजना - नोंदणी सुरू",
                    "Pradhan Mantri Awas Yojana - Registration Open"
                  )}
                </Typography>

                <Chip
                  label="🆕 New"
                  size="small"
                  sx={{
                    height: 23,
                    backgroundColor: "#FDE68A",
                    color: "#78350F",
                    fontWeight: 900,
                    fontSize: 11,
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Box component="span">⭐</Box>

                <Typography
                  component="span"
                  fontWeight={800}
                  fontSize={{ xs: 12, sm: 14 }}
                >
                  {text(
                    "ग्रामसभा नोटीस - मार्च 2026",
                    "Gram Sabha Notice - March 2026"
                  )}
                </Typography>

                <Chip
                  label="🆕 New"
                  size="small"
                  sx={{
                    height: 23,
                    backgroundColor: "#FDE68A",
                    color: "#78350F",
                    fontWeight: 900,
                    fontSize: 11,
                  }}
                />
              </Stack>
            </Stack>
          ))}
        </Box>
      </Box>

      {/* OUR VILLAGE SECTION */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: COLORS.cream,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            borderRadius: "50%",
            backgroundColor: "rgba(255,104,32,0.06)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -120,
            left: -100,
            width: { xs: 200, md: 350 },
            height: { xs: 200, md: 350 },
            borderRadius: "50%",
            backgroundColor: "rgba(23,59,42,0.05)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Chip
                icon={<Leaf size={16} />}
                label={text(
                  "आपले गाव • आपली ओळख",
                  "OUR VILLAGE • OUR IDENTITY"
                )}
                sx={{
                  mb: 2.5,
                  px: 1,
                  height: 36,
                  borderRadius: 2,
                  backgroundColor: "#E7EFE8",
                  color: COLORS.green,
                  fontWeight: 800,
                  "& .MuiChip-icon": {
                    color: COLORS.orange,
                  },
                }}
              />

              <Typography
                sx={{
                  color: COLORS.green,
                  fontSize: {
                    xs: 30,
                    sm: 36,
                    md: 43,
                  },
                  lineHeight: 1.25,
                  fontWeight: 900,
                  mb: 1.5,
                }}
              >
                {text(
                  "पिंपळखुटा बु. ग्रामपंचायत",
                  "Gram Panchayat Pimpalkhuta Budruk"
                )}
              </Typography>

              <Box
                sx={{
                  width: 75,
                  height: 5,
                  borderRadius: 5,
                  backgroundColor: COLORS.orange,
                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  color: COLORS.text,
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 2,
                  mb: 2.5,
                }}
              >
                {text(
                  "महाराष्ट्रातील अमरावती जिल्ह्यातील वरुड तालुक्यात वसलेले आपले गाव. नागरिकांच्या सहभागातून गावाचा सर्वांगीण विकास साधण्याचा आमचा प्रयत्न आहे. स्वच्छता, मूलभूत सुविधा, शिक्षण आणि ग्रामीण विकासाला प्राधान्य देऊन ग्रामपंचायत सातत्याने कार्यरत आहे.",
                  "Our village is located in Warud taluka of Amravati district, Maharashtra. We strive for the overall development of the village through citizen participation, with a focus on sanitation, essential facilities, education and rural development."
                )}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: COLORS.white,
                  border: "1px solid #F1E7DC",
                  borderRadius: 3,
                  p: 2,
                  mb: 3,
                  maxWidth: 430,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "#FFF0DF",
                    color: COLORS.orange,
                  }}
                >
                  <MapPin size={24} />
                </Box>

                <Box>
                  <Typography
                    fontWeight={800}
                    color={COLORS.green}
                    fontSize={14}
                  >
                    {text("आमचे स्थान", "OUR LOCATION")}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    fontSize={13}
                    sx={{ mt: 0.3 }}
                  >
                    {text(
                      "वरुड, जिल्हा अमरावती, महाराष्ट्र",
                      "Warud, Amravati District, Maharashtra"
                    )}
                  </Typography>
                </Box>
              </Box>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  backgroundColor: COLORS.green,
                  color: COLORS.white,
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: COLORS.darkGreen,
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s",
                }}
              >
                {text(
                  "आमच्या गावाबद्दल अधिक जाणून घ्या",
                  "Discover Our Village"
                )}
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {villageStats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      key={stat.title}
                    >
                      <Card
                        elevation={0}
                        sx={{
                          height: "100%",
                          minHeight: { xs: 190, sm: 220 },
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 3,
                          border: "1px solid #EEE5DA",
                          backgroundColor: COLORS.white,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow:
                              "0 16px 35px rgba(23,59,42,0.10)",
                            borderColor: "#F5B477",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 15,
                            fontSize: 65,
                            lineHeight: 1,
                            fontWeight: 900,
                            color: "rgba(23,59,42,0.045)",
                          }}
                        >
                          0{index + 1}
                        </Typography>

                        <CardContent
                          sx={{
                            p: { xs: 2.5, sm: 3 },
                            position: "relative",
                            zIndex: 1,
                            "&:last-child": {
                              pb: 3,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 52,
                              height: 52,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 2,
                              backgroundColor: "#FFF0DF",
                              color: COLORS.orange,
                              mb: 2,
                            }}
                          >
                            <Icon size={26} />
                          </Box>

                          <Typography
                            sx={{
                              fontSize: {
                                xs: 27,
                                sm: 30,
                                md: 33,
                              },
                              fontWeight: 900,
                              color: COLORS.green,
                              lineHeight: 1.2,
                            }}
                          >
                            {stat.value}
                          </Typography>

                          <Typography
                            sx={{
                              fontWeight: 800,
                              color: COLORS.text,
                              fontSize: { xs: 14, md: 15 },
                              mt: 1,
                            }}
                          >
                            {text(stat.title, stat.titleEn)}
                          </Typography>

                          <Typography
                            sx={{
                              color: COLORS.muted,
                              fontSize: 13,
                              mt: 0.5,
                            }}
                          >
                            {text(stat.description, stat.descriptionEn)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  mt: 2,
                  lineHeight: 1.7,
                }}
              >
                {text(
                  "* लोकसंख्या ही अधिकृत वेबसाइटवर दिलेली गट ग्रामपंचायत बावरूळीची आकडेवारी आहे.",
                  "* Population figure is shown as the group Gram Panchayat Bawurli figure on the official website."
                )}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 4, md: 7 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
                  alt="Agricultural landscape"
                  sx={{
                    width: "100%",
                    height: { xs: 260, sm: 350, md: 440 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    backgroundColor: COLORS.white,
                    borderRadius: 2,
                    p: 2,
                    boxShadow: 3,
                  }}
                >
                  <Typography
                    color={COLORS.orange}
                    fontWeight={800}
                    fontSize={13}
                  >
                    {text("आपली ओळख", "OUR IDENTITY")}
                  </Typography>

                  <Typography
                    color={COLORS.green}
                    fontWeight={800}
                  >
                    {text(
                      "कृषीप्रधान गाव",
                      "An Agriculture-based Village"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                color={COLORS.orange}
                fontWeight={800}
                sx={{ mb: 1 }}
              >
                {text("आमच्याबद्दल", "ABOUT US")}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 27, md: 36 },
                  fontWeight: 900,
                  color: COLORS.green,
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {text(
                  "गावाचा विकास हेच आमचे ध्येय",
                  "Village Development Is Our Mission"
                )}
              </Typography>

              <Typography
                color="text.secondary"
                lineHeight={2}
                sx={{ mb: 2 }}
              >
                {text(
                  "ग्रामपंचायत पिंपळखुटा बु. ही स्थानिक स्वराज्य संस्थेच्या माध्यमातून नागरिकांना मूलभूत सुविधा उपलब्ध करून देण्यासाठी कार्यरत आहे. स्वच्छता, पाणीपुरवठा, शिक्षण, आरोग्य आणि ग्रामीण विकास या क्षेत्रांमध्ये सातत्याने प्रयत्न केले जातात.",
                  "Gram Panchayat Pimpalkhuta Budruk works to provide essential public services through local self-governance. Our focus includes sanitation, water supply, education, healthcare and rural development."
                )}
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
                {[
                  {
                    icon: Droplets,
                    label: text(
                      "पाणीपुरवठा आणि स्वच्छता",
                      "Water Supply and Sanitation"
                    ),
                  },
                  {
                    icon: GraduationCap,
                    label: text(
                      "शिक्षण आणि आरोग्य सुविधा",
                      "Education and Healthcare"
                    ),
                  },
                  {
                    icon: Leaf,
                    label: text(
                      "कृषी आणि ग्रामीण विकास",
                      "Agriculture and Rural Development"
                    ),
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Stack
                      key={item.label}
                      direction="row"
                      alignItems="center"
                      spacing={1.5}
                    >
                      <Box
                        sx={{
                          color: COLORS.orange,
                          display: "flex",
                        }}
                      >
                        <Icon size={21} />
                      </Box>

                      <Typography
                        color={COLORS.text}
                        fontWeight={700}
                      >
                        {item.label}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  backgroundColor: COLORS.orange,
                  px: 3,
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#E85B16",
                  },
                }}
              >
                {text("अधिक जाणून घ्या", "Read More")}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MINISTER SECTION */}
      <MinisterSection />

      {/* VILLAGE PHOTO GALLERY */}
      <VillagePhotSlider />

      {/* VILLAGE DEVELOPMENT PROGRESS */}
      <Box
        sx={{
          backgroundColor: COLORS.lightGreen,
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="xl">
          <SectionHeading
            subtitle={text("विकासाचा आढावा", "DEVELOPMENT OVERVIEW")}
            title={text(
              "गाव विकास प्रगती मीटर",
              "Village Development Progress"
            )}
            description={text(
              "अधिकृत वेबसाइटवर प्रकाशित केलेल्या प्रगतीच्या आकडेवारीनुसार.",
              "Progress figures as published on the official website."
            )}
          />

          <Grid container spacing={3}>
            {progressItems.map((item) => {
              const Icon = item.icon;

              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={item.title}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      p: { xs: 2.5, md: 3 },
                      border: "1px solid #E1E9E2",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 2,
                          backgroundColor: "#FFF0DF",
                          color: COLORS.orange,
                        }}
                      >
                        <Icon size={23} />
                      </Box>

                      <Typography
                        fontWeight={900}
                        fontSize={25}
                        color={COLORS.green}
                      >
                        {item.value}%
                      </Typography>
                    </Stack>

                    <Typography
                      fontWeight={800}
                      color={COLORS.text}
                      sx={{ mb: 0.5 }}
                    >
                      {text(item.title, item.titleEn)}
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        height: 9,
                        borderRadius: 5,
                        mt: 2,
                        backgroundColor: "#E5E7EB",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: COLORS.orange,
                        },
                      }}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* PUBLIC SERVICES */}
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 6, md: 9 } }}
      >
        <SectionHeading
          subtitle={text("नागरिक सेवा", "CITIZEN SERVICES")}
          title={text(
            "आमच्या प्रमुख सेवा",
            "Our Public Services"
          )}
          description={text(
            "ग्रामपंचायतीमार्फत उपलब्ध असलेल्या काही प्रमुख दाखला आणि नोंदणी सेवा.",
            "Some of the certificate and registration services listed by the Gram Panchayat."
          )}
        />

        <Grid container spacing={3}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={service.title}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                      borderColor: "#F5B477",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2,
                        backgroundColor: "#FFF0DF",
                        color: COLORS.orange,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Icon size={25} />
                    </Box>

                    <Typography
                      fontWeight={800}
                      fontSize={18}
                      color={COLORS.green}
                    >
                      {text(service.title, service.titleEn)}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mb: 1 }}
                    >
                      <Typography
                        color="text.secondary"
                        fontSize={13}
                      >
                        {text("शुल्क", "Fee")}
                      </Typography>

                      <Typography
                        fontWeight={800}
                        color={COLORS.green}
                      >
                        {service.fee}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Typography
                        color="text.secondary"
                        fontSize={13}
                      >
                        {text("कालावधी", "Processing")}
                      </Typography>

                      <Typography
                        fontWeight={700}
                        color={COLORS.text}
                        fontSize={13}
                      >
                        {text(service.time, service.timeEn)}
                      </Typography>
                    </Stack>

                    <Button
                      component={Link}
                      to="/services"
                      endIcon={<ArrowUpRight size={17} />}
                      sx={{
                        mt: 2.5,
                        p: 0,
                        color: COLORS.orange,
                        fontWeight: 800,
                      }}
                    >
                      {text("अधिक माहिती", "Learn More")}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            endIcon={<ArrowRight size={18} />}
            sx={{
              backgroundColor: COLORS.green,
              px: 4,
              py: 1.4,
              borderRadius: 2,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: COLORS.darkGreen,
              },
            }}
          >
            {text("सर्व सेवा पहा", "View All Services")}
          </Button>
        </Box>
      </Container>

      {/* CONTACT SECTION */}
      <Box
        sx={{
          backgroundColor: COLORS.green,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                color="#FFB875"
                fontWeight={800}
                sx={{ mb: 1 }}
              >
                {text("आमच्याशी संपर्क साधा", "GET IN TOUCH")}
              </Typography>

              <Typography
                sx={{
                  color: COLORS.white,
                  fontSize: { xs: 27, md: 36 },
                  fontWeight: 900,
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {text(
                  "आपल्या समस्या आणि सूचना आम्हाला कळवा",
                  "We Are Here to Help You"
                )}
              </Typography>

              <Typography
                sx={{
                  color: "#D1E0D6",
                  lineHeight: 1.9,
                  maxWidth: 520,
                }}
              >
                {text(
                  "ग्रामपंचायत कार्यालयाशी संपर्क साधण्यासाठी खालील संपर्क माहितीचा वापर करा.",
                  "Use the contact details below to reach the Gram Panchayat office for assistance and information."
                )}
              </Typography>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  mt: 3,
                  backgroundColor: COLORS.orange,
                  px: 3,
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#E85B16",
                  },
                }}
              >
                {text("संपर्क पृष्ठ", "Contact Page")}
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: 3,
                  backgroundColor: COLORS.white,
                }}
              >
                <Stack spacing={3}>
                  {/* OFFICE ADDRESS */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF0DF",
                        color: COLORS.orange,
                      }}
                    >
                      <MapPin size={22} />
                    </Box>

                    <Box>
                      <Typography
                        fontWeight={800}
                        color={COLORS.green}
                      >
                        {text("कार्यालय पत्ता", "Office Address")}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        fontSize={14}
                      >
                        ग्रामपंचायत कार्यालय पिंपळखुटा बु.,
                        ता. वरुड, जि. अमरावती
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider />

                  {/* PHONE */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF0DF",
                        color: COLORS.orange,
                      }}
                    >
                      <Phone size={22} />
                    </Box>

                    <Box>
                      <Typography
                        fontWeight={800}
                        color={COLORS.green}
                      >
                        {text("संपर्क क्रमांक", "Phone Number")}
                      </Typography>

                      <Typography
                        component="a"
                        href="tel:9920942994"
                        sx={{
                          color: COLORS.muted,
                          textDecoration: "none",
                          fontSize: 14,
                          "&:hover": {
                            color: COLORS.orange,
                          },
                        }}
                      >
                        9920942994
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider />

                  {/* EMAIL */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF0DF",
                        color: COLORS.orange,
                      }}
                    >
                      <Mail size={22} />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        fontWeight={800}
                        color={COLORS.green}
                      >
                        {text("ई-मेल", "Email")}
                      </Typography>

                      <Typography
                        component="a"
                        href="mailto:gppimpalkhuta30@gmail.com"
                        sx={{
                          color: COLORS.muted,
                          textDecoration: "none",
                          fontSize: { xs: 12, sm: 14 },
                          overflowWrap: "anywhere",
                          "&:hover": {
                            color: COLORS.orange,
                          },
                        }}
                      >
                        gppimpalkhuta30@gmail.com
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider />

                  {/* OFFICE HOURS */}
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF0DF",
                        color: COLORS.orange,
                      }}
                    >
                      <Clock size={22} />
                    </Box>

                    <Box>
                      <Typography
                        fontWeight={800}
                        color={COLORS.green}
                      >
                        {text("कार्यालय वेळ", "Office Hours")}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        fontSize={14}
                      >
                        {text(
                          "सकाळी १० ते संध्याकाळी ६",
                          "10:00 AM – 6:00 PM"
                        )}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BOTTOM VILLAGE LOCATION */}
      <Box
        sx={{
          backgroundColor: "#FFF0DF",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Building2 size={18} color={COLORS.orange} />

            <Typography
              textAlign="center"
              color={COLORS.green}
              fontWeight={700}
              fontSize={13}
            >
              {text(
                "ग्रामपंचायत पिंपळखुटा बु. • तालुका वरुड • जिल्हा अमरावती • महाराष्ट्र 444908",
                "Gram Panchayat Pimpalkhuta Budruk • Warud • Amravati • Maharashtra 444908"
              )}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
