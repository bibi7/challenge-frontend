# Front-end Developer Coding Test

> Highly inspired by [Wiredcraft/test-frontend](https://github.com/Wiredcraft/test-frontend).

Make sure you read **all** of this document carefully, and follow the guidelines in it.

## Context

Use HTML, CSS, and JavaScript to implement the following mockup.

![frontend-challenge-mockup](https://r.kezaihui.com/default/challenge-mockup.jpg)

[Mockup source Sketch file](https://r.kezaihui.com/sketch/challenge-fe.sketch)

## Requirements

### Page Structure

```
Header(Navigation)

Main
  - Search Card
    - Search Field (date range picker)
  - Overall Card
    - Card Header
    - Collapsable Row (商户名称 -> 支付方式)
  - Detail Table
    - Table Header
    - Table Body
      - Table Row
        - Collapsable Row (商户名称 -> 支付方式)
          - 商户名称 Level (Show by default)
            - 支付方式 Level (Hide by default, expanded by clicking 商户名称 level)
```

### Functionality

* Static page header (navigation bar), no extra features needed.
* The search field needs to be able to search results by `交易日期` field in table.
* The table is nested, and grouped by `商户名称`.

### Tech stack

- Use **React**/**Vue**/**Angular**.
- No futher limits, use any library you want.


### install npm

``` bash
# install dependencies
npm install

```

### how to run the code?
```
#first
   cd chanllenge-frontend

#then 
   npm run dev


#and then you can visit in localhost:8080
```
