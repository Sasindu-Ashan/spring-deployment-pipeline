pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_PATH = "E:\\springapplication\\deployment"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sasindu-Ashan/spring-deployment-pipeline.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'gradlew clean build -x test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                bat "docker-compose -f ${DOCKER_COMPOSE_PATH}\\docker-compose.yml build"
            }
        }

        stage('Deploy Containers') {
            steps {
                bat "docker-compose -f ${DOCKER_COMPOSE_PATH}\\docker-compose.yml up -d"
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}
