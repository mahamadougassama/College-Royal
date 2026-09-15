# Étape 1 : Compilation de l'application Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Distribution avec Nginx
FROM nginx:alpine
# Ajustez le chemin de destination si votre projet génère sous /dist/<nom-du-projet>/browser
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
