#!/bin/bash

function print_error() {
    # Define color codes
    local BOLD="\033[1m"
    local RED="\033[0;31m$BOLD" # Error
    local RESET="\033[0m"       # Reset color to default

    # Print the error mesage
    echo -e "${RED}Error:${RESET} $1"
}

# Validate that all paths to files like PNG, JPG, GIF are correctly referenced in sources in src/
# directory.
sources_regex=".*(vue|md)$"
media_extensions="jpg|png|jpeg|gif"
invalid_path_regex="\/dist\/|\.\.\/|public\/"

possibly_invalid_references=$(find ./src -regextype posix-extended -type f -iregex "$sources_regex" | xargs grep -niE "$media_extensions" | grep -niE "$invalid_path_regex")

if [ -z "$possibly_invalid_references" ]; then
    # there are no invalid references
    exit 0
fi

parsing_regex="^[0-9]*:(.*):([0-9]*):.*?((?:\.\.\/|dist\/|public\/).*(?:png|jpg|jpeg|gif)).*$"

print_error "Found invalid references to media files:"
echo "$possibly_invalid_references" | perl -pe "s/$parsing_regex/  In '\1' at line \2: '\3'/g"
echo "Invalid paths will result in invalid behavior in the deployed application!"
echo "Example of valid path: '/assets/<media_file>' (if it's stored in './public/assets')."

exit 1
