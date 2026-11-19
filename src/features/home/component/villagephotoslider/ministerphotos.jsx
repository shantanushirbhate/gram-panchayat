
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  Avatar,
  
} from "@mui/material";

import {
  Landmark,
  Building2,
  Users,
  UserRound,
  ShieldCheck,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import image from "../../../../assets/ministerimagefolder/DevendraFadnavis-stockimage-18-thumbnail.png";
import vicecmimage from "../../../../assets/ministerimagefolder/SHRI-EKNATH-SHINDE-200x209-1.png";

// District administration images
import imga from "../../../../assets/ministerimagefolder/jilha adhikari collector amravati ashish yerekar.png";
import imgb from "../../../../assets/ministerimagefolder/khasdar balvant wankhade.png";

const COLORS = {
  green: "#173B2A",
  darkGreen: "#102D20",
  orange: "#FF6820",
  cream: "#FFF8F0",
  white: "#FFFFFF",
  lightGreen: "#EAF2EC",
  muted: "#64748B",
  border: "#E6EAE5",
  text: "#263B30",
};

const ministers = [
  {
    image,
    name: "श्री. देवेंद्र फडणवीस",
    nameEn: "Shri. Devendra Fadnavis",
    designation: "मुख्यमंत्री, महाराष्ट्र राज्य",
    designationEn: "Chief Minister of Maharashtra",
  },
  {
    image: vicecmimage,
    name: "श्री. एकनाथ शिंदे",
    nameEn: "Shri. Eknath Shinde",
    designation: "उपमुख्यमंत्री, महाराष्ट्र राज्य",
    designationEn: "Deputy Chief Minister of Maharashtra",
  },
];

const districtOfficials = [
  {
    image: imga,
    name: "श्री. आशिष येरेकर",
    nameEn: "Shri. Ashish Yerekar",
    designation: "जिल्हाधिकारी, अमरावती",
    designationEn: "District Collector, Amravati",
  },
  {
    image: imgb,
    name: "श्री. बळवंत वानखडे",
    nameEn: "Shri. Balwant Wankhade",
    designation: "खासदार, अमरावती",
    designationEn: "Member of Parliament, Amravati",
  },
];

const talukaOfficials = [
  {
    name: "तहसीलदार",
    nameEn: "Tahsildar",
    designation: "तहसील कार्यालय, वरुड",
    designationEn: "Tahsildar Office, Warud",
    icon: <Landmark size={25} />,
  },
  {
    name: "गट विकास अधिकारी",
    nameEn: "Block Development Officer",
    designation: "पंचायत समिती, वरुड",
    designationEn: "Panchayat Samiti, Warud",
    icon: <Building2 size={25} />,
  },
  {
    name: "मुख्याधिकारी",
    nameEn: "Chief Officer",
    designation: "स्थानिक प्रशासन",
    designationEn: "Local Administration",
    icon: <ShieldCheck size={25} />,
  },
];

const gramPanchayatOfficials = [
  {
    name: "सरपंच",
    nameEn: "Sarpanch",
    designation: "ग्रामपंचायत प्रमुख",
    designationEn: "Village Council Head",
    icon: <UserRound size={25} />,
  },
  {
    name: "उपसरपंच",
    nameEn: "Deputy Sarpanch",
    designation: "ग्रामपंचायत उपप्रमुख",
    designationEn: "Deputy Village Council Head",
    icon: <Users size={25} />,
  },
  {
    name: "ग्रामपंचायत सदस्य",
    nameEn: "Gram Panchayat Member",
    designation: "स्थानिक लोकप्रतिनिधी",
    designationEn: "Local Representative",
    icon: <Users size={25} />,
  },
  {
    name: "ग्रामसेवक",
    nameEn: "Gram Sevak",
    designation: "ग्रामपंचायत सचिव",
    designationEn: "Gram Panchayat Secretary",
    icon: <BriefcaseBusiness size={25} />,
  },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box textAlign="center" sx={{ mb: { xs: 3.5, md: 5 } }}>
      <Typography
        sx={{
          color: COLORS.orange,
          fontWeight: 900,
          fontSize: 12,
          letterSpacing: 2,
          mb: 1,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        sx={{
          color: COLORS.green,
          fontWeight: 900,
          fontSize: { xs: 23, sm: 29, md: 34 },
          lineHeight: 1.35,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: COLORS.muted,
          fontSize: { xs: 13, sm: 15 },
          mt: 1,
        }}
      >
        {subtitle}
      </Typography>

      <Box
        sx={{
          width: 58,
          height: 4,
          borderRadius: 5,
          background: `linear-gradient(90deg, ${COLORS.orange} 50%, ${COLORS.green} 50%)`,
          mx: "auto",
          mt: 2,
        }}
      />
    </Box>
  );
}

function OfficialCard({ official, compact = false }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: COLORS.white,
        border: `1px solid ${COLORS.border}`,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 30px rgba(23,59,42,0.10)",
          borderColor: "#C7D8CA",
        },
      }}
    >
      <Box
        sx={{
          height: 5,
          background: `linear-gradient(90deg, ${COLORS.orange} 0%, ${COLORS.orange} 50%, ${COLORS.green} 50%, ${COLORS.green} 100%)`,
        }}
      />

      <Box
        sx={{
          px: { xs: 2, sm: 2.5 },
          pt: compact ? 2.5 : 3,
          pb: 3,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {official.image ? (
            <Box
              component="img"
              src={official.image}
              alt={official.nameEn}
              loading="lazy"
              sx={{
                width: compact ? 105 : { xs: 135, sm: 150 },
                height: compact ? 105 : { xs: 145, sm: 160 },
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: 2.5,
                backgroundColor: "#F1F5F2",
                border: "4px solid #F1E9DE",
                boxShadow: "0 5px 16px rgba(0,0,0,0.07)",
              }}
            />
          ) : (
            <Avatar
              sx={{
                width: compact ? 78 : 90,
                height: compact ? 78 : 90,
                color: COLORS.green,
                backgroundColor: COLORS.lightGreen,
                border: "3px solid #D9E8DC",
                "& svg": {
                  width: compact ? 27 : 32,
                  height: compact ? 27 : 32,
                },
              }}
            >
              {official.icon || <UserRound size={30} />}
            </Avatar>
          )}
        </Box>

        <Typography
          sx={{
            color: COLORS.green,
            fontSize: compact ? 16 : { xs: 17, sm: 19 },
            fontWeight: 900,
            lineHeight: 1.4,
            mb: 0.7,
          }}
        >
          {official.name}
        </Typography>

        <Typography
          sx={{
            color: COLORS.orange,
            fontSize: compact ? 12 : 13,
            fontWeight: 800,
            lineHeight: 1.5,
            mb: 0.8,
          }}
        >
          {official.designation}
        </Typography>

        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          {official.nameEn}
        </Typography>

        <Typography
          sx={{
            color: COLORS.muted,
            fontSize: 11,
            mt: 0.4,
            lineHeight: 1.5,
          }}
        >
          {official.designationEn}
        </Typography>
      </Box>
    </Card>
  );
}

function ProfileGrid({ officials, columns = 2, compact = false }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: `repeat(${Math.min(columns, 2)}, minmax(0, 1fr))`,
          md: `repeat(${columns}, minmax(0, 1fr))`,
        },
        gap: { xs: 2.5, sm: 3 },
        maxWidth: columns === 2 ? 720 : 1000,
        mx: "auto",
      }}
    >
      {officials.map((official) => (
        <OfficialCard
          key={official.nameEn}
          official={official}
          compact={compact}
        />
      ))}
    </Box>
  );
}

function AdministrationHeading({ number, title, subtitle }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1.5}
      sx={{ mb: 3 }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          flexShrink: 0,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          backgroundColor: COLORS.green,
          color: COLORS.white,
          fontWeight: 900,
          fontSize: 14,
        }}
      >
        {number}
      </Box>

      <Box>
        <Typography
          sx={{
            color: COLORS.green,
            fontWeight: 900,
            fontSize: { xs: 18, sm: 21 },
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: COLORS.muted, fontSize: 12, mt: 0.3 }}>
          {subtitle}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function MinisterSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: COLORS.cream,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN HEADING */}
        <SectionHeading
          eyebrow="Leadership & Administration"
          title="महाराष्ट्र राज्य नेतृत्व"
          subtitle="Leadership and Administration of Maharashtra"
        />

        {/* STATE LEADERSHIP */}
        <ProfileGrid officials={ministers} columns={2} />

        {/* DISTRICT ADMINISTRATION */}
        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <AdministrationHeading
            number="01"
            title="जिल्हा प्रशासन"
            subtitle="District Administration · Amravati"
          />

          <ProfileGrid officials={districtOfficials} columns={2} />
        </Box>

        {/* TALUKA ADMINISTRATION */}
        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <AdministrationHeading
            number="02"
            title="तालुका प्रशासन"
            subtitle="Taluka Administration · Warud"
          />

          <ProfileGrid
            officials={talukaOfficials}
            columns={3}
            compact
          />
        </Box>

        {/* GRAM PANCHAYAT ADMINISTRATION */}
        <Box sx={{ mt: { xs: 7, md: 10 } }}>
          <AdministrationHeading
            number="03"
            title="ग्रामपंचायतीतील पदाधिकारी व कर्मचारी"
            subtitle="Gram Panchayat Officials & Employees"
          />

          <ProfileGrid
            officials={gramPanchayatOfficials}
            columns={4}
            compact
          />
        </Box>

        {/* LOCATION FOOTER */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            py: 2.5,
            px: 2,
            borderRadius: 3,
            backgroundColor: COLORS.green,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            <MapPin size={18} color={COLORS.orange} />

            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                fontWeight: 700,
              }}
            >
              ग्रामपंचायत पिंपळखुटा बु., ता. वरुड, जि. अमरावती, महाराष्ट्र
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
