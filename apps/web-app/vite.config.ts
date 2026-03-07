import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import refreshSkillsPlugin from './refresh-skills-plugin.js';

// https://vite.dev/config/
// VITE_BASE_PATH set in CI for GitHub Pages (e.g. /antigravity-awesome-skills/); default / for local dev
const base = process.env.VITE_BASE_PATH ?? '/';
const isGitHubPages = base !== '/';

export default defineConfig({
  base,
  // For GitHub Pages, emit files under the base path so the artifact root maps to the site root
  build: {
    outDir: isGitHubPages ? `dist${base}` : 'dist',
    emptyOutDir: true,
  },
  plugins: [react(), refreshSkillsPlugin()],
});
