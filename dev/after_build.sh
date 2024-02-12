#!/bin/bash

# Execute this script in the root directory of the project!

echo "Copying ./dist/index.html to ./dist/404.html"
cp "./dist/index.html" "./dist/404.html"


blog_assets_dir="./dist/assets/blog"

if [ ! -d "$blog_assets_dir" ]; then
    mkdir -p "$blog_assets_dir"
fi

# check if the directory is empty
if [ ! "$(ls -A ./src/pages/blog)" ]; then
    echo "Directory $blog_assets_dir is empty. Skipping copying frontmatter"
    exit 0
fi

for file in ./src/pages/blog/*; do
    basename_file=$(basename "$file")
    target_file="$blog_assets_dir/$basename_file"
    echo "Copying frontmatter of $file to $target_file"
    sed -n "/^---$/,/^---$/p" "$file" > "$target_file"
done
