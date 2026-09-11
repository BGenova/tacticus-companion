# Tacticus Companion — Agent Guidelines

## Projet

Tacticus Companion est une app web **local-first** de planification pour le jeu mobile Warhammer 40,000: Tacticus. Elle remplace un ancien planner Notion/DC en offrant import JSON, gestion de roster, objectifs et farming.

## Stack technique

- **Frontend** : React 19 + TypeScript 6 + Vite 8
- **State** : Zustand avec persist localStorage
- **Validation** : Zod
- **Routing** : React Router
- **Tests** : Vitest + Playwright
- **UI** : Storybook 10
- **Style** : CSS modules

## Architecture

```
src/
  app/            ← Router, layout, navigation helpers
  domain/         ← Types métier purs + fonctions pures (aucune dépendance externe)
  adapters/       ← Import/export, validation Zod
  stores/         ← Zustand stores avec persist
  data/
    static/       ← Données de jeu (personnages)
    fixtures/     ← JSON de test (minimal, empty, invalid)
    mock.ts       ← Données mock (temporaire, utilisé par Dashboard/Goals/Farm)
  components/
    ui/           ← Composants réutilisables (Tag, ProgressBar, StatCard)
    layout/       ← Sidebar, Layout
    screens/      ← Écrans principaux (Dashboard, Roster, etc.)
  features/       ← Modules par fonctionnalité (à venir)
```

## Principes clés

1. **Local-first** : Aucun backend. Toutes les données sont en localStorage/IndexedDB.
2. **Domain-driven** : Les types dans `src/domain/` sont purs TypeScript, sans dépendance React ou librairie.
3. **Fonctions pures** : La logique métier (calculs farming, progression) doit être dans des fonctions pures testables.
4. **Import JSON** : L'app importe les données depuis un export JSON validé par Zod.
5. **Schema versioning** : `CURRENT_SCHEMA_VERSION` dans `src/domain/constants.ts` pour les migrations.

## Conventions de code

- **Nommage** : camelCase pour variables/fonctions, PascalCase pour types/composants, kebab-case pour fichiers.
- **Exports** : Barrel exports via `index.ts` dans chaque module.
- **Tests** : TDD strict (Red-Green-Refactor). Fichiers `.test.ts` colocalisés. Voir `CLAUDE.md` pour les règles TDD détaillées.
- **Commits** : Conventional Commits — `feat(scope)`, `fix(scope)`, `refactor(scope)`, `test(scope)`, `docs`, `chore`.
- **Scopes** : `domain`, `adapter`, `store`, `roster`, `goals`, `farming`, `ui`, `router`.

## État actuel (Phase 1 complétée)

- ✅ Phase 0.2 : Modèle de domaine (`src/domain/`) : `CharacterProgress`, `Goal`, `CampaignProgress`, `PlayerData`
- ✅ Phase 0.3 : Adapter d'import (Zod schema + normalisation + ImportValidationError)
- ✅ Phase 0.4 : Store Zustand + persistance localStorage
- ✅ Phase 0.1 : Routing React Router + Layout
- ✅ Phase 0.5 : Fixtures de test (minimal, empty, invalid)
- ✅ Phase 0.6 : UI d'import (Settings : import fichier, preview, confirmation, export, reset)
- ✅ Phase 1.1 : Données statiques personnages (`src/data/static/characters.ts`)
- ✅ Phase 1.2 : Roster connecté au store (filtres alliance, recherche, tri par puissance/nom/niveau)
- ✅ Phase 1.3 : Fonctions domain roster (getRarityLabel, getInitials, sortByPower)
- ✅ Phase 1.4 : Fiche personnage (`/roster/:id`) connectée au store (progression, équipement, améliorations, objectifs liés)
- 🔲 Phase 1.5 : API Tacticus — import rapide via clé API (session uniquement)
- 🔲 Phase 2 : Goals (CRUD, priorités, progression)
- 🔲 Phase 3 : Farming (recettes, calculs, plan quotidien)

## Documentation

Toute la documentation détaillée est dans `Tacticus_Planner_Documentation_Base/` :
- `01_PRODUCT_REQUIREMENTS.md` — PRD complet
- `02_ROADMAP.md` — Roadmap 8 phases
- `03_ARCHITECTURE.md` — Architecture technique
- `04_DATA_MODEL.md` — Modèle de données
- `05_DECISIONS.md` — ADRs
- `06_DEVELOPMENT_GUIDE.md` — Guide développeur
- `10_IMPLEMENTATION_PLAN.md` — Plan d'implémentation détaillé
- `11_GIT_WORKFLOW.md` — Convention Git

## Commandes

```bash
npm run dev          # Serveur de développement
npm run build        # Build production
npm run test         # Tests Vitest
npm run storybook    # Storybook
npm run lint         # ESLint
```

## Ce qu'il ne faut PAS faire

- Ne pas ajouter de backend ou d'appels API (local-first).
- Ne pas modifier les types dans `src/domain/` sans vérifier la cohérence avec `04_DATA_MODEL.md`.
- Ne pas supprimer `src/data/mock.ts` tant que Dashboard/Goals/Farm ne sont pas connectés au store.
- Ne pas ignorer les erreurs TypeScript — le projet doit compiler avec `npx tsc --noEmit`.
