## 前提条件

1. [Node.js](https://nodejs.org/en/) (v18)をインストールする
2. [yarn](https://yarnpkg.com/getting-started/install)をインストールする

## はじめに

1. `git clone https://github.com/du-nt/new-react-native`
2. `cd new-react-native`
3. 下記ポートフォワーディングする

- DEV

  1. ルート ディレクトリに[.env.local](google.com)ファイルを作成する

     ```bash
     # 依存関係をインストールする
     $ yarn install

     # Rename app name
     $ npx react-native-rename "new_name"

     # Pod install
     $ cd ios && pod install && cd ..

     # コマンド実行
     $ yarn start
     ```

  2. [DEV のアカウントと ID](google.com)でログインする

- PRO

  1. ルート ディレクトリに[.env.production.local](google.com)ファイルを作成する

     ```bash
     # ソースコードをビルドする
     $ yarn build

     # コマンド実行
     $ serve -s build
     ```

  2. [PRO のアカウントと ID](google.com)でログインする

## Git フロー

1. develop から開発ブランチを切ります

- 通常タスク: `git branch feature/<タスク ID>/ブランチ名`
- バグ修正タスク: `git branch bugfix/<バグ ID>/ブランチ名`

2. ESLint でコードを修正
3. 実装できたら commit/push
4. PR 作成(develop に向けて下さい)
5. reviewer に review 依頼(テストケース作成を依頼したときはテストケースのレビューも粂に投げて下さい)

### コミットのメッセージ

`[タスク ID]: <メッセージ>`

```
fix：バグ修正
add：新しい機能の追加
update：機能の更新
change：仕様変更
clean：整理（リファクタリングなど）
```

### PR

`[タスク ID] <プルリクエストのタイトル>`

## ディレクトリ構造

### 概要

```
├── assets
├── src
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   └── templates
│   ├── screens
│   ├── navigators
│   ├── constants
│   ├── hooks
│   ├── locales
│   ├── services
│   ├── store
│   ├── types
│   └── utils
├── package.json
└── README.md
```

### 詳細

- **assets** - 公開ファイル(画像、ファビコンなど)が含まれます
- **src** - すべてのコードが含まれています
  - **components** - コンポーネント
  - **screens** - ページ
  - **navigators** - ルート
  - **constants** - 定数の定義
  - **hooks** - カスタムフック
  - **locales** - 多言語翻訳
  - **services** - API 連携サービス
  - **store** - グローバルストア
  - **types** - Typescript のタイプ及び列挙の定義
  - **utils** - ヘルパー関数(ソート、フィルタリングなど)
- **package.json** - プロジェクトの依存関係が含まれています

## ライセンス
