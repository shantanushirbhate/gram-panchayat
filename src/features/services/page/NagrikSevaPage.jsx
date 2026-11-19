
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  FileText,
  UserRound,
  Home,
  Heart,
  ClipboardList,
  FileCheck,
  Info,
  ArrowUpRight,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const citizenServices = [
  {
    id: 1,
    key: "birthCertificate",
    icon: UserRound,
    mrTitle: "जन्म प्रमाणपत्र",
    mrDescription:
      "नागरिकांना जन्म नोंदणी आणि जन्म प्रमाणपत्र मिळवण्यासाठी आवश्यक मार्गदर्शन.",
    enTitle: "Birth Certificate",
    enDescription:
      "Guidance for birth registration and obtaining a birth certificate.",
  },
  {
    id: 2,
    key: "deathCertificate",
    icon: FileText,
    mrTitle: "मृत्यू प्रमाणपत्र",
    mrDescription:
      "मृत्यू नोंदणी आणि मृत्यू प्रमाणपत्रासंबंधी आवश्यक माहिती व मार्गदर्शन.",
    enTitle: "Death Certificate",
    enDescription:
      "Information and guidance regarding death registration and death certificates.",
  },
  {
    id: 3,
    key: "residenceCertificate",
    icon: Home,
    mrTitle: "रहिवासी प्रमाणपत्र",
    mrDescription:
      "रहिवासासंबंधी प्रमाणपत्र मिळवण्यासाठी अर्ज प्रक्रिया आणि आवश्यक माहिती.",
    enTitle: "Residence Certificate",
    enDescription:
      "Information about the application process for residence-related certificates.",
  },
  {
    id: 4,
    key: "marriageRelatedServices",
    icon: Heart,
    mrTitle: "विवाह संबंधित सेवा",
    mrDescription:
      "विवाह नोंदणी आणि विवाहासंबंधी उपलब्ध सेवांबाबत मार्गदर्शन.",
    enTitle: "Marriage Related Services",
    enDescription:
      "Guidance regarding marriage registration and related services.",
  },
  {
    id: 5,
    key: "applicationServices",
    icon: ClipboardList,
    mrTitle: "अर्ज संबंधित सेवा",
    mrDescription:
      "विविध शासकीय आणि ग्रामपंचायत सेवांसाठी अर्ज सादर करण्याबाबत माहिती.",
    enTitle: "Application Services",
    enDescription:
      "Information about submitting applications for government and Gram Panchayat services.",
  },
  {
    id: 6,
    key: "otherCertificates",
    icon: FileCheck,
    mrTitle: "इतर प्रमाणपत्रे",
    mrDescription:
      "ग्रामपंचायतीशी संबंधित इतर उपलब्ध प्रमाणपत्रे आणि सेवांबाबत माहिती.",
    enTitle: "Other Certificates",
    enDescription:
      "Information about other available certificates and Gram Panchayat services.",
  },
];

const applicationSteps = [
  {
    key: "stepOne",
    mr: "आवश्यक असलेले प्रमाणपत्र किंवा सेवा निश्चित करा.",
    en: "Identify the certificate or service you require.",
  },
  {
    key: "stepTwo",
    mr: "संबंधित कार्यालयाकडून आवश्यक कागदपत्रांची माहिती घ्या.",
    en: "Check the required documents with the concerned office.",
  },
  {
    key: "stepThree",
    mr: "आवश्यक कागदपत्रांसह अर्ज सादर करा.",
    en: "Submit the application along with the required documents.",
  },
  {
    key: "stepFour",
    mr: "अर्जाची स्थिती तपासा आणि नियमानुसार सेवा प्राप्त करा.",
    en: "Check the application status and receive the service as prescribed.",
  },
];

const NagrikSevaPage = () => {
  const { i18n } = useTranslation();

  const currentLanguage =
    i18n.resolvedLanguage || i18n.language || "en";

  const isMarathi = currentLanguage.startsWith("mr");
  const language = isMarathi ? "mr" : "en";

  // Use the namespace configured in i18next.
  const namespace = Array.isArray(i18n.options.defaultNS)
    ? i18n.options.defaultNS[0]
    : i18n.options.defaultNS || "translation";

  // Read only the selected language and use fallback text if missing.
  const tr = (key, mrFallback, enFallback) => {
    const translatedValue = i18n.getResource(
      language,
      namespace,
      key
    );

    if (
      typeof translatedValue === "string" &&
      translatedValue.trim() !== ""
    ) {
      return translatedValue;
    }

    return isMarathi ? mrFallback : enFallback;
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <ServicesHero
        title={tr(
          "services.citizen.hero.title",
          "नागरिक सेवा",
          "Citizen Services"
        )}
        subtitle={tr(
          "services.citizen.hero.description",
          "ग्रामपंचायतीमार्फत नागरिकांना उपलब्ध असलेल्या विविध सेवा आणि प्रमाणपत्रांची माहिती.",
          "Information about various services and certificates available to citizens through the Gram Panchayat."
        )}
        breadcrumb={tr(
          "services.citizen.hero.breadcrumb",
          "नागरिक सेवा",
          "Citizen Services"
        )}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={tr(
            "services.citizen.intro.eyebrow",
            "नागरिकांसाठी सुविधा",
            "CITIZEN FACILITIES"
          )}
          title={tr(
            "services.citizen.intro.title",
            "नागरिकांसाठी उपलब्ध सेवा",
            "Services Available for Citizens"
          )}
          description={tr(
            "services.citizen.intro.description",
            "जन्म, मृत्यू, रहिवास आणि इतर प्रमाणपत्रांसह ग्रामपंचायतीशी संबंधित विविध नागरी सेवांची माहिती येथे उपलब्ध आहे.",
            "Explore information about birth, death, residence and other certificates, along with various citizen services provided by the Gram Panchayat."
          )}
        />

        {/* Citizen Services */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
          {citizenServices.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 190,
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#E87519",
                      boxShadow: "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={27} />
                    </Box>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                      }}
                    >
                      {tr(
                        `services.citizen.items.${item.key}.title`,
                        item.mrTitle,
                        item.enTitle
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.88rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {tr(
                        `services.citizen.items.${item.key}.description`,
                        item.mrDescription,
                        item.enDescription
                      )}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* General Process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr(
              "services.citizen.process.eyebrow",
              "सेवा मिळवण्याची पद्धत",
              "SERVICE PROCEDURE"
            )}
            title={tr(
              "services.citizen.process.title",
              "अर्ज करण्याची सामान्य प्रक्रिया",
              "General Application Process"
            )}
            description={tr(
              "services.citizen.process.description",
              "ग्रामपंचायतीशी संबंधित सेवा किंवा प्रमाणपत्र मिळवण्यासाठी खालील सामान्य टप्प्यांचे पालन करा.",
              "Follow these general steps when applying for a Gram Panchayat service or certificate."
            )}
            align="left"
          />

          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: 4,
              bgcolor: "#FFFFFF",
              border: "1px solid #E5EDE7",
            }}
          >
            <Stack spacing={2.5}>
              {applicationSteps.map((step, index) => (
                <Stack
                  key={step.key}
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      bgcolor: "#14532D",
                      color: "#FFFFFF",
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </Box>

                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.93rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {tr(
                        `services.citizen.process.${step.key}`,
                        step.mr,
                        step.en
                      )}
                    </Typography>
                  </Box>

                  {index < applicationSteps.length - 1 && (
                    <Box sx={{ flexShrink: 0, mt: 1 }}>
                      <ArrowUpRight size={18} color="#E87519" />
                    </Box>
                  )}
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Box>

        {/* Important Note */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 2.5, sm: 3 },
            borderRadius: 4,
            bgcolor: "#FFF1DC",
            border: "1px solid #F5D7AF",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Box sx={{ flexShrink: 0, mt: 0.3 }}>
              <Info size={23} color="#C46A14" />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#8A4B10",
                  fontWeight: 800,
                  mb: 0.7,
                }}
              >
                {tr(
                  "services.citizen.note.title",
                  "महत्त्वाची सूचना",
                  "Important Information"
                )}
              </Typography>

              <Typography
                sx={{
                  color: "#79552F",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                {tr(
                  "services.citizen.note.description",
                  "प्रत्येक सेवेसाठी आवश्यक कागदपत्रे, शुल्क आणि प्रक्रिया वेगवेगळी असू शकते. अचूक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधावा. सर्व सेवा ऑनलाइन उपलब्ध आहेत असे गृहीत धरू नये.",
                  "Required documents, fees and procedures may differ for each service. Contact the Gram Panchayat office for accurate information. Please do not assume that all services are available online."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default NagrikSevaPage;
