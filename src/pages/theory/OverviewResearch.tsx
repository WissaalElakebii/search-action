import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

export default function OverviewResearch() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>

      <Typography variant="h1" gutterBottom>
        Aperçu de la recherche en éducation
      </Typography>

      <Typography paragraph>
        La recherche en éducation est une démarche scientifique qui permet de comprendre 
        les phénomènes liés à l’apprentissage et à l’enseignement. 
        Elle vise à analyser les pratiques pédagogiques, identifier les difficultés des élèves 
        et proposer des solutions pour améliorer la qualité de l’éducation.
      </Typography>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <img 
          src="/education-research.png" 
          alt="Recherche en éducation" 
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }} 
        />
      </Box>

      <List>
        <ListItem>
          <ListItemText primary="Rigueur et objectivité" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Production de connaissances pédagogiques" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Amélioration des pratiques d’enseignement" />
        </ListItem>
      </List>

      <Typography variant="h2" sx={{ mt: 4 }}>
        Fonctions de la recherche en éducation
      </Typography>

      <Typography paragraph>
        La recherche en éducation remplit plusieurs fonctions essentielles :
      </Typography>

      <List>
        <ListItem>
          <ListItemText 
            primary={<strong>Description</strong>} 
            secondary="Observer et décrire les situations d’apprentissage en classe" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>Explication</strong>} 
            secondary="Comprendre les causes des difficultés des élèves" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>Prédiction</strong>} 
            secondary="Anticiper les résultats ou comportements des élèves" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<strong>Amélioration pédagogique</strong>} 
            secondary="Proposer des méthodes pour améliorer l’apprentissage" 
          />
        </ListItem>
      </List>

    </Paper>
  );
}