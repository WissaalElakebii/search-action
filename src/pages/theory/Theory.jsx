import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";

const theoryLinks = [
  { path: "/overview-research", label: "Aperçu de la recherche en éducation" },
  { path: "/purpose-research", label: "Objectif de la recherche en éducation" },
  { path: "/philosophy-research", label: "Fondements de la recherche" },
  { path: "/ethics-research", label: "Considérations éthiques" },
  { path: "/process-intro", label: "Processus de recherche en éducation" },
  { path: "/writing-overview", label: "Rédaction d’un travail de recherche" },
  { path: "/fonctions-research", label: "Fonctions de la recherche en éducation" },
];

export default function Theory() {
  return (
    <Box component="section" sx={{ maxWidth: "max-content", mx: "auto", p: 2 }}>
      
      <Typography variant="h1" sx={{ mb: 4 }}>
        Ressources théoriques en recherche en éducation
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Cette section regroupe les notions de base nécessaires pour comprendre 
        la recherche en éducation. Elle permet de découvrir les concepts 
        essentiels et les étapes d’un projet de recherche pédagogique.
      </Typography>

      <List>
        {theoryLinks.map((item) => (
          <ListItem key={item.path} disablePadding>
            <MuiLink
              component={NavLink}
              to={item.path}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.label}
            </MuiLink>
          </ListItem>
        ))}
      </List>

    </Box>
  );
}