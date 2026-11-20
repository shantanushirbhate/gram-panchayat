
const navigationMenu = [
  // HOME
  {
    label: "home",
    path: "/",
  },

  // ABOUT
  {
    label: "about",
    path: "/about",
    children: [
      {
        label: "aboutInformation",
        path: "/about",
      },

      {
        label: "villageHistory",
        path: "/about/history",
      },
      {
        label: "villageInformation",
        path: "/about/village-information",
      },
      {
        label: "officeDetails",
        path: "/about/office-details",
      },
      {
        label: "employeeList",
        path: "/about/employees",
      },
      {
        label: "honorsAndAwards",
        path: "/about/awards",
      },
      {
        label: "wishesAndCongratulations",
        path: "/about/wishes-and-congratulations",
      },
      {
        label: "initiativesAndEvents",
        path: "/about/initiatives-and-events",
      },
      {
        label: "cultureAndTraditions",
        path: "/about/culture-and-traditions",
      },
      {
        label: "emergencyContacts",
        path: "/about/emergency-contacts",
      },
      {
        label: "rolesAndResponsibilities",
        path: "/about/roles-and-responsibilities",
      },
    ],
  },

  // TRANSPARENCY
  {
    label: "transparency",
    children: [
      {
        label: "arthikMahiti",
        path: "/transparency/arthik-mahiti",
      },
      {
        label: "kamachiMahiti",
        path: "/transparency/kamachi-mahiti",
      },
      {
        label: "gramSabhaCorner",
        path: "/transparency/gram-sabha-corner",
      },
    ],
  },

  // EDUCATION AND ENVIRONMENT
  {
    label: "educationParyavaran",
    path: "/education-paryavaran",
    children: [
      {
        label: "paryavaranVShasvatVikas",
        path: "/education-paryavaran/paryavaran-shasvat-vikas",
      },
      {
        label: "shikshanAniYuvakKopra",
        path: "/education-paryavaran/shikshan-yuvak-kopra",
      },
      {
        label: "shikshanVPayavaran",
        path: "/education-paryavaran/shikshan-paryavaran",
      },
    ],
  },

  // SAMITIYA
  {
    label: "samitiya",
    path: "/samitiya",
  },

  // SEVA
  {
    label: "seva",
    path: "/services",
    children: [
      {
        label: "suchanaVJahirati",
        path: "/services/suchana-jahirati",
      },
      {
        label: "onlineKarBharna",
        path: "/services/online-kar-bharna",
      },
      {
        label: "nagrikSeva",
        path: "/services/nagrik-seva",
      },
      {
        label: "shaskiyaYojna",
        path: "/services/shaskiya-yojna",
      },
      {
        label: "mahitichaAdhikar",
        path: "/services/mahiticha-adhikar",
      },
    ],
  },

  // ADHIK
  {
    label: "adhik",
    path: "/adhik",
    children: [
      {
        label: "rojgarVKaushalya",
        path: "/adhik/rojgar-kaushalya",
      },
      {
        label: "udyogVUpkram",
        path: "/adhik/udyog-upkram",
      },
      {
        label: "swyamSahayataGut",
        path: "/adhik/swyam-sahayata-gut",
      },
      {
        label: "mahatvacheDuve",
        path: "/adhik/mahatvache-duwe",
      },
      {
        label: "takrarSuchanaSallaAbhipray",
        path: "/adhik/takrar-suchana-salla-abhipray",
      },
      {
        label: "sitemap",
        path: "/adhik/sitemap",
      },
    ],
  },

  // DASHBOARD
  {
    label: "dashboard",
    path: "/dashboard",
  },
];

export default navigationMenu;
