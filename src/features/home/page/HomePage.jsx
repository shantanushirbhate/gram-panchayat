
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
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

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

// ======================================================
// VILLAGE STATISTICS
// ======================================================

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

// ======================================================
// DEVELOPMENT PROGRESS
// ======================================================

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

// ======================================================
// PUBLIC SERVICES
// ======================================================

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
// STATISTICS CARD
// ======================================================

function StatCard({ stat, index, text }) {
  const Icon = stat.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 205, sm: 220, md: 225 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          minWidth: 0,
          p: { xs: 2.5, sm: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <Typography
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: 5,
            right: 17,
            fontSize: { xs: 54, md: 68 },
            fontWeight: 900,
            color: "rgba(23,59,42,0.045)",
          }}
        >
          0{index + 1}
        </Typography>

        <IconTile icon={Icon} />

        <Typography
          sx={{
            mt: 2,
            color: COLORS.green,
            fontWeight: 900,
            fontSize: { xs: 27, sm: 30, md: 33 },
            lineHeight: 1.2,
          }}
        >
          {stat.value}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: COLORS.text,
            fontWeight: 800,
            fontSize: { xs: 14, sm: 15 },
            lineHeight: 1.5,
          }}
        >
          {text(stat.title, stat.titleEn)}
        </Typography>

        <Typography
          sx={{
            mt: "auto",
            pt: 0.7,
            color: COLORS.muted,
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          {text(stat.description, stat.descriptionEn)}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ======================================================
// DEVELOPMENT PROGRESS CARD
// ======================================================

function ProgressCard({ item, text }) {
  const Icon = item.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        minHeight: { xs: 215, sm: 220, md: 225 },
        p: { xs: 2.5, sm: 3 },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2.5 }}
      >
        <IconTile icon={Icon} size={23} />

        <Typography
          sx={{
            color: COLORS.green,
            fontSize: 25,
            fontWeight: 900,
          }}
        >
          {item.value}%
        </Typography>
      </Stack>

      <Typography
        sx={{
          color: COLORS.text,
          fontWeight: 800,
          fontSize: 15,
          lineHeight: 1.5,
          mb: 2,
          minHeight: 45,
        }}
      >
        {text(item.title, item.titleEn)}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={item.value}
        aria-label={`${item.value}%`}
        sx={{
          mt: "auto",
          height: 9,
          borderRadius: 10,
          backgroundColor: "#E8EDE8",
          "& .MuiLinearProgress-bar": {
            borderRadius: 10,
            backgroundColor: COLORS.orange,
          },
        }}
      />
    </Card>
  );
}

// ======================================================
// PUBLIC SERVICE CARD
// ======================================================

function ServiceCard({ service, text }) {
  const Icon = service.icon;

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyle,
        minHeight: { xs: 310, sm: 320, md: 330 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          minWidth: 0,
          p: { xs: 2.5, sm: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <IconTile icon={Icon} />

        <Typography
          sx={{
            mt: 2,
            minHeight: 52,
            display: "flex",
            alignItems: "center",
            color: COLORS.green,
            fontWeight: 900,
            fontSize: 17,
            lineHeight: 1.5,
          }}
        >
          {text(service.title, service.titleEn)}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 1.5, gap: 1 }}
        >
          <Typography color="text.secondary" fontSize={13}>
            {text("शुल्क", "Fee")}
          </Typography>

          <Typography color={COLORS.green} fontWeight={900}>
            {service.fee}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ gap: 1 }}
        >
          <Typography color="text.secondary" fontSize={13}>
            {text("कालावधी", "Processing")}
          </Typography>

          <Typography
            color={COLORS.text}
            fontWeight={700}
            fontSize={13}
            textAlign="right"
          >
            {text(service.time, service.timeEn)}
          </Typography>
        </Stack>

        <Button
          component={Link}
          to="/services"
          endIcon={<ArrowUpRight size={17} />}
          sx={{
            mt: "auto",
            pt: 2.5,
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
      {/* HERO SLIDER */}

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
                        alignSelf: "flex-start",
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
                        alignItems: { xs: "stretch", sm: "center" },
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

          <Typography fontWeight={800} fontSize={13} color={COLORS.green}>
            {text(
              "वरुड, अमरावती, महाराष्ट्र",
              "Warud, Amravati, Maharashtra"
            )}
          </Typography>
        </Box>
      </Box>

      {/* ANNOUNCEMENTS */}

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
                  "ग्रामसभा नोटीस - मार्च 2026",
                  "Gram Sabha Notice - March 2026"
                ),
                text(
                  "प्रधानमंत्री आवास योजना - नोंदणी सुरू",
                  "Pradhan Mantri Awas Yojana - Registration Open"
                ),
                text(
                  "ग्रामसभा नोटीस - मार्च 2026",
                  "Gram Sabha Notice - March 2026"
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
                        index === 0 ? "blinkStar 1.2s infinite" : "none",
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

                  <Chip
                    label={text("नवीन", "NEW")}
                    size="small"
                    sx={{
                      height: 22,
                      backgroundColor: "#FDE68A",
                      color: "#78350F",
                      fontWeight: 900,
                      fontSize: 10,
                    }}
                  />
                </Stack>
              ))}
            </Stack>
          ))}
        </Box>
      </Box>

      {/* TODAY'S THOUGHTS */}

      <TodaysThoughts />

      {/* VILLAGE INTRODUCTION AND STATISTICS */}

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
          sx={{ px: PAGE_GUTTER, position: "relative", zIndex: 1 }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="stretch"
          >
            <Grid item xs={12} md={4}>
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
                    "& .MuiChip-icon": { color: COLORS.orange },
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
                    "पिंपळखुटा बु. ग्रामपंचायत",
                    "Gram Panchayat Pimpalkhuta Budruk"
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
                    "महाराष्ट्रातील अमरावती जिल्ह्यातील वरुड तालुक्यात वसलेले आपले गाव. नागरिकांच्या सहभागातून गावाचा सर्वांगीण विकास साधण्याचा आमचा प्रयत्न आहे. स्वच्छता, मूलभूत सुविधा, शिक्षण आणि ग्रामीण विकासाला प्राधान्य देऊन ग्रामपंचायत सातत्याने कार्यरत आहे.",
                    "Our village is located in Warud taluka of Amravati district, Maharashtra. We strive for the overall development of the village through citizen participation, with a focus on sanitation, essential facilities, education and rural development."
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

                  <Box>
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
                        "वरुड, जिल्हा अमरावती, महाराष्ट्र",
                        "Warud, Amravati District, Maharashtra"
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

            <Grid item xs={12} md={8} sx={{ minWidth: 0 }}>
              <Grid
                container
                spacing={CARD_GRID_SPACING}
                alignItems="stretch"
              >
                {villageStats.map((stat, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={stat.title}
                    sx={{
                      display: "flex",
                      minWidth: 0,
                    }}
                  >
                    <StatCard stat={stat} index={index} text={text} />
                  </Grid>
                ))}
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
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
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
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
                  alt="Agricultural landscape"
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

                  <Typography color={COLORS.green} fontWeight={900}>
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
                  "ग्रामपंचायत पिंपळखुटा बु. ही स्थानिक स्वराज्य संस्थेच्या माध्यमातून नागरिकांना मूलभूत सुविधा उपलब्ध करून देण्यासाठी कार्यरत आहे. स्वच्छता, पाणीपुरवठा, शिक्षण, आरोग्य आणि ग्रामीण विकास या क्षेत्रांमध्ये सातत्याने प्रयत्न केले जातात.",
                  "Gram Panchayat Pimpalkhuta Budruk works to provide essential public services through local self-governance. Our focus includes sanitation, water supply, education, healthcare and rural development."
                )}
              </Typography>

              <Stack spacing={2.2} sx={{ mb: 3.5 }}>
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

                      <Typography color={COLORS.text} fontWeight={800}>
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

      {/* MINISTER SECTION */}

      <MinisterSection />

      {/* VILLAGE PHOTO GALLERY */}

      <VillagePhotSlider />

      {/* DEVELOPMENT PROGRESS */}

      <Box
        sx={{
          backgroundColor: COLORS.lightGreen,
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
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

          <Grid
            container
            spacing={CARD_GRID_SPACING}
            alignItems="stretch"
          >
            {progressItems.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={item.title}
                sx={{
                  display: "flex",
                  minWidth: 0,
                }}
              >
                <ProgressCard item={item} text={text} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PUBLIC SERVICES */}

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: { xs: 7, sm: 8, md: 11 },
        }}
      >
        <Container maxWidth={false} sx={{ px: PAGE_GUTTER }}>
          <SectionHeading
            subtitle={text("नागरिक सेवा", "CITIZEN SERVICES")}
            title={text("आमच्या प्रमुख सेवा", "Our Public Services")}
            description={text(
              "ग्रामपंचायतीमार्फत उपलब्ध असलेल्या काही प्रमुख दाखला आणि नोंदणी सेवा.",
              "Some of the certificate and registration services listed by the Gram Panchayat."
            )}
          />

          <Grid
            container
            spacing={CARD_GRID_SPACING}
            alignItems="stretch"
          >
            {services.map((service) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={service.title}
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

      {/* CONTACT SECTION */}

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
          sx={{ px: PAGE_GUTTER, position: "relative", zIndex: 1 }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
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

            <Grid item xs={12} md={7}>
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
                    title={text("कार्यालय पत्ता", "Office Address")}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={14}
                      lineHeight={1.7}
                    >
                      {text(
                        "ग्रामपंचायत कार्यालय पिंपळखुटा बु., ता. वरुड, जि. अमरावती",
                        "Gram Panchayat Office, Pimpalkhuta Budruk, Warud, Amravati"
                      )}
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Phone}
                    title={text("संपर्क क्रमांक", "Phone Number")}
                  >
                    <Typography
                      component="a"
                      href="tel:9920942994"
                      sx={{
                        color: COLORS.muted,
                        textDecoration: "none",
                        fontSize: 14,
                        "&:hover": { color: COLORS.orange },
                      }}
                    >
                      9920942994
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Mail}
                    title={text("ई-मेल", "Email")}
                  >
                    <Typography
                      component="a"
                      href="mailto:gppimpalkhuta30@gmail.com"
                      sx={{
                        color: COLORS.muted,
                        textDecoration: "none",
                        fontSize: { xs: 12, sm: 14 },
                        overflowWrap: "anywhere",
                        "&:hover": { color: COLORS.orange },
                      }}
                    >
                      gppimpalkhuta30@gmail.com
                    </Typography>
                  </ContactRow>

                  <Divider />

                  <ContactRow
                    icon={Clock}
                    title={text("कार्यालय वेळ", "Office Hours")}
                  >
                    <Typography color="text.secondary" fontSize={14}>
                      {text(
                        "सकाळी १० ते संध्याकाळी ६",
                        "10:00 AM – 6:00 PM"
                      )}
                    </Typography>
                  </ContactRow>
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
            <Building2 size={19} color={COLORS.orange} />

            <Typography
              textAlign="center"
              color={COLORS.green}
              fontWeight={800}
              fontSize={{ xs: 11, sm: 13 }}
              lineHeight={1.7}
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
