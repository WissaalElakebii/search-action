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
  Divider,
} from "@mui/material";
import {
  Gavel,
  Group,
  Public,
  ArrowForward,
  Warning,
  CheckCircle,
  VerifiedUser,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function EthicsResearch() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Considérations éthiques en recherche en éducation
      </Typography>

      <Typography paragraph sx={{ color: "text.secondary" }}>
        Toute recherche en éducation doit respecter des principes éthiques afin de protéger les élèves,
        garantir la fiabilité des résultats et assurer une utilisation responsable des données.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Trois dimensions principales
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon><Gavel color="primary" /></ListItemIcon>
            <ListItemText primary="Collecte et analyse des données" />
          </ListItem>

          <ListItem>
            <ListItemIcon><Group color="primary" /></ListItemIcon>
            <ListItemText primary="Respect des participants (élèves)" />
          </ListItem>

          <ListItem>
            <ListItemIcon><Public color="primary" /></ListItemIcon>
            <ListItemText primary="Responsabilité pédagogique et sociale" />
          </ListItem>
        </List>
      </Paper>

      {/* 1 */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        1. Collecte et analyse des données
      </Typography>

      <Typography paragraph>
        Les données doivent être collectées et analysées de manière honnête et rigoureuse.
      </Typography>

      <Alert severity="error">
        <AlertTitle>Pratiques non éthiques</AlertTitle>
        <List dense>
          <ListItem><ListItemText primary="Inventer des réponses ou modifier les résultats" /></ListItem>
          <ListItem><ListItemText primary="Supprimer des données qui ne confirment pas l’hypothèse" /></ListItem>
        </List>
      </Alert>

      <Alert severity="success" sx={{ mt: 2 }}>
        <AlertTitle>Bonnes pratiques</AlertTitle>
        <List dense>
          <ListItem><ListItemText primary="Respecter les données collectées" /></ListItem>
          <ListItem><ListItemText primary="Expliquer les résultats de manière objective" /></ListItem>
          <ListItem><ListItemText primary="Présenter les limites de l’étude" /></ListItem>
        </List>
      </Alert>

      <Divider sx={{ my: 4 }} />

      {/* 2 */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        2. Respect des participants
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><CheckCircle /></ListItemIcon>
          <ListItemText primary="Consentement des participants" secondary="Informer les élèves et obtenir leur accord" />
        </ListItem>

        <ListItem>
          <ListItemIcon><VerifiedUser /></ListItemIcon>
          <ListItemText primary="Confidentialité" secondary="Ne pas révéler l’identité des élèves" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Warning /></ListItemIcon>
          <ListItemText primary="Protection des élèves" secondary="Ne pas causer de stress ou de pression" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Gavel /></ListItemIcon>
          <ListItemText primary="Autorisation" secondary="Respecter les règles de l’établissement scolaire" />
        </ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      {/* 3 */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        3. Responsabilité pédagogique
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Utilité pédagogique" secondary="Améliorer l’apprentissage des élèves" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Équité" secondary="Traiter tous les élèves de manière juste" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Transparence" secondary="Présenter les résultats honnêtement" />
        </ListItem>
      </List>

      <Alert severity="info" sx={{ my: 4 }}>
        <AlertTitle>Conclusion</AlertTitle>
        Une recherche en éducation doit être honnête, respectueuse et utile.
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          L’éthique garantit la qualité et la crédibilité de la recherche.
        </Typography>
      </Alert>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/overview-research">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/process-intro">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}