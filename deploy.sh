#!/bin/bash

rsync -av --delete --exclude='node_modules/' /Users/me/path/dist/ ssh-alias:/var/www/project/staging/api
