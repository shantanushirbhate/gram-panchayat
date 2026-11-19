
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
  Scale,
  FileSearch,
  ClipboardList,
  Send,
  ShieldCheck,
  Info,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const rtiFeatures = [
  {
    id: 1,
    key: "rightToInformation",
    icon: Scale,
    mrTitle: "माहितीचा अधिकार",
    mrDescription: "नागरिकांना शासकीय कार्यालयांकडून सार्वजनिक माहिती मिळवण्याचा अधिकार.",
    enTitle: "Right to Information",
    enDescription: "The right of citizens to obtain public information from government offices.",
  },
  {
    id: 2,
    key: "publicRecords",
    icon: FileSearch,
    mrTitle: "सार्वजनिक अभिलेख",
    mrDescription: "ग्रामपंचायतीच्या सार्वजनिक नोंदी आणि उपलब्ध कागदपत्रांची माहिती.",
    enTitle: "Public Records",
    enDescription: "Information about public records and available documents of the Gram Panchayat.",
  },
  {
    id: 3,
    key: "applicationProcess",
    icon: ClipboardList,
    mrTitle: "अर्ज प्रक्रिया",
    mrDescription: "माहिती मिळवण्यासाठी अर्ज कसा करावा याबाबत मार्गदर्शन.",
    enTitle: "Application Process",
    enDescription: "Guidance on how to submit an application to request information.",
  },
  {
    id: 4,
    key: "officialResponse",
    icon: Send,
    mrTitle: "अधिकृत उत्तर",
    mrDescription: "माहितीच्या अर्जावर संबंधित अधिकाऱ्यांकडून मिळणारे अधिकृत उत्तर.",
    enTitle: "Official Response",
    enDescription: "The official response provided by the concerned authority to an information request.",
  },
];

const applicationSteps = [
  {
    key: "stepOne",
    mr: "आवश्यक असलेली माहिती निश्चित करा.",
    en: "Identify the information you need.",
  },
  {
    key: "stepTwo",
    mr: "संबंधित जन माहिती अधिकाऱ्याची माहिती घ्या.",
    en: "Identify the concerned Public Information Officer.",
  },
  {
    key: "stepThree",
    mr: "नियमानुसार माहितीचा अधिकार अर्ज सादर करा.",
    en: "Submit an RTI application as prescribed.",
  },
  {
    key: "stepFour",
    mr: "अधिकृत उत्तर आणि उपलब्ध माहिती प्राप्त करा.",
    en: "Receive the official response and available information.",
  },
];

const MahitichaAdhikarPage = () => {
  const { i18n } = useTranslation();

  const isMarathi =
    (i18n.resolvedLanguage || i18n.language || "en").startsWith("mr");

  // Read the selected language's translation directly.
  // Use the Marathi/English fallback if a key is missing.
  const tr = (key, mrFallback, enFallback) => {
    const language = isMarathi ? "mr" : "en";

    return (
      i18n.getResource(language, "translation", key) ||
      (isMarathi ? mrFallback : enFallback)
    );
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      <ServicesHero
        title={tr(
          "services.rti.hero.title",
          "माहितीचा अधिकार",
          "Right to Information"
        )}
        subtitle={tr(
          "services.rti.hero.description",
          "पारदर्शक प्रशासन आणि नागरिकांच्या माहितीच्या अधिकारासाठी ग्रामपंचायतीची माहिती.",
          "Information about the Gram Panchayat's commitment to transparent administration and citizens' right to information."
        )}
        breadcrumb={tr(
          "services.rti.hero.breadcrumb",
          "माहितीचा अधिकार",
          "Right to Information"
        )}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={tr(
            "services.rti.intro.eyebrow",
            "नागरिकांचा अधिकार",
            "CITIZEN RIGHTS"
          )}
          title={tr(
            "services.rti.intro.title",
            "माहितीचा अधिकार",
            "Right to Information"
          )}
          description={tr(
            "services.rti.intro.description",
            "माहितीचा अधिकार नागरिकांना सार्वजनिक प्राधिकरणांच्या कामकाजाबद्दल माहिती मिळवण्याची संधी देतो. यामुळे प्रशासनात पारदर्शकता आणि जबाबदारी वाढण्यास मदत होते.",
            "The Right to Information gives citizens an opportunity to access information about public authorities and promotes transparency and accountability."
          )}
        />

        {/* RTI Features */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
          {rtiFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 200,
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
                        fontSize: "1.02rem",
                        fontWeight: 800,
                      }}
                    >
                      {tr(
                        `services.rti.features.${item.key}.title`,
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
                        `services.rti.features.${item.key}.description`,
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

        {/* Application Process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr(
              "services.rti.process.eyebrow",
              "अर्ज करण्याची पद्धत",
              "APPLICATION GUIDANCE"
            )}
            title={tr(
              "services.rti.process.title",
              "माहिती मिळवण्याची प्रक्रिया",
              "Information Request Process"
            )}
            description={tr(
              "services.rti.process.description",
              "माहितीचा अधिकार अर्ज सादर करताना खालील सामान्य टप्प्यांची माहिती घ्या.",
              "Understand these general steps when submitting a Right to Information request."
            )}
            align="left"
          />

          <Grid container spacing={2.5}>
            {applicationSteps.map((step, index) => (
              <Grid key={step.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
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

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 700,
                        lineHeight: 1.7,
                      }}
                    >
                      {tr(
                        `services.rti.process.${step.key}`,
                        step.mr,
                        step.en
                      )}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Citizen Rights */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              background:
                "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
              color: "#FFFFFF",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="flex-start"
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: "#FFB45E",
                }}
              >
                <ShieldCheck size={28} />
              </Box>

              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {tr(
                    "services.rti.rights.title",
                    "नागरिकांचा माहितीचा अधिकार",
                    "Citizens' Right to Information"
                  )}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "0.93rem",
                    lineHeight: 1.85,
                  }}
                >
                  {tr(
                    "services.rti.rights.description",
                    "माहितीचा अधिकार अधिनियम, २००५ नुसार नागरिकांना संबंधित सार्वजनिक प्राधिकरणाकडून नियमानुसार माहिती मागण्याचा अधिकार आहे. या अधिकारामुळे प्रशासनातील पारदर्शकता आणि उत्तरदायित्वाला प्रोत्साहन मिळते.",
                    "Under the Right to Information Act, 2005, citizens have the right to request information from the concerned public authority, subject to the applicable provisions. This promotes transparency and accountability in administration."
                  )}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* Important Information */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 2.5, sm: 3.5 },
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
                  mb: 0.8,
                }}
              >
                {tr(
                  "services.rti.note.title",
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
                  "services.rti.note.description",
                  "माहितीचा अधिकार अर्ज, शुल्क, कालमर्यादा आणि संबंधित जन माहिती अधिकाऱ्याबाबतची अचूक माहिती अधिकृत नियमांनुसार तपासावी. अर्ज सादर करण्यापूर्वी संबंधित सार्वजनिक प्राधिकरणाकडून मार्गदर्शन घ्यावे.",
                  "Please verify the applicable application procedure, fees, timelines and Public Information Officer details under the official rules. Contact the concerned public authority for guidance before submitting an application."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default MahitichaAdhikarPage;
