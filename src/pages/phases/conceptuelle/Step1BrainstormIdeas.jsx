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
  Link as MuiLink
} from '@mui/material';
import { ArrowForward, Lightbulb, Search } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function BrainstormIdeas() {
  return (
    <Box component="section" sx={{ maxWidth: "800px", mx: "auto", p: 3 }}>
      
      <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: "bold" }}>
        Phase conceptuelle — Étape 1
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mb: 3, color: "text.secondary" }}>
        Brainstorm des idées de recherche
      </Typography>

      <Typography paragraph>
        L’objectif de la recherche en éducation est d’améliorer les pratiques pédagogiques 
        et les apprentissages des élèves. 
        Essayez de réfléchir à un sujet de recherche lié à votre expérience en classe, 
        aux difficultés des apprenants ou aux méthodes d’enseignement.
      </Typography>

      <Alert severity="info" icon={<Lightbulb />} sx={{ my: 3 }}>
        <AlertTitle>Objectif du brainstorming</AlertTitle>
        Le but est de produire un maximum d’idées. 
        N’éliminez aucune idée à ce stade, même si elle semble difficile ou irréaliste.
      </Alert>

      {/* Exercice */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Exercice de brainstorming
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Listez 3 à 5 problèmes éducatifs observés"
            secondary="Ex : manque de motivation, difficultés en algorithmique, gestion de classe, faible participation..."
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Analysez chaque problème"
            secondary="Pourquoi existe-t-il ? Comment peut-on l’améliorer ?"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Proposez des solutions pédagogiques"
            secondary="Nouvelles méthodes, activités, outils numériques..."
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Que voulez-vous mieux comprendre ?"
            secondary="Le comportement des élèves, leurs difficultés, leur motivation..."
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Comment améliorer l’apprentissage ?"
            secondary="Dans une matière spécifique ou une situation pédagogique"
          />
        </ListItem>
      </List>

      {/* Exemple */}
      <Paper elevation={2} sx={{ p: 3, my: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Exemple en contexte scolaire
        </Typography>

        <List>
          <ListItem>
            <ListItemText 
              primary="Problèmes identifiés"
              secondary="Faible participation en classe, difficultés en programmation, manque d’autonomie"
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Compréhension et solutions"
              secondary="Les élèves participent peu car ils manquent de confiance. On peut introduire des activités collaboratives."
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Amélioration pédagogique"
              secondary="Utilisation de jeux pédagogiques ou d’outils interactifs pour motiver les élèves"
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Ce que je veux comprendre"
              secondary="Les causes de la démotivation des élèves"
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary="Amélioration des résultats"
              secondary="Adapter les méthodes d’enseignement selon le niveau des élèves"
            />
          </ListItem>
        </List>
      </Paper>

      <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
        Prenez le temps de réfléchir et d’enrichir votre liste d’idées 
        afin d’identifier un sujet pertinent et réalisable.
      </Typography>

      {/* Affiner */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Affiner votre liste
      </Typography>

      <Typography paragraph>
        Une fois plusieurs idées générées, sélectionnez les plus pertinentes en vous basant sur :
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Faisabilité"
            secondary="Est-ce réalisable avec votre temps et vos moyens ?"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Utilité pédagogique"
            secondary="Est-ce que cela améliore réellement l’apprentissage ?"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><ArrowForward color="primary" /></ListItemIcon>
          <ListItemText 
            primary="Originalité"
            secondary="Apporte-t-il une idée nouvelle ou une autre vision ?"
          />
        </ListItem>
      </List>

      {/* Revue */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Revue de littérature préliminaire
      </Typography>

      <Typography paragraph>
        Recherchez des études similaires pour :
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Comprendre les travaux existants" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Identifier les méthodes utilisées" />
        </ListItem>

        <ListItem>
          <ListItemIcon><Search color="success" /></ListItemIcon>
          <ListItemText primary="Affiner votre sujet de recherche" />
        </ListItem>
      </List>

      {/* Transition */}
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Prochaine étape</AlertTitle>
        Passez à la formulation du problème de recherche.
      </Alert>

      {/* Navigation */}
      <Grid container justifyContent="space-between" sx={{ mt: 5 }}>
        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle">
            ← Retour
          </MuiLink>
        </Grid>

        <Grid item>
          <MuiLink component={NavLink} to="/conceptuelle/formulate-problem">
            Suivant →
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}