# Utilise une image Node légère
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie le package.json et package-lock.json (si tu veux un lock précis, sinon tu peux ignorer le lock)
COPY package.json package-lock.json ./

# Installe les dépendances via npm install (ignore npm ci)
RUN npm install --production

# Copie le reste du code
COPY . .

# Expose le port (facultatif, Railway le découvre automatiquement)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
