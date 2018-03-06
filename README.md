# Pivotal Tracker Bot

A GoogleHangout chatbot which is able to post information about actions that are done on the Pivotal Tracker board by a user. It sends a nicely align card with the useful information of the action. (you are able to change the output depending on your preferences).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Tools that you need to run your app on the Google Cloud Platform:

* First you need to Create a Claoud Platform Project [here](https://console.cloud.google.com/cloud-resource-manager?_ga=2.198811951.-1625257462.1517911188) 
* Enable the Cloud Functions API [her](https://console.cloud.google.com/flows/enableapi?apiid=cloudfunctions&redirect=https:%2F%2Fcloud.google.com%2Ffunctions%2Fdocs%2Ftutorials%2Fhttp&_ga=2.88245531.-1625257462.1517911188)
* Update and install **gcloud** components
    ```
    gcloud components update &&
    gcloud componets install beta
    ```
* Run `npm install` in order to install the needed dependecies added to the [package.json](https://github.com/vascoV/Pivotal-Tracker-Bot/blob/master/package.json)    
 (P.S. here is demonstrated how to write, deploy and trigger HTTP Ccloud function)

### Installing

Clone or download the file

* Open the `index.js` file
* Replace the **<HANGOUTS_CHAT_WEBHOOK>** with your hangout chat webhook (shown bellow how to generate webhook for HC)
* Deploy the cloud function to the Google Cloud Platform 
    ```
    gcloud beta functions deploy PivotalBot --trigger-http
    ```
    This will give you a link to your cloud function copy the link and keep it.

### Setting up the Pivotal Tracker webhook

* Open the pivotal tracker project
* Click the **Settings** tab in your project
* Choose **Webhooks** in the sidebar
* Paste the url that you have copied
* Choose API v5 and click **Add**    

### Setting up the Hangout Chat webhook

* Open the room that you wish to receive the bot messages
* Clik on the name that is on the top of the window
* Select **Configure Webhooks**
* Click **Add Webhook** and follow the steps
* Copy the link and replace the `<HANGOUTS_CHAT_WEBHOOK>` in the index.js with the link you copied

## Running 

You have to deploy your cloud function one again in order to take the latest updates
```
gcloud beta functions deploy PivotalBot --trigger-http
```

Now, whenever an action happens in pivo you will receive a nicely alignt card in you hangout chat room :) 


## Authors

* **Vasil Vasilev** - *Initial work* - [V.V.](https://vvasilev.eu)

## License

This project is licensed under the Apache License - see the [LICENSE.md](https://github.com/vascoV/Pivotal-Tracker-Bot/blob/master/LICENSE) file for details

