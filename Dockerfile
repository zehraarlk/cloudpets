# 1. Nginx imajını kullan
FROM nginx:alpine

# 2. Varsayılan nginx ayarlarını sil
RUN rm -rf /usr/share/nginx/html/*

# 3. Proje dosyalarını nginx dizinine kopyala
COPY . /usr/share/nginx/html

# 4. 80 portunu aç
EXPOSE 80

# 5. Nginx’i çalıştır
CMD ["nginx", "-g", "daemon off;"]
