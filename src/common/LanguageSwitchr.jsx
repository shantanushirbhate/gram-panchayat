
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <ButtonGroup
      variant="outlined"
      sx={{
        height: {
          xs: 27,
          sm: 34,
          md: 36,
        },

        "& .MuiButton-root": {
          minWidth: {
            xs: 34,
            sm: 48,
            md: 55,
          },
          px: {
            xs: 0.6,
            sm: 1,
            md: 1.5,
          },
          py: {
            xs: 0.3,
            sm: 0.6,
          },
          fontSize: {
            xs: 9,
            sm: 11,
            md: 12,
          },
          fontWeight: 700,
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          textTransform: "none",
        },
      }}
    >
      <Button
        onClick={() => changeLanguage("mr")}
        variant={i18n.language.startsWith("mr") ? "contained" : "outlined"}
      >
        मराठी
      </Button>

      <Button
        onClick={() => changeLanguage("en")}
        variant={i18n.language.startsWith("en") ? "contained" : "outlined"}
      >
        English
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
