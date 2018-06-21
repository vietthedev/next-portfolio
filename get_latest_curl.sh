#!/bin/bash

# Install any build dependencies needed for curl
sudo apt-get build-dep curl

# Get latest curl
curl --silent https://api.github.com/repos/curl/curl/releases/latest \
  | grep "browser_download_url" \
  | grep "\.tar\.gz[^\.asc]" \
  | cut --delimiter='"' --fields=4 \
  | wget --quiet --input-file=-

tar -xvf curl-*.tar.gz
cd curl-*

# Build curl
./configure
make
sudo make install

# Resolve any issues of C-level lib
# location caches ("shared library cache")
sudo ldconfig
