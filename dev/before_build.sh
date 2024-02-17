#!/bin/bash

# Execute this script in the root directory of the project!

if [ -d "./dist" ]; then
    echo "Removing ./dist/ contents before building"
    rm -r ./dist/* 2> /dev/null
    exit 0
fi
