# 😷 PM - v2 (Mixed Content 해결)

<br />

---

## [🌐 배포](https://thisisyjin.github.io/PMv2/)

---

### 문제 해결

- https로 배포한 페이지에서 http를 요청해서 mixed-content 에러가 발생했었음.
- 임의로 브라우저 설정을 하면 해결할 수 있지만, 보안상의 이유로 권장하지 X.

- 가장 좋은 방법은 백엔드 단에서 API를 요청하는 것이지만, 해당 프로젝트는 백엔드보다는 프론트엔드 실습이므로 비효율적임.
- Postman의 Mock 서버를 이용하여 API 데이터를 JSON 형태로 저장한 후, GET 요청하는 방법을 선택.
- 추후에 백엔드단에서 전달받은 주소로 바꿔주기만 하면 되므로 효율적임.

<br />

## 🦋 Preview

- 지역구 선택시 지도 변경사항
  ![ex1](https://user-images.githubusercontent.com/89119982/170923610-191ae0c7-f9ba-4f02-8a00-bb36cb9f55cc.gif)

- hover시 상세 데이터 (PM10, PM2.5 정보)
  ![ex2](https://user-images.githubusercontent.com/89119982/170923681-4c98a698-ce8a-403e-8a5e-2b8b1e94dace.gif)

- modal (랜덤 텍스트 렌더링)
  ![exm](https://user-images.githubusercontent.com/89119982/170923252-b21587da-e45e-4845-976e-784f1eb3e288.gif)
