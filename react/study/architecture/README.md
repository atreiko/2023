# Feature sliced design

`https://feature-sliced.design/docs/reference/units/layers` 
![Architecture](https://feature-sliced.design/assets/images/layers_flow-88496fd4047ede3ddbdbd73d4a46ddae.png) 

1. Слой
2. Слайс (модуль)
3. Сегмент

## Слой
Иерархия  

shared - UI, который используется в entities  
entities - Композиции UI компонентов, кусочки features: товар, заказ, корзина, пользователь   
features - Модули, которые несут бизнес ценность: форма отправки, фильтрация, авторизация, подписка.. Содержит в себе shared и entities  
widgets - Header/Navbar, Sidebar, Footer, PostCard(с лайками, комментариями. Может в себе содержать features  
pages - Cтраницы приложения  
processes - Процессы протекающие над страницами: многоэтапная регистрация  
app - Инициализирующая логика: роуты, провайдеры, глобальные стили, глобальная конфигурация, корневой компонент.  

```
- app  
- processes  
- pages  
- widgets  
- features  
- entities  
- shared  
```

## Слайс (модуль)

Каждый Слой содержит в себе Слайс(модуль)  

```
- entities  
  - User  
  - Article  
  - Product  
  - Order  
  - Comment  
  - Contract  
```

## Сегмент

UI - компоненты  
model - логика: взаимодействие со state, selectors, actions

```
- entities  
  - User  
    - UI  
    - model  
    - lib  
    - config  
    - api  
    - consts  
  - Article
  - Product  
```


### Public API

Из модуоей экспортируется только то, что будет переиспользоваться в index.ts  

```
- registration-form
  - api  
  - components  
  - helpers  
  - store  
  * index.ts
```

----

##### Features
```
- features  
  - lib  
  - model  
    - registration-form  
      - api  
        * fetchDataForRegistration.ts  
        * registrationRequest.ts  
      - components  
        - agreement-checkbox  
        - registration-button  
        - registration-form  
      - constants  
      - helpers  
        * concatUserFormInfoToString.ts  
        * validateForm.ts  
      - store  
        * actions.ts  
        * reducer.ts  
        * selectors.ts  
        * thunks.ts  
      * index.ts  
    - ui
  * index.ts  
- pages  
```

#### Shared
```
- shared  
  - api  
  - assets  
  - config  
    - storybook
  - lib  
    - class-names  
    - context  
    - hooks 
    - store  
    - tests  
    - url  
  - types  
  - ui  
    - app-image  
    - app-link  
    - avatar  
    - button  
    - card  
    - icon  
    - input  
    - loader  
    - modal  
    - overlay  
    - popups  
    - portal  
    - select  
    - skeleton  
```

#### Entities
```
- entities  
  - Article  
  - Comment  
  - Order  
  - Product  
  - User  
    - api  
      - mappers  
        * mapUserDataFromApi.ts  
      * createNewUser.ts  
      * fetchUserData.ts  
      * updateUserData.ts  
    - components  
      - user-avatar
      - user-card  
      - user-info 
        - user-info  
          * UserInfo.module.css  
          * UserInfo.story.tsx  
          * UserInfo.tsx   
    - consts  
    - lib  
      - helpers 
        * getFullname.ts   
      - hooks  
        * useAuthData.ts  
    - model  
      - thunks  
      * defaultState.ts  
      * selectors.ts  
      * slice.ts  
      * types.ts  
  * index.ts  
```
entities/User/index.ts
```ts
export { userAvatar } from './components/userAvatar'
export { userInfo } from './components/userInfo'
export { userCard } from './components/userCard'
export { useAuthData } from './lib/hooks/useAuthData'
```

#### Widgets 

Widgets - полноценные части pages  

```tsx
export const ProductPage = () => {
  return (
    <Layout>
      <ProductInfo />
      <ProductOrder />
      <ProductTable />
      <ProductComments />
    </Layout>
  )
}
```

#### App

```
- app  
  - providers  
    * withRedux.ts  
    * withRouter.ts  
    * withTheme.ts  
  - styles  
    * global.css  
  - types  
    * global.d.ts  
  App.tsx  
```



