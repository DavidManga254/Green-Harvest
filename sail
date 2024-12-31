#!/bin/bash

# Check if the sail file exists, otherwise run vendor/bin/sail
if [ -f ./vendor/bin/sail ]; then
  ./vendor/bin/sail "$@"
else
  echo "Sail not found. Please run 'composer install' to install the dependencies."
  exit 1
fi
