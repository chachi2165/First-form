var messageId = getQueryStringValue('messageId');

if (messageId) {
  messageId = parseInt(messageId, 10);
} else {
  var result = confirm("Sorry pal, you can't edit a message unless it's got an id!");

  // result true means they clicked OK
  if (result === true) {
    window.location.href = '/';
  } else {
    window.location.href = '/';
  }

  // PSST! Hey you! Yeah, you intrepid student!
  // We're sending them back to the index no matter what they choose.
  // In that case, I didn't have to use an if/else block.
  // But, you might want to use a confirm box somewhere else in your code
  // and I thought this might be handy. HINT HINT!
}
function getMessage() {
  // TODO: your solution goes here
    var xhttp= new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4 && xhttp.status == 200) {
     var response = JSON.parse(xhttp.responseText);
     document.getElementById('commentText').value = response.commentText;
     document.getElementById('isImportant').checked = response.isImportant;
   }
  };
    xhttp.open('GET',apiEndpointBase + "/" + messageId, true);
    xhttp.setRequestHeader('Content-Type','application/json');
    xhttp.send();
  return false;
}

function editMessage() {
  // TODO: your solution goes here
  var xhttp= new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4 && xhttp.status == 200) {
    window.location.href = '/index.html';
   }
  };
  var comment = {
      comment: {
      commentText: document.getElementById('commentText').value,
      isImportant: document.getElementById('isImportant').checked
      }
  };
    xhttp.open('PUT',apiEndpointBase + "/" + messageId, true);
    xhttp.setRequestHeader('Content-Type','application/json');
    xhttp.send(JSON.stringify(comment)); 

  return false;
}
getMessage();