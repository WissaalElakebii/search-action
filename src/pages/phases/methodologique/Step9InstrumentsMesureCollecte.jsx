import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { ArrowForward, Assessment, CheckCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step9InstrumentsMesureCollecte() {

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase méthodologique — Étape 9
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Instruments de collecte des données
      </Typography>

      <Alert severity="info" icon={<Assessment />}>
        <AlertTitle>Objectif</AlertTitle>
        Choisir les outils pour collecter les données dans une recherche en éducation.
      </Alert>

      {/* DEFINITION */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Qu’est-ce qu’un instrument ?
      </Typography>

      <Typography paragraph>
        Un instrument est un outil utilisé pour collecter des informations.
      </Typography>

      {/* TYPES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Types d’instruments
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Instrument</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Exemple</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Questionnaire</TableCell>
              <TableCell>Questions écrites</TableCell>
              <TableCell>Google Forms</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Entretien</TableCell>
              <TableCell>Discussion avec les élèves</TableCell>
              <TableCell>Interview</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Observation</TableCell>
              <TableCell>Observer le comportement</TableCell>
              <TableCell>Participation en classe</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* QUALITES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        3. Qualités d’un bon instrument
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Clair et compréhensible" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Adapté au niveau des élèves" />
        </ListItem>

        <ListItem>
          <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
          <ListItemText primary="Facile à utiliser" />
        </ListItem>
      </List>

      {/* EXEMPLE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        4. Exemple
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          Étudier la motivation des élèves
        </Typography>

        <Typography>
          → Instrument : questionnaire
        </Typography>
      </Paper>

      {/* ETAPES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        5. Étapes
      </Typography>

      <List>
        <ListItem><ListItemText primary="Choisir l’instrument" /></ListItem>
        <ListItem><ListItemText primary="Préparer les questions" /></ListItem>
        <ListItem><ListItemText primary="Collecter les données" /></ListItem>
      </List>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/methodologique/population-echantillon">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/methodologique/plan-analyse">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}