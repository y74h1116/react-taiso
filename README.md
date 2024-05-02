# react-taiso (React 朝の体操)

## 概要
- React の基本的なことをトレーニングするためのプロジェクト 
- 朝の体操のように一定の期間繰り返したら、そらで書けるくらい習熟・定着するのでは、と思って体操 (taisou) というプロジェクト名にしてみた。
## 利用方法
- 2024年5月2日、以下を Mac と WSL で確認しました
- Docker環境は入っている想定です
- Github からダウンロードしたら、、
  ```
  # ダウンロードして配置したディレクトリへ
  cd react-taiso

  # Docker ビルド(一回ビルドしたら削除するまでは、再実行不要)
  docker compose build
  
  # 必要なものをインストール(一回実行したら変更などなければ、再実行不要)
  docker-compose run --rm react_taiso npm install
  
  # コンテナを起動
  docker compose up

  ・Webブラウザで http://localhost:5173 にアクセスして起動確認
  ```
- あとは、下記「React 朝の体操メニュー」を繰り返す。
## React 朝の体操メニュー
- 一応、実装例を src_sample_answer ディレクトリに入れてあります。また、ビルドしたものを [GitHub Pages](https://y74h1116.github.io/react-taiso/index.html) に置いてます。      
- ※それぞれ説明を書いてはいますが、2〜3回やったら、あとは実装順番をたどるだけで、細かい部分は説明を見るのではなく手で覚えるくらいの想定です。  
- ※コンポーネント名には Hello001 のように番号をつけているのは、2 回目は Hello002 のようにすると、最初に打ち込んだものを消さずに繰り返しできますよ。  
1. 関数コンポーネント Hello001 を新規作成
    - [実装例](https://github.com/y74h1116/react-taiso/commit/d61f584864a2e947baa893103748d89a9ded90fc)
    - ファイル名は Hello001.tsx (src ディレクトリの下に追加)
    - Hello001 では`<p>hello 001</p>`を返す
2. Hello001 を App の jsx の一番上の方に追加し、ブラウザで表示を確認する
    - [実装例](https://github.com/y74h1116/react-taiso/commit/a535164bc0f5b254be719f11ab34be702d17f70f)
3. Hello001 に枠をつける（div タグを追加して border を指定）
    - [実装例](https://github.com/y74h1116/react-taiso/commit/09d9208c93a3f9bf38ba39a005b42f29496bb291)
    - ※このあと、div の中にコンポーネントを追加していきます
4. inputタグ (テキスト) で、useState を使ってみる
    - [実装例](https://github.com/y74h1116/react-taiso/commit/89eef3ee470656a432634abfd5556ea7dcd5ed7b)
    - ファイル Hello001Text.tsx を追加する
    - 関数コンポーネント Hello001Text を定義
    - Hello001Text の jsx に`<input type="text"/>`を含める
    - useState を呼び出す
    - input タグの value 属性に state を指定する
    - onChange のハンドラ関数を定義して、onChange に指定する（処理内容は state を更新する）
      - ※onChange の引数の型は一旦、以下のように実装すると、VSCode で (e) のところにカーソルをあてると型の情報が表示されると思うので、コピペしてます
        ```
          export const Hello001Text:FC = () => {
          	return (
                  <>
                  <input type="text" onChange={(e) => {}}/>
                  </>
              );
          };
        ```
    - Hello001Text を Hello001 の div タグの中に配置
5. useState を利用して、useReducer も使ってみる
    - [実装例](https://github.com/y74h1116/react-taiso/commit/900204b0f5d9d282d1f005436cbfe84e87311ce3)
    - Hello001Text の中に、リデューサ関数を定義する。
    - useReducerを呼び出します。(作成したリデューサ関数を渡す)
    - リデューサ関数で、state の値を追加していきます (テキストの更新履歴のようになる)
    - テキストボックスの onChange のハンドラ関数で useReducer の dispatch を呼び出します
    - dispatch には、テキストボックスに入力された値を渡します。
    - input タグの下に reducer の state を表示する (p タブなどで表示)
6. Recoil を使う準備
    - [実装例](https://github.com/y74h1116/react-taiso/commit/8f9e63543d5ab1b2da8ea03f52f44a4abc458809)
    - RecoilRoot タグを Hello001 の jsx の Hello001Text の下に追加
7. Recoil の Atom を使う
    - [実装例](https://github.com/y74h1116/react-taiso/commit/9c2f4d1edeeb8b3de1bd22c396d7af3169004b37)
    - ファイル Hello001Atom.ts を新規追加 (jsx は使わないので拡張子は ts)
    - atom 関数で生成します。
         - キーは適当にファイル名と一致させておく。
        - 初期値は `'a'` としておきます
8. atom の値を表示する関数コンポーネントを新規追加 
    - [実装例](https://github.com/y74h1116/react-taiso/commit/7cdb829b6c310ca6f3755cd7c02134a8bdd66846)
    - ファイル名は、Hello001Show.tsx
    - Recoil から値を取得して、jsx に含めます。
    - Hello001Show を RecoilRoot の中に配置します。
9. ボタンを押下したら、atom の値を更新する
    - [実装例](https://github.com/y74h1116/react-taiso/commit/93df43bfa89a29a6f60b9f492bdb4f454165ecce)
    - ファイル Hello001Button.tsx を追加
    - Hello001Button の jsx には button タグを入れる
    - ボタンを押下したら、atom を更新する(`',a'` を追加するなど)
    - Hello001Button を RecoilRoot の中に配置します。
    - 実装できたら、Web ブラウザで表示してボタンを押下して文字が増えていくことを確認しましょう。
10. useEffect を利用してタイトル更新する
    - [実装例](https://github.com/y74h1116/react-taiso/commit/9c75fd3bdab32ed3685d9fb940c5582da8710062)
    - Hello001Button の中で useEffect を使って、atom の文字数をタイトルに設定してみます
11. 繰り返すときは、Hello002 のように番号を変えるといいと思います。
