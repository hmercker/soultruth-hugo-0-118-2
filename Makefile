NAME := hugo
IMAGE_NAME := panubo/hugo
TAG := 0.70.0-extended

DOCKER_VOLUMES := -v $(shell pwd):/hugo

.PHONY: shell run build
shell:
	docker run --rm -it --name $(NAME) -p 1313:1313 $(DOCKER_VOLUMES) --entrypoint /bin/sh ${IMAGE_NAME}:${TAG}

run:
	docker run --rm -it --name $(NAME) -p 1313:1313 $(DOCKER_VOLUMES) ${IMAGE_NAME}:${TAG} hugo server --bind 0.0.0.0

build:
	docker run --rm -it --name $(NAME) $(DOCKER_VOLUMES) ${IMAGE_NAME}:${TAG} hugo
