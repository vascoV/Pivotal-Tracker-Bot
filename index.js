var request = require('request');

exports.PivotalBot = (req, res) => {
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required
    res.status(400).send('No message defined!');
  } else {
    
    /**
     * Parsing the JSON data from  
     * pivotal tracker 
     */
    var message = req.body.message;
    var project_name = req.body.project.name;
    var status = req.body.highlight;
    var assignee = req.body.performed_by.name;
    var story_name = req.body.primary_resources[0].name;
    var url = req.body.primary_resources[0].url;

    /** 
     * Init the google hangout chat webhook
     * used to post message on room where the 
     * webhook were created
    */
    var webhook = '<HANGOUTS_CHAT_WEBHOOK>';
    
    var payload = createMessage(message, project_name, status, assignee, story_name, url);

    /**
     * Post request to post the message
     * on the chat room
     */
    var options = {
      method: 'POST',
      uri: webhook,
      json: payload,
    };

    request(options, function(err, presp, pbody) {
      res.status(200).send(pbody);
    })
  }
};

/** 
 * Creating a card with multiple rows
 * displaying the Pivo data triggered
 * from the pivotal webhook. 
 */
function createMessage(message, project_name, status, assignee, story_name, story_url){
    
  return {
    "cards": [
      {
        "header": {
          "title": story_name,
          "subtitle": project_name,
          "imageUrl": "https://zapier.cachefly.net/storage/photos/65ed89f353fd80df3a785423393080da.png"
        },
        "sections": [
          {
            "widgets": [
              {
                "keyValue": {
                  "topLabel": "Status",
                  "content": status
                }
              },
              {
                "keyValue": {
                  "topLabel": "Assignee",
                  "content": assignee
                }
              }
            ]
          },
          {
            "header": "Description",
            "widgets": [
              {
                "textParagraph": {
                  "text": message
                }
              }
            ]
          },
          {
            "widgets": [
              {
                "buttons": [
                  {
                    "textButton": {
                      "text": "VIEW STORY",
                      "onClick": {
                        "openLink": {
                          "url": story_url
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}