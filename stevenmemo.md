shopify theme dev --store=dev-gridstart.myshopify.com --theme=JAPANBITE_DEV_0728
// Shopify CLIコマンド：指定されたストア（dev-gridstart.myshopify.com）で特定のテーマ（JAPANBITE_DEV_0728）の開発サーバーを起動し、ローカル開発環境を構築する

[1] https://dev-gridstart.myshopify.com/?preview_theme_id=180160889117
// 本番ストアURL：クエリパラメータ「preview_theme_id=180160889117」を使用して開発中のテーマをプレビューモードで表示するリンク

[2] https://dev-gridstart.myshopify.com/admin/themes/180160889117/editor?h
r=9292
// Shopify管理画面のテーマエディターURL：テーマID「180160889117」の直接編集画面にアクセスし、パラメータ「hr=9292」でローカル開発サーバーと連携

[3] http://127.0.0.1:9292/gift_cards/[store_id]/preview
// ローカル開発サーバーのギフトカードプレビューエンドポイント：ポート9292で動作し、[store_id]部分は実際のストアIDに置換してギフトカードの表示をテスト

http://127.0.0.1:9292
// ローカル開発サーバーのベースURL：開発中のShopifyテーマをローカル環境（127.0.0.1）のポート9292で確認するためのルートアドレス


shopify theme dev --store=dev-gridstart.myshopify.com --theme=JAPANBITE_DEV_0728
// 同一のShopify開発コマンドの再記載：テーマ開発ワークフロー開始用のコマンドライン実行文