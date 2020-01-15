# README

## Requeriments

* Docker >= 17
* Currency Data Feed API Token

## Setup

	docker-compose build
	docker-compose run --rm app bundle exec rails db:create
	docker-compose run --rm app bundle exec rails db:migrate
	docker-compose up

## Screenshot

![Single Page](preview.png)