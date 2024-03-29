import React, { useState } from "react";
import "./liste.css";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { AddCircle, MinusCirlce } from "iconsax-react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Liste = () => {
  const [btnactive, setbtnactive] = useState(true);
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: theme.palette.divider,
    "&:not(:last-child)": {
      borderBottom: 0,
      width: 618,
    },
    "&:before": {
      display: "none",
    },
  }));
  {<div className="plusbnt">
  <div>
   
  </div>
  <div className="minpuls">
   
  </div>
</div>
}
  const AccordionSummary = styled((props) => (
    
    <MuiAccordionSummary
        expandIcon ={ <AddCircle sx={{ fontSize: "1.9rem" }}  />}   
             
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiAccordionSummary-content": {
      overflow: "hidden",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(2),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded) {
    }
  };
  const tab = [
    {
      name: "Qu'est-ce que Maktaba ?",
      des: "  Maktaba est une plateforme en ligne pour acheter, vendre et donner des fournitures scolaires, des livres et des jouets éducatifs.",
      panel: "panel1",
    },
    {
      name: "Comment fonctionne la plateforme Maktaba ?",
      des: "Maktaba optimise les activités des fournisseurs et rationalise la gestion marketing et logistique des acheteurs grâce à la gestion de données en temps réel et à l'IA. Quels sont les avantages ",
      panel: "panel2",
    },
    {
      name: "Quels sont les avantages d'utiliser Maktaba ?",
      des: "Maktaba permet un accès simplifié à des fournitures scolaires, des livres et des jouets éducatifs abordables et de haute qualité.Comment puis-je acheter des fournitures scolaires, des livres ou des jouets ",
      panel: "panel3",
    },
    {
      name: "Comment puis-je acheter des fournitures scolaires, des livres ou des jouets éducatifs sur Maktaba ?",
      des: "Vous pouvez acheter des fournitures scolaires, des livres et des jouets éducatifs sur Maktaba en créant un compte et en utilisant la plateforme en ligne.",
      panel: "panel4",
    },
    {
      name: "Comment puis-je vendre ou échanger des articles sur Maktaba ?",
      des: " Vous pouvez vendre ou échanger des articles sur Maktaba en créant un compte, en créant une liste et en échangeant les articles avec d'autres utilisateurs.",
      panel: "panel5",
    },
    {
      name: "Comment puis-je créer une bibliothèque numérique sur Maktaba ?",
      des: "Vous pouvez créer une bibliothèque numérique sur Maktaba en créant un compte et en téléchargeant les livres et les documents..",
      panel: "panel6",
    },
    {
      name: "Qu'est-ce qu'un projet de bibliothèque numérique et comment cela fonctionne-t-il ?",
      des: "Un projet de bibliothèque numérique est un outil pour lancer et gérer vos propres initiatives culturelles, sociales ou économiques grâce aux bibliothèques numériques sur Maktaba.",
      panel: "panel7",
    },
    {
      name: "Maktaba est-il associé à des organisations qui promeuvent l'éducation et la durabilité ?",
      des: "Oui, Maktaba est associé à des organisations qui promeuvent l'éducation et la durabilité pour soutenir sa mission.",
      panel: "panel8",
    },
  ];
  return (
    <div>
      <div className="cols-becam">
        {tab.map((obj) => (
          <>
            <Accordion
              expanded={expanded === obj.panel}
              onChange={handleChange(obj.panel)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                style={{width:"650px"}}
              >
                <Typography  style={{width:"650px"}} className="typography">
                {obj.name}
               </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="typographyReponse">
                   {obj.des}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </div>
    </div>
  );
};

export default Liste;
