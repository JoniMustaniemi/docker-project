# Handshake recruitment exercise

- Clone repository
- Choose free url-valid string to be used as url-identifier and tag for your work. E.g. name, or any random string.
- In given express server, create an api to fetch data from https://europe-north1-eloquent-hold-265914.cloudfunctions.net/recruitment-function/{identifier}/data
- Update react app to fetch the data from the express server and render the results to styled html table (styling can be anything, but needs to be something)
- Review Dockerfile and make sure it works by building and running it.

    ``` docker build -t {tagname} . ```

    ``` docker run -it {tagname} ```
- Push the built container to Gitlab Project's container registry.
    - In order to push the container to registry, you need to create personal access token with scopes: 'api' and 'write_registry'. Then log in with these credentials:
    ``` docker login registry.gitlab.com ```
    - Info about how to build and push the container can be found in here: https://gitlab.com/handshake-recruitment/hs-recruitment-1/container_registry,  'CLI Commands' -section.
- Drop me a email answering following questions:
    - The identifier you used and path to the container tag you uploaded.
    - How do you feel about the task?
    - How hard was it?
    - What security issues you find with the way it is built?
