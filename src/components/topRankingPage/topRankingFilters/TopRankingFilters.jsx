import React from "react";
import { useState } from "react";
import "./TopRankingFilters.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { RecommendedRankings } from "../../../constants";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  zIndex: 1,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
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
}));
const TopRankingFilters = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="top-ranking-filters-container">
        <div className="top-ranking-filters-header">
          <h3>Recommended Rankings</h3>
        </div>
        <div className="top-ranking-filters-wrapper">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                {RecommendedRankings.ApparelAndAccessories.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.ApparelAndAccessories.data.map(
                  (item, i) => (
                    <li key={i}>{item.text}</li>
                  )
                )}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>{RecommendedRankings.ArtsAndCrafts.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.ArtsAndCrafts.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel34d-header"
            >
              <Typography>{RecommendedRankings.Accessories.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.ApparelAndAccessories.data.map(
                  (item, i) => (
                    <li key={i}>{item.text}</li>
                  )
                )}
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel2d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.ApparelAndAccessories.data.map(
                  (item, i) => (
                    <li id="list" key={i}>
                      {item.text}
                    </li>
                  )
                )}
                <button className="more-items">More</button>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>
                {RecommendedRankings.AgricultureAndFood.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {RecommendedRankings.AgricultureAndFood.data.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default TopRankingFilters;
