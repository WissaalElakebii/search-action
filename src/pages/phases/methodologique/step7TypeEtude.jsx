import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { ArrowForward, Science, CheckCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step7TypeEtude() {

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase méthodologique — Étape 7
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Choisir le type de recherche en éducation
      </Typography>

      <Alert severity="info" icon={<Science />}>
        <AlertTitle>Objectif</AlertTitle>
        Choisir une méthode de recherche adaptée à ton sujet et à ta problématique.
      </Alert>

      {/* TYPES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Types de recherche en éducation
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Exemple</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Descriptive</TableCell>
              <TableCell>Décrire une situation pédagogique</TableCell>
              <TableCell>Observer le niveau des élèves</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Expérimentale</TableCell>
              <TableCell>Tester une méthode pédagogique</TableCell>
              <TableCell>Tester une méthode active</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Qualitative</TableCell>
              <TableCell>Comprendre les comportements</TableCell>
              <TableCell>Entretiens avec les élèves</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Quantitative</TableCell>
              <TableCell>Analyser des données chiffrées</TableCell>
              <TableCell>Résultats des examens</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* CHOIX */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Comment choisir ?
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Si tu veux décrire → descriptive" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Si tu veux tester une méthode → expérimentale" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Si tu veux comprendre → qualitative" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Si tu veux mesurer → quantitative" />
        </ListItem>
      </List>

      {/* EXEMPLE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        3. Exemple
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          Sujet : améliorer la motivation des élèves
        </Typography>

        <Typography>
          → Type : recherche expérimentale
        </Typography>
      </Paper>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/conceptuelle">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/methodologique/population-echantillon">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}