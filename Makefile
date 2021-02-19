.ONESHELL:
build:
	docker build . -t prod-site

.ONESHELL:
dist:
	mkdir .asset-cache
	chmod a+x .asset-cache
	mkdir _site
	chmod a+x _site
	#chmod -R 777 ./
	#docker run -u root:root -v ${PWD}:/srv/jekyll -v  ${PWD}/vendor/bundle:/usr/local/bundle --rm --env JEKYLL_ENV=production prod-site
	docker run -u root:root -v ${PWD}:/srv/jekyll --rm --env JEKYLL_ENV=production prod-site jekyll build
#	docker run -u root:root -v  ${PWD}/vendor/bundle:/usr/local/bundle --rm --env JEKYLL_ENV=production prod-site
.ONESHELL:
clean:
	rm -rf .jekyll-cache/
	rm -rf .sass-cache/
	rm -rf .asset-cache/
	rm -rf _site/

all: clean build dist