# Url 

Below are the urls developed so far

## Login Page api

```bash
http://localhost:8000/seller/login
```
body to be sent:

```bash
{"email":"abcd@pqr.com","password":"123456"}

in response we will also get a jwt
```


## Signup page api:
```bash
http://localhost:8000/seller/signup
```
body to be sent:

```bash
{
    "fullName":"rupam",
    "email":"abcd@pqr.com",
    "password":"123456",
    "confirmPassword":"123456",
    "phoneNo":"1234567890",
    "houseName":"abc",
    "address":"abc road",
    "pinCode":"751002",
    "city":"bbs",
    "state":"od"
}

in response we will also get a jwt
```