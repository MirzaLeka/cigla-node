# Mongoose Testing Routes

### Post SP

**Method: POST**

**Request URI:** `http://localhost:3000/api/sp/`

**Request Body:**

```json
{
  "name": "Mirza"
}
```

**Response:**

```json
{
  "name": "Mirza"
}
```

**Status:** 201 Created

### Get all SP

**Method: GET**

**Request URI:** `http://localhost:3000/api/sp/`

**Response:**

```json
[
  {
    "name": "sp",
    "status": "200"
  }
]
```

**Status:** 200 OK

### Get Single SP

**Method: GET**

**Request URI:** `http://localhost:3000/api/sp/<SP-ID>`

**Response:**

```json
    NULL
```

**Status:** 404 Not Found

### Post EMPTY SP

**Method: POST**

**Request URI:** `http://localhost:3000/api/sp/empty`

**Request Body:**

```json
{
  "name": "Mirza"
}
```

**Response:**

```json
  NULL
```

**Status:** 200 OK

### Update SP

**Method: PATCH**

**Request URI:** `http://localhost:3000/api/sp/<SP-ID>`

**Request Body:**

```json
{}
```

**Response:**

```json
  NULL
```

**Status:** 204 OK

### Delete SP

**Method: DELETE**

**Request URI:** `http://localhost:3000/api/sp/<SP-ID>`

**Response:**

```json
  NULL
```

**Status:** 200 OK
