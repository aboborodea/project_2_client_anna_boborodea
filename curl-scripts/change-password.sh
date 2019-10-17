#!/bin/bash

curl "https://glacial-lake-14243.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo

#TOKEN="BAhJIiVkNGE4M2ViMjJiMmYxMmM1ODQwZTAzYTJkNDZiMzRmNgY6BkVG--ca6598be7f838818c00f0213bb06bbee8e3b9d47" OLDPW=ab NEWPW=adb sh curl-scripts/change-password.sh
