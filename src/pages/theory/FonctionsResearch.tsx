import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Science } from '@mui/icons-material';

const FonctionsResearch = () => {
  return (
    <Box sx={{ p: 3 }}>

      <Typography variant="h4" gutterBottom>
        Fonctions et niveaux de la recherche en éducation
      </Typography>

      <Paper elevation={3} sx={{ p: 2, my: 2 }}>
        <Typography variant="body1" paragraph>
          La recherche en éducation est une démarche scientifique visant à comprendre les phénomènes liés à l’apprentissage et à l’enseignement. 
          Elle permet d’analyser les pratiques pédagogiques, d’identifier les difficultés des élèves et de proposer des solutions adaptées.
        </Typography>

        <Typography variant="body1">
          Elle repose sur une méthodologie rigoureuse qui garantit la fiabilité des résultats, 
          le respect des participants (élèves) et la qualité des conclusions obtenues.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Les fonctions de la recherche en éducation
      </Typography>

      <Typography variant="body1" paragraph>
        La recherche en éducation remplit plusieurs fonctions essentielles pour améliorer les pratiques pédagogiques :
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon><Science /></ListItemIcon>
          <ListItemText
            primary="Observer et décrire une situation"
            secondary="Analyser le comportement des élèves ou les difficultés rencontrées en classe"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><Science /></ListItemIcon>
          <ListItemText
            primary="Comprendre les causes"
            secondary="Identifier les facteurs qui influencent l’apprentissage (motivation, méthode d’enseignement…)"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><Science /></ListItemIcon>
          <ListItemText
            primary="Proposer des solutions pédagogiques"
            secondary="Introduire de nouvelles méthodes ou outils pour améliorer l’apprentissage"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><Science /></ListItemIcon>
          <ListItemText
            primary="Mettre en œuvre des actions"
            secondary="Appliquer les solutions dans la classe (activités, méthodes actives…)"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon><Science /></ListItemIcon>
          <ListItemText
            primary="Évaluer les résultats"
            secondary="Vérifier si les solutions améliorent réellement les performances des élèves"
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Ces fonctions permettent d’améliorer continuellement les pratiques pédagogiques et de mieux répondre aux besoins des apprenants.
      </Typography>

    </Box>
  );
};

export default FonctionsResearch;