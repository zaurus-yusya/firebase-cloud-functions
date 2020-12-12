## firebase cloud functions test

API testing using express.

### GET Method
Return the following json without parameters.
```
# request
$ curl -X GET <endpoint_url>

# response
{"hello":"world"}
```

Return the following json with a numeric parameter.
It can be used from 1 to 5.
```
# request
$ curl -X GET <endpoint_url>/1
$ curl -X GET <endpoint_url>/3

# response
{"key":1, "value":"one"}
{"key":3, "value":"three"}
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
# clone
$ git clone https://github.com/zaurus-yusya/firebase-cloud-functions.git

# install
$ npm install -g firebase-tools

# deploy
$ firebase deploy --only functions
```

For more information, click on the following link.
https://firebase.google.com/docs/functions/get-started