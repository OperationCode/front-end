#!/usr/bin/env bash

# import util functions
source "${SCRIPTDIR}/../lib/util.sh"

echo "Logging into ECR..."
AWS_LOGIN=$(runCommand "aws ecr get-login --region $AWS_REGION --no-include-email")

if [ "$?" = "0" ]; then
  eval $AWS_LOGIN || exit $?
  echo "Building Docker image..."
  runCommand "docker build -t $IMAGE_NAME -f docker/Dockerfile ." || exit $?
  echo "Pushing image $IMAGE_NAME:$TRAVIS_BRANCH"
  runCommand "docker tag $IMAGE_NAME:latest $REMOTE_IMAGE_URL:$TRAVIS_BRANCH" || exit $?
  runCommand "docker push $REMOTE_IMAGE_URL:$TRAVIS_BRANCH" || exit $?
  echo "Successfully built and pushed $REMOTE_IMAGE_URL:$TRAVIS_BRANCH"
else
  echo "Failed to log in to AWS, exiting"
  exit 1
fi