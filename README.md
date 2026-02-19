# ZenBlock Pro
**Reprenez le contrôle de votre temps et éliminez les distractions.**

ZenBlock Pro est une extension de navigateur (Manifest V3) légère et élégante conçue pour vous aider à rester concentré. Contrairement aux bloqueurs classiques, ZenBlock remplace vos sites distrayants par une page de motivation épurée, vous rappelant vos objectifs au lieu de simplement afficher une erreur de connexion.

---

## ✨ Fonctionnalités
- **Blocage Multi-sites :** Listez tous les domaines qui vous déconcentrent (Facebook, YouTube, Reddit...).
- **Minuteur de Focus :** Définissez une durée précise (méthode Pomodoro ou sessions longues).
- **Page d'Interception Zen :** Une interface sombre et motivante s'affiche lors d'une tentative d'accès.
- **Résilience :** Le blocage persiste même si vous fermez et rouvrez votre navigateur.
- **Notifications :** Recevez une alerte système dès que votre session de travail est terminée.
- **Respect de la vie privée :** Aucune donnée n'est collectée. Tout est géré localement sur votre machine.

---

## 🛠️ Installation (Mode Développeur)

Comme l'extension n'est pas encore sur le Web Store, voici comment l'installer manuellement :

1. **Téléchargez** ce dépôt (ou clonez-le via `git clone`).
2. Ouvrez votre navigateur (Chrome, Edge ou Brave) et accédez à `chrome://extensions/`.
3. Activez le **"Mode développeur"** en haut à droite.
4. Cliquez sur **"Charger l'extension dépaquetée"** (Load unpacked).
5. Sélectionnez le dossier contenant les fichiers du projet.
6. Épinglez l'icône **ZenBlock Pro** dans votre barre d'outils !

---

## 🚀 Utilisation
1. Cliquez sur l'icône de l'extension.
2. Entrez les sites à bloquer séparés par des virgules (ex: `instagram.com, twitter.com`).
3. Saisissez la durée de votre session en minutes.
4. Cliquez sur **"Démarrer la session"**.
5. *Respirez, vous êtes maintenant en zone de haute productivité.*

---

## 💻 Stack Technique
- **Manifest V3** (Standard moderne des extensions)
- **APIs Chrome :**
  - `declarativeNetRequest` pour un blocage réseau performant.
  - `storage.local` pour la persistance des données.
  - `alarms` pour la gestion précise du temps en arrière-plan.
- **HTML/CSS/JS** Vanille (sans frameworks lourds).

---

## 📋 Prochaines étapes (Roadmap)
- [ ] Ajout d'un tableau de bord de statistiques de concentration.
- [ ] Mode "Hardcore" (impossible d'arrêter le timer avant la fin).
- [ ] Listes de blocage pré-enregistrées par thématiques.

---
*Fait avec ❤️ pour aider les procrastinateurs du monde entier.*
