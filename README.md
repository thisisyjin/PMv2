# ๐ท PM - v2 (Mixed Content ํด๊ฒฐ)
- ์ง๋๋ฒ [PM ํ๋ก์ ํธ](https://github.com/thisisyjin/PM)์์ ๋ฐ์ํ Mixed Content ๋ฌธ์ ๋ฅผ ํด๊ฒฐํจ.
- [v1 ๋ฐฐํฌ](https://thisisyjin.github.io/PM/)
-> mixed content ๋๋ฌธ์ ์ฌ์ดํธ ์ค์  - ์์ ํ์ง ์์ ์ฝํ์ธ  (ํ์ฉ) ์ค์ ์ ๋ฐ๋ก ํด์ค์ผ ํจ.


## [๐ v2 ๋ฐฐํฌ](https://thisisyjin.github.io/PMv2/)

---

### ๋ฌธ์  ํด๊ฒฐ

- https๋ก ๋ฐฐํฌํ ํ์ด์ง์์ http๋ฅผ ์์ฒญํด์ mixed-content ์๋ฌ๊ฐ ๋ฐ์ํ์์.
- ์์๋ก ๋ธ๋ผ์ฐ์  ์ค์ ์ ํ๋ฉด ํด๊ฒฐํ  ์ ์์ง๋ง, ๋ณด์์์ ์ด์ ๋ก ๊ถ์ฅํ์ง X.

<br>

> ํด๊ฒฐ ๋ฐฉ๋ฒ

1. ๋ฐฐํฌ๋ฅผ http๋ก ํ๊ธฐ.
2. API ์์ฒญ์ http -> https๋ก ์๊ทธ๋ ์ด๋ํ์ฌ ํ๊ธฐ. (metaํ๊ทธ ์ถ๊ฐ)
``` html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
3. ๋ฐฑ์๋ ๋จ์์ API๋ฅผ ์์ฒญ ํ ํ๋ก ํธ์๋ ๋จ์์ ๊ฐ์ ธ์ค๊ธฐ.

- ๊ฐ์ฅ ์ข์ ๋ฐฉ๋ฒ์ ๋ฐฑ์๋ ๋จ์์ API๋ฅผ ์์ฒญํ๋ ๊ฒ์ด์ง๋ง, ํด๋น ํ๋ก์ ํธ๋ ๋ฐฑ์๋๋ณด๋ค๋ ํ๋ก ํธ์๋ ์ค์ต์ด๋ฏ๋ก ์ ์ ์น ์๋ค๊ณ  ์๊ฐํ์์.
- Postman์ **Mock ์๋ฒ**๋ฅผ ์ด์ฉํ์ฌ **API ๋ฐ์ดํฐ๋ฅผ JSON ํํ๋ก ์ ์ฅ**ํ ํ, GET ์์ฒญํ๋ ๋ฐฉ๋ฒ์ ์ ํํจ.
- ์ถํ์ ๋ฐฑ์๋๋จ์์ ์ ๋ฌ๋ฐ์ ์ฃผ์๋ก ๋ฐ๊ฟ์ฃผ๊ธฐ๋ง ํ๋ฉด ๋๋ฏ๋ก ํจ์จ์ ์!


<br />

## ๐ฆ Preview

- ์ง์ญ๊ตฌ ์ ํ์ ์ง๋ ๋ณ๊ฒฝ์ฌํญ


  ![ex1](https://user-images.githubusercontent.com/89119982/170923610-191ae0c7-f9ba-4f02-8a00-bb36cb9f55cc.gif)

- hover์ ์์ธ ๋ฐ์ดํฐ (PM10, PM2.5 ์ ๋ณด)


  ![ex2](https://user-images.githubusercontent.com/89119982/170923681-4c98a698-ce8a-403e-8a5e-2b8b1e94dace.gif)

- modal (๋๋ค ํ์คํธ ๋ ๋๋ง)


  ![exm](https://user-images.githubusercontent.com/89119982/170923252-b21587da-e45e-4845-976e-784f1eb3e288.gif)
