# Web Service - Sistem Manajemen Pemesanan Kafe

Berikut adalah tata cara menggunakan web service. Web service ini sudah dalam tahap deployment sehingga dapat dicoba menggunakan tools seperti Postman API atau tools lain, atau curl melalui CMD.

Link Deployment : https://server-reksti-production.up.railway.app



## API Reference

#### Sign Up

```http
  POST /signup
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username yang ingin diregistrasi |
| `password` | `string` | **Required**. Password dari username |
| `role` | `string` | **Required**. Tipe pengguna, bisa customer ataupun cashier |

#### Sign In

```http
  POST /signin
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username yang sudah diregistrasi |
| `password` | `string` | **Required**. Password dari username |

#### Create Produk

```http
  POST /api/v1/product
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Nama dari produk |
| `price` | `number` | **Required**. Harga dari produk |
| `type` | `string` | **Required**. Tipe produk, Coffee atau Noncoffee |
| `stock` | `string` | **Required**. Stok produk |

#### Get All Produk
```http
  GET /api/v1/product
```
##### Response :
```json
[
    {
        "name": "Kopi Almond",
        "price": 10000,
        "type": "Coffee",
        "stock": 10,
        "createdAt": 1716743843393,
        "updatedAt": 1716743843393
    },
    {
        "name": "Kopi Susu",
        "price": 10000,
        "type": "Coffee",
        "stock": 11,
        "createdAt": 1716743379927,
        "updatedAt": 1716743379927
    }
]
```

#### Get Produk
```http
  GET /api/v1/product/:id
```

| Request Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id dari produk |

##### Response with id = pyqTj_ouXu :
```json
{
    "name": "Kopi Susu",
    "price": 10000,
    "type": "Coffee",
    "stock": 11,
    "createdAt": 1716743379927,
    "updatedAt": 1716743379927
}
```

#### Update Produk
```http
  PUT /api/v1/product/:id
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Nama dari produk |
| `price` | `number` | Harga dari produk |
| `type` | `string` | Tipe produk, Coffee atau Noncoffee |
| `stock` | `string` | Stok produk |

#### Delete Produk
```http
  DELETE /api/v1/product/:id
```

#### Create Transaksi

```http
  POST /api/v1/transaction
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `items` | `list of string` | **Required**. List produk |
| `price` | `number` | **Required**. Biaya dari transaksi |
| `status` | `string` | **Required**. Status pembuatan produk |
| `customerId` | `string` | **Required**. ID Customer yang membuat pesanan |

#### Get All Transaksi
```http
  GET /api/v1/transaction
```
##### Response :
```json
[
    {
        "createdAt": 1717588084457,
        "price": 20000,
        "status": "dibuat",
        "customerId": "3dTdZhI1uM",
        "items": [
            "pyqTj_ouXu",
            "I74ZFP-Cao"
        ],
        "updatedAt": 1717588084457
    }
]
```

#### Get Produk
```http
  GET /api/v1/transaction/:id
```

| Request Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id dari transaksi |

##### Response with id = sCpORHR-77 :
```json
{
    "createdAt": 1717588084457,
    "price": 20000,
    "status": "dibuat",
    "customerId": "3dTdZhI1uM",
    "items": [
        "pyqTj_ouXu",
        "I74ZFP-Cao"
    ],
    "updatedAt": 1717588084457
}
```

#### Update Transaksi
```http
  PUT /api/v1/transaction/:id
```

| Request Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `items` | `list of string` | List produk |
| `price` | `number` | Biaya dari transaksi |
| `status` | `string` | Status pembuatan produk |
| `customerId` | `string` | ID Customer yang membuat pesanan |

#### Delete Transaksi
```http
  DELETE /api/v1/transaction/:id
```
## Acknowledgements

 - [Dokumentasi Penggunaan Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9as)


