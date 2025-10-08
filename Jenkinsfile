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

        stage('Build Backend (Maven)') {
            steps {
                dir('backend') {
                    // Use mvn (make sure Maven is installed or configure Maven in Jenkins)
                    bat 'mvn -B clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm ci'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                // run from repo root
                bat "docker-compose -f ${DOCKER_COMPOSE_PATH}\\docker-compose.yml build --parallel"
            }
        }

        stage('Deploy (docker-compose)') {
            steps {
                // stop & remove previous containers/volumes to avoid port conflicts
                bat "docker-compose -f ${DOCKER_COMPOSE_PATH}\\docker-compose.yml down --remove-orphans -v"
                bat "docker-compose -f ${DOCKER_COMPOSE_PATH}\\docker-compose.yml up -d --build"
            }
        }

        stage('Verify') {
            steps {
                bat "docker ps"
            }
        }
    }

    post {
        success { echo '✅ Deployment pipeline succeeded.' }
        failure { echo '❌ Pipeline failed — check console output.' }
    }
}
