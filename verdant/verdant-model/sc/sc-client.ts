function sendGetRequest(url) {
       return fetch(url).then(resp => {
          if (resp.status !== 200) {
              throw new Error("GetLFailed" + resp.status);
          }

          return resp.json();
       });
}

function sendPostRequest(url, data) {
       let opts =  { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } };

       return fetch(url, opts).then(resp => {
            if (resp.status !== 200) {
               throw new Error("PostFailed" + resp.status);
            }

            return resp.json();
       });
}

function sendEvent(topic, message) {
      console.log("SYNC:******************** BEGIN  **********************");
      var url = 'http://127.0.0.1:54001/sc/pubsub/simple/connect?name=spoon';
      var resp = sendGetRequest(url);

      resp.then(data =>{
            var client_id = data.properties.client_id
            url=`http://127.0.0.1:54001/sc/pubsub/simple/send/${client_id}/${topic}`

            resp = sendPostRequest(url, message);
            resp.then(data => {
                 url = `http://127.0.0.1:54001/sc/pubsub/simple/disconnect?client_id=${client_id}`;
                 resp = sendGetRequest(url);
                 resp.then(data =>{
                 });
            });

      });
      console.log("SYNC:******************** END **********************");
}

export function logit(...msg: any[]) {
  console.log("+++++++++++++++++++++++++ BEGIN: ", msg[0], "+++++++++++++++++++++");
  console.log("VERDANT: ", ...msg);

  if (msg[0] == "Commit complete:") {
    var history = null;
    var checkpoint = null;

    if (msg.length > 2) {
       checkpoint = msg[1];
    }

    if (msg.length > 3) {
       history = msg[3];
    }

    if (history && checkpoint) {
       console.log("+++++++++++++++++++++++++ DCOMMIT_BEGIN +++++++++++++++++++++");
       // var version = checkpoint.notebook + 1
       // console.log("COMMIT_CHECKPOINT:", version);
       var notebook = history.notebook; 
       var path = notebook.path;
       var events = [];

       // console.log("DCOMMIT_VERNOTEBOOK:", Array.from(notebook.cells))
       const tempMapping = new Map();

       for (var i = 0; i < notebook.cells.length; ++i) {
          var cell = notebook.cells[i]
          var name = cell.model.name;
 
          if (cell.view && cell.view.model) {
             console.log("VIEW_MODEL_TYPE:", typeof cell.view.model)
             console.log("VIEW_MODEL:", cell.view.model)
             console.log("VIEW_MODEL_EXECUTION_COUNT:", cell.view.model.executionCount)
             var info = JSON.stringify(cell.view.model.toJSON())
             console.log("VIEW_MODEL_AS_STRING:", name, info)
             // console.log("DCOMMIT_MODEL:", name, info)
             var key = name.substring(0, name.lastIndexOf("."));
             var id = cell.view.model.id;
             var state = { id:id, index:i, msg:info}

             tempMapping.set(key, state);
          }
       }

       var modelMapping = notebook.modelMapping;
       // console.log("DCOMMIT_MAPPING_M:", modelMapping)
       // console.log("DCOMMIT_MAPPING_T:", tempMapping)

       for (let entry of tempMapping.entries()) {
          if (!modelMapping.has(entry[0])) {
             // const event = {time:new Date(),nb:path,name:entry[0],action:"added", ...entry[1]}
             const event = {time:new Date().toLocaleString(),nb:path,name:entry[0],action:"added", ...entry[1]}
             events.push(event);
             console.log("DCOMMIT_EVENT_ADDED", event);
          } else {
            var state1 = modelMapping.get(entry[0]);
            var state2 = entry[1];
            

            if (state1.msg != state2.msg) {
                var json_msg1 = JSON.parse(state1.msg)
                var json_msg2 = JSON.parse(state2.msg)

                if (json_msg1.execution_count != json_msg2.execution_count) {
                    const event = {time:new Date(),nb:path,name:entry[0],action:"executed", ...entry[1]}
                    events.push(event);
                    console.log("DCOMMIT_EVENT_EXEXCUTED", event);
                } else {
                    const event = {time:new Date(),nb:path,name:entry[0],action:"edited", ...entry[1]}
                    events.push(event);
                    console.log("DCOMMIT_EVENT_EDIT", event);
                }

            }
          }
       }

       for (let entry of modelMapping.entries()) {
          if (!tempMapping.has(entry[0])) {
             const event = {time:new Date(),nb:path,name:entry[0],action:"deleted", ...entry[1]}
             events.push(event);
             console.log("DCOMMIT_EVENT_DELETED", event);
          }
       }

       notebook.modelMapping = tempMapping;
       events.forEach(function (event) {
          sendEvent('verdant', event)
       });

       console.log("+++++++++++++++++++++++++ DCOMMIT_END +++++++++++++++++++++");
    }
  } 

  console.log("+++++++++++++++++++++++++ END: ", msg[0], "+++++++++++++++++++++");
}
