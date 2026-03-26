import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Paper,
  Alert,
  AlertTitle,
  Grid,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from '@mui/material';
import { ArrowForward, Lightbulb, Search, CheckCircle, Cancel, Warning } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Step2FormulateProblem() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>

      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 2
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, color: "text.secondary" }}>
        Formuler le problème de recherche
      </Typography>

      <Alert severity="info" icon={<Lightbulb />} sx={{ my: 3 }}>
        <AlertTitle>🎯 Objectif de l'étape</AlertTitle>
        Transformer une idée issue du brainstorming en un problème de recherche clair, précis et faisable, 
        centré sur une situation éducative réelle.
      </Alert>

      {/* Définition */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        📖 1. Comprendre le problème de recherche
      </Typography>

      <Typography paragraph>
        En éducation, un problème de recherche correspond à une difficulté observée dans le contexte scolaire 
        (apprentissage, comportement, pédagogie, évaluation…).
        Il naît d’un écart entre la situation actuelle et la situation souhaitée.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h6">
          💡 Exemple pédagogique
        </Typography>

        <Typography paragraph>
          <strong>Idée :</strong> Les élèves ont des difficultés en algorithmique.
        </Typography>

        <Typography paragraph>
          <strong>→ Problème :</strong><br />
          Quels sont les facteurs qui expliquent les difficultés des élèves du tronc commun en algorithmique ?
        </Typography>
      </Paper>

      {/* Étapes */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        🔍 2. Étapes pour formuler le problème
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Choisir une idée issue du brainstorming" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Décrire le contexte (classe, niveau, matière…)" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Identifier les causes possibles" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Consulter des sources (livres, articles…)" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Identifier ce qui reste à comprendre" />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText primary="Formuler une question claire" />
        </ListItem>
      </List>

      {/* Exemples */}
      <Typography variant="h6" sx={{ mt: 4 }}>
        🧩 Exemples
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Pourquoi les élèves participent-ils peu en classe ?" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Quel est l’impact des outils numériques sur l’apprentissage ?" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Comment améliorer la motivation des élèves ?" />
        </ListItem>
      </List>

      {/* Tableau */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        🧠 3. Structurer votre problème
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Étape</strong></TableCell>
              <TableCell><strong>Exemple</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Observation</TableCell>
              <TableCell>Les élèves sont démotivés</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Analyse</TableCell>
              <TableCell>La motivation influence l’apprentissage</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Quels facteurs influencent la motivation des élèves ?</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Exercice */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        ✏️ 4. Exercice
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Proposition</TableCell>
              <TableCell>Bonne ?</TableCell>
              <TableCell>Pourquoi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Les élèves sont démotivés</TableCell>
              <TableCell><Chip icon={<Cancel />} label="❌" color="error" /></TableCell>
              <TableCell>Trop vague</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Quels facteurs influencent la motivation des élèves ?</TableCell>
              <TableCell><Chip icon={<CheckCircle />} label="✅" color="success" /></TableCell>
              <TableCell>Clair et précis</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>La motivation dépend de l’enseignant</TableCell>
              <TableCell><Chip icon={<Warning />} label="⚠️" color="warning" /></TableCell>
              <TableCell>Hypothèse non vérifiée</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Conseils */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        🧱 5. À retenir
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: "success.light" }}>
            <Typography>✔ Problème clair</Typography>
            <Typography>✔ Faisable</Typography>
            <Typography>✔ Utile pédagogiquement</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: "error.light" }}>
            <Typography>❌ Trop vague</Typography>
            <Typography>❌ Déjà traité sans nouveauté</Typography>
            <Typography>❌ Impossible à étudier</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Navigation */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <MuiLink component={NavLink} to="/conceptuelle/brainstorm">
          ← Précédent
        </MuiLink>

        <MuiLink component={NavLink} to="/conceptuelle/literature-review">
          Suivant →
        </MuiLink>
      </Grid>
    </Box>
  );
}