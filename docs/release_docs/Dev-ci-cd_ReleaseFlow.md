## Dev-CI-CD

Dev-CI-CD can be use or trigger by pushing code into Develop branch.
![Dev-ci-cd_workflow](https://github.com/REAN-Foundation/reancare-service/blob/feature/flow_documentation/assets/images/dev-ci-cd_workflow.png?raw=true)
![dev](https://github.com/REAN-Foundation/reancare-service/blob/feature/flow_documentation/assets/images/Dev-ci-cd_example.png?raw=true)

### JOBS

#### Deploy-ECS
The Deploy ECS will be performing the following steps

* This job uses 'dev' environment and login to ECR using creds and build a new ECR docker image with image tag using branch name and short SHA of commit for example ``` /sneha-raahi-dev-uat:develop_5e38e33 ```, then this job will create new version of Amazon ECS task definition with new docker image then it will deploy Amazon ECS task definition using Duplo API.
* This job uses [docker/build-push-action](https://github.com/marketplace/actions/build-and-push-docker-images).

### Steps To Trigger Workflow

1. Once the Pull Request has been merge into Develop branch dev-CI-CD workflow will be triggered.