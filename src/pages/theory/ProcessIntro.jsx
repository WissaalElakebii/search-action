import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import { ArrowForward, QuestionAnswer, Rule, School } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function ProcessIntro() {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Introduction au processus de recherche en éducation
      </Typography>

      <Typography paragraph sx={{ color: "text.secondary" }}>
        La recherche en éducation suit une suite logique d’étapes qui permettent de passer d’une idée à une solution pédagogique.
      </Typography>

      <Paper sx={{ p: 3, my: 4 }}>
        <Typography variant="h6">
          Du questionnement à la planification
        </Typography>

        <Typography paragraph>
          Un enseignant peut se poser des questions comme :
        </Typography>

        <List dense>
          <ListItem>
            <ListItemIcon><QuestionAnswer fontSize="small" /></ListItemIcon>
            <ListItemText primary="Pourquoi les élèves ont-ils des difficultés ?" />
          </ListItem>

          <ListItem>
            <ListItemIcon><QuestionAnswer fontSize="small" /></ListItemIcon>
            <ListItemText primary="Comment améliorer la participation des élèves ?" />
          </ListItem>

          <ListItem>
            <ListItemIcon><QuestionAnswer fontSize="small" /></ListItemIcon>
            <ListItemText primary="Quelle méthode pédagogique est la plus efficace ?" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          À partir de ces questions, il doit organiser son travail : méthode, outils et planification.
        </Typography>
      </Paper>

      {/* PHASES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Les cinq grandes phases
      </Typography>

      <List>
        <ListItem>
          <ListItemText 
            primary={<strong>1. Phase conceptuelle</strong>}
            secondary="Choisir le sujet, formuler le problème et les hypothèses"
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>2. Phase méthodologique</strong>}
            secondary="Choisir la méthode, les outils et les participants"
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>3. Phase empirique</strong>}
            secondary="Collecter les données en classe"
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>4. Phase analytique</strong>}
            secondary="Analyser et interpréter les résultats"
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>5. Phase de diffusion</strong>}
            secondary="Présenter les résultats et proposer des améliorations"
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      {/* ETAPES */}
      <Typography variant="h5">
        Étapes pratiques
      </Typography>

      <List>
        {[
          "Formuler le problème",
          "Faire une revue de littérature",
          "Définir les objectifs",
          "Choisir la méthode",
          "Collecter les données",
          "Analyser les résultats",
          "Rédiger le rapport",
        ].map((text, index) => (
          <ListItem key={index}>
            <ListItemIcon><Rule /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Alert severity="info" icon={<School />} sx={{ my: 4 }}>
        <AlertTitle>Conclusion</AlertTitle>
        La recherche en éducation permet d’améliorer les pratiques pédagogiques.
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Elle transforme une idée en solution pour mieux enseigner.
        </Typography>
      </Alert>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/overview-research">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/writing-overview">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}