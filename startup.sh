#!/bin/sh

TOMCAT_VERSION=6.0.32
# TOMCAT_VERSION=7.0.11

# Custom launcher for deploy to tomcat
echo "Clear log file"
echo "" > /opt/devel-tool/apache-tomcat-$TOMCAT_VERSION/logs/catalina.out 

echo "Copying *.war file"
cp ui/target/logbook.war /opt/devel-tool/apache-tomcat-$TOMCAT_VERSION/webapps/ 

echo "Starting tomcat, server ready at http://localhost:8080/logbook"
sleep 5
/opt/devel-tool/apache-tomcat-$TOMCAT_VERSION/bin/startup.sh && tail -f /opt/devel-tool/apache-tomcat-$TOMCAT_VERSION/logs/catalina.out
