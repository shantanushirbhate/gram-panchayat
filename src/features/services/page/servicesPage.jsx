
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  HandHelping,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesCard from "../components/ServicesCard";
import ServicesSectionHeading from "../components/ServicesSectionHeading";
import { servicesCards } from "../data/servicesData";

const serviceFallbacks = {
  suchanaVJahirati: {
    mrTitle: "सूचना व जाहिराती",
    mrDescription:
      "ग्रामपंचायतीच्या सूचना, सार्वजनिक जाहिराती आणि महत्त्वाच्या घोषणांची माहिती.",
    enTitle: "Notices & Announcements",
    enDescription:
      "Information about Gram Panchayat notices, public announcements and important updates.",
  },
  onlineKarBharna: {
    mrTitle: "ऑनलाइन कर भरणा",
    mrDescription:
      "मालमत्ता कर, पाणीपट्टी आणि इतर कर भरण्याबाबत माहिती व मार्गदर्शन.",
    enTitle: "Online Tax Payment",
    enDescription:
      "Information and guidance about property tax, water tax and other tax payments.",
  },
  nagrikSeva: {
    mrTitle: "नागरिक सेवा",
    mrDescription:
      "जन्म, मृत्यू, रहिवास आणि इतर नागरी सेवांबाबत माहिती.",
    enTitle: "Citizen Services",
    enDescription:
      "Information about birth, death, residence and other citizen services.",
  },
  shaskiyaYojna: {
    mrTitle: "शासकीय योजना",
    mrDescription:
      "केंद्र आणि राज्य शासनाच्या विविध योजनांची माहिती व मार्गदर्शन.",
    enTitle: "Government Schemes",
    enDescription:
      "Information and guidance about various Central and State Government schemes.",
  },
  mahitichaAdhikar: {
    mrTitle: "माहितीचा अधिकार",
    mrDescription:
      "माहितीचा अधिकार अधिनियम आणि सार्वजनिक माहिती मिळवण्याच्या प्रक्रियेबाबत माहिती.",
    enTitle: "Right to Information",
    enDescription:
      "Information about the Right to Information Act and the process of requesting public information.",
  },
};

const ServicesPage = () => {
  const { t, i18n } = useTranslation();

  const isMarathi = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).startsWith("mr");

  const tr = (key, mrFallback, enFallback) => {
    return t(key, {
      defaultValue: isMarathi ? mrFallback : enFallback,
    });
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <ServicesHero
        title={tr(
          "services.hero.title",
          "नागरिक सेवा",
          "Gram Panchayat Services"
        )}
        subtitle={tr(
          "services.hero.description",
          "ग्रामपंचायतीमार्फत उपलब्ध असलेल्या विविध सेवा, सुविधा आणि महत्त्वाची माहिती.",
          "Explore the various services and facilities available through the Gram Panchayat."
        )}
        breadcrumb={tr(
          "services.hero.breadcrumb",
          "सेवा",
          "Services"
        )}
      />

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <ServicesSectionHeading
          eyebrow={tr(
            "services.intro.eyebrow",
            "आमच्या सेवा",
            "OUR SERVICES"
          )}
          title={tr(
            "services.intro.title",
            "नागरिकांसाठी विविध सेवा आणि सुविधा",
            "Services and Facilities for Citizens"
          )}
          description={tr(
            "services.intro.description",
            "ग्रामपंचायत पिंपळखुटा बुद्रुक नागरिकांना आवश्यक सेवा, माहिती आणि शासकीय योजनांशी संबंधित मार्गदर्शन उपलब्ध करून देण्यासाठी कटिबद्ध आहे.",
            "Gram Panchayat Pimpalkhuta Budruk is committed to providing essential services, information and guidance about government schemes."
          )}
        />

        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 2.5, sm: 3.5, md: 4 },
            borderRadius: 4,
            bgcolor: "#FFFFFF",
            border: "1px solid #E8EFE9",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
                borderRadius: 3,
                bgcolor: "#EDF5EF",
                color: "#14532D",
              }}
            >
              <HandHelping size={30} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#173B2A",
                  fontWeight: 800,
                  fontSize: { xs: "1.05rem", sm: "1.2rem" },
                  mb: 0.7,
                }}
              >
                {tr(
                  "services.intro.messageTitle",
                  "आपल्या सेवेसाठी ग्रामपंचायत सदैव तत्पर",
                  "Gram Panchayat Services for Citizens"
                )}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 1.85,
                  fontSize: "0.93rem",
                }}
              >
                {tr(
                  "services.intro.messageDescription",
                  "नागरिकांना आवश्यक माहिती आणि सेवा सहज उपलब्ध व्हाव्यात यासाठी ग्रामपंचायत कटिबद्ध आहे. विविध सेवा आणि अर्ज प्रक्रियेबद्दल अधिक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधावा.",
                  "The Gram Panchayat is committed to making essential information and services accessible to citizens. Contact the Gram Panchayat office for further information."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Services Cards */}
      <Box
        sx={{
          py: { xs: 5, md: 8 },
          bgcolor: "#F1F7F1",
        }}
      >
        <Container maxWidth="lg">
          <ServicesSectionHeading
            eyebrow={tr(
              "services.categories.eyebrow",
              "सेवा विभाग",
              "SERVICE CATEGORIES"
            )}
            title={tr(
              "services.categories.title",
              "उपलब्ध सेवा विभाग",
              "Available Service Categories"
            )}
            description={tr(
              "services.categories.description",
              "आपल्याला आवश्यक असलेल्या सेवांची माहिती मिळवण्यासाठी खालील विभाग निवडा.",
              "Choose a category below to explore information about the services you need."
            )}
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{ mt: 2 }}
          >
            {servicesCards.map((item) => {
              const fallback = serviceFallbacks[item.key] || {
                mrTitle: item.key,
                mrDescription:
                  "या सेवेसंबंधी अधिक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधावा.",
                enTitle: item.key,
                enDescription:
                  "Contact the Gram Panchayat office for more information about this service.",
              };

              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <ServicesCard
                    item={{
                      ...item,
                      title: tr(
                        `services.categories.${item.key}.title`,
                        fallback.mrTitle,
                        fallback.enTitle
                      ),
                      description: tr(
                        `services.categories.${item.key}.description`,
                        fallback.mrDescription,
                        fallback.enDescription
                      ),
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Citizen Support */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            background:
              "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
            color: "#FFFFFF",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                mb={2}
              >
                <ShieldCheck size={25} color="#FFB45E" />

                <Typography
                  sx={{
                    color: "#FFB45E",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    letterSpacing: 1.5,
                  }}
                >
                  {tr(
                    "services.support.eyebrow",
                    "नागरिक सहाय्य",
                    "CITIZEN SUPPORT"
                  )}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "1.45rem", sm: "1.9rem" },
                  fontWeight: 800,
                  lineHeight: 1.35,
                  mb: 1.5,
                }}
              >
                {tr(
                  "services.support.title",
                  "आपल्याला काही मदत हवी आहे का?",
                  "Need Assistance?"
                )}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.85,
                  fontSize: "0.95rem",
                }}
              >
                {tr(
                  "services.support.description",
                  "ग्रामपंचायतीच्या सेवा, अर्ज प्रक्रिया किंवा आवश्यक कागदपत्रांबाबत अधिक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.",
                  "Contact the Gram Panchayat office for more information about services, application procedures or required documents."
                )}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: "center",
                  },
                  alignItems: "center",
                  gap: 1.5,
                  mt: { xs: 1, md: 0 },
                }}
              >
                <UsersRound size={38} color="#FFB45E" />

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                  }}
                >
                  {tr(
                    "services.support.footer",
                    "आपली ग्रामपंचायत, आपल्या सेवेसाठी",
                    "Your Gram Panchayat, Here to Serve You"
                  )}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ServicesPage;
