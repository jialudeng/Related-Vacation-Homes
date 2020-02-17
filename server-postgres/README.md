## CRUD  API Routes 

GET /api/listings/:id -get recommendations for specified listing
```js
  request.body = null
  response = [{
  id int,
  pictures: [{url: string}]
  type string,
  beds int,
  title string,
  price int,
  score int,
  reviews int,
  }]
```

POST /api/listings -insert new listing
```js
  request.body = {
  pictures: [{url: string}]
  type string,
  beds int,
  title string,
  price int,
  }
  response = status code
```


DELETE /api/listings/:id -delete recommendations at specified listing
```js
  request.body = null
  response = status code
```

PATCH /api/listings:id -update a specific listing
```js
  request.body = {
    (property): (value)
  }
  response = status code
```