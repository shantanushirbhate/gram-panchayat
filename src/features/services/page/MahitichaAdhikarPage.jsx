
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Scale,
  FileSearch,
  ClipboardList,
  Send,
  ShieldCheck,
  Info,
  Phone,
  Mail,
  UserRound,
} from "lucide-react";

import ServicesHero from "../components/ServicesHero";
import ServicesSectionHeading from "../components/ServicesSectionHeading";

const rtiFeatures = [
  { id: 1, key: "rightToInformation", icon: Scale },
  { id: 2, key: "publicRecords", icon: FileSearch },
  { id: 3, key: "applicationProcess", icon: ClipboardList },
  { id: 4, key: "officialResponse", icon: Send },
];

const applicationSteps = [
  { key: "stepOne", number: "01" },
  { key: "stepTwo", number: "02" },
  { key: "stepThree", number: "03" },
  { key: "stepFour", number: "04" },
];

const officers = [
  {
    id: 1,
    key: "pio",
    icon: UserRound,
  },
  {
    id: 2,
    key: "appellate",
    icon: ShieldCheck,
  },
];

const annualReports = [
  { id: 1, year: "2025–26", received: "१२", disposed: "१२", pending: "००" },
  { id: 2, year: "2024–25", received: "५२", disposed: "५२", pending: "००" },
  { id: 3, year: "2023–24", received: "४५", disposed: "४५", pending: "००" },
];

const MahitichaAdhikarPage = () => {
  const { i18n } = useTranslation();

  const isMarathi = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "mr"
  ).startsWith("mr");

  // All RTI translations are merged into the common namespace.
  const tr = (key, mrFallback = "", enFallback = "") => {
    const language = isMarathi ? "mr" : "en";

    return (
      i18n.getResource(language, "common", `services.rti.${key}`) ||
      (isMarathi ? mrFallback : enFallback)
    );
  };

  const villageName = tr(
    "villageName",
    "ग्रामपंचायत पिंपळखुटा बुद्रुक",
    "Gram Panchayat Pimpalkhuta Budruk"
  );

  const renderContact = (type, value) => {
    if (!value || value.includes("XXXXX") || value.includes("example")) {
      return (
        <Typography variant="body2" color="text.secondary">
          {tr("contactUnavailable", "संपर्क तपशील अद्ययावत केलेले नाहीत", "Contact details not updated")}
        </Typography>
      );
    }

    const isPhone = type === "phone";
    const isEmail = type === "email";
    const href = isPhone
      ? `tel:${value.replace(/[^\d+]/g, "")}`
      : isEmail
        ? `mailto:${value}`
        : undefined;

    const Icon = isPhone ? Phone : Mail;

    return (
      <Stack
        component={href ? "a" : "div"}
        href={href}
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          color: "#14532D",
          textDecoration: "none",
          overflowWrap: "anywhere",
          "&:hover": { color: "#E87519" },
        }}
      >
        <Icon size={16} />
        <Typography variant="body2">{value}</Typography>
      </Stack>
    );
  };

  const tableCellSx = {
    py: 1.6,
    px: { xs: 1.5, sm: 2 },
    fontSize: { xs: "0.78rem", sm: "0.9rem" },
    whiteSpace: "nowrap",
  };

  return (
    <Box sx={{ bgcolor: "#FFF8EF", minHeight: "100vh" }}>
      <ServicesHero
        title={tr("hero.title", "माहितीचा अधिकार (RTI)", "Right to Information (RTI)")}
        subtitle={tr(
          "hero.description",
          "पारदर्शक प्रशासन आणि नागरिकांच्या माहितीच्या अधिकारासाठी ग्रामपंचायतीची माहिती.",
          "Information about citizens' right to information and transparent local administration."
        )}
        breadcrumb={tr("hero.breadcrumb", "माहितीचा अधिकार", "Right to Information")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Introduction */}
        <ServicesSectionHeading
          eyebrow={tr("intro.eyebrow", "नागरिकांच्या सेवेसाठी तत्पर", "SERVING CITIZENS")}
          title={tr("intro.title", "माहितीचा अधिकार", "Right to Information")}
          description={tr(
            "intro.description",
            "माहितीचा अधिकार अधिनियम, २००५ नागरिकांना सार्वजनिक प्राधिकरणांच्या कामकाजासंबंधी उपलब्ध माहिती मागण्याचा अधिकार देतो. यामुळे प्रशासनात पारदर्शकता आणि उत्तरदायित्व वाढण्यास मदत होते.",
            "The Right to Information Act, 2005 enables citizens to request information held by public authorities and promotes transparency and accountability."
          )}
        />

        {/* Important notice */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 2.5, sm: 3 },
            borderRadius: 4,
            bgcolor: "#FFF1DC",
            border: "1px solid #F2D3A9",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Box sx={{ color: "#C46A14", mt: 0.3, flexShrink: 0 }}>
              <Info size={23} />
            </Box>
            <Box>
              <Typography sx={{ color: "#8A4B10", fontWeight: 800, mb: 0.7 }}>
                {tr("notice.title", "महत्त्वाची सूचना", "Important Notice")}
              </Typography>
              <Typography sx={{ color: "#79552F", lineHeight: 1.85, fontSize: "0.92rem" }}>
                {tr(
                  "notice.description",
                  "तांत्रिक प्रक्रियेमुळे खालील अधिकारी संपर्क तपशील आणि वार्षिक अहवाल सध्या पूर्णपणे अद्ययावत नसू शकतात. सुधारित माहिती प्रसिद्ध होईपर्यंत अधिकृत माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधावा.",
                  "The officer contact details and annual report figures below may not be fully updated due to technical work. Please contact the Gram Panchayat office for verified information until updated records are published."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* RTI Features */}
        <Grid container spacing={2.5} sx={{ mt: 2 }}>
          {rtiFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 190,
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
                        width: 50,
                        height: 50,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        bgcolor: "#EDF5EF",
                        color: "#14532D",
                      }}
                    >
                      <Icon size={25} />
                    </Box>
                    <Typography sx={{ color: "#173B2A", fontWeight: 800 }}>
                      {tr(
                        `features.${item.key}.title`,
                        [
                          "माहितीचा अधिकार",
                          "सार्वजनिक अभिलेख",
                          "अर्ज प्रक्रिया",
                          "अधिकृत उत्तर",
                        ][item.id - 1],
                        [
                          "Right to Information",
                          "Public Records",
                          "Application Process",
                          "Official Response",
                        ][item.id - 1]
                      )}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.8 }}>
                      {tr(
                        `features.${item.key}.description`,
                        [
                          "नागरिकांना सार्वजनिक प्राधिकरणांकडील माहिती मागण्याचा अधिकार.",
                          "ग्रामपंचायतीच्या उपलब्ध सार्वजनिक नोंदी आणि कागदपत्रांची माहिती.",
                          "माहिती मिळवण्यासाठी अर्ज सादर करण्याबाबत मार्गदर्शन.",
                          "माहिती अर्जावर संबंधित अधिकाऱ्यांकडून मिळणारे अधिकृत उत्तर.",
                        ][item.id - 1],
                        [
                          "Citizens have the right to request information held by public authorities.",
                          "Information about available public records and documents.",
                          "Guidance on submitting an application to request information.",
                          "The official response from the concerned authority.",
                        ][item.id - 1]
                      )}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Officers table */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr("officers.eyebrow", "अधिकृत संपर्क", "OFFICIAL CONTACTS")}
            title={tr("officers.title", "माहिती अधिकारी", "Information Officers")}
            description={tr(
              "officers.description",
              "माहितीचा अधिकार अर्ज आणि प्रथम अपील यासाठी संबंधित अधिकाऱ्यांचे तपशील खाली दिले आहेत.",
              "The designated contacts for RTI applications and first appeals are listed below."
            )}
            align="left"
          />

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              mt: 2.5,
              borderRadius: 4,
              border: "1px solid #E5EDE7",
              overflowX: "auto",
            }}
          >
            <Table sx={{ minWidth: 680 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#14532D" }}>
                  {[
                    tr("table.serial", "अ.क्र.", "No."),
                    tr("table.designation", "पद", "Designation"),
                    tr("table.officer", "अधिकाऱ्याचे नाव", "Officer"),
                    tr("table.office", "कार्यालय", "Office"),
                    tr("table.contact", "संपर्क", "Contact"),
                  ].map((heading) => (
                    <TableCell
                      key={heading}
                      sx={{ ...tableCellSx, color: "#FFFFFF", fontWeight: 800 }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {officers.map((officer, index) => {
                  const Icon = officer.icon;
                  const key = officer.key;

                  return (
                    <TableRow key={officer.id} hover>
                      <TableCell sx={tableCellSx}>{index + 1}</TableCell>
                      <TableCell sx={{ ...tableCellSx, fontWeight: 700, color: "#173B2A" }}>
                        {tr(
                          `officers.${key}.designation`,
                          key === "pio" ? "जनमाहिती अधिकारी" : "प्रथम अपिलीय अधिकारी",
                          key === "pio" ? "Public Information Officer" : "First Appellate Authority"
                        )}
                      </TableCell>
                      <TableCell sx={tableCellSx}>
                        <Typography sx={{ fontWeight: 700, color: "#173B2A", fontSize: "inherit" }}>
                          {tr(
                            `officers.${key}.name`,
                            key === "pio" ? "ग्रामसेवक / ग्रामविकास अधिकारी" : "गटविकास अधिकारी (BDO)",
                            key === "pio" ? "Gram Sevak / Village Development Officer" : "Block Development Officer (BDO)"
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ ...tableCellSx, whiteSpace: "normal", minWidth: 160 }}>
                        {tr(
                          `officers.${key}.office`,
                          key === "pio" ? "ग्रामपंचायत कार्यालय" : "पंचायत समिती कार्यालय",
                          key === "pio" ? "Gram Panchayat Office" : "Panchayat Samiti Office"
                        )}
                      </TableCell>
                      <TableCell sx={{ ...tableCellSx, whiteSpace: "normal", minWidth: 190 }}>
                        <Stack spacing={0.8}>
                          {renderContact(
                            "phone",
                            tr(`officers.${key}.phone`, "", "")
                          )}
                          {renderContact(
                            "email",
                            tr(`officers.${key}.email`, "", "")
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Application process */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr("process.eyebrow", "अर्ज करण्याची पद्धत", "APPLICATION GUIDANCE")}
            title={tr("process.title", "RTI अर्ज प्रक्रिया", "RTI Application Process")}
            description={tr(
              "process.description",
              "माहितीचा अधिकार अर्ज सादर करताना खालील सामान्य टप्पे लक्षात घ्या.",
              "Follow these general steps when submitting an RTI application."
            )}
            align="left"
          />

          <Grid container spacing={2.5} sx={{ mt: 1 }}>
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
                      {step.number}
                    </Box>
                    <Typography sx={{ color: "#173B2A", fontWeight: 700, lineHeight: 1.8 }}>
                      {tr(
                        `process.${step.key}`,
                        [
                          "आवश्यक असलेली माहिती स्पष्टपणे निश्चित करा.",
                          "संबंधित जनमाहिती अधिकाऱ्याकडे अर्ज सादर करा.",
                          "लागू नियमांनुसार अर्ज शुल्क भरा किंवा शुल्कमाफीचा पुरावा जोडा.",
                          "अर्जाची पोचपावती जतन करा आणि उत्तराची प्रतीक्षा करा.",
                        ][index],
                        [
                          "Clearly identify the information you need.",
                          "Submit the application to the concerned Public Information Officer.",
                          "Pay the applicable fee or attach proof of fee exemption.",
                          "Keep the acknowledgement and wait for the response.",
                        ][index]
                      )}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* RTI law and fee table */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr("law.eyebrow", "कायदा आणि तरतुदी", "ACT & PROVISIONS")}
            title={tr("law.title", "माहितीचा अधिकार अधिनियम, २००५", "Right to Information Act, 2005")}
            description={tr(
              "law.description",
              "महाराष्ट्र माहितीचा अधिकार नियम, २०२६ नुसार लागू असलेली काही महत्त्वाची शुल्क आणि कालमर्यादा.",
              "Selected fees and timelines under the Maharashtra Right to Information Rules, 2026."
            )}
            align="left"
          />

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              mt: 2.5,
              borderRadius: 4,
              border: "1px solid #E5EDE7",
              overflowX: "auto",
            }}
          >
            <Table sx={{ minWidth: 540 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#14532D" }}>
                  <TableCell sx={{ ...tableCellSx, color: "#FFFFFF", fontWeight: 800 }}>
                    {tr("feeTable.particulars", "तपशील", "Particulars")}
                  </TableCell>
                  <TableCell sx={{ ...tableCellSx, color: "#FFFFFF", fontWeight: 800 }}>
                    {tr("feeTable.fee", "शुल्क / कालमर्यादा", "Fee / Timeline")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ["application", "₹३ अर्ज शुल्क", "₹3 application fee"],
                  ["copies", "A4/A3 प्रती: प्रति पान ₹५", "A4/A3 copies: ₹5 per page"],
                  ["digital", "डिजिटल / स्कॅन प्रत: प्रति पान ₹५", "Digital / scanned copy: ₹5 per page"],
                  ["inspection", "पहिला एक तास विनामूल्य; त्यानंतर प्रति तास किंवा त्याच्या भागासाठी ₹५०", "First hour free; ₹50 for each subsequent hour or part thereof"],
                  ["firstAppeal", "₹५० प्रथम अपील शुल्क", "₹50 first appeal fee"],
                  ["response", "सामान्यतः अर्ज प्राप्त झाल्यापासून ३० दिवस", "Normally within 30 days of receipt"],
                  ["bpl", "BPL अर्जदारांसाठी नियमांनुसार शुल्कमाफी", "Fee exemption for eligible BPL applicants under the rules"],
                ].map(([key, mr, en]) => (
                  <TableRow key={key} hover>
                    <TableCell sx={{ ...tableCellSx, whiteSpace: "normal", color: "#173B2A", fontWeight: 700 }}>
                      {tr(`feeTable.items.${key}.label`, mr, en)}
                    </TableCell>
                    <TableCell sx={{ ...tableCellSx, whiteSpace: "normal" }}>
                      {tr(`feeTable.items.${key}.value`, mr, en)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography sx={{ mt: 1.5, color: "#64748B", fontSize: "0.8rem", lineHeight: 1.7 }}>
            {tr(
              "law.smallNote",
              "टीप: शुल्क व प्रक्रिया महाराष्ट्र माहितीचा अधिकार नियम, २०२६ आणि लागू कायदेशीर तरतुदींनुसार बदलू शकतात. अर्ज सादर करण्यापूर्वी अधिकृत नियम तपासा.",
              "Note: Fees and procedures are subject to the Maharashtra RTI Rules, 2026 and applicable legal provisions. Verify the official rules before filing."
            )}
          </Typography>
        </Box>

        {/* Annual report table */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <ServicesSectionHeading
            eyebrow={tr("report.eyebrow", "वार्षिक आकडेवारी", "ANNUAL STATISTICS")}
            title={tr("report.title", "वार्षिक RTI प्रगती अहवाल", "Annual RTI Progress Report")}
            description={tr(
              "report.description",
              "आर्थिक वर्षनिहाय प्राप्त, निकाली आणि प्रलंबित अर्जांची माहिती.",
              "Year-wise details of received, disposed and pending RTI applications."
            )}
            align="left"
          />

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              mt: 2.5,
              borderRadius: 4,
              border: "1px solid #E5EDE7",
              overflowX: "auto",
            }}
          >
            <Table sx={{ minWidth: 580 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#14532D" }}>
                  {[
                    tr("report.table.year", "आर्थिक वर्ष", "Financial Year"),
                    tr("report.table.received", "प्राप्त अर्ज", "Received"),
                    tr("report.table.disposed", "निकाली अर्ज", "Disposed"),
                    tr("report.table.pending", "प्रलंबित", "Pending"),
                    tr("report.table.status", "स्थिती", "Status"),
                  ].map((heading) => (
                    <TableCell
                      key={heading}
                      align="center"
                      sx={{ ...tableCellSx, color: "#FFFFFF", fontWeight: 800 }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {annualReports.map((report) => (
                  <TableRow key={report.id} hover>
                    <TableCell align="center" sx={tableCellSx}>{report.year}</TableCell>
                    <TableCell align="center" sx={tableCellSx}>{report.received}</TableCell>
                    <TableCell align="center" sx={tableCellSx}>{report.disposed}</TableCell>
                    <TableCell align="center" sx={tableCellSx}>{report.pending}</TableCell>
                    <TableCell align="center" sx={tableCellSx}>
                      <Chip
                        size="small"
                        label={tr("report.table.statusValue", "पूर्ण", "Completed")}
                        sx={{
                          bgcolor: "#E8F5E9",
                          color: "#14532D",
                          fontWeight: 700,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography sx={{ mt: 1.5, color: "#64748B", fontSize: "0.8rem", lineHeight: 1.7 }}>
            {tr(
              "report.note",
              "वरील आकडे नमुना स्वरूपात दिले आहेत. अधिकृत नोंदींशी पडताळणी केल्यानंतरच हे आकडे प्रकाशित करावेत.",
              "The figures above are sample data. Publish them only after verifying them against official records."
            )}
          </Typography>
        </Box>

        {/* Rights banner */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            background: "linear-gradient(120deg, #123D27 0%, #14532D 100%)",
            color: "#FFFFFF",
          }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="flex-start">
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
                sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 800, mb: 1 }}
              >
                {tr("rights.title", "नागरिकांचा माहितीचा अधिकार", "Citizens' Right to Information")}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.84)", fontSize: "0.93rem", lineHeight: 1.85 }}>
                {tr(
                  "rights.description",
                  "माहितीचा अधिकार अधिनियम, २००५ अंतर्गत नागरिकांना कायद्यातील तरतुदी व अपवादांच्या अधीन राहून सार्वजनिक प्राधिकरणाकडील माहिती मागण्याचा अधिकार आहे. माहिती न मिळाल्यास किंवा उत्तराबाबत असमाधान असल्यास कायद्यानुसार अपील करता येते.",
                  "Under the Right to Information Act, 2005, citizens may request information held by public authorities, subject to the Act's provisions and exemptions. If information is not provided or the response is unsatisfactory, an appeal may be filed under the Act."
                )}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Final contact note */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 2.5, sm: 3 },
            borderRadius: 4,
            bgcolor: "#FFFFFF",
            border: "1px solid #E5EDE7",
          }}
        >
          <Typography sx={{ color: "#173B2A", fontWeight: 800, mb: 0.8 }}>
            {tr("contact.title", "अधिक माहितीसाठी", "For More Information")}
          </Typography>
          <Typography sx={{ color: "#64748B", lineHeight: 1.8, fontSize: "0.9rem" }}>
            {tr(
              "contact.description",
              `${villageName} कार्यालयाशी संपर्क साधून जनमाहिती अधिकारी व प्रथम अपिलीय अधिकाऱ्यांचे अद्ययावत तपशील जाणून घ्या.`,
              `Contact ${villageName} office to confirm the current details of the Public Information Officer and First Appellate Authority.`
            )}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default MahitichaAdhikarPage;
