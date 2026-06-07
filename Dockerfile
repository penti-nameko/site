FROM node:20-alpine

WORKDIR /app

# 依存関係の定義ファイルをコピー
COPY package*.json ./

# 本番環境用のパッケージのみをインストール
RUN npm install --production

# ソースコードをコピー
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]