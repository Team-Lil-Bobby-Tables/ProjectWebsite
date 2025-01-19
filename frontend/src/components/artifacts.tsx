import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const panels = [
  {
    header: "Development Methodology Plan",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1cl36LWwWsst8z9o7ErjulRBYU1OqPAN1p6ZttlxgKjM/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Domain Model",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1larUUWAiFG9_0kGvkl4L8KNNdoWC_fBImo_wpswhSXU/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      ></iframe>
    ),
  },
  {
    header: "Process and Project Metrics",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1KfJzmIV2O8h2mZQKeufccHHSZfveQ4J5VYYurrMHLIY/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      ></iframe>
    ),
  },
  {
    header: "Weekly 4-Up (8/26 - 9/12)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1Byz_RgSjFy7xspXEo0sSxj4WQUrx33t5/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (9/13 - 9/17)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1Hy_-zFO5dXtrv6z0wtbLbEmhDml8QMec/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (9/18 - 9/24)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQU1z_-2CXBiHhxxnmE2fwv_a6qnc9JPes2UOoEKeCcM2jrp9RnJvtT5pZhyLC4fQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (9/25 - 10/1)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQ58y8mO7N2TFGZqZbVyTFIQ_IAPzTzF22XwO__Q6se5mqYIKj4WIZe7qwxGxWnhA/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (10/1 - 10/8)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQI2VvAkWS_iYWgpJMNYoBTfQKZ8NdERnGJySeX6yxv_KIbOmstwYhbSinBxSeYcA/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (10/8 - 10/15)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTRa0i-a7ARtWegHXGCci78kLE3q5sYlKtZ007eBhN8sZQjH3wjzLdsjY1lh-pbnQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (10/15 - 10/22)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTLqPQ9CScu8GNSFFucAokaUtitlyFpe9jDUyTBa5ciJfmolsJeJcZmJle1b34uKQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (10/29 - 11/5)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vROKDVf1cdLNAWxVqc0s_n4h_WoQgVvgh01BLUxafOmomEkAXKwrTOtxg8IsVRPNQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (11/5 - 11/12)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSeJ_QZT7Xtk_uC7UJ8RVVr9CfSyc7v4ozB4ctUjnvBdwbWB6Ye3F8hrPJhS3EpiQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (11/13 - 11/19)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTRIJZ7cE1G_WbgHSfpTYuqz-ZhtSmo5M3a4hyEPPBbH9xY8j9tE45M_6kEbYh42w/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (11/26 - 12/3)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSHOC4p7VDLomeSzeGkq4eyN4AEZivj5KVJXWaWwsI1CpX68VI6OsB1kUcxjxwrsQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (12/3 - 12/10)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRNMjPFmwIFuWdxE2M3kdQDVf6Hm7X_CQuCWJB7WAf9N29596tc9_Zz7tiKuo2lvA/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "Weekly 4-Up (1/14 - 1/21)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSKfTzw9uyMuS6LVKYVxn3Vo0kXJi3FJ4m4NQ9ntO-QTeadnEtUDG82M_hC8LFUmA/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
  {
    header: "First End-Of-Term Self-Evaluation",
    content: (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQydkI1_nqJGilmDKW752ce2FN-vMN0T9AgL4VYyQ90402WDiNk-F3Gm3NkDSnWRQ/pub?embedded=true"
        width={"80%"}
        height={"800px"}
      />
    ),
  },
];

export default function Artifacts() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container maxWidth="xl" sx={{ paddingBottom: "50px", overflow: "hidden" }}>
      <div>
        <h1>Artifacts</h1>
      </div>
      <div className="slide-right">
        {panels.map((panel) => (
          <Accordion
            key={panel.header}
            expanded={expanded === panel.header}
            onChange={handleChange(panel.header)}
            sx={{ marginBottom: "10px" }}
          >
            <AccordionSummary
              aria-controls={`${panel.header}d-content`}
              id={`${panel.header}d-header`}
            >
              <Typography>{panel.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{panel.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
}
