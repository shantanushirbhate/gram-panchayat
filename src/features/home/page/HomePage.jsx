import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Sprout,
  FileText,
  HeartPulse,
  Droplets,
  GraduationCap,
  Sun,
  Building2,
  Clock,
  Landmark,
  House,
  Leaf,
  Route,
  Users,
  ShieldCheck,
  BookOpen,
  Church,
  Wheat,
  Trees,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MinisterSection from "../component/villagephotoslider/ministerphotos";
import TodaysThoughts from "../component/todaythought/Todaysthought";
import VillagePhotSlider from "../component/villagephotoslider/villagephotslider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroImage1 from "../../../assets/ceremanyimages/202405061632141092-1024x683.jpg";
import heroImage2 from "../../../assets/ceremanyimages/496115-pti12052024000234b.webp";
import heroImage3 from "../../../assets/ceremanyimages/images (2).jfif";

// ======================================================
// THEME
// ======================================================

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#F47721",
  saffron: "#FFE5C5",
  cream: "#FFF9F2",
  lightGreen: "#F1F6F1",
  text: "#263B30",
  muted: "#64748B",
  white: "#FFFFFF",
  border: "#E5EAE5",
  softOrange: "#FFF1E5",
};

const PAGE_GUTTER = {
  xs: 2,
  sm: 3,
  md: 5,
  lg: 7,
  xl: 9,
};

const CARD_GRID_SPACING = {
  xs: 2,
  sm: 2.5,
  md: 3,
};

const cardStyle = {
  width: "100%",
  height: "100%",
  minWidth: 0,
  borderRadius: 3,
  border: `1px solid ${COLORS.border}`,
  backgroundColor: COLORS.white,
  boxShadow: "0 5px 22px rgba(23, 59, 42, 0.045)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: {
      xs: "none",
      md: "translateY(-5px)",
    },
    boxShadow: "0 14px 30px rgba(23, 59, 42, 0.10)",
  },
};

// ======================================================
// HERO SLIDES
// ======================================================

const heroSlides = [
  {
    subtitle: "सेवा • समर्पण • पारदर्शकता",
    subtitleEn: "SERVICE • DEDICATION • TRANSPARENCY",

    title: "सातेगाव ग्रामपंचायतीमध्ये आपले स्वागत आहे",
    titleEn: "Welcome to Gram Panchayat Sategaon",

    description:
      "गावाचा सर्वांगीण विकास, नागरिकांना उत्तम सुविधा आणि पारदर्शक प्रशासन हेच आमचे ध्येय.",

    descriptionEn:
      "Our mission is village development, better public facilities and transparent administration.",

    image: heroImage1,

    button: "गावाबद्दल जाणून घ्या",
    buttonEn: "Explore Our Village",

    link: "/about",
  },
  {
    subtitle: "आपले गाव • आपली जबाबदारी",
    subtitleEn: "OUR VILLAGE • OUR RESPONSIBILITY",

    title: "स्वच्छ, सुंदर आणि विकसित सातेगाव",
    titleEn: "Towards a Clean, Green and Developed Sategaon",

    description:
      "स्वच्छता, पाणीपुरवठा, शिक्षण, आरोग्य आणि मूलभूत सुविधांच्या विकासासाठी एकत्रित प्रयत्न.",

    descriptionEn:
      "Working together to improve sanitation, water supply, education, healthcare and essential facilities.",

    image: heroImage2,

    button: "आमच्या सेवा",
    buttonEn: "Our Services",

    link: "/services",
  },
  {
    subtitle: "कृषी • संस्कृती • विकास",
    subtitleEn: "AGRICULTURE • CULTURE • DEVELOPMENT",

    title: "समृद्ध सातेगावसाठी एकत्रित प्रयत्न",
    titleEn: "Together for a Better Sategaon",

    description:
      "शेतीची परंपरा, सामाजिक एकता आणि सांस्कृतिक वारसा जपत विकासाच्या दिशेने वाटचाल.",

    descriptionEn:
      "Moving towards progress while preserving our agricultural traditions, social unity and cultural heritage.",

    image: heroImage3,

    button: "फोटो गॅलरी",
    buttonEn: "Explore Gallery",

    link: "/gallery",
  },
];

// ======================================================
// VILLAGE HIGHLIGHTS
// ======================================================

const villageHighlights = [
  {
    icon: Sprout,
    title: "कृषीप्रधान गाव",
    titleEn: "Agriculture-based Village",

    description:
      "शेती हा गावातील प्रमुख व्यवसाय असून शेतकरी विविध पिकांचे उत्पादन घेतात.",

    descriptionEn:
      "Agriculture is the primary occupation, with farmers cultivating a variety of crops.",
  },
  {
    icon: MapPin,
    title: "भौगोलिक स्थान",
    titleEn: "Geographical Location",

    description:
      "सातेगाव हे अमरावती जिल्ह्यातील अंजनगाव सुर्जी तालुक्यात वसलेले आहे.",

    descriptionEn:
      "Sategaon is situated in Anjangaon Surji taluka of Amravati district.",
  },
  {
    icon: GraduationCap,
    title: "शिक्षण आणि संस्कार",
    titleEn: "Education and Learning",

    description:
      "जिल्हा परिषद शाळा आणि अंगणवाडीच्या माध्यमातून बालशिक्षणाला प्रोत्साहन.",

    descriptionEn:
      "Primary education and child development are supported through the Zilla Parishad school and Anganwadi.",
  },
  {
    icon: Church,
    title: "धार्मिक आणि सांस्कृतिक वारसा",
    titleEn: "Cultural Heritage",

    description:
      "हनुमान मंदिर, ग्रामदैवत आणि पारंपरिक सणांमधून गावाची सांस्कृतिक ओळख जपली जाते.",

    descriptionEn:
      "The Hanuman temple, village deity and traditional festivals preserve the village's cultural identity.",
  },
];

// ======================================================
// VILLAGE INFORMATION
// ======================================================

const villageInformation = [
  {
    icon: Route,
    title: "दळणवळण",
    titleEn: "Connectivity",

    description:
      "गावातील रस्ते आणि दळणवळणाच्या सुविधांमुळे परिसरातील प्रमुख ठिकाणांशी संपर्क साधता येतो.",

    descriptionEn:
      "Road and transport facilities help connect the village with nearby important places.",
  },
  {
    icon: Droplets,
    title: "पाणीपुरवठा",
    titleEn: "Water Supply",

    description:
      "नागरिकांना पिण्याच्या पाण्याची सुविधा उपलब्ध करून देणे आणि जलसंधारणाला प्रोत्साहन देणे.",

    descriptionEn:
      "Providing drinking water facilities and encouraging water conservation.",
  },
  {
    icon: BookOpen,
    title: "शिक्षण",
    titleEn: "Education",

    description:
      "जिल्हा परिषद शाळा आणि डिजिटल शिक्षणाच्या माध्यमातून विद्यार्थ्यांच्या विकासाला प्रोत्साहन.",

    descriptionEn:
      "Supporting students through the Zilla Parishad school and digital learning initiatives.",
  },
  {
    icon: HeartPulse,
    title: "आरोग्य आणि स्वच्छता",
    titleEn: "Health and Sanitation",

    description:
      "स्वच्छता अभियान आणि आरोग्यविषयक उपक्रमांद्वारे निरोगी गाव निर्माण करण्याचा प्रयत्न.",

    descriptionEn:
      "Promoting a healthy village through sanitation drives and health-related initiatives.",
  },
  {
    icon: Church,
    title: "धार्मिक स्थळे",
    titleEn: "Religious Places",

    description:
      "हनुमान मंदिर आणि ग्रामदैवताच्या माध्यमातून गावाची धार्मिक परंपरा जपली जाते.",

    descriptionEn:
      "The Hanuman temple and village deity are important parts of the village's religious traditions.",
  },
  {
    icon: Wheat,
    title: "शेती आणि अर्थव्यवस्था",
    titleEn: "Agriculture and Economy",

    description:
      "कापूस, सोयाबीन, तूर, हरभरा आणि भाजीपाला ही गावातील महत्त्वाची कृषी उत्पादने आहेत.",

    descriptionEn:
      "Cotton, soybean, pigeon pea, chickpeas and vegetables are important agricultural products.",
  },
];

// ======================================================
// AGRICULTURE CROPS
// ======================================================

const agricultureItems = [
  {
    icon: Sprout,
    title: "कापूस",
    titleEn: "Cotton",
  },
  {
    icon: Leaf,
    title: "सोयाबीन",
    titleEn: "Soybean",
  },
  {
    icon: Wheat,
    title: "तूर",
    titleEn: "Pigeon Pea",
  },
  {
    icon: Sun,
    title: "हरभरा",
    titleEn: "Chickpeas",
  },
  {
    icon: Trees,
    title: "भाजीपाला",
    titleEn: "Vegetables",
  },
];

// ======================================================
// PUBLIC SERVICES
// ======================================================

const services = [
  {
    icon: FileText,
    title: "जन्म आणि मृत्यू नोंदणी",
    titleEn: "Birth and Death Registration",

    description:
      "जन्म आणि मृत्यू नोंदणीसंबंधी आवश्यक माहिती व मार्गदर्शन.",

    descriptionEn:
      "Information and guidance regarding birth and death registration.",
  },
  {
    icon: House,
    title: "विविध दाखले",
    titleEn: "Certificates",

    description:
      "नागरिकांना आवश्यक असलेल्या विविध दाखल्यांसाठी मार्गदर्शन.",

    descriptionEn:
      "Guidance for citizens regarding various required certificates.",
  },
  {
    icon: Users,
    title: "नागरिक सेवा",
    titleEn: "Citizen Services",

    description:
      "ग्रामपंचायतीमार्फत उपलब्ध असलेल्या नागरिक सेवांची माहिती.",

    descriptionEn:
      "Information about citizen services provided by the Gram Panchayat.",
  },
  {
    icon: Landmark,
    title: "शासकीय योजना",
    titleEn: "Government Schemes",

    description:
      "केंद्र आणि राज्य शासनाच्या विविध योजनांची माहिती.",

    descriptionEn:
      "Information about various Central and State Government schemes.",
  },
];

// ======================================================
// REUSABLE COMPONENTS
// ======================================================

function SectionHeading({ subtitle, title, description }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 850 }}>
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 900,
          fontSize: { xs: 12, sm: 14 },
          letterSpacing: 1.5,
          mb: 1,
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        component="h2"
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: { xs: 25, sm: 31, md: 38 },
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: { xs: 13, sm: 15 },
            mt: 1.5,
            lineHeight: 1.8,
            maxWidth: 700,
          }}
        >
          {description}
        </Typography>
      )}

      <Box
        sx={{
          mt: 2.5,
          width: 65,
          height: 4,
          borderRadius: 5,
          backgroundColor: COLORS.orange,
        }}
      />
    </Box>
  );
}

function IconTile({ icon: Icon, size = 25 }) {
  return (
    <Box
      sx={{
        width: 54,
        height: 54,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2.5,
        backgroundColor: COLORS.softOrange,
        color: COLORS.orange,
      }}
    >
      <Icon size={size} />
    </Box>
  );
}

// ======================================================
// HIGHLIGHT CARD
// ======================================================

function HighlightCard({ item, text }) {
  const Icon = item.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        minHeight: { xs: 220, sm: 235 },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          "&:last-child": { pb: 3 },
        }}
      >
        <IconTile icon={Icon} />

        <Typography
          sx={{
            mt: 2,
            mb: 1,
            color: COLORS.green,
            fontWeight: 900,
            fontSize: 17,
            lineHeight: 1.5,
          }}
        >
          {text(item.title, item.titleEn)}
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={13}
          lineHeight={1.9}
        >
          {text(item.description, item.descriptionEn)}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ======================================================
// VILLAGE INFORMATION CARD
// ======================================================

function InformationCard({ item, text }) {
  const Icon = item.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        minHeight: { xs: 205, sm: 220 },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          "&:last-child": { pb: 3 },
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconTile icon={Icon} size={23} />

          <Typography
            sx={{
              color: COLORS.green,
              fontWeight: 900,
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            {text(item.title, item.titleEn)}
          </Typography>
        </Stack>

        <Typography
          sx={{
            mt: 2,
            color: COLORS.muted,
            fontSize: 13,
            lineHeight: 1.9,
          }}
        >
          {text(item.description, item.descriptionEn)}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ======================================================
// SERVICE CARD
// ======================================================

function ServiceCard({ service, text }) {
  const Icon = service.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        minHeight: { xs: 255, sm: 265 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          "&:last-child": { pb: 3 },
        }}
      >
        <IconTile icon={Icon} />

        <Typography
          sx={{
            mt: 2,
            color: COLORS.green,
            fontWeight: 900,
            fontSize: 17,
            lineHeight: 1.5,
            minHeight: 52,
          }}
        >
          {text(service.title, service.titleEn)}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: COLORS.muted,
            fontSize: 13,
            lineHeight: 1.8,
          }}
        >
          {text(service.description, service.descriptionEn)}
        </Typography>

        <Button
          component={Link}
          to="/services"
          endIcon={<ArrowUpRight size={17} />}
          sx={{
            mt: "auto",
            pt: 2,
            alignSelf: "flex-start",
            color: COLORS.orange,
            fontWeight: 900,
            "&:hover": {
              backgroundColor: "transparent",
              color: COLORS.green,
            },
          }}
        >
          {text("अधिक माहिती", "Learn More")}
        </Button>
      </CardContent>
    </Card>
  );
}

// ======================================================
// CONTACT ROW
// ======================================================

function ContactRow({ icon: Icon, title, children }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ minWidth: 0 }}
    >
      <IconTile icon={Icon} size={21} />

      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography
          fontWeight={900}
          color={COLORS.green}
          fontSize={14}
          mb={0.4}
        >
          {title}
        </Typography>

        {children}
      </Box>
    </Stack>
  );
}

// ======================================================
// HOME PAGE
// ======================================================

function HomePage() {
  const { i18n } = useTranslation();

  const isMarathi = i18n.language?.startsWith("mr");

  const text = (marathi, english) =>
    isMarathi ? marathi : english;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "clip",
        backgroundColor: "#FFFFFF",
        color: COLORS.text,
      }}
    >
      {/* ==================================================
          HERO SLIDER
      ================================================== */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",

          "& .home-hero-swiper": {
            width: "100%",
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
            width: 30,
            borderRadius: 5,
            backgroundColor: COLORS.orange,
            opacity: 1,
          },
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          speed={1000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          allowTouchMove
          className="home-hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: {
                    xs: 590,
                    sm: 650,
                    md: 700,
                    lg: 760,
                  },
                  height: {
                    xs: "78vh",
                    sm: "82vh",
                    md: "86vh",
                  },
                  maxHeight: 850,
                  display: "flex",
                  alignItems: "center",
                  backgroundImage: `
                    linear-gradient(
                      90deg,
                      rgba(8, 31, 19, 0.91) 0%,
                      rgba(8, 31, 19, 0.72) 48%,
                      rgba(8, 31, 19, 0.22) 100%
                    ),
                    url("${slide.image}")
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: {
                    xs: "58% center",
                    md: "center center",
                  },
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Container
                  maxWidth={false}
                  sx={{ px: PAGE_GUTTER, width: "100%" }}
                >
                  <Box
                    sx={{
                      maxWidth: 850,
                      width: "100%",
                      py: { xs: 9, md: 11 },
                      pb: { xs: 12, md: 13 },
                    }}
                  >
                    <Chip
                      label={text(slide.subtitle, slide.subtitleEn)}
                      sx={{
                        mb: { xs: 2.5, md: 3 },
                        maxWidth: "100%",
                        height: "auto",
                        backgroundColor: COLORS.saffron,
                        color: "#78350F",
                        fontWeight: 900,
                        letterSpacing: 0.4,
                        borderRadius: 1.5,
                        "& .MuiChip-label": {
                          display: "block",
                          whiteSpace: "normal",
                          py: 1,
                          fontSize: { xs: 10, sm: 12 },
                        },
                      }}
                    />

                    <Typography
                      component="h1"
                      sx={{
                        color: COLORS.white,
                        fontWeight: 900,
                        fontSize: {
                          xs: 30,
                          sm: 42,
                          md: 55,
                          lg: 62,
                        },
                        lineHeight: 1.2,
                        mb: 2.5,
                        maxWidth: 850,
                        textShadow: "0 3px 15px rgba(0,0,0,0.2)",
                      }}
                    >
                      {text(slide.title, slide.titleEn)}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#F1F5F9",
                        fontSize: { xs: 14, sm: 16, md: 18 },
                        lineHeight: 1.9,
                        maxWidth: 680,
                        mb: 4,
                      }}
                    >
                      {text(slide.description, slide.descriptionEn)}
                    </Typography>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.5}
                      sx={{
                        alignItems: {
                          xs: "stretch",
                          sm: "center",
                        },
                        maxWidth: { xs: 320, sm: "none" },
                      }}
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
                          fontWeight: 800,
                          minHeight: 49,
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
                          borderColor: "rgba(255,255,255,0.8)",
                          px: 3.5,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 800,
                          minHeight: 49,
                          "&:hover": {
                            borderColor: COLORS.saffron,
                            backgroundColor:
                              "rgba(255,255,255,0.12)",
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

        {/* LOCATION LABEL */}

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 60, md: 75 },
            right: PAGE_GUTTER,
            zIndex: 5,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(255,255,255,0.96)",
            px: 2,
            py: 1.3,
            borderRadius: 2,
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        >
          <MapPin size={18} color={COLORS.orange} />

          <Typography
            fontWeight={800}
            fontSize={13}
            color={COLORS.green}
          >
            {text(
              "ता. अंजनगाव सुर्जी, जि. अमरावती",
              "Anjangaon Surji, Amravati"
            )}
          </Typography>
        </Box>
      </Box>

      {/* ==================================================
          ANNOUNCEMENTS
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.green,
          color: COLORS.white,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          minHeight: { xs: 48, sm: 55 },
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
            "50%": { opacity: 0.35 },
          },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
            backgroundColor: COLORS.orange,
            color: COLORS.white,
            px: { xs: 1.5, sm: 3 },
            fontWeight: 900,
            fontSize: { xs: 11, sm: 14 },
            zIndex: 2,
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
            animation: "announcementScroll 32s linear infinite",
            "@keyframes announcementScroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[0, 1].map((group) => (
            <Stack
              key={group}
              direction="row"
              alignItems="center"
              spacing={4}
              sx={{ pr: 4, whiteSpace: "nowrap" }}
              aria-hidden={group === 1}
            >
              {[
                text(
                  "ग्रामसभा आणि बैठकींच्या सूचना",
                  "Gram Sabha and Meeting Notices"
                ),
                text(
                  "शासकीय योजनांची माहिती",
                  "Government Scheme Information"
                ),
                text(
                  "नागरिक सेवा आणि महत्त्वाच्या सूचना",
                  "Citizen Services and Important Updates"
                ),
              ].map((announcement, index) => (
                <Stack
                  key={`${group}-${index}`}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    component="span"
                    sx={{
                      animation:
                        index === 0
                          ? "blinkStar 1.2s infinite"
                          : "none",
                    }}
                  >
                    ⭐
                  </Box>

                  <Typography
                    component="span"
                    fontWeight={800}
                    fontSize={{ xs: 11, sm: 14 }}
                  >
                    {announcement}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          ))}
        </Box>
      </Box>

      {/* ==================================================
          TODAY'S THOUGHTS
      ================================================== */}

      <TodaysThoughts />

      {/* ==================================================
          VILLAGE INTRODUCTION
      ================================================== */}

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
            top: -110,
            right: -100,
            width: { xs: 180, md: 320 },
            height: { xs: 180, md: 320 },
            borderRadius: "50%",
            backgroundColor: "rgba(255,104,32,0.055)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -130,
            left: -100,
            width: { xs: 200, md: 350 },
            height: { xs: 200, md: 350 },
            borderRadius: "50%",
            backgroundColor: "rgba(23,59,42,0.05)",
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            px: PAGE_GUTTER,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Chip
                  icon={<Leaf size={16} />}
                  label={text(
                    "आपले गाव • आपली ओळख",
                    "OUR VILLAGE • OUR IDENTITY"
                  )}
                  sx={{
                    mb: 2.5,
                    px: 1,
                    width: "fit-content",
                    maxWidth: "100%",
                    height: 36,
                    borderRadius: 2,
                    backgroundColor: "#E7EFE8",
                    color: COLORS.green,
                    fontWeight: 900,
                    "& .MuiChip-icon": {
                      color: COLORS.orange,
                    },
                  }}
                />

                <Typography
                  component="h2"
                  sx={{
                    color: COLORS.green,
                    fontSize: { xs: 29, sm: 36, md: 42 },
                    lineHeight: 1.25,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  {text(
                    "सातेगाव ग्रामपंचायत",
                    "Gram Panchayat Sategaon"
                  )}
                </Typography>

                <Box
                  sx={{
                    width: 70,
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: COLORS.orange,
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    color: COLORS.text,
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: 2,
                    mb: 3,
                  }}
                >
                  {text(
                    "अमरावती जिल्ह्यातील अंजनगाव सुर्जी तालुक्यात वसलेले सातेगाव हे नैसर्गिक सौंदर्य, सामाजिक सलोखा आणि कृषी परंपरेसाठी ओळखले जाते. गावातील नागरिकांच्या सहभागातून शिक्षण, आरोग्य, पाणीपुरवठा, स्वच्छता आणि ग्रामीण विकासाला प्राधान्य देऊन गावाचा सर्वांगीण विकास साधण्याचा प्रयत्न केला जातो.",
                    "Sategaon, located in Anjangaon Surji taluka of Amravati district, is known for its natural surroundings, social harmony and agricultural traditions. Through community participation, efforts are made to promote education, healthcare, water supply, sanitation and overall rural development."
                  )}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    backgroundColor: COLORS.white,
                    border: "1px solid #F1E7DC",
                    borderRadius: 3,
                    p: 2,
                    mb: 3,
                  }}
                >
                  <IconTile icon={MapPin} />

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      fontWeight={900}
                      color={COLORS.green}
                      fontSize={13}
                    >
                      {text("आमचे स्थान", "OUR LOCATION")}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      fontSize={13}
                      sx={{ mt: 0.4, lineHeight: 1.6 }}
                    >
                      {text(
                        "सातेगाव, ता. अंजनगाव सुर्जी, जि. अमरावती, महाराष्ट्र",
                        "Sategaon, Anjangaon Surji, Amravati, Maharashtra"
                      )}
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    alignSelf: "flex-start",
                    maxWidth: "100%",
                    backgroundColor: COLORS.green,
                    color: COLORS.white,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 800,
                    "&:hover": {
                      backgroundColor: COLORS.darkGreen,
                    },
                  }}
                >
                  {text(
                    "आमच्या गावाबद्दल अधिक जाणून घ्या",
                    "Discover Our Village"
                  )}
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} sx={{ minWidth: 0 }}>
              <Grid
                container
                spacing={CARD_GRID_SPACING}
                alignItems="stretch"
              >
                {villageHighlights.map((item) => (
                  <Grid
                    key={item.title}
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                      display: "flex",
                      minWidth: 0,
                    }}
                  >
                    <HighlightCard item={item} text={text} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================================================
          ABOUT SECTION
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: { xs: 3, md: 4 },
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(23,59,42,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={heroImage3}
                  alt="Sategaon village"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 270, sm: 370, md: 460 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 12, sm: 20 },
                    left: { xs: 12, sm: 20 },
                    right: { xs: 12, sm: "auto" },
                    backgroundColor: "rgba(255,255,255,0.96)",
                    borderRadius: 2.5,
                    p: { xs: 1.5, sm: 2 },
                    boxShadow: 3,
                  }}
                >
                  <Typography
                    color={COLORS.orange}
                    fontWeight={900}
                    fontSize={12}
                  >
                    {text("आपली ओळख", "OUR IDENTITY")}
                  </Typography>

                  <Typography
                    color={COLORS.green}
                    fontWeight={900}
                  >
                    {text(
                      "कृषी आणि संस्कृती",
                      "Agriculture and Culture"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                color={COLORS.orange}
                fontWeight={900}
                fontSize={13}
                letterSpacing={1}
                sx={{ mb: 1 }}
              >
                {text("आमच्याबद्दल", "ABOUT US")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 27, sm: 32, md: 39 },
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
                fontSize={{ xs: 14, md: 15 }}
                sx={{ mb: 3 }}
              >
                {text(
                  "सातेगावची ओळख ही येथील शेती, धार्मिक परंपरा आणि सामाजिक एकतेशी जोडलेली आहे. गावातील नागरिकांच्या सहकार्याने स्वच्छता, पाणीपुरवठा, शिक्षण, आरोग्य आणि पायाभूत सुविधांच्या विकासासाठी प्रयत्न केले जातात. आधुनिक तंत्रज्ञानाची जोड देत गावाच्या प्रगतीचा मार्ग अधिक सक्षम करण्याचा आमचा प्रयत्न आहे.",
                  "Sategaon's identity is closely connected to its agriculture, religious traditions and social unity. With the cooperation of residents, efforts are made to improve sanitation, water supply, education, healthcare and infrastructure. We aim to strengthen the village's progress by combining traditional values with modern approaches."
                )}
              </Typography>

              <Stack spacing={2.2} sx={{ mb: 3.5 }}>
                {[
                  {
                    icon: Droplets,
                    label: text(
                      "पाणीपुरवठा आणि जलसंधारण",
                      "Water Supply and Conservation"
                    ),
                  },
                  {
                    icon: GraduationCap,
                    label: text(
                      "शिक्षण आणि बालविकास",
                      "Education and Child Development"
                    ),
                  },
                  {
                    icon: HeartPulse,
                    label: text(
                      "आरोग्य आणि स्वच्छता",
                      "Healthcare and Sanitation"
                    ),
                  },
                  {
                    icon: Sprout,
                    label: text(
                      "शेती आणि ग्रामीण विकास",
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
                          width: 38,
                          height: 38,
                          flexShrink: 0,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: COLORS.orange,
                          backgroundColor: COLORS.softOrange,
                        }}
                      >
                        <Icon size={20} />
                      </Box>

                      <Typography
                        color={COLORS.text}
                        fontWeight={800}
                        fontSize={14}
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
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 800,
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

      {/* ==================================================
          VILLAGE GEOGRAPHY AND FACILITIES
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.lightGreen,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <SectionHeading
            subtitle={text(
              "गावाची वैशिष्ट्ये",
              "VILLAGE FEATURES"
            )}
            title={text(
              "सातेगावची ओळख आणि सुविधा",
              "Village Identity and Facilities"
            )}
            description={text(
              "गावातील भौगोलिक, शैक्षणिक, आरोग्यविषयक आणि सामाजिक वैशिष्ट्यांची माहिती.",
              "Explore the geographical, educational, healthcare and social features of Sategaon."
            )}
          />

          <Grid
            container
            spacing={CARD_GRID_SPACING}
            alignItems="stretch"
          >
            {villageInformation.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  display: "flex",
                  minWidth: 0,
                }}
              >
                <InformationCard item={item} text={text} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==================================================
          AGRICULTURE SECTION
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: 7, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                color={COLORS.orange}
                fontWeight={900}
                fontSize={13}
                letterSpacing={1.3}
                sx={{ mb: 1 }}
              >
                {text("शेती आणि अर्थव्यवस्था", "AGRICULTURE")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: COLORS.green,
                  fontWeight: 900,
                  fontSize: { xs: 28, sm: 34, md: 40 },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {text(
                  "शेती हीच सातेगावची आर्थिक ताकद",
                  "Agriculture Is the Strength of Sategaon"
                )}
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={{ xs: 14, md: 15 }}
                lineHeight={2}
                sx={{ mb: 3 }}
              >
                {text(
                  "सातेगावची अर्थव्यवस्था प्रामुख्याने शेतीवर अवलंबून आहे. येथील शेतकरी कापूस, सोयाबीन, तूर आणि हरभरा यांसारखी पिके घेतात. काही शेतकरी भाजीपाला उत्पादनाकडेही वळले आहेत. आधुनिक कृषी तंत्रज्ञानाचा वापर करून शेती अधिक सक्षम करण्याचे प्रयत्न सुरू आहेत.",
                  "Sategaon's economy primarily depends on agriculture. Farmers cultivate crops such as cotton, soybean, pigeon pea and chickpeas. Some farmers are also engaged in vegetable cultivation. Efforts are being made to strengthen farming through modern agricultural practices."
                )}
              </Typography>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  backgroundColor: COLORS.green,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: COLORS.darkGreen,
                  },
                }}
              >
                {text("अधिक माहिती", "Explore More")}
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3.5, md: 4 },
                  borderRadius: 4,
                  backgroundColor: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <IconTile icon={Wheat} size={28} />

                  <Box>
                    <Typography
                      color={COLORS.green}
                      fontWeight={900}
                      fontSize={18}
                    >
                      {text(
                        "सातेगावमधील प्रमुख पिके",
                        "Major Crops of Sategaon"
                      )}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      fontSize={13}
                      sx={{ mt: 0.5 }}
                    >
                      {text(
                        "गावातील महत्त्वाची कृषी उत्पादने",
                        "Important agricultural produce"
                      )}
                    </Typography>
                  </Box>
                </Stack>

                <Grid container spacing={2}>
                  {agricultureItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Grid
                        key={item.title}
                        size={{ xs: 6, sm: 4 }}
                      >
                        <Box
                          sx={{
                            minHeight: 115,
                            p: 2,
                            backgroundColor: COLORS.white,
                            border: `1px solid ${COLORS.border}`,
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            gap: 1,
                            transition: "0.3s",
                            "&:hover": {
                              borderColor: COLORS.orange,
                              transform: {
                                xs: "none",
                                md: "translateY(-4px)",
                              },
                            },
                          }}
                        >
                          <Icon
                            size={27}
                            color={COLORS.orange}
                          />

                          <Typography
                            color={COLORS.green}
                            fontWeight={900}
                            fontSize={14}
                          >
                            {text(item.title, item.titleEn)}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================================================
          MINISTER SECTION
      ================================================== */}

      <MinisterSection />

      {/* ==================================================
          VILLAGE PHOTO GALLERY
      ================================================== */}

      <VillagePhotSlider />

      {/* ==================================================
          PUBLIC SERVICES
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.cream,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <SectionHeading
            subtitle={text("नागरिक सेवा", "CITIZEN SERVICES")}
            title={text(
              "ग्रामपंचायतीच्या प्रमुख सेवा",
              "Gram Panchayat Public Services"
            )}
            description={text(
              "नागरिकांच्या दैनंदिन गरजांसाठी ग्रामपंचायतीमार्फत उपलब्ध असलेल्या सेवा आणि सुविधांची माहिती.",
              "Information about services and facilities available through the Gram Panchayat for citizens."
            )}
          />

          <Grid
            container
            spacing={CARD_GRID_SPACING}
            alignItems="stretch"
          >
            {services.map((service) => (
              <Grid
                key={service.title}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  display: "flex",
                  minWidth: 0,
                }}
              >
                <ServiceCard service={service} text={text} />
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                backgroundColor: COLORS.green,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 800,
                "&:hover": {
                  backgroundColor: COLORS.darkGreen,
                },
              }}
            >
              {text("सर्व सेवा पहा", "View All Services")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ==================================================
          CULTURE AND SOCIAL UNITY
      ================================================== */}

      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: 7, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  backgroundColor: COLORS.cream,
                  p: { xs: 3, sm: 4 },
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <IconTile icon={Landmark} size={29} />

                <Typography
                  component="h2"
                  sx={{
                    mt: 2.5,
                    color: COLORS.green,
                    fontSize: { xs: 26, sm: 32 },
                    fontWeight: 900,
                    lineHeight: 1.4,
                  }}
                >
                  {text(
                    "परंपरा, संस्कृती आणि सामाजिक ऐक्य",
                    "Tradition, Culture and Social Unity"
                  )}
                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={14}
                  lineHeight={2}
                  sx={{ mt: 2 }}
                >
                  {text(
                    "सातेगावमध्ये पोळा, गणेशोत्सव आणि नवरात्री यांसारखे सण पारंपरिक पद्धतीने उत्साहात साजरे केले जातात. गावातील विविध समाजातील नागरिक एकत्रितपणे सण, उत्सव आणि सामाजिक उपक्रमांमध्ये सहभागी होतात. या परंपरांमुळे गावातील सामाजिक एकता आणि सांस्कृतिक वारसा टिकून आहे.",
                    "Festivals such as Pola, Ganeshotsav and Navratri are celebrated with enthusiasm and traditional customs in Sategaon. Residents from different communities participate in festivals and social activities, helping preserve the village's cultural heritage and social unity."
                  )}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                {[
                  {
                    icon: Church,
                    title: "ग्रामदैवत आणि हनुमान मंदिर",
                    titleEn: "Village Deity and Hanuman Temple",
                    description:
                      "गावातील धार्मिक आणि आध्यात्मिक परंपरेचे महत्त्वाचे केंद्र.",
                    descriptionEn:
                      "Important centres of the village's religious and spiritual traditions.",
                  },
                  {
                    icon: Sun,
                    title: "पारंपरिक सण आणि उत्सव",
                    titleEn: "Traditional Festivals",
                    description:
                      "पोळा, गणेशोत्सव आणि नवरात्री उत्साहाने साजरे केले जातात.",
                    descriptionEn:
                      "Pola, Ganeshotsav and Navratri are celebrated with enthusiasm.",
                  },
                  {
                    icon: Users,
                    title: "सामाजिक एकता",
                    titleEn: "Social Harmony",
                    description:
                      "सर्व समाजातील नागरिकांमध्ये सहकार्य आणि एकोप्याची भावना.",
                    descriptionEn:
                      "A spirit of cooperation and harmony among residents.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Stack
                      key={item.title}
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                      sx={{
                        p: 2.5,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: 3,
                        backgroundColor: COLORS.white,
                      }}
                    >
                      <IconTile icon={Icon} size={23} />

                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          color={COLORS.green}
                          fontWeight={900}
                          fontSize={15}
                        >
                          {text(item.title, item.titleEn)}
                        </Typography>

                        <Typography
                          color="text.secondary"
                          fontSize={13}
                          lineHeight={1.8}
                          sx={{ mt: 0.7 }}
                        >
                          {text(
                            item.description,
                            item.descriptionEn
                          )}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================================================
          CONTACT SECTION
      ================================================== */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: COLORS.green,
          py: { xs: 7, sm: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -130,
            right: -100,
            width: 320,
            height: 320,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.035)",
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            px: PAGE_GUTTER,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                color="#FFB875"
                fontWeight={900}
                fontSize={13}
                letterSpacing={1.2}
                sx={{ mb: 1.5 }}
              >
                {text("आमच्याशी संपर्क साधा", "GET IN TOUCH")}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: COLORS.white,
                  fontSize: { xs: 28, sm: 33, md: 40 },
                  fontWeight: 900,
                  lineHeight: 1.3,
                  mb: 2.5,
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
                  fontSize: { xs: 14, md: 15 },
                  maxWidth: 520,
                }}
              >
                {text(
                  "ग्रामपंचायत कार्यालयाशी संपर्क साधण्यासाठी आणि आपल्या सूचना मांडण्यासाठी आमच्या संपर्क पृष्ठाला भेट द्या.",
                  "Visit our contact page to reach the Gram Panchayat office and share your suggestions or concerns."
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
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 800,
                  "&:hover": {
                    backgroundColor: "#E85B16",
                  },
                }}
              >
                {text("संपर्क पृष्ठ", "Contact Page")}
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  p: { xs: 2.5, sm: 3.5, md: 4 },
                  backgroundColor: COLORS.white,
                  boxShadow: "0 18px 45px rgba(0,0,0,0.14)",
                }}
              >
                <Stack spacing={2.5}>
                  <ContactRow
                    icon={MapPin}
                    title={text("गावाचे स्थान", "VILLAGE LOCATION")}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      lineHeight={1.8}
                    >
                      {text(
                        "सातेगाव, तालुका अंजनगाव सुर्जी, जिल्हा अमरावती, महाराष्ट्र",
                        "Sategaon, Anjangaon Surji Taluka, Amravati District, Maharashtra"
                      )}
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Building2}
                    title={text(
                      "ग्रामपंचायत कार्यालय",
                      "GRAM PANCHAYAT OFFICE"
                    )}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      lineHeight={1.8}
                    >
                      {text(
                        "ग्रामपंचायत सातेगाव",
                        "Gram Panchayat Sategaon"
                      )}
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Phone}
                    title={text(
                      "संपर्क आणि मदत",
                      "CONTACT AND SUPPORT"
                    )}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      lineHeight={1.8}
                    >
                      {text(
                        "संपर्क क्रमांक आणि अधिक माहितीसाठी संपर्क पृष्ठाला भेट द्या.",
                        "Visit the contact page for phone numbers and further information."
                      )}
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Mail}
                    title={text(
                      "सूचना आणि अभिप्राय",
                      "SUGGESTIONS AND FEEDBACK"
                    )}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      lineHeight={1.8}
                    >
                      {text(
                        "आपल्या सूचना आणि अभिप्राय ग्रामपंचायतीपर्यंत पोहोचवा.",
                        "Share your suggestions and feedback with the Gram Panchayat."
                      )}
                    </Typography>
                  </ContactRow>

                  <Button
                    component={Link}
                    to="/contact"
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      mt: 1,
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: COLORS.green,
                      fontWeight: 900,
                      "&:hover": {
                        backgroundColor: COLORS.darkGreen,
                      },
                    }}
                  >
                    {text("आमच्याशी संपर्क साधा", "Contact Us")}
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================================================
          BOTTOM VILLAGE LOCATION
      ================================================== */}

      <Box
        sx={{
          backgroundColor: "#FFF0DF",
          py: { xs: 2, sm: 2.5 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1.2}
          >
            <Building2
              size={19}
              color={COLORS.orange}
            />

            <Typography
              textAlign="center"
              color={COLORS.green}
              fontWeight={800}
              fontSize={{ xs: 11, sm: 13 }}
              lineHeight={1.7}
            >
              {text(
                "ग्रामपंचायत सातेगाव • तालुका अंजनगाव सुर्जी • जिल्हा अमरावती • महाराष्ट्र",
                "Gram Panchayat Sategaon • Anjangaon Surji • Amravati • Maharashtra"
              )}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;