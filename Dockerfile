#FROM jekyll/builder:3
##FROM binfalse/jekyll
#
#ENV JEKYLL_ENV=production
#
#WORKDIR /srv/jekyll
#COPY . .
#
##RUN apk add --update --no-cache --virtual build-deps build-base python git bash && \
##    gem install libv8 -v 3.16.14.16 && \
##    apk del build-deps
#
#RUN gem install bundler:1.16.2 && \
#     bundle install
#
#
#CMD ["build", "-d", "public"]
#
#ENTRYPOINT [ "jekyll"]
##ENTRYPOINT ["bundle", "exec", "jekyll", "build", "-d", "public"]
# still in development
FROM jekyll/jekyll:3.8
#LABEL maintainer "hearx developers"
ENV JEKYLL_ENV=production
EXPOSE 4000
WORKDIR /srv/jekyll
VOLUME  ['$PWD:/srv/jekyll', '$PWD/vendor/bundle:/usr/local/bundle']
# command to kill docker, when running and cant be { command C }'ed
STOPSIGNAL SIGKILL