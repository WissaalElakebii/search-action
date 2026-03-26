import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { ArrowForward, Edit } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step6Synthisis() {

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase conceptuelle — Étape 6
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Synthèse : contexte, objectifs, questions et hypothèses
      </Typography>

      <Alert severity="info" icon={<Edit />}>
        <AlertTitle>Objectif</AlertTitle>
        Rédiger une synthèse claire du projet de recherche en éducation.
      </Alert>

      {/* CONTEXTE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Le contexte
      </Typography>

      <Typography paragraph>
        Le contexte décrit la situation éducative dans laquelle s’inscrit la recherche.
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
              <TableCell>Général</TableCell>
              <TableCell>Les difficultés d’apprentissage sont fréquentes chez les élèves</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Local</TableCell>
              <TableCell>Dans une classe de tronc commun, les élèves ont du mal en algorithmique</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Justification</TableCell>
              <TableCell>Améliorer les méthodes pédagogiques pour aider les élèves</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* OBJECTIF */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Objectif
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          Exemple :
        </Typography>

        <Typography>
          Évaluer l’effet d’une méthode active sur la compréhension des élèves.
        </Typography>
      </Paper>

      {/* OBJECTIFS SPECIFIQUES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        3. Objectifs spécifiques
      </Typography>

      <List>
        <ListItem><ListItemText primary="Analyser le niveau des élèves" /></ListItem>
        <ListItem><ListItemText primary="Tester une nouvelle méthode" /></ListItem>
        <ListItem><ListItemText primary="Comparer les résultats" /></ListItem>
      </List>

      {/* QUESTIONS */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        4. Questions de recherche
      </Typography>

      <List>
        <ListItem><ListItemText primary="Pourquoi les élèves ont-ils des difficultés ?" /></ListItem>
        <ListItem><ListItemText primary="La méthode active améliore-t-elle les résultats ?" /></ListItem>
      </List>

      {/* HYPOTHESES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        5. Hypothèses
      </Typography>

      <List>
        <ListItem><ListItemText primary="La méthode active améliore les résultats des élèves" /></ListItem>
      </List>

      {/* STRUCTURE */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        6. Structure finale
      </Typography>

      <List>
        <ListItem><ListItemText primary="Contexte" /></ListItem>
        <ListItem><ListItemText primary="Objectif" /></ListItem>
        <ListItem><ListItemText primary="Questions" /></ListItem>
        <ListItem><ListItemText primary="Hypothèses" /></ListItem>
      </List>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/conceptuelle/hypotheses-model">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/methodologique">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}