
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
  CreditCard,
  ReceiptText,
  FileCheck,
  Wallet,
  Info,
  ArrowRight,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const paymentServices = [
  {
    id: 1,
    key: "propertyTax",
    icon: CreditCard,
    mrTitle: "मालमत्ता कर",
    mrDescription:
      "ग्रामपंचायत क्षेत्रातील मालमत्तेवरील करासंबंधी माहिती आणि भरणा प्रक्रियेबाबत मार्गदर्शन.",
    enTitle: "Property Tax",
    enDescription:
      "Information and guidance regarding property tax and its payment procedure.",
  },
  {
    id: 2,
    key: "waterTax",
    icon: Wallet,
    mrTitle: "पाणीपट्टी",
    mrDescription:
      "पाणीपट्टी करासंबंधी माहिती, थकबाकी तपासणी आणि भरणा प्रक्रियेबाबत मार्गदर्शन.",
    enTitle: "Water Tax",
    enDescription:
      "Information and guidance regarding water tax, outstanding dues and payment procedures.",
  },
  {
    id: 3,
    key: "paymentReceipt",
    icon: ReceiptText,
    mrTitle: "भरणा पावती",
    mrDescription:
      "कर किंवा इतर देयक भरल्यानंतर मिळणाऱ्या पावतीसंबंधी माहिती.",
    enTitle: "Payment Receipt",
    enDescription:
      "Information about receipts issued after paying taxes or other applicable dues.",
  },
  {
    id: 4,
    key: "taxInformation",
    icon: FileCheck,
    mrTitle: "करासंबंधी माहिती",
    mrDescription:
      "विविध कर, देय रक्कम आणि कर भरण्याच्या प्रक्रियेबाबत मार्गदर्शन.",
    enTitle: "Tax Information",
    enDescription:
      "Guidance about different taxes, payable amounts and tax payment procedures.",
  },
];

const paymentSteps = [
  {
    key: "identifyProperty",
    mr: "आपल्या मालमत्तेची किंवा कर खात्याची माहिती निश्चित करा.",
    en: "Identify your property or tax account details.",
  },
  {
    key: "checkOutstandingTax",
    mr: "लागू असलेली कराची रक्कम आणि थकबाकी तपासा.",
    en: "Check the applicable tax amount and outstanding dues.",
  },
  {
    key: "makePayment",
    mr: "अधिकृत सुविधेद्वारे किंवा ग्रामपंचायत कार्यालयात कर भरा.",
    en: "Pay the tax through an authorized facility or at the Gram Panchayat office.",
  },
  {
    key: "collectReceipt",
    mr: "कर भरल्यानंतर पावती प्राप्त करून सुरक्षित ठेवा.",
    en: "Collect and keep the payment receipt safely.",
  },
];

const OnlineKarBharnaPage = () => {
  const { i18n } = useTranslation();

  const isMarathi = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).startsWith("mr");

  const tr = (key, mrFallback, enFallback) => {
    const language = isMarathi ? "mr" : "en";

    return (
      i18n.getResource(language, "translation", key) ||
      (isMarathi ? mrFallback : enFallback)
    );
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      {/* Hero */}
      <ServicesHero
        title={tr(
          "services.onlineTax.hero.title",
          "ऑनलाइन कर भरणा",
          "Online Tax Payment"
        )}
        subtitle={tr(
          "services.onlineTax.hero.description",
          "ग्रामपंचायतीच्या विविध करांबाबत आणि कर भरण्याच्या प्रक्रियेबाबत माहिती.",
          "Information about various Gram Panchayat taxes and their payment procedures."
        )}
        breadcrumb={tr(
          "services.onlineTax.hero.breadcrumb",
          "ऑनलाइन कर भरणा",
          "Online Tax Payment"
        )}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={tr(
            "services.onlineTax.intro.eyebrow",
            "नागरिकांसाठी सुविधा",
            "CITIZEN FACILITIES"
          )}
          title={tr(
            "services.onlineTax.intro.title",
            "कर भरणा सेवा",
            "Tax Payment Services"
          )}
          description={tr(
            "services.onlineTax.intro.description",
            "मालमत्ता कर, पाणीपट्टी आणि इतर ग्रामपंचायत करांसंबंधी आवश्यक माहिती येथे उपलब्ध आहे.",
            "Find information about property tax, water tax and other Gram Panchayat taxes here."
          )}
        />

        {/* Tax Services */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
          {paymentServices.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                        width: 55,
                        height: 55,
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
                        fontWeight: 800,
                        fontSize: "1.02rem",
                      }}
                    >
                      {tr(
                        `services.onlineTax.items.${item.key}.title`,
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
                        `services.onlineTax.items.${item.key}.description`,
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

        {/* Payment Process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr(
              "services.onlineTax.process.eyebrow",
              "कर भरण्याची पद्धत",
              "PAYMENT PROCEDURE"
            )}
            title={tr(
              "services.onlineTax.process.title",
              "कर भरण्याची प्रक्रिया",
              "Tax Payment Process"
            )}
            description={tr(
              "services.onlineTax.process.description",
              "कर भरण्यापूर्वी खालील सामान्य टप्प्यांची माहिती घ्या.",
              "Understand these general steps before making a tax payment."
            )}
            align="left"
          />

          <Grid container spacing={2.5}>
            {paymentSteps.map((step, index) => (
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
                        `services.onlineTax.process.steps.${step.key}`,
                        step.mr,
                        step.en
                      )}
                    </Typography>

                    <Box sx={{ color: "#E87519" }}>
                      <ArrowRight size={19} />
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Important Information */}
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 2.5, sm: 3.5 },
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
                  mb: 0.8,
                }}
              >
                {tr(
                  "services.onlineTax.note.title",
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
                  "services.onlineTax.note.description",
                  "ऑनलाइन कर भरण्याची सुविधा उपलब्ध आहे की नाही, याची खात्री ग्रामपंचायत कार्यालयाकडून करून घ्यावी. कराची रक्कम, थकबाकी आणि भरणा पद्धतीबाबत अधिकृत माहितीलाच प्राधान्य द्यावे. कर भरल्यानंतर पावती सुरक्षित ठेवावी.",
                  "Please confirm with the Gram Panchayat office whether online tax payment is available. Refer to official information for tax amounts, outstanding dues and payment methods. Keep your payment receipt safely."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default OnlineKarBharnaPage;
