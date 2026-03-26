import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import StepNavigation from "../components/StepNavigation";

export default function Overview() {
  return (
    <Box
      component="section"
      aria-labelledby="overview-title"
      sx={{ maxWidth: "max-content", mx: "auto", px: 2, py: 4 }}
    >
      <Typography
        variant="h1"
        id="overview-title"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aperçu du processus de recherche en éducation
      </Typography>

      {/* Table des matières */}
      <StepNavigation />

      <Typography variant="body1" sx={{ mb: 4, mt: 4 }}>
        Le processus de recherche en éducation suit une logique en{" "}
        <strong>cinq grandes phases</strong>. Chaque phase joue un rôle essentiel
        pour garantir la rigueur scientifique, la pertinence pédagogique et la
        qualité des résultats obtenus.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "1. Conceptuelle",
            description:
              "Choix du sujet, identification du problème éducatif, formulation de la problématique, des objectifs et des hypothèses.",
          },
          {
            title: "2. Méthodologique",
            description:
              "Définition de l’approche de recherche, du terrain, de la population, des outils de collecte de données et des considérations éthiques.",
          },
          {
            title: "3. Empirique",
            description:
              "Mise en œuvre sur le terrain : observation, entretiens, questionnaires, recueil des données et suivi du déroulement de l’étude.",
          },
          {
            title: "4. Analytique",
            description:
              "Organisation, traitement, analyse et interprétation des données recueillies afin de répondre aux questions de recherche.",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h2" sx={{ mb: 1.5, fontSize: "1.5rem" }}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h2" sx={{ mb: 1.5, fontSize: "1.5rem" }}>
              5. Diffusion
            </Typography>
            <Typography variant="body2">
              Rédaction du rapport ou mémoire, présentation des résultats,
              formulation de recommandations pédagogiques et partage des
              conclusions de la recherche.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h2" sx={{ mb: 2, fontSize: "1.8rem" }}>
          Objectif général du guide
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Permettre aux étudiants, enseignants et chercheurs en éducation de{" "}
          <strong>
            concevoir, réaliser, analyser et présenter un projet de recherche
          </strong>{" "}
          de manière rigoureuse, structurée et adaptée au contexte éducatif.
        </Typography>

        <Typography variant="h2" sx={{ mb: 2, fontSize: "1.8rem" }}>
          Objectifs spécifiques
        </Typography>
        <List>
          {[
            "Comprendre les étapes essentielles de la recherche en éducation",
            "Formuler une problématique claire et pertinente",
            "Choisir une méthodologie adaptée au sujet étudié",
            "Utiliser des outils de collecte de données comme le questionnaire, l’entretien et l’observation",
            "Analyser et interpréter les résultats avec esprit critique",
            "Rédiger et présenter un travail de recherche de manière structurée",
          ].map((text, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutline color="primary" />
              </ListItemIcon>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}