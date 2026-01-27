# キャリアスコア診断 (CareerScore)

転職成功確率を診断し、最適な転職戦略をご提案するWebアプリケーション

## 概要

25問の質問に答えることで、転職の成功確率を数値化。
市場価値・準備度・活動品質・環境の4カテゴリを徹底分析し、
個別の改善策をご提案します。

## 主な機能

- **詳細診断**: 25問の質問で4カテゴリを分析
- **スコア表示**: 成功確率を数値化（S〜Dランク）
- **レーダーチャート**: 視覚的にスコアを表示
- **改善提案**: 具体的なアクションプランを提示
- **SNSシェア**: X（Twitter）で結果をシェア
- **無料相談予約**: Googleカレンダー連携

## 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS + Custom CSS
- **チャート**: Chart.js + react-chartjs-2
- **デプロイ**: Netlify / Vercel（予定）

## セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## プロジェクト構成

```
career-score/
├── src/
│   ├── components/
│   │   ├── Landing/        # ランディングページ
│   │   ├── Quiz/           # 診断フロー
│   │   ├── Result/         # 結果表示
│   │   ├── Common/         # 共通コンポーネント
│   │   └── Privacy/        # プライバシーポリシー
│   ├── data/
│   │   └── questions.ts    # 質問データ
│   ├── lib/
│   │   └── scoring.ts      # スコア計算ロジック
│   ├── types/
│   │   └── index.ts        # 型定義
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## 診断のカテゴリ

1. **市場価値** (7問)
   - 年齢、経験、スキル、資格など

2. **準備度** (7問)
   - 職務経歴書、面接対策、業界研究など

3. **活動品質** (6問)
   - 応募数、企業研究、選考管理など

4. **環境・メンタル** (5問)
   - 時間的余裕、転職理由、サポート体制など

## スコアリング

- 各質問の回答に応じて0-100点を付与
- カテゴリ別に平均スコアを算出
- 総合スコアから成功確率とランクを決定

### ランク基準
- **S**: 80%以上（準備万端）
- **A**: 65-79%（あと一歩）
- **B**: 50-64%（戦略が必要）
- **C**: 35-49%（要改善）
- **D**: 34%以下（抜本的見直し）

## カスタマイズ

### 質問の追加・変更
`src/data/questions.ts` を編集

### スコアリングロジックの調整
`src/lib/scoring.ts` を編集

### デザインの変更
- `src/index.css` - グローバルスタイル
- `tailwind.config.js` - Tailwindの設定

## デプロイ

### Netlify
```bash
npm run build
# dist/ フォルダをアップロード
```

### Vercel
```bash
npm run build
# Vercel CLIまたはGUI経由でデプロイ
```

## ライセンス

© 2025 CareerScore. All rights reserved.

## お問い合わせ

ご質問・ご要望は以下までご連絡ください：
- Email: [お問い合わせ先]
