pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "deployment-backend"
        FRONTEND_IMAGE = "deployment-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/yourrepo.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'gradlew.bat clean build -x test'  // Use mvnw.bat if Maven
                    bat "docker build -t %BACKEND_IMAGE% ."
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                    bat 'npm run build'
                    bat "docker build -t %FRONTEND_IMAGE% ."
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                bat "docker-compose down"
                bat "docker-compose up -d --build"
            }
        }

        stage('Verify Containers') {
            steps {
                bat "docker ps"
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed! Check the console logs."
        }
    }
}
