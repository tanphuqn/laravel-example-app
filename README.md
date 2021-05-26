## Install

    # build and run docker containers
    $ docker-compose up


## Running Seeders to create dummy products
    # update `Authentication Type` of user `sail`  to `Standard` 
    # `Limit to Hosts Matching` of sail is [% or localhost]
    # change DB_HOST=mysql to #DB_HOST=127.0.0.1
    # run
    php artisan migrate

    php artisan db:seed

## Update Vuejs
npm run dev

## Drop All Tables & Migrate
php artisan migrate:fresh
php artisan migrate:fresh --seed
