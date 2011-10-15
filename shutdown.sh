#!/bin/sh

TOMCAT_VERSION=6.0.32
# TOMCAT_VERSION=7.0.11

# Script to automatic kill / shutdown tomcat
iterate_pid() {
    cut -d " " -f2 pid-tomcat | sort | cut -d " " -f1
}

echo "Find tomcat PID"
# head -n 2 hanya akan mengambil 1 baris pertama saja
ps aux | grep tomcat | awk '{ print $2 }' | head -n 1 > pid-tomcat

echo "Found PID and trying to kill"
for pid in  $(iterate_pid); do 
    echo "kill -9 $pid"
    kill -9 $pid
done

echo "Everything was killed"
echo "check all tomcat instance was killed"
ps aux | grep tomcat

echo "Removing pid-tomcat file"
rm pid-tomcat

echo "Deleting all previous instance"
rm -rf /opt/devel-tool/apache-tomcat-$TOMCAT_VERSION/webapps/logbook* 
