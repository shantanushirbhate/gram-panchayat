
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
  Chip,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import {
  CreditCard,
  ReceiptText,
  FileCheck,
  Wallet,
  Info,
  ArrowRight,
  Smartphone,
  Building2,
  Copy,
  ShieldCheck,
  AlertTriangle,
  QrCode,
  MessageCircle,
  UserRound,
  Landmark,
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

const bankDetails = [
  {
    mr: "खातेदाराचे नाव",
    en: "Account Holder",
    value: "सरपंच, ग्रामपंचायत [गावाचे नाव]",
  },
  {
    mr: "बँकेचे नाव",
    en: "Bank Name",
    value: "बँक ऑफ महाराष्ट्र",
  },
  {
    mr: "खाते क्रमांक (A/c No.)",
    en: "Account Number",
    value: "6000 1234 5678",
  },
  {
    mr: "IFSC कोड",
    en: "IFSC Code",
    value: "MAHB0000123",
  },
  {
    mr: "शाखा",
    en: "Branch",
    value: "[शाखेचे नाव]",
  },
];

const OnlineKarBharnaPage = () => {
  const { i18n } = useTranslation();

  const isMarathi = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "mr"
  ).startsWith("mr");

  const text = (mr, en) => (isMarathi ? mr : en);

  // Replace these placeholder payment details before publishing.
  const upiId = "dummy@upi";
  const whatsappNumber = "919800000000";

  const upiPaymentUri = `upi://pay?pa=${upiId}&pn=Grampanchayat`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    upiPaymentUri
  )}`;

  const whatsappMessage = encodeURIComponent(
    "नमस्कार, मी घरपट्टी भरली आहे. हा स्क्रीनशॉट पाहा."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error("Unable to copy text:", error);
    }
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      <ServicesHero
        title={text("ऑनलाईन कर भरणा", "Online Tax Payment")}
        subtitle={text(
          "घरपट्टी व पाणीपट्टी सुरक्षितपणे भरा.",
          "Pay your property tax and water tax securely."
        )}
        breadcrumb={text("ऑनलाईन कर भरणा", "Online Tax Payment")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={text("नागरिकांसाठी सुविधा", "CITIZEN FACILITIES")}
          title={text(
            "कर भरणा सेवा",
            "Tax Payment Services"
          )}
          description={text(
            "मालमत्ता कर, पाणीपट्टी आणि इतर ग्रामपंचायत कर भरण्यासाठी आवश्यक माहिती.",
            "Information about property tax, water tax and other Gram Panchayat tax payments."
          )}
        />

        {/* Tax service cards */}
        <Grid container spacing={2.5} sx={{ mt: 2 }}>
          {paymentServices.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 175,
                    p: 2.5,
                    borderRadius: 4,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5EDE7",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#E87519",
                      boxShadow: "0 12px 28px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack spacing={1.8}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={24} />
                    </Box>

                    <Typography
                      sx={{ color: "#173B2A", fontWeight: 800 }}
                    >
                      {text(item.mrTitle, item.enTitle)}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.87rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {text(item.mrDescription, item.enDescription)}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Online UPI Payment */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={text("डिजिटल पेमेंट", "DIGITAL PAYMENT")}
            title={text(
              "ऑनलाईन कर भरणा",
              "Online Tax Payment"
            )}
            description={text(
              "UPI द्वारे घरपट्टी व पाणीपट्टी भरण्याची सुविधा.",
              "Pay property tax and water tax using UPI."
            )}
          />

          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: { xs: 2.5, sm: 4 },
              borderRadius: 4,
              bgcolor: "#FFFFFF",
              border: "1px solid #E5EDE7",
              overflow: "hidden",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              {/* QR Code */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack
                  alignItems="center"
                  spacing={2}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#F5F9F5",
                    border: "1px dashed #B8CEBD",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#14532D",
                    }}
                  >
                    <QrCode size={22} />
                    <Typography fontWeight={800}>
                      {text("Scan & Pay via UPI", "Scan & Pay via UPI")}
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={qrCodeUrl}
                    alt="UPI payment QR code"
                    sx={{
                      width: { xs: 190, sm: 220 },
                      height: { xs: 190, sm: 220 },
                      objectFit: "contain",
                      bgcolor: "#FFFFFF",
                      p: 1,
                      borderRadius: 2,
                      border: "1px solid #E2E8F0",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#64748B",
                      textAlign: "center",
                    }}
                  >
                    {text(
                      "कोणत्याही UPI ॲपद्वारे QR Code स्कॅन करा.",
                      "Scan this QR code using any UPI app."
                    )}
                  </Typography>

                  <Chip
                    icon={<Smartphone size={15} />}
                    label="PhonePe  •  Google Pay  •  Paytm  •  BHIM"
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      py: 0.7,
                      bgcolor: "#EAF3EC",
                      color: "#14532D",
                      fontWeight: 700,
                      "& .MuiChip-label": {
                        whiteSpace: "normal",
                        textAlign: "center",
                      },
                    }}
                  />
                </Stack>
              </Grid>

              {/* Payment information */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.2}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        fontWeight: 900,
                        mb: 1,
                      }}
                    >
                      {text(
                        "घरपट्टी व पाणीपट्टी सुरक्षितपणे भरा",
                        "Pay Property Tax and Water Tax Securely"
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        lineHeight: 1.8,
                      }}
                    >
                      {text(
                        "QR Code स्कॅन करून आपल्या UPI ॲपद्वारे पेमेंट करा. पेमेंट करण्यापूर्वी प्राप्तकर्त्याचे नाव आणि तपशील तपासून घ्या.",
                        "Scan the QR code and pay through your UPI app. Verify the recipient name and payment details before completing the transaction."
                      )}
                    </Typography>
                  </Box>

                  <Divider />

                  <Box>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        mb: 0.8,
                      }}
                    >
                      {text("UPI ID", "UPI ID")}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: "#173B2A",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {upiId}
                      </Typography>

                      <Button
                        size="small"
                        onClick={() => copyText(upiId)}
                        startIcon={<Copy size={15} />}
                        sx={{
                          flexShrink: 0,
                          color: "#14532D",
                          textTransform: "none",
                        }}
                      >
                        {text("कॉपी", "Copy")}
                      </Button>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: "#FFF8EF",
                      border: "1px solid #F5D7AF",
                    }}
                  >
                    <Stack direction="row" spacing={1.2} alignItems="flex-start">
                      <ShieldCheck
                        size={21}
                        color="#C46A14"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />

                      <Typography
                        sx={{
                          color: "#79552F",
                          fontSize: "0.88rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {text(
                          "पेमेंट करण्यापूर्वी UPI ID आणि प्राप्तकर्त्याचे नाव ग्रामपंचायत कार्यालयाकडून खात्री करून घ्या.",
                          "Before paying, confirm the UPI ID and recipient name with the Gram Panchayat office."
                        )}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Bank Details */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 4 },
              borderRadius: 4,
              bgcolor: "#FFFFFF",
              border: "1px solid #E5EDE7",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ mb: 3 }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "#EDF5EF",
                  color: "#14532D",
                }}
              >
                <Landmark size={25} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#173B2A",
                    fontSize: { xs: "1.1rem", sm: "1.35rem" },
                    fontWeight: 900,
                  }}
                >
                  {text(
                    "बँक खाते तपशील",
                    "Bank Account Details"
                  )}
                </Typography>

                <Typography
                  sx={{ color: "#64748B", fontSize: "0.85rem" }}
                >
                  {text(
                    "NEFT / RTGS द्वारे भरण्यासाठी",
                    "For NEFT / RTGS payments"
                  )}
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ mb: 2 }} />

            <Stack spacing={0}>
              {bankDetails.map((detail, index) => (
                <Box key={detail.en}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    spacing={0.5}
                    sx={{ py: 1.8 }}
                  >
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.9rem",
                      }}
                    >
                      {text(detail.mr, detail.en)}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#173B2A",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        textAlign: { xs: "left", sm: "right" },
                        overflowWrap: "anywhere",
                      }}
                    >
                      {detail.value}
                    </Typography>
                  </Stack>

                  {index !== bankDetails.length - 1 && (
                    <Divider sx={{ borderStyle: "dashed" }} />
                  )}
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>

        {/* Important Instructions */}
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
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <AlertTriangle
              size={24}
              color="#C46A14"
              style={{ flexShrink: 0, marginTop: 3 }}
            />

            <Box>
              <Typography
                sx={{
                  color: "#8A4B10",
                  fontWeight: 900,
                  fontSize: "1.05rem",
                  mb: 1.5,
                }}
              >
                {text("महत्त्वाच्या सूचना", "Important Instructions")}
              </Typography>

              <Stack spacing={1.3}>
                {[
                  {
                    mr: "पैसे भरताना रिमार्कमध्ये तुमचे पूर्ण नाव आणि घर क्रमांक नक्की लिहा.",
                    en: "Enter your full name and house number in the payment remarks.",
                  },
                  {
                    mr: "ऑनलाईन पेमेंट केल्यानंतर त्याचा स्क्रीनशॉट खालील WhatsApp लिंकवर पाठवा.",
                    en: "After making the online payment, send the payment screenshot using the WhatsApp link below.",
                  },
                  {
                    mr: "पावती WhatsApp वर किंवा ग्रामपंचायत कार्यालयात मिळेल.",
                    en: "The receipt will be available through WhatsApp or at the Gram Panchayat office.",
                  },
                ].map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="flex-start"
                  >
                    <Box
                      sx={{
                        width: 23,
                        height: 23,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "50%",
                        bgcolor: "#F8DDBB",
                        color: "#8A4B10",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Box>

                    <Typography
                      sx={{
                        color: "#79552F",
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {text(item.mr, item.en)}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                startIcon={<MessageCircle size={19} />}
                sx={{
                  mt: 3,
                  py: 1.4,
                  borderRadius: 3,
                  bgcolor: "#168447",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#116B38",
                  },
                }}
              >
                {text(
                  "स्क्रीनशॉट पाठवण्यासाठी येथे क्लिक करा",
                  "Click Here to Send Payment Screenshot"
                )}
              </Button>
            </Box>
          </Stack>
        </Paper>

        {/* Payment Process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={text("कर भरण्याची पद्धत", "PAYMENT PROCEDURE")}
            title={text(
              "कर भरण्याची प्रक्रिया",
              "Tax Payment Process"
            )}
            description={text(
              "कर भरण्यापूर्वी खालील टप्प्यांची माहिती घ्या.",
              "Follow these general steps before making a tax payment."
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
                        lineHeight: 1.8,
                      }}
                    >
                      {text(step.mr, step.en)}
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

        {/* Final Note */}
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 2.5, sm: 3.5 },
            borderRadius: 4,
            bgcolor: "#EDF5EF",
            border: "1px solid #D6E6D9",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Info
              size={23}
              color="#14532D"
              style={{ flexShrink: 0, marginTop: 3 }}
            />

            <Box>
              <Typography
                sx={{
                  color: "#14532D",
                  fontWeight: 900,
                  mb: 0.8,
                }}
              >
                {text("महत्त्वाची सूचना", "Important Information")}
              </Typography>

              <Typography
                sx={{
                  color: "#45634D",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                }}
              >
                {text(
                  "कराची अचूक रक्कम, थकबाकी आणि बँक/UPI तपशील ग्रामपंचायत कार्यालयाकडून खात्री करून घ्या. पेमेंट केल्यानंतर व्यवहार क्रमांक आणि पावती सुरक्षित ठेवा. पेमेंट अयशस्वी झाल्यास पुन्हा पैसे भरण्यापूर्वी व्यवहाराची स्थिती तपासा.",
                  "Confirm the exact tax amount, outstanding dues and bank/UPI details with the Gram Panchayat office. Keep the transaction reference and receipt safely. If a payment fails, check its status before attempting another payment."
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
