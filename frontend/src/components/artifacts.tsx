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
    header: "Weekly 4-Up (9/13 - 9/16)",
    content: (
      <iframe
        src="https://docs.google.com/document/d/1Hy_-zFO5dXtrv6z0wtbLbEmhDml8QMec/pub?embedded=true"
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
