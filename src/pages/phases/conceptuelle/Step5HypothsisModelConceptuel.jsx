import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Chip
} from '@mui/material';
import { ArrowForward, Psychology, CheckCircle, Cancel } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step5HypothsisModelConceptuel() {

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase conceptuelle — Étape 5
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Hypothèses et modèle conceptuel
      </Typography>

      <Alert severity="info" icon={<Psychology />}>
        <AlertTitle>Objectif</AlertTitle>
        Formuler des hypothèses et représenter les relations entre les variables.
      </Alert>

      {/* HYPOTHESES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Les hypothèses
      </Typography>

      <Typography paragraph>
        Une hypothèse est une réponse provisoire à la question de recherche.
        Elle exprime une relation entre deux variables.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Exemple (éducation)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Descriptive</TableCell>
              <TableCell>Les élèves ont des difficultés en algorithmique</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Relationnelle</TableCell>
              <TableCell>La motivation influence les résultats</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Causale</TableCell>
              <TableCell>Une méthode active améliore les résultats</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* EXEMPLE */}
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography>
          Exemple :
        </Typography>

        <Typography>
          Une méthode interactive améliore la participation des élèves.
        </Typography>
      </Paper>

      {/* MODELE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Modèle conceptuel
      </Typography>

      <Typography paragraph>
        Le modèle conceptuel est un schéma qui montre la relation entre les variables.
      </Typography>

      <Paper sx={{ p: 3, mt: 3, textAlign: "center" }}>
        <Typography>Méthode active</Typography>
        <Typography>↓</Typography>
        <Typography>Motivation</Typography>
        <Typography>↓</Typography>
        <Typography>Résultats des élèves</Typography>
      </Paper>

      {/* EXERCICE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        3. Exercice
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Proposition</TableCell>
              <TableCell>Correct ?</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Les élèves sont motivés</TableCell>
              <TableCell><Chip icon={<Cancel />} label="❌" color="error" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>La motivation influence les résultats</TableCell>
              <TableCell><Chip icon={<CheckCircle />} label="✅" color="success" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* CONSEILS */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        4. À retenir
      </Typography>

      <List>
        <ListItem><ListItemText primary="✔ Hypothèse claire" /></ListItem>
        <ListItem><ListItemText primary="✔ Testable" /></ListItem>
        <ListItem><ListItemText primary="✔ Basée sur la littérature" /></ListItem>
      </List>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/conceptuelle/variables-design">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/methodologique">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}