import { Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Conceptuelle() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Phase Conceptuelle
      </Typography>

      <Typography variant="body1" paragraph>
        Cette phase initiale consiste à identifier et à formuler un problème éducatif. 
        Elle constitue le point de départ de toute recherche en éducation et permet de donner une direction claire à l’étude.
      </Typography>

      <List>
        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/brainstorm">Brainstorm des idées de recherche</Link>}
            secondary="Identifier un problème pédagogique ou éducatif pertinent et générer des idées de recherche" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/formulate-problem">Formuler le problème de recherche</Link>}
            secondary="Transformer une idée en problématique claire liée au contexte éducatif" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/literature-review">Revue de la littérature</Link>}
            secondary="Analyser les travaux existants en éducation et identifier les lacunes" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/variables-design">Variables et design de recherche</Link>}
            secondary="Identifier les variables pédagogiques et choisir une approche adaptée (qualitative, quantitative…)" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/hypotheses-model">Hypothèses et modèle conceptuel</Link>}
            secondary="Formuler des hypothèses et construire un cadre conceptuel de recherche" 
          />
        </ListItem>

        <ListItem>
          <ListItemText 
            primary={<Link component={NavLink} to="/conceptuelle/synthisis">Synthèse : Objectifs, questions et hypothèses</Link>}
            secondary="Structurer les objectifs, les questions de recherche et les hypothèses finales" 
          />
        </ListItem>
      </List>
    </Paper>
  );
}