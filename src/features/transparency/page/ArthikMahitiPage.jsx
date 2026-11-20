

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Stack,
  Breadcrumbs,
  Link,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from "@mui/material";

import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ClipboardCheck,
  FileText,
  ArrowRight,
  Home,
  ShieldCheck,
  MapPin,
  CalendarDays,
  BellRing,
  Info,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GREEN = "#14532D";
const DARK_GREEN = "#123D27";
const ORANGE = "#E87519";
const CREAM = "#FFF8EF";

const ArthikMahitiPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    {
      key: "budget",
      icon: Wallet,
      color: GREEN,
    },
    {
      key: "income",
      icon: TrendingUp,
      color: "#16845B",
    },
    {
      key: "expenses",
      icon: TrendingDown,
      color: ORANGE,
    },
    {
      key: "audit",
      icon: ClipboardCheck,
      color: "#64748B",
    },
  ];

  const summaryCards = [
    {
      key: "income",
      icon: TrendingUp,
      color: "#16845B",
      bg: "#E8F5EC",
    },
    {
      key: "expenses",
      icon: TrendingDown,
      color: ORANGE,
      bg: "#FFF1E3",
    },
    {
      key: "balance",
      icon: Wallet,
      color: "#2563A6",
      bg: "#EAF2FC",
    },
  ];

  const incomeRows = t("transparency.finance.incomeTable.rows", {
    returnObjects: true,
  });

  const expenseRows = t("transparency.finance.expenseTable.rows", {
    returnObjects: true,
  });

  const updates = t("transparency.finance.updates.items", {
    returnObjects: true,
  });

  const safeIncomeRows = Array.isArray(incomeRows) ? incomeRows : [];
  const safeExpenseRows = Array.isArray(expenseRows) ? expenseRows : [];
  const safeUpdates = Array.isArray(updates) ? updates : [];

  const renderFinancialTable = (rows, config, totalLabel, totalAmount) => (
    <TableContainer
      sx={{
        width: "100%",
        overflowX: "auto",
        borderRadius: 2,
      }}
    >
      <Table sx={{ minWidth: 440 }}>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: GREEN,
              "& th": {
                color: "#fff",
                fontWeight: 750,
                fontSize: { xs: 12, sm: 14 },
                py: 2,
              },
            }}
          >
            <TableCell>{t(`${config}.itemColumn`)}</TableCell>
            <TableCell align="right">
              {t(`${config}.amountColumn`)}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row.name}-${index}`}
              sx={{
                "&:nth-of-type(even)": {
                  bgcolor: "#F7FAF7",
                },
                "& td": {
                  color: "#475569",
                  fontSize: { xs: 12, sm: 14 },
                  py: 1.8,
                },
              }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  color: DARK_GREEN,
                }}
              >
                {row.amount}
              </TableCell>
            </TableRow>
          ))}

          <TableRow
            sx={{
              bgcolor: "#E8F2E9",
              "& td": {
                color: DARK_GREEN,
                fontWeight: 800,
                fontSize: { xs: 12, sm: 14 },
                py: 2,
              },
            }}
          >
            <TableCell>{t(totalLabel)}</TableCell>
            <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
              {t(totalAmount)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ bgcolor: CREAM, minHeight: "100vh", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(120deg, ${DARK_GREEN} 0%, ${GREEN} 65%, #287447 100%)`,
          color: "#fff",
          py: { xs: 4, sm: 5, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 160, md: 250 },
            height: { xs: 160, md: 250 },
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            top: -100,
            right: -50,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Breadcrumbs
            separator="›"
            sx={{
              mb: 3,
              color: "rgba(255,255,255,0.7)",
              "& a": {
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
              },
              "& .MuiBreadcrumbs-ol": {
                flexWrap: "wrap",
              },
            }}
          >
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                fontSize: 13,
              }}
            >
              <Home size={15} />
              {t("navbar.home")}
            </Link>

            <Link
              component="button"
              onClick={() => navigate("/transparency")}
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              {t("navbar.transparency")}
            </Link>

            <Typography color="#fff" fontSize={13}>
              {t("transparency.finance.hero.breadcrumb")}
            </Typography>
          </Breadcrumbs>

          <Chip
            icon={<ShieldCheck size={16} color="#fff" />}
            label={t("transparency.badge")}
            sx={{
              bgcolor: "rgba(255,255,255,0.14)",
              color: "#fff",
              fontWeight: 600,
              mb: 2,
              "& .MuiChip-icon": { ml: 1 },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, sm: 36, md: 46 },
              lineHeight: 1.25,
              mb: 2,
              maxWidth: 750,
            }}
          >
            {t("transparency.finance.hero.title")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: 14, md: 17 },
              lineHeight: 1.8,
              maxWidth: 750,
            }}
          >
            {t("transparency.finance.hero.description")}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Information Not Updated Notice */}
        <Alert
          severity="warning"
          icon={<Info size={22} />}
          sx={{
            mt: 3,
            borderRadius: 2.5,
            alignItems: "flex-start",
            bgcolor: "#FFF3DF",
            color: "#8A4B08",
            border: "1px solid #F3D4A7",
            "& .MuiAlert-message": {
              fontSize: { xs: 13, sm: 14 },
              lineHeight: 1.8,
              fontWeight: 600,
            },
          }}
        >
          <Typography fontWeight={800} component="span">
            {t("transparency.finance.notice.title")}:
          </Typography>{" "}
          {t("transparency.finance.notice.description")}
        </Alert>

        {/* Village Information */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: 3,
            border: "1px solid #E4EDE4",
            bgcolor: "#fff",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: 2,
                  bgcolor: "#E8F2E9",
                  color: GREEN,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={23} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: DARK_GREEN,
                    fontWeight: 800,
                    fontSize: { xs: 16, sm: 19 },
                  }}
                >
                  {t("transparency.finance.village.name")}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: 12, sm: 14 },
                    mt: 0.5,
                  }}
                >
                  {t("transparency.finance.village.location")}
                </Typography>
              </Box>
            </Stack>

            <Chip
              icon={<CalendarDays size={16} />}
              label={`${t("transparency.finance.year.label")}: ${t(
                "transparency.finance.year.value"
              )}`}
              sx={{
                bgcolor: "#FFF1E3",
                color: "#A34C0B",
                fontWeight: 750,
                maxWidth: "100%",
              }}
            />
          </Stack>
        </Paper>

        {/* Introduction */}
        <Box sx={{ textAlign: "center", py: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              color: ORANGE,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.5,
              mb: 1.5,
            }}
          >
            {t("transparency.finance.intro.eyebrow")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: DARK_GREEN,
              fontWeight: 800,
              fontSize: { xs: 24, sm: 29, md: 34 },
              mb: 2,
            }}
          >
            {t("transparency.finance.intro.title")}
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              maxWidth: 750,
              mx: "auto",
              lineHeight: 1.9,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            {t("transparency.finance.intro.description")}
          </Typography>
        </Box>

        {/* Latest Updates */}
        <Paper
          elevation={0}
          sx={{
            mb: 4,
            p: { xs: 2.5, sm: 3, md: 3.5 },
            borderRadius: 3,
            bgcolor: "#fff",
            border: "1px solid #E8EDE8",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2.5 }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                bgcolor: "#FFF1E3",
                color: ORANGE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BellRing size={21} />
            </Box>

            <Typography
              sx={{
                color: DARK_GREEN,
                fontWeight: 800,
                fontSize: { xs: 17, sm: 20 },
              }}
            >
              {t("transparency.finance.updates.title")}
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            {safeUpdates.map((update, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="flex-start"
                spacing={1.5}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: ORANGE,
                    mt: 0.9,
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: { xs: 13, sm: 14 },
                    lineHeight: 1.8,
                  }}
                >
                  {update}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>

        {/* Financial Summary Cards */}
        <Grid container spacing={2.5}>
          {summaryCards.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.key} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid #E8EDE8",
                    bgcolor: "#fff",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(20,83,45,0.08)",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2.5,
                        bgcolor: item.bg,
                        color: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={25} />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: { xs: 12, sm: 13 },
                          fontWeight: 600,
                          mb: 0.7,
                        }}
                      >
                        {t(
                          `transparency.finance.summary.${item.key}.label`
                        )}
                      </Typography>

                      <Typography
                        sx={{
                          color: DARK_GREEN,
                          fontWeight: 850,
                          fontSize: { xs: 20, sm: 23, md: 25 },
                          overflowWrap: "anywhere",
                        }}
                      >
                        {t(
                          `transparency.finance.summary.${item.key}.amount`
                        )}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Financial Information Cards */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              color: ORANGE,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.4,
              textAlign: "center",
              mb: 1,
            }}
          >
            {t("transparency.finance.year.subtitle")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: DARK_GREEN,
              fontWeight: 800,
              fontSize: { xs: 22, md: 30 },
              textAlign: "center",
              mb: 3,
            }}
          >
            {t("transparency.finance.year.value")}
          </Typography>

          <Grid container spacing={3}>
            {sections.map((item) => {
              const Icon = item.icon;

              return (
                <Grid key={item.key} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: "1px solid #E8EDE8",
                      bgcolor: "#fff",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 30px rgba(20,83,45,0.10)",
                        borderColor: item.color,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        bgcolor: `${item.color}14`,
                        color: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <Icon size={25} />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 750,
                        color: DARK_GREEN,
                        mb: 1,
                      }}
                    >
                      {t(
                        `transparency.finance.sections.${item.key}.title`
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 13,
                        lineHeight: 1.8,
                      }}
                    >
                      {t(
                        `transparency.finance.sections.${item.key}.description`
                      )}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Income Table */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2.5 }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: "#E8F5EC",
                color: "#16845B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <TrendingUp size={23} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: 19, sm: 23 },
                }}
              >
                {t("transparency.finance.incomeTable.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 13,
                  mt: 0.4,
                }}
              >
                {t("transparency.finance.incomeTable.description")}
              </Typography>
            </Box>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 1, sm: 2 },
              borderRadius: 3,
              border: "1px solid #E5EDE5",
              bgcolor: "#fff",
            }}
          >
            {renderFinancialTable(
              safeIncomeRows,
              "transparency.finance.incomeTable",
              "transparency.finance.incomeTable.totalLabel",
              "transparency.finance.incomeTable.totalAmount"
            )}
          </Paper>
        </Box>

        {/* Expense Table */}
        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2.5 }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: "#FFF1E3",
                color: ORANGE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <TrendingDown size={23} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: 19, sm: 23 },
                }}
              >
                {t("transparency.finance.expenseTable.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 13,
                  mt: 0.4,
                }}
              >
                {t("transparency.finance.expenseTable.description")}
              </Typography>
            </Box>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 1, sm: 2 },
              borderRadius: 3,
              border: "1px solid #E5EDE5",
              bgcolor: "#fff",
            }}
          >
            {renderFinancialTable(
              safeExpenseRows,
              "transparency.finance.expenseTable",
              "transparency.finance.expenseTable.totalLabel",
              "transparency.finance.expenseTable.totalAmount"
            )}
          </Paper>
        </Box>

        {/* Records Section */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography
                sx={{
                  color: ORANGE,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 1.3,
                  mb: 1,
                }}
              >
                {t("transparency.finance.records.eyebrow")}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: DARK_GREEN,
                  fontWeight: 800,
                  fontSize: { xs: 23, md: 30 },
                }}
              >
                {t("transparency.finance.records.title")}
              </Typography>
            </Box>

            <Chip
              icon={<FileText size={16} />}
              label={t("transparency.finance.records.eyebrow")}
              sx={{
                bgcolor: "#E8F2E9",
                color: GREEN,
                fontWeight: 650,
              }}
            />
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid #E5EDE5",
              bgcolor: "#fff",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                bgcolor: "#E8F2E9",
                color: GREEN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <FileText size={32} />
            </Box>

            <Typography
              variant="h6"
              sx={{ color: DARK_GREEN, fontWeight: 750, mb: 1 }}
            >
              {t("transparency.finance.records.emptyTitle")}
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                lineHeight: 1.9,
                maxWidth: 620,
                mx: "auto",
              }}
            >
              {t("transparency.finance.records.emptyDescription")}
            </Typography>
          </Paper>
        </Box>

        {/* Transparency Note */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 3,
            bgcolor: "#FFF1E3",
            border: "1px solid #F7D8B8",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="flex-start"
          >
            <Box sx={{ color: ORANGE, mt: 0.3, flexShrink: 0 }}>
              <ShieldCheck size={25} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 750,
                  color: DARK_GREEN,
                  fontSize: 17,
                  mb: 0.8,
                }}
              >
                {t("transparency.finance.note.title")}
              </Typography>

              <Typography
                sx={{
                  color: "#665343",
                  fontSize: 14,
                  lineHeight: 1.9,
                }}
              >
                {t("transparency.finance.note.description")}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Back Button */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Link
            component="button"
            underline="none"
            onClick={() => navigate("/transparency")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: GREEN,
              fontWeight: 750,
              fontSize: 15,
              "&:hover": { color: ORANGE },
            }}
          >
            {t("navbar.transparency")}
            <ArrowRight size={18} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ArthikMahitiPage;
