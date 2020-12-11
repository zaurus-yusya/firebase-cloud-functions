## firebase cloud functions test

API testing using express

### GET Method
Receive the following json
```
# request
$ curl -X GET <endpoint_url>

# response
{"name": "zaurus"}
```

### POST Method
Return the same data as sent.
```
# request
$ curl -X POST -H "Content-Type: application/json" -d '{"User_name":"Zaurus", "Age":"100"}' <endpoint_url>

# response
{"User_name":"Zaurus", "Age":"100"}
```

## Build
```
# install
$ npm install -g firebase-tools

# deploy
$ firebase deploy --only functions
```