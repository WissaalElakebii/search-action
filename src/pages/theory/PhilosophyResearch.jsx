import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Alert,
  AlertTitle,
  Link as MuiLink,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  ArrowForward,
  Psychology,
  FactCheck,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PhilosophyResearch() {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Fondements de la recherche en éducation
      </Typography>

      <Typography paragraph sx={{ color: "text.secondary" }}>
        La recherche en éducation repose sur des preuves objectives. 
        Elle s’appuie sur des données observables, analysées de manière rigoureuse.
      </Typography>

      <Typography paragraph>
        Elle vise à comprendre les situations pédagogiques, tester des idées 
        et améliorer les pratiques d’enseignement.
      </Typography>

      {/* PREUVES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Qu’est-ce qu’une preuve ?
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Autorité</AlertTitle>
            L’avis d’un enseignant ou expert seul n’est pas une preuve scientifique.
          </Alert>
        </Grid>

        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Tradition</AlertTitle>
            Une méthode utilisée depuis longtemps n’est pas toujours efficace.
          </Alert>
        </Grid>

        <Grid item xs={12} md={6}>
          <Alert severity="error" icon={<Cancel />}>
            <AlertTitle>Intuition</AlertTitle>
            Le ressenti peut être trompeur.
          </Alert>
        </Grid>

        <Grid item xs={12} md={6}>
          <Alert severity="success" icon={<CheckCircle />}>
            <AlertTitle>Observation</AlertTitle>
            Seules les données observées et analysées constituent une preuve.
          </Alert>
        </Grid>
      </Grid>

      {/* PRINCIPES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Principes de la recherche
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><FactCheck color="primary" /></ListItemIcon>
          <ListItemText primary="Empirique" secondary="Basée sur l’observation réelle en classe" />
        </ListItem>

        <ListItem>
          <ListItemIcon><VerifiedUser color="primary" /></ListItemIcon>
          <ListItemText primary="Vérifiable" secondary="Les résultats peuvent être reproduits" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Objectif" secondary="Sans biais ni jugement personnel" />
        </ListItem>
      </List>

      {/* RAISONNEMENT */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Types de raisonnement
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary={<strong>Déduction :</strong>} secondary="Appliquer une règle générale à un cas particulier" />
        </ListItem>

        <ListItem>
          <ListItemText primary={<strong>Induction :</strong>} secondary="Observer des cas pour en tirer une règle générale" />
        </ListItem>
      </List>

      {/* PLANIFICATION */}
      <Paper sx={{ p: 3, my: 4 }}>
        <Typography variant="h6">
          Planification
        </Typography>

        <Typography>
          Une recherche doit être bien préparée : définir le sujet, choisir la méthode et organiser les étapes.
        </Typography>
      </Paper>

      {/* CONCLUSION */}
      <Alert severity="info" icon={<Psychology />}>
        <AlertTitle>Conclusion</AlertTitle>
        La recherche en éducation repose sur l’observation, la rigueur et l’analyse.
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Une bonne recherche permet d’améliorer l’apprentissage des élèves.
        </Typography>
      </Alert>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/overview-research">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/ethics-research">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}