#!/bin/bash

set -euo pipefail
#set -x # Set for debugging, will print each command before executing

echo "SSH: Connecting to host for deployment of dev environment"

# Some vars required in the script
BASE_PATH="/var/www/shop-demo.dadventures.com"
REPOS=( "user-activity-log" )
DEPLOY_BRANCH="master"

# Pull code from repository
for repo in "${REPOS[@]}"
do
    echo "Pulling in the latest changes from repository ${repo}"
    ( cd "${BASE_PATH}/${repo}" && git fetch --all --prune && git reset --hard origin/${DEPLOY_BRANCH} && git checkout origin/${DEPLOY_BRANCH} )

    cd "${BASE_PATH}/${repo}/src"

    ls -al
    echo "Copy .env"
    php -r "file_exists('.env') || copy('.env.dev', '.env');"

    echo "Generate key"
    php artisan key:generate

    echo "Directory Permissions"
    chmod -R 777 storage bootstrap/cache
    chmod a+rwx public -R

    echo "Install dependencies"
    #composer install
    composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist
    #composer dump-autoload

    npm install
    echo "Build assets"
    npm run prod

    echo "Migrate database"
    php artisan migrate

    echo "Clear cache"
    php artisan config:clear
    php artisan route:cache
    php artisan cache:clear
    php artisan view:clear
    php artisan responsecache:clear



done

echo "Deploy to dev environment completed"
