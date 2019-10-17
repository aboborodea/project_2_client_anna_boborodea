#!/bin/bash

curl "https://glacial-lake-14243.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

# TOKEN="BAhJIiVkNGE4M2ViMjJiMmYxMmM1ODQwZTAzYTJkNDZiMzRmNgY6BkVG--ca6598be7f838818c00f0213bb06bbee8e3b9d47" sh curl-scripts/sign-out.sh
