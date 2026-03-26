import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
  Alert,
  AlertTitle,
  Grid,
} from "@mui/material";
import { ArrowForward, School, CheckCircleOutline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function PurposeResearch() {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Conduite de la recherche en éducation
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, color: "text.secondary" }}>
        Objectif de la recherche en éducation
      </Typography>

      <Typography paragraph>
        Dans le domaine de l’éducation, les enseignants ont souvent des idées différentes 
        sur les meilleures méthodes d’enseignement. Mais comment savoir laquelle est la plus efficace ?
      </Typography>

      <Typography paragraph>
        Par exemple, certains pensent que les méthodes actives améliorent l’apprentissage, 
        tandis que d’autres préfèrent les méthodes traditionnelles. 
        La recherche permet de comparer ces approches et de trouver des réponses fiables.
      </Typography>

      <Alert severity="info" icon={<School />} sx={{ my: 3 }}>
        <AlertTitle>Rôle de la recherche</AlertTitle>
        La recherche en éducation permet d’analyser les pratiques pédagogiques 
        et d’identifier celles qui améliorent réellement l’apprentissage.
      </Alert>

      {/* EXEMPLE */}
      <Paper sx={{ p: 3, my: 4 }}>
        <Typography variant="h6">
          Exemple pédagogique
        </Typography>

        <Typography paragraph>
          Une recherche peut poser la question :
        </Typography>

        <Typography>
          Les méthodes actives améliorent-elles les résultats des élèves ?
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Groupe 1 : méthode active" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Groupe 2 : méthode traditionnelle" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          Les résultats permettent de déterminer quelle méthode est la plus efficace.
        </Typography>
      </Paper>

      {/* OBJECTIFS */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Objectifs principaux
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Comprendre les difficultés des élèves" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Améliorer les méthodes d’enseignement" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Adapter les pratiques pédagogiques" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Favoriser la réussite des élèves" />
        </ListItem>
      </List>

      {/* IMPORTANCE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Importance
      </Typography>

      <List>
        {[
          "Améliorer la qualité de l’enseignement",
          "Adapter les méthodes aux besoins des élèves",
          "Aider les enseignants à prendre de meilleures décisions pédagogiques",
          "Développer des pratiques innovantes",
        ].map(text => (
          <ListItem key={text}>
            <ListItemIcon><CheckCircleOutline color="success" /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* CONCLUSION */}
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Conclusion</AlertTitle>
        Une recherche bien menée permet d’améliorer l’apprentissage des élèves.
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Une recherche mal réalisée peut conduire à de mauvaises décisions pédagogiques.
        </Typography>
      </Alert>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/overview-research">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/philosophy-research">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}