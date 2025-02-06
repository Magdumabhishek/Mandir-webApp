{
	"info": {
		"_postman_id": "6efb0972-866c-477b-bc7e-2763c5462bfe",
		"name": "Temple ",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39559616"
	},
	"item": [
		{
			"name": "getUser",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQwNTJmZDY0Mzg4OTE5YjhmY2Q4OGEiLCJpYXQiOjE3MzI1MzY2Njl9.2AT8RwsamDT9VIdg3kLp1BybBaE6d1tfZNdK4OB_uZw",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/user",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "Register",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": " {\r\n            \"fname\": \"Vijay\",\r\n            \"laname\": \"Dudhal\",\r\n            \"email\": \"vijaydudhal@gmail.com\",\r\n            \"mobNumber\": 1234567890,\r\n            \"password\": \"vijaydudhal@gmail.com@gmail.com\"\r\n        }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/user",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\":\"vijaydudhal@gmail.com\",\r\n    \"password\":\"vijaydudhal@gmail.com@gmail.com\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/user/login",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"user",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "put user",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n     \"fname\": \"John\",\r\n            \"laname\": \"Week\",\r\n            \"email\": \"johnweek@gmail.com\",\r\n            \"mobNumber\": 1234567890,\r\n            \"password\": \"John@123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/user/678de2075f11ee01175864e2",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"user",
						"678de2075f11ee01175864e2"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete user",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/user/66c35d8aca691939a5e80e82",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"user",
						"66c35d8aca691939a5e80e82"
					]
				}
			},
			"response": []
		},
		{
			"name": "get donation",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/donation",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"donation"
					]
				}
			},
			"response": []
		},
		{
			"name": "post donation",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": " {\r\n    \"name\":\"Shubham\",\r\n    \"village\":\"Sangli\",\r\n    \"pinCode\":4164161,\r\n    \"mobNumber\":7086548787,\r\n    \"amount\":60000,\r\n    \"mop\":\"Cash\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/donation",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"donation"
					]
				}
			},
			"response": []
		},
		{
			"name": "put donation",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Aditya\",\r\n            \"village\": \"Kolhapur\",\r\n            \"pinCode\": 416101,\r\n            \"mobNumber\": 7086548787,\r\n            \"amount\": 70000,\r\n            \"mop\": \"Gpay\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/donation/679c345c3da52b3f52fffbc6",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"donation",
						"679c345c3da52b3f52fffbc6"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete Donation",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/donation/679c34363da52b3f52fffbc2",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"donation",
						"679c34363da52b3f52fffbc2"
					]
				}
			},
			"response": []
		},
		{
			"name": "get expense",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/expense",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"expense"
					]
				}
			},
			"response": []
		},
		{
			"name": "post expense",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"expense_name\": \"pooja saman expense\",\r\n            \"desc\": \"flowers\",\r\n            \"amount\": 2000,\r\n            \"userName\": \"678f6cfea3835ec68519975c\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/expense",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"expense"
					]
				}
			},
			"response": []
		},
		{
			"name": "post expense",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"expense_name\": \"pooja saman expense\",\r\n            \"desc\": \"flowers\",\r\n            \"amount\": 2000,\r\n            \"userName\": \"678f6cfea3835ec68519975c\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/expense",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"expense"
					]
				}
			},
			"response": []
		},
		{
			"name": "put expense",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"expense_name\": \"jjjjjjjjjjjjjjjjjjjjjjy\",\r\n            \"desc\": \"Fjkkkkkkkkkkkkkkkk\",\r\n            \"amount\": 2500\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/expense/679c42383da52b3f52fffbd0",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"expense",
						"679c42383da52b3f52fffbd0"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete expense",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/expense/679c42383da52b3f52fffbd0",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"expense",
						"679c42383da52b3f52fffbd0"
					]
				}
			},
			"response": []
		},
		{
			"name": "get Inventry",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/inventry",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"inventry"
					]
				}
			},
			"response": []
		},
		{
			"name": "post inventry",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n     \"item_name\": \"Waati\",\r\n            \"stock\": 100,\r\n            \"stockUsed\": 20,\r\n            \"description\": \"For thursday Mahapooja\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/inventry",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"inventry"
					]
				}
			},
			"response": []
		},
		{
			"name": "put inventry",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n     \"item_name\": \"Waati 123 \",\r\n        \"stock\": 500,\r\n        \"stockUsed\": 40,\r\n        \"description\": \"For thursday Mahapooja\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/inventry/6790bb7e8323e872378faa3c",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"inventry",
						"6790bb7e8323e872378faa3c"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete inventry",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/inventry/6790bb7e8323e872378faa3c?=",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"inventry",
						"6790bb7e8323e872378faa3c"
					],
					"query": [
						{
							"key": null,
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "get leadger",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/leadger",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"leadger"
					]
				}
			},
			"response": []
		},
		{
			"name": "post leadger",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"totAmount\": 67888888888888888888678,\r\n    \"expAmount\": 1050\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/leadger",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"leadger"
					]
				}
			},
			"response": []
		},
		{
			"name": "put leadger",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"totAmount\": 67888888888888888888678,\r\n    \"expAmount\": 1050\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/leadger/679db6af3da52b3f52fffbe1",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"leadger",
						"679db6af3da52b3f52fffbe1"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete ledger",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljMmZiYzA3NWY2ZjRiYjNhOTIwNGQiLCJpYXQiOjE3MzgyODkyODN9.NWRofEPSMUzZ_7q4BzR9-ayrSR6UUYJxmapnnQb2dtM",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/api/leadger/679db6af3da52b3f52fffbe1",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"leadger",
						"679db6af3da52b3f52fffbe1"
					]
				}
			},
			"response": []
		}
	]
}
