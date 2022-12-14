DOCKER_COMPOSE := docker-compose
DOCKER_COMPOSE_YML := --file docker-compose.yml

RUN := $(DOCKER_COMPOSE) \
		$(DOCKER_COMPOSE_YML)

.PHONY: start
start:
	$(RUN) up --build --detach

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) down

