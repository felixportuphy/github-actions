# Base image taken from cypress-docker-images
FROM cypress/browsers:node14.17.0-chrome91-ff89

# Create the folder where our project will be stored
RUN mkdir /my-cypress-project
# We make it our working directory
WORKDIR /my-cypress-project
# Lets copy the essential files that we must use to run our scripts
COPY ./package.json .
COPY ./cypress.config.json .
COPY ./cypress ./cypress

# Install the cypress dependencies in the working directory
RUN npm install
# Executable commands the container will use [Exec Form]
ENTRYPOINT ["npx","cypress","run"]
# With CMD in this case,we can specify more parameters to the last entrypoint
CMD [""]