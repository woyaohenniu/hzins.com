pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                println "Build"
            }
        }
        stage('Test') {
            steps {
                println "Test"
            }
            script{
                allure([
                    includeProperties: false, jdk: '', results: [[path: 'results']]
                ])
            }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}