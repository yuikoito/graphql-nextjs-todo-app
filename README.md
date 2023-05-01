## 初めに
こちらのコードは春のJavaScript祭りOnline 2023というイベントで登壇したときに利用したものです。
バックエンドのコードに関してはAWS Lambda上に直接書いてあり、こちらにはないのでご注意を。

https://www.youtube.com/live/T_o6fJ_-39o?feature=share&t=3765


## 環境構築方法
以下の環境変数を`.env`に入れてください。

```bash
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_GRAPHQL_ENDPOINT=
```

そしてあとは起動します。

```bash
yarn install
yarn dev
```

## AppSyncを利用したAPIの作成方法

以下の記事で公開していますので、よければ参考にしてください。

https://zenn.dev/yui/articles/731095fd19fa66
