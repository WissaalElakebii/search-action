import React, { useState } from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon,
  Paper, Alert, AlertTitle, Grid, Link as MuiLink,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Chip, Card, CardContent, Button, Collapse
} from '@mui/material';
import { ArrowForward, Science, Search, CheckCircle, Cancel } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step4VariablesDesign() {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Phase conceptuelle — Étape 4
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Variables et design de recherche
      </Typography>

      <Alert severity="info">
        <AlertTitle>Objectif</AlertTitle>
        Identifier les variables et choisir la méthode de recherche adaptée.
      </Alert>

      {/* VARIABLES */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        1. Les variables
      </Typography>

      <Typography paragraph>
        Une variable est un élément que l’on peut observer ou mesurer dans une recherche.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Définition</TableCell>
              <TableCell>Exemple (éducation)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Indépendante</TableCell>
              <TableCell>Cause ou facteur</TableCell>
              <TableCell>Méthode d’enseignement</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dépendante</TableCell>
              <TableCell>Résultat</TableCell>
              <TableCell>Résultat des élèves</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Confondante</TableCell>
              <TableCell>Facteur externe</TableCell>
              <TableCell>Niveau des élèves</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* EXEMPLE */}
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography>
          Exemple : une méthode active améliore-t-elle les résultats ?
        </Typography>

        <List>
          <ListItem><ListItemText primary="Indépendante → méthode active" /></ListItem>
          <ListItem><ListItemText primary="Dépendante → résultats" /></ListItem>
        </List>
      </Paper>

      {/* DESIGN */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        2. Le design de recherche
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Utilisation</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Descriptive</TableCell>
              <TableCell>Décrire une situation</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Expérimentale</TableCell>
              <TableCell>Tester une méthode</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Qualitative</TableCell>
              <TableCell>Comprendre un comportement</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* EXERCICE */}
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">Exercice</Typography>

          <Typography>
            Une méthode interactive améliore-t-elle la participation ?
          </Typography>

          <Button onClick={() => setShow1(!show1)}>
            Voir réponse
          </Button>

          <Collapse in={show1}>
            <Typography>Indépendante : méthode interactive</Typography>
            <Typography>Dépendante : participation</Typography>
          </Collapse>
        </CardContent>
      </Card>

      {/* NAV */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/conceptuelle/literature-review">
          ← Retour
        </MuiLink>

        <MuiLink component={NavLink} to="/conceptuelle/hypotheses-model">
          Suivant →
        </MuiLink>
      </Grid>

    </Box>
  );
}