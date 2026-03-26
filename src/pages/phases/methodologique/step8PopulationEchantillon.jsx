import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { ArrowForward, Groups, CheckCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step8PopulationEchantillon() {

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase méthodologique — Étape 8
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Population et échantillonnage en éducation
      </Typography>

      <Alert severity="info" icon={<Groups />}>
        <AlertTitle>Objectif</AlertTitle>
        Comprendre comment choisir les participants d’une recherche en éducation.
      </Alert>

      {/* DEFINITIONS */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Définitions
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Terme</TableCell>
              <TableCell>Définition</TableCell>
              <TableCell>Exemple</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Population</TableCell>
              <TableCell>Ensemble des individus étudiés</TableCell>
              <TableCell>Tous les élèves du lycée</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Échantillon</TableCell>
              <TableCell>Une partie de la population</TableCell>
              <TableCell>Une classe</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Participants</TableCell>
              <TableCell>Les personnes qui participent à l’étude</TableCell>
              <TableCell>30 élèves</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* METHODES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Méthodes d’échantillonnage
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Aléatoire : choix au hasard" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Stratifié : par groupe (niveau, âge…)" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Par convenance : les plus accessibles" />
        </ListItem>
      </List>

      {/* EXEMPLE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        3. Exemple
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          Étudier la motivation des élèves
        </Typography>

        <Typography>
          → Population : tous les élèves
        </Typography>

        <Typography>
          → Échantillon : une classe
        </Typography>
      </Paper>

      {/* ETAPES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        4. Étapes
      </Typography>

      <List>
        <ListItem><ListItemText primary="Définir la population" /></ListItem>
        <ListItem><ListItemText primary="Choisir un échantillon" /></ListItem>
        <ListItem><ListItemText primary="Collecter les données" /></ListItem>
      </List>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/methodologique/type-etude">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/methodologique/instruments-collecte">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}