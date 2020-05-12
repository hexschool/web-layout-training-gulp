# 網頁切版直播班 Gulp 範例

## 指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages

## 說明

該專案已預設引入 Boostrap4、popper.js 以及 jQuery 因此可以直接在底下直接使用，此外已經在 layout.ejs 載入 Font Awesome CDN。

若有需要調整相關路徑參數可在 envOptions.js 中調整，但建議不要隨意調整導致 Gulp 無法正常運行。

假使對於 Gulp 不熟悉會建議不要任意調整 gulpfile.js 底下的資料任一檔案，避免出現無法正常運作之問題。

## 支援的監聽

目前支援 HTML、ejs、JavaScript、Images、SCSS 監聽並自動重新刷新。

圖片新增時也會自動刷新。

## 部署 gh-pagse 流程說明

部署前請務必先將該 Gulp 原始碼上傳到 GitHub Repositories 也就是初始化 GitHub，因此通常第一步驟會輸入以下指令

```cmd
git add .
git commit -m 'first commit'
git remote add origin [GitHub Repositories Url]
git push -u origin master // 僅限第一次輸入，往後只需要輸入 git push
```

當將 Gulp 初次部署之後就可以輸入 `gulp build` 進入生產模式，當生產完畢之後最後只需要輸入 `gulp deploy` 即可完成 GitHub Pages 部署。
