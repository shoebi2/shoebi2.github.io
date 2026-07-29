# 編集ガイド

## GitHub上で文章を直接修正する

1. GitHubで変更したいファイルを開きます。
2. 右上の鉛筆アイコン（`Edit this file`）を選びます。
3. 文章を修正します。
4. `Commit changes`を選びます。

`main`ブランチへの反映後、GitHub Pagesが自動的に再公開されます。

主な編集先は次のとおりです。

- `app/page.tsx`：トップページ
- `app/biography/page.tsx`：Biography
- `app/publications/page.tsx`：Publications
- `app/contact/page.tsx`：Contact
- `app/globals.css`：色、余白、文字サイズ、スマートフォン表示

## Publicationsを追加する

`app/publications/page.tsx`の該当する一覧に、既存項目と同じ形式で
`year`、`authors`、`title`、`venue`、必要に応じて`href`を追加します。
英語論文と日本語論文の番号は、ページ生成時に自動で通し番号になります。

## トップページの写真を調整する

画像自体を加工し直さなくても、表示サイズや位置を変更できます。

`app/globals.css`の冒頭にある次の値を編集します。

```css
--portrait-scale: 0.76;
--portrait-shift-x: 0%;
--portrait-shift-y: 0%;
--portrait-crop-bottom: 0%;
--portrait-frame-size: 460px;
```

- `--portrait-scale`：人物の大きさ。小さくする場合は`0.76`、大きくする場合は`0.88`などに変更します。
- `--portrait-shift-x`：左右位置。負の値で左、正の値で右へ移動します。
- `--portrait-shift-y`：上下位置。負の値で上、正の値で下へ移動します。
- `--portrait-crop-bottom`：画像下部を切り取る量です。
- `--portrait-frame-size`：デスクトップ表示における画像の最大幅です。

背景色も同じファイルの冒頭で設定されています。

```css
--black: #0b2525;
```

氏名と所属の文章は`app/page.tsx`にあります。
