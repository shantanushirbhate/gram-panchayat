
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import {
  FileText,
  Baby,
  Heart,
  Home,
  ChartNoAxesColumn,
  ClipboardCheck,
  Toilet,
  HardHat,
  Info,
  ArrowUpRight,
  Download,
  FileDown,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

// Citizen application forms.
// Add the official PDF URL in downloadUrl when it is available.
const onlineForms = [
  {
    id: 1,
    key: "birthRegistration",
    icon: Baby,
    downloadUrl: "",
  },
  {
    id: 2,
    key: "deathRegistration",
    icon: FileText,
    downloadUrl: "",
  },
  {
    id: 3,
    key: "marriageRegistration",
    icon: Heart,
    downloadUrl: "",
  },
  {
    id: 4,
    key: "propertyExtract",
    icon: Home,
    downloadUrl: "",
  },
  {
    id: 5,
    key: "bplCertificate",
    icon: ChartNoAxesColumn,
    downloadUrl: "",
  },
  {
    id: 6,
    key: "noDuesCertificate",
    icon: ClipboardCheck,
    downloadUrl: "",
  },
  {
    id: 7,
    key: "toiletUsageCertificate",
    icon: Toilet,
    downloadUrl: "",
  },
  {
    id: 8,
    key: "constructionPermission",
    icon: HardHat,
    downloadUrl: "",
  },
];

const applicationSteps = [
  "stepOne",
  "stepTwo",
  "stepThree",
  "stepFour",
];

const NagrikSevaPage = () => {
  const { i18n } = useTranslation();

  const currentLanguage =
    i18n.resolvedLanguage || i18n.language || "mr";

  const isMarathi = currentLanguage.startsWith("mr");
  const language = isMarathi ? "mr" : "en";

  const namespace = Array.isArray(i18n.options.defaultNS)
    ? i18n.options.defaultNS[0]
    : i18n.options.defaultNS || "common";

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
          "ग्रामपंचायत दाखले व फॉर्म",
          "Gram Panchayat Certificates & Forms"
        )}
        subtitle={tr(
          "services.citizen.hero.description",
          "नागरिकांसाठी आवश्यक विविध दाखल्यांचे फॉर्म्स आणि अर्जांची माहिती.",
          "Find application forms and information about certificates required by citizens."
        )}
        breadcrumb={tr(
          "services.citizen.hero.breadcrumb",
          "नागरिक सेवा",
          "Citizen Services"
        )}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={tr(
            "services.citizen.intro.eyebrow",
            "नागरिकांसाठी सुविधा",
            "CITIZEN FACILITIES"
          )}
          title={tr(
            "services.citizen.intro.title",
            "ग्रामपंचायत दाखले व अर्ज",
            "Gram Panchayat Certificates & Applications"
          )}
          description={tr(
            "services.citizen.intro.description",
            "जन्म, मृत्यू, विवाह, मालमत्ता आणि इतर आवश्यक सेवांसाठी उपलब्ध असलेल्या अर्जांची माहिती येथे मिळवा.",
            "Find information about applications for birth, death, marriage, property and other essential services."
          )}
        />

        {/* Application Forms */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {onlineForms.map((form) => {
              const Icon = form.icon;
              const formKey = `services.citizen.forms.items.${form.key}`;
              const isAvailable = Boolean(form.downloadUrl);

              return (
                <Grid
                  key={form.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      minHeight: 245,
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: 4,
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E5EDE7",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#E87519",
                        boxShadow:
                          "0 12px 28px rgba(20,83,45,0.08)",
                      },
                    }}
                  >
                    <Stack spacing={2} sx={{ flex: 1 }}>
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
                          lineHeight: 1.5,
                        }}
                      >
                        {tr(
                          `${formKey}.title`,
                          form.key,
                          form.key
                        )}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "0.88rem",
                          lineHeight: 1.85,
                        }}
                      >
                        {tr(
                          `${formKey}.description`,
                          "या दाखल्यासाठी आवश्यक अर्ज आणि माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.",
                          "Contact the Gram Panchayat office for the application and information required for this certificate."
                        )}
                      </Typography>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Button
                      component={isAvailable ? "a" : "button"}
                      href={isAvailable ? form.downloadUrl : undefined}
                      target={isAvailable ? "_blank" : undefined}
                      rel={
                        isAvailable
                          ? "noopener noreferrer"
                          : undefined
                      }
                      disabled={!isAvailable}
                      fullWidth
                      variant="contained"
                      startIcon={
                        isAvailable ? (
                          <Download size={18} />
                        ) : (
                          <FileDown size={18} />
                        )
                      }
                      sx={{
                        py: 1.2,
                        borderRadius: 2.5,
                        bgcolor: "#14532D",
                        fontWeight: 800,
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#0F3F22",
                        },
                        "&.Mui-disabled": {
                          bgcolor: "#E8EEE9",
                          color: "#738278",
                        },
                      }}
                    >
                      {isAvailable
                        ? tr(
                            "services.citizen.forms.download",
                            "फॉर्म डाउनलोड करा",
                            "Download Form"
                          )
                        : tr(
                            "services.citizen.forms.unavailable",
                            "फॉर्म लिंक लवकरच उपलब्ध",
                            "Form Link Coming Soon"
                          )}
                    </Button>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Application Process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr(
              "services.citizen.process.eyebrow",
              "अर्ज करण्याची पद्धत",
              "APPLICATION PROCESS"
            )}
            title={tr(
              "services.citizen.process.title",
              "दाखल्यासाठी अर्ज करण्याची प्रक्रिया",
              "How to Apply for a Certificate"
            )}
            description={tr(
              "services.citizen.process.description",
              "ग्रामपंचायत दाखला किंवा प्रमाणपत्र मिळवण्यासाठी खालील सामान्य टप्प्यांचे पालन करा.",
              "Follow these general steps when applying for a Gram Panchayat certificate."
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
                  key={step}
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
                        `services.citizen.process.${step}`,
                        [
                          "आवश्यक असलेला दाखला किंवा अर्ज निश्चित करा.",
                          "संबंधित कार्यालयाकडून आवश्यक कागदपत्रांची माहिती घ्या.",
                          "आवश्यक कागदपत्रांसह अर्ज ग्रामपंचायत कार्यालयात सादर करा.",
                          "अर्जाची स्थिती तपासा आणि नियमानुसार दाखला प्राप्त करा.",
                        ][index],
                        [
                          "Identify the certificate or application you require.",
                          "Check the required documents with the concerned office.",
                          "Submit the application with the required documents at the Gram Panchayat office.",
                          "Check the application status and receive the certificate as prescribed.",
                        ][index]
                      )}
                    </Typography>
                  </Box>

                  {index < applicationSteps.length - 1 && (
                    <Box sx={{ flexShrink: 0, mt: 1 }}>
                      <ArrowUpRight
                        size={18}
                        color="#E87519"
                      />
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
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="flex-start"
          >
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
                  "प्रत्येक दाखल्यासाठी आवश्यक कागदपत्रे, शुल्क आणि प्रक्रिया वेगवेगळी असू शकते. अर्ज सादर करण्यापूर्वी ग्रामपंचायत कार्यालयाकडून आवश्यक माहिती आणि अधिकृत फॉर्मची उपलब्धता तपासून घ्यावी.",
                  "Required documents, fees and procedures may differ for each certificate. Before submitting an application, confirm the requirements and availability of the official form with the Gram Panchayat office."
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
