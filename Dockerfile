# This Dockerfile is only for static builds generated via pull requests
FROM mhart/alpine-node:8.12.0

# We store all our files in /usr/src to perform the build
WORKDIR /usr/src

# We first add only the files required for installing deps
# If package.json or yarn.lock don't change, no need to re-install later
COPY package.json yarn.lock ./

# We install our deps
RUN yarn --silent --production --freeze-lockfile

# We copy all source files
COPY . .

EXPOSE 8080
# We run the build and expose as /public
RUN yarn build
RUN yarn export -o /public