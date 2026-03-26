import { NavLink } from "react-router-dom";
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* Header principal */}
      <Box component="header" sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Conduite de la Recherche en Éducation
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          Étapes pour Mener un Projet de Recherche en Éducation
        </Typography>
      </Box>

      {/* Introduction générale */}
      <Box component="section" sx={{ mb: 4 }}>
        <Typography paragraph>
          La recherche en éducation est une démarche <strong>systématique et réfléchie</strong> visant à comprendre les phénomènes liés à l’apprentissage, à l’enseignement et aux pratiques pédagogiques. 
          Elle permet d’identifier les difficultés rencontrées par les apprenants et de proposer des solutions pour améliorer la qualité de l’enseignement.
        </Typography>

        <Typography paragraph>
          Ce guide vous accompagne à travers les différentes étapes de la recherche : 
          <strong> Conceptuelle → Méthodologique → Empirique → Analytique → Diffusion</strong>.
        </Typography>

        <Typography>
          Si vous débutez un projet de recherche, commencez par{" "}
          <Link component={NavLink} to="/overview-research" sx={{ textDecoration: 'underline' }}>
            l’aperçu de la recherche en éducation
          </Link>{" "}
          pour bien comprendre les bases avant d’aller plus loin.
        </Typography>
      </Box>

      {/* Section 1 : Overview */}
      <Box component="section" sx={{ mb: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📘 Aperçu de la Recherche en Éducation
        </Typography>

        <List>
          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/purpose-research">Objectif de la recherche en éducation</Link>}
              secondary="Améliorer les pratiques pédagogiques et les apprentissages" 
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/philosophy-research">Fondements de la recherche</Link>}
              secondary="Approches pédagogiques, rigueur scientifique et analyse critique" 
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/ethics-research">Considérations éthiques</Link>}
              secondary="Respect des apprenants, confidentialité et responsabilité" 
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/process-intro">Processus de recherche</Link>}
              secondary="De la problématique à la conclusion" 
            />
          </ListItem>

          <ListItem>
            <ListItemText 
              primary={<Link component={NavLink} to="/writing-overview">Rédaction du travail de recherche</Link>}
              secondary="Structure du mémoire ou rapport de recherche" 
            />
          </ListItem>
        </List>
      </Box>

      {/* Section 2 : Steps */}
      <Box component="section">
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📝 Étapes de la Recherche en Éducation
        </Typography>

        <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle">Choix du sujet de recherche</Link>}
              secondary="Identifier un problème éducatif ou pédagogique pertinent" 
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText 
              primary={<Link component={NavLink} to="/conceptuelle">Formulation de la problématique</Link>}
              secondary="Définir clairement le problème à étudier" 
            />
          </ListItem>
        </List>
      </Box>

      {/* Section 3 : Ressources */}
      <Box component="section" sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          📚 Ressources pédagogiques
        </Typography>

        <Typography paragraph>
          Les ressources suivantes ont servi de base à l’élaboration de ce guide :
        </Typography>

        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Supports de cours en sciences de l’éducation et méthodologie de recherche"
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Guides pédagogiques CRMEF et documents de formation des enseignants"
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Ouvrages sur les méthodes de recherche en éducation"
            />
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText
              primary="Articles scientifiques en didactique et pédagogie"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}