---
id: import-from-docker-hub
title: Import From Docker Hub
sidebar_label: Import From Docker Hub
slug: /compute/import-from-docker-hub
---

## Import from DockerHub 

 Follow the following steps to deploy your instance to Spheron 

1. The first step is to pick a container 
		○ Create a new instance 
		○ Add name and the public repository from dockerhub
		○ Add Tag (Optional) ~ It can be named as per the version V1, V2 

<img src={require('@site/static/img/pickacontainer.png').default} />

2. Select Instance 

Please choose an instance plan according to your needs, and click on view more plans to see more plans as per your need. 

<img src={require('@site/static/img/viewplans.png').default} />


3. Additional Configuration 
        ○ Add new port mapping 
		○ Add name envoirmnet variable 
		○ Advaced Configuration 
         - Add new command
         - Add new argument
        ○ Health Checkup 
         - Health Chceck Path
         - Add health check port 

<img src={require('@site/static/img/addconfig.png').default} />

4. Cost Notification 

You will get a cost notification for when you click on deploy now. 

<img src={require('@site/static/img/aktcost.png').default} />

5. The instance is deployed, it will reflect in progress and then deployed 

<img src={require('@site/static/img/Inprogresscompute.png').default} />

<img src={require('@site/static/img/deployedcompute.png').default} />

:::note

Some **Creating an instance will immediately debit 5 AKT from your wallet. So you
must have 5 AKT and the amount needed to run the instance for at least
one day available.**(#).

:::