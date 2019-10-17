#!/bin/bash

curl "https://glacial-lake-14243.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo

# EMAIL=ab@ab PASSWORD=ab PASSWORD=ab sh curl-scripts/sign-up.sh
