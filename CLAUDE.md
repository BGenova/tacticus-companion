# CLAUDE.md — Instructions pour Claude (Anthropic)

## Contexte

Tu travailles sur **Tacticus Companion**, une app React/TypeScript local-first pour planifier la progression dans Warhammer 40,000: Tacticus. Lis `AGENTS.md` pour le contexte complet du projet.

## Règles strictes

### Avant de coder
- Lis `AGENTS.md` pour comprendre l'architecture et l'état actuel.
- Consulte `Tacticus_Planner_Documentation_Base/10_IMPLEMENTATION_PLAN.md` pour savoir quelle phase/étape est en cours.
- Vérifie l'état actuel du code avant de proposer des changements.

### En codant
- **TypeScript strict** : pas de `any`, pas de `@ts-ignore`. Le projet doit compiler avec `npx tsc --noEmit`.
- **Domain pur** : les fichiers dans `src/domain/` ne doivent importer aucune librairie externe (pas de React, Zustand, Zod).
- **Fonctions pures** : la logique métier doit être testable sans mock.
- **Nommage fichiers** : kebab-case (`player-data.ts`, pas `playerData.ts`).
- **Barrel exports** : chaque dossier module a un `index.ts`.
- **Pas de backend** : tout est local (localStorage, IndexedDB). Aucun fetch/API.

### Tests — TDD strict (Red-Green-Refactor)

Ce projet suit une discipline **TDD rigoureuse**. Chaque fonctionnalité passe par le cycle :

#### 1. 🔴 RED — Écrire le test d'abord
- **Toujours** écrire le(s) test(s) **avant** le code de production.
- Le test doit échouer (rouge) pour la bonne raison — il teste un comportement qui n'existe pas encore.
- Nommer les tests de façon descriptive : `it('should reject import with missing required fields')`, pas `it('test1')`.
- Utiliser le pattern **Arrange / Act / Assert** (AAA) dans chaque test.

#### 2. 🟢 GREEN — Écrire le minimum de code pour passer le test
- Implémenter **uniquement** ce qui est nécessaire pour faire passer le test.
- Pas d'optimisation, pas de généralisation prématurée.
- Vérifier que le test passe (`npm run test`).

#### 3. 🔵 REFACTOR — Nettoyer sans changer le comportement
- Refactorer le code de production ET les tests si nécessaire.
- Les tests doivent rester verts après refactoring.
- Éliminer la duplication, améliorer la lisibilité.

#### Règles TDD non négociables

- **Pas de code de production sans test qui le justifie.** Exception : types/interfaces purs dans `src/domain/` (pas de logique à tester).
- **Couverture des cas limites** : chaque fonction doit avoir des tests pour les cas nominaux, les cas limites (vide, null, undefined, valeurs extrêmes) et les cas d'erreur.
- **Tests isolés** : chaque test est indépendant, pas de dépendance d'ordre d'exécution. Pas d'état partagé mutable entre tests.
- **Pas de mock sauf nécessité absolue** : privilégier les fonctions pures et l'injection de dépendances. Si un mock est nécessaire, le documenter avec un commentaire expliquant pourquoi.
- **Tests rapides** : chaque test unitaire < 100ms. Pas d'I/O, pas de timers réels.
- **Nommage des fichiers** : `<module>.test.ts` colocalisé avec le fichier source.
- **Structure de test** : utiliser `describe` pour grouper par fonction/module, `it` pour chaque comportement.
- **Pas de `test.skip` ou `test.todo` en merge** : tout test doit être actif et vert.
- **Vérifier que les tests passent** (`npm run test`) avant de soumettre.

#### Exemple de cycle TDD

```typescript
// 1. RED — test écrit en premier (normalize.test.ts)
describe('normalizeImport', () => {
  it('should return PlayerData from valid planner JSON', () => {
    const input = loadFixture('minimal-player.json');
    const result = normalizeImport(input);
    expect(result.profile.username).toBe('TestUser');
    expect(result.characters).toHaveLength(3);
  });

  it('should throw ValidationError for missing characters field', () => {
    const input = { profile: { username: 'Test' } };
    expect(() => normalizeImport(input)).toThrow(ValidationError);
  });

  it('should handle empty characters array', () => {
    const input = loadFixture('empty-player.json');
    const result = normalizeImport(input);
    expect(result.characters).toEqual([]);
  });
});

// 2. GREEN — implémenter normalizeImport() pour passer les tests
// 3. REFACTOR — extraire helpers, améliorer types
```

#### Quand écrire quoi

| Type de code | Tests requis |
|---|---|
| Fonction pure (logique métier) | ✅ Obligatoire — TDD strict |
| Adapter/normalizer | ✅ Obligatoire — cas valides + invalides + limites |
| Store (actions/sélecteurs) | ✅ Obligatoire — état initial, transitions, edge cases |
| Composant React (logique) | ✅ Tests de comportement (events, rendu conditionnel) |
| Composant React (présentation pure) | ⚠️ Optionnel — Storybook suffit souvent |
| Types/interfaces (`src/domain/`) | ❌ Pas de logique = pas de test |
| Configuration (vite, eslint) | ❌ Pas de test |

### Git Flow & Commits

Voir `Tacticus_Planner_Documentation_Base/11_GIT_WORKFLOW.md` pour la référence complète.

#### Stratégie : GitHub Flow simplifié

- **`main`** : branche stable, toujours fonctionnelle et déployable.
- **`feature/<nom>`** : une branche par étape du plan (ex: `feature/phase0-adapter`).
- **`fix/<nom>`** : correction de bug.
- **Pas de branche `develop`** — trop lourd pour un projet solo.

#### Règles de branche

1. **Créer une branche** avant de commencer une étape : `git checkout -b feature/phase0-adapter`
2. **Travailler sur la branche** avec des commits atomiques.
3. **Merger dans `main`** uniquement quand la DoD de l'étape est atteinte (tests verts, TS compile, doc à jour).
4. **Supprimer la branche** après merge : `git branch -d feature/phase0-adapter`
5. **Ne jamais push directement sur `main`** — toujours passer par une branche feature/fix.

#### Commits

- Format : Conventional Commits (`feat(scope): description`).
- Scopes : `domain`, `adapter`, `store`, `roster`, `goals`, `farming`, `ui`, `router`.
- Un commit par changement logique, pas de commits géants.
- **Pas de co-auteur AI** : ne jamais ajouter de trailer `Co-authored-by` avec un nom d'agent/AI (Junie, Claude, Copilot, etc.). Les commits sont au nom du développeur uniquement.
- Messages en anglais, descriptifs : `feat(adapter): add Zod schema for planner import`, pas `update files`.

#### Tags de jalon

- Taguer `main` à la fin de chaque phase : `git tag -a v0.1.0 -m "Phase 0: Foundation complete"`
- Versioning : `v0.X.0` par phase majeure, `v0.X.Y` pour les correctifs.

### Documentation — Mise à jour automatique obligatoire

Après **chaque étape ou phase complétée**, tu **DOIS** mettre à jour les fichiers suivants **avant** de soumettre le résultat. Ce n'est pas optionnel.

#### 1. `AGENTS.md` — Section "État actuel"
- Cocher (✅) l'étape terminée.
- Ajouter la prochaine étape 🔲 si elle n'y est pas.
- Mettre à jour la description si le scope a changé.

#### 2. `Tacticus_Planner_Documentation_Base/08_CHANGELOG.md`
- Ajouter une entrée datée avec le format :
  ```
  ## [YYYY-MM-DD] — Phase X.Y : Titre
  - Ce qui a été ajouté/modifié
  - Fichiers créés/modifiés
  ```

#### 3. `Tacticus_Planner_Documentation_Base/10_IMPLEMENTATION_PLAN.md`
- Marquer l'étape comme ✅ complétée.
- Ajouter des notes si l'implémentation a divergé du plan initial.

#### 4. `README.md` (si pertinent)
- Mettre à jour si de nouvelles commandes, dépendances ou instructions d'utilisation ont été ajoutées.

#### Checklist de fin d'étape

Avant de soumettre, vérifier que **tous** ces points sont faits :

- [ ] Code implémenté et fonctionnel
- [ ] Tests passent (`npm run test`)
- [ ] TypeScript compile (`npx tsc --noEmit`)
- [ ] `AGENTS.md` mis à jour (état actuel)
- [ ] `08_CHANGELOG.md` mis à jour (entrée datée)
- [ ] `10_IMPLEMENTATION_PLAN.md` mis à jour (étape cochée)
- [ ] Commit message proposé

**Si un de ces points est manquant, l'étape n'est PAS terminée.**

## Workflow type (TDD-first)

1. L'utilisateur demande une étape du plan (ex: "Phase 0.3").
2. Tu consultes le plan d'implémentation.
3. **Tu écris les tests d'abord** (RED) — ils doivent échouer.
4. Tu implémentes le minimum pour passer les tests (GREEN).
5. Tu refactores si nécessaire (REFACTOR).
6. Tu vérifies la compilation TypeScript (`npx tsc --noEmit`).
7. Tu vérifies que **tous** les tests passent (`npm run test`).
8. **Tu mets à jour la documentation** (AGENTS.md, CHANGELOG, PLAN) — voir checklist ci-dessus.
9. Tu proposes le commit message approprié.

## Fichiers importants

| Fichier | Rôle |
|---------|------|
| `AGENTS.md` | Vue d'ensemble projet pour agents AI |
| `src/domain/` | Types métier (source de vérité) |
| `src/domain/constants.ts` | Version du schéma |
| `src/data/mock.ts` | Données mock (temporaire) |
| `Tacticus_Planner_Documentation_Base/` | Documentation complète |
| `Tacticus_Planner_Documentation_Base/10_IMPLEMENTATION_PLAN.md` | Plan détaillé |

## Langue

L'utilisateur communique en **français**. Réponds en français. Le code et les commentaires de code restent en anglais.
