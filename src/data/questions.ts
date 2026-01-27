import { Question } from '../types';

export const questions: Question[] = [
  // カテゴリ1: 市場価値スコア (7問)
  {
    id: 1,
    category: 'market_value',
    question: '年齢を教えてください',
    options: [
      { text: '20代前半', score: 85 },
      { text: '20代後半', score: 100 },
      { text: '30代前半', score: 90 },
      { text: '30代後半', score: 75 },
      { text: '40代以上', score: 60 },
    ],
  },
  {
    id: 2,
    category: 'market_value',
    question: '現在の職種を教えてください',
    options: [
      { text: '営業・販売', score: 90 },
      { text: '企画・マーケティング', score: 95 },
      { text: 'エンジニア・技術職', score: 100 },
      { text: '事務・管理', score: 70 },
      { text: 'クリエイティブ', score: 85 },
      { text: 'その他', score: 75 },
    ],
  },
  {
    id: 3,
    category: 'market_value',
    question: '社会人としての総経験年数は?',
    options: [
      { text: '1年未満', score: 50 },
      { text: '1-3年', score: 75 },
      { text: '3-5年', score: 100 },
      { text: '5-10年', score: 95 },
      { text: '10年以上', score: 85 },
    ],
  },
  {
    id: 4,
    category: 'market_value',
    question: '現職(または前職)での在籍期間は?',
    options: [
      { text: '6ヶ月未満', score: 40 },
      { text: '6ヶ月-1年', score: 60 },
      { text: '1-3年', score: 100 },
      { text: '3-5年', score: 95 },
      { text: '5年以上', score: 85 },
    ],
  },
  {
    id: 5,
    category: 'market_value',
    question: '転職回数は何回ですか?',
    options: [
      { text: '0回(初転職)', score: 100 },
      { text: '1回', score: 95 },
      { text: '2回', score: 85 },
      { text: '3回', score: 70 },
      { text: '4回以上', score: 50 },
    ],
  },
  {
    id: 6,
    category: 'market_value',
    question: 'マネジメント経験はありますか?',
    options: [
      { text: 'なし', score: 70 },
      { text: '1-2名', score: 85 },
      { text: '3-5名', score: 95 },
      { text: '6-10名', score: 100 },
      { text: '10名以上', score: 100 },
    ],
  },
  {
    id: 7,
    category: 'market_value',
    question: '業界で評価される専門スキル・資格を持っていますか?',
    options: [
      { text: '特になし', score: 60 },
      { text: '一般的な資格あり', score: 80 },
      { text: '専門性の高い資格・スキルあり', score: 95 },
      { text: '希少性の高い専門性あり', score: 100 },
    ],
  },

  // カテゴリ2: 準備度スコア (7問)
  {
    id: 8,
    category: 'preparation',
    question: '職務経歴書の状態は?',
    options: [
      { text: '作成していない', score: 20 },
      { text: '下書き段階', score: 50 },
      { text: '一応完成している', score: 75 },
      { text: '第三者に添削してもらった', score: 90 },
      { text: 'プロに添削してもらった', score: 100 },
    ],
  },
  {
    id: 9,
    category: 'preparation',
    question: 'これまでの実績を数字で説明できますか?',
    options: [
      { text: '全く説明できない', score: 30 },
      { text: 'なんとなく', score: 55 },
      { text: 'ある程度', score: 75 },
      { text: '明確に', score: 90 },
      { text: '具体的なエピソード付きで', score: 100 },
    ],
  },
  {
    id: 10,
    category: 'preparation',
    question: '志望業界・職種は明確ですか?',
    options: [
      { text: '全く決まっていない', score: 20 },
      { text: '漠然とイメージ', score: 50 },
      { text: '2-3に絞れている', score: 80 },
      { text: '1つに絞れている', score: 95 },
      { text: '業界研究も済んでいる', score: 100 },
    ],
  },
  {
    id: 11,
    category: 'preparation',
    question: '希望条件の優先順位は明確ですか?',
    options: [
      { text: '考えていない', score: 20 },
      { text: 'なんとなく', score: 50 },
      { text: 'ある程度', score: 75 },
      { text: 'TOP3が明確', score: 90 },
      { text: '譲れない条件・妥協できる条件が整理済み', score: 100 },
    ],
  },
  {
    id: 12,
    category: 'preparation',
    question: '面接でよく聞かれる質問への回答準備は?',
    options: [
      { text: '全くしていない', score: 20 },
      { text: '少し考えた', score: 50 },
      { text: '一通り準備した', score: 75 },
      { text: '実際に声に出して練習した', score: 90 },
      { text: '模擬面接も受けた', score: 100 },
    ],
  },
  {
    id: 13,
    category: 'preparation',
    question: '現在の転職活動の状況は?',
    options: [
      { text: '情報収集段階', score: 40 },
      { text: '応募準備中', score: 60 },
      { text: '数社応募済み', score: 80 },
      { text: '複数社選考中', score: 95 },
      { text: '内定獲得済み', score: 100 },
    ],
  },
  {
    id: 14,
    category: 'preparation',
    question: '転職エージェントの利用状況は?',
    options: [
      { text: '利用していない', score: 50 },
      { text: '登録だけした', score: 65 },
      { text: '1社と面談済み', score: 80 },
      { text: '複数社と面談済み', score: 90 },
      { text: '定期的に連絡を取り合っている', score: 100 },
    ],
  },

  // カテゴリ3: 活動品質スコア (6問)
  {
    id: 15,
    category: 'activity',
    question: '1週間の応募社数は?(活動中の場合)',
    options: [
      { text: '0社', score: 30 },
      { text: '1-2社', score: 60 },
      { text: '3-5社', score: 85 },
      { text: '6-10社', score: 100 },
      { text: '10社以上', score: 90 },
    ],
  },
  {
    id: 16,
    category: 'activity',
    question: '応募する企業の情報収集の深さは?',
    options: [
      { text: '求人票を読む程度', score: 40 },
      { text: 'HPを見る', score: 65 },
      { text: '口コミサイトも確認', score: 80 },
      { text: 'IR情報や業界動向も調査', score: 95 },
      { text: '社員のSNS・インタビュー記事まで確認', score: 100 },
    ],
  },
  {
    id: 17,
    category: 'activity',
    question: '書類選考の通過率は?(活動中の場合)',
    options: [
      { text: '応募前', score: 60 },
      { text: '0-20%', score: 40 },
      { text: '20-40%', score: 70 },
      { text: '40-60%', score: 90 },
      { text: '60%以上', score: 100 },
    ],
  },
  {
    id: 18,
    category: 'activity',
    question: '面接後の振り返りをしていますか?',
    options: [
      { text: 'していない', score: 40 },
      { text: 'たまに', score: 60 },
      { text: '毎回メモ程度', score: 80 },
      { text: '詳細に記録', score: 95 },
      { text: 'フィードバックをもらって改善', score: 100 },
    ],
  },
  {
    id: 19,
    category: 'activity',
    question: '複数社を並行して進める管理ができていますか?',
    options: [
      { text: '1社ずつ', score: 50 },
      { text: 'なんとなく', score: 65 },
      { text: 'スプレッドシートで管理', score: 85 },
      { text: 'ツールで管理', score: 95 },
      { text: '完璧に管理できている', score: 100 },
    ],
  },
  {
    id: 20,
    category: 'activity',
    question: '企業ごとに志望動機をカスタマイズしていますか?',
    options: [
      { text: 'テンプレ使い回し', score: 40 },
      { text: '少し変更', score: 60 },
      { text: 'ある程度カスタマイズ', score: 80 },
      { text: '企業ごとに作り込む', score: 95 },
      { text: '企業の課題に対する提案レベル', score: 100 },
    ],
  },

  // カテゴリ4: 環境・メンタルスコア (5問)
  {
    id: 21,
    category: 'environment',
    question: '現在の状況は?',
    options: [
      { text: '在職中(忙しい)', score: 70 },
      { text: '在職中(時間に余裕)', score: 95 },
      { text: '退職済み(3ヶ月未満)', score: 100 },
      { text: '退職済み(3-6ヶ月)', score: 85 },
      { text: '退職済み(6ヶ月以上)', score: 60 },
    ],
  },
  {
    id: 22,
    category: 'environment',
    question: '転職活動に使える時間は?(週あたり)',
    options: [
      { text: '2時間未満', score: 50 },
      { text: '2-5時間', score: 70 },
      { text: '5-10時間', score: 85 },
      { text: '10-20時間', score: 95 },
      { text: '20時間以上', score: 100 },
    ],
  },
  {
    id: 23,
    category: 'environment',
    question: '転職の理由は明確ですか?',
    options: [
      { text: 'なんとなく', score: 40 },
      { text: 'ネガティブな理由のみ', score: 60 },
      { text: 'ポジティブな理由もある', score: 80 },
      { text: 'キャリアビジョンが明確', score: 95 },
      { text: '5年後10年後まで見えている', score: 100 },
    ],
  },
  {
    id: 24,
    category: 'environment',
    question: '転職活動でのストレス度は?',
    options: [
      { text: 'かなり高い', score: 50 },
      { text: 'やや高い', score: 65 },
      { text: '普通', score: 80 },
      { text: 'あまり感じない', score: 95 },
      { text: '楽しんでいる', score: 100 },
    ],
  },
  {
    id: 25,
    category: 'environment',
    question: '転職について相談できる人はいますか?',
    options: [
      { text: '誰もいない', score: 50 },
      { text: '家族・友人のみ', score: 70 },
      { text: '同業の知人がいる', score: 85 },
      { text: '転職経験者が複数いる', score: 95 },
      { text: 'プロのアドバイザーがいる', score: 100 },
    ],
  },
];

export const categoryNames = {
  market_value: '市場価値',
  preparation: '準備度',
  activity: '活動品質',
  environment: '環境・メンタル',
};
