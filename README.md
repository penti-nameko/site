# プロフィールサイト

モダン・ミニマルな個人プロフィールサイト（Node.js + Express + EJS）

## セットアップ

```bash
npm install
npm start
```

ブラウザで `http://localhost:3000` を開く。

## ページ構成

| URL | 内容 |
|-----|------|
| `/` | ホーム（Hero・最新記事・About・Contact） |
| `/blog` | ブログ一覧（カテゴリフィルター付き） |
| `/blog/:id` | ブログ記事詳細 |
| `/api/profile` | プロフィールデータ（JSON API） |

## カスタマイズ

### プロフィール情報を変更する
`data/profile.json` を編集してください：
- 名前・自己紹介文・スキル
- SNSリンク
- ブログ記事（追加・編集）

### デザインを変更する
`public/css/style.css` の `:root` 変数で色・フォントを一括変更できます。

## 技術スタック
- **Node.js** + **Express** — サーバー
- **EJS** — テンプレートエンジン
- **Vanilla JS** — スクロールアニメーション
- **Google Fonts** — Cormorant Garamond + Noto Sans JP
