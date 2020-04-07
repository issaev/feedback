  $(".ms-listlink").on("mouseup", function() {
    alert("Please, remember to give feedback in the pop-up window!"); //reminder

    var myWindow = window.open("", "MsgWindow", "width=320,height=360"); //pop up feedback window
    //var myWindow = window.open("","","width=320,height=360,toolbar=no,menubar=no,resizable=yes");
    var str = $(this).attr("onclick").toString(); //parse filename and item ID 
    var inputhref = $(this).attr("href").toString();
    var filename = decodeURI(inputhref.split('&')[1]);
    filename = filename.split('=')[1];
    var itemid = str.split(',')[16];

    /*
    myWindow.document.write("<p><strong>Please, give feedback for </strong>" + filename + "<br><strong> with Item ID:</strong>" + itemid + "</p>");	
    
    var docid = $(this).closest('td').parent().children('td').eq(1).text();
    myWindow.document.write(docid); //get Doc ID from the first column */


//create form
var Form = document.createElement("form");
myWindow.document.body.appendChild(Form);
//form.setAttribute("action", xxx);
//prepare content
var Title = myWindow.document.createElement("h2");
var TitleText = myWindow.document.createTextNode("Feedback Form");
Title.setAttribute("style", "color:#00a982");
Title.appendChild(TitleText);  

var Label =  myWindow.document.createElement("label");
var LabelText = myWindow.document.createTextNode("Are you satisfied with the following document:");
Label.appendChild(LabelText);

var DocInfo =  myWindow.document.createElement("label");
var DocInfoText = myWindow.document.createTextNode(filename + " with Document ID " + itemid);
DocInfo.appendChild(DocInfoText);

var Brake = myWindow.document.createElement("br");

var InputRadioYes = myWindow.document.createElement("input");
InputRadioYes.setAttribute("type", "radio");
InputRadioYes.setAttribute("id", "yes");
InputRadioYes.setAttribute("name", "satisfied");
InputRadioYes.setAttribute("value", "yes");

var LabelYes =  myWindow.document.createElement("label");
LabelYes.setAttribute("for", "yes");
var LabelYesText = myWindow.document.createTextNode("Yes");
LabelYes.appendChild(LabelYesText);

var InputRadioNo = myWindow.document.createElement("input");
InputRadioNo.setAttribute("type", "radio");
InputRadioNo.setAttribute("id", "no");
InputRadioNo.setAttribute("name", "satisfied");
InputRadioNo.setAttribute("value", "no");

var LabelNo =  myWindow.document.createElement("label");
LabelNo.setAttribute("for", "no");
var LabelNoText = myWindow.document.createTextNode("No");
LabelNo.appendChild(LabelNoText);

var LabelMessage =  myWindow.document.createElement("label");
LabelMessage.setAttribute("for", "message");
var LabelMessageText = myWindow.document.createTextNode("Why not:");
LabelMessage.appendChild(LabelMessageText);

var Text =  myWindow.document.createElement("textarea");
Text.setAttribute("name", "message");
Text.setAttribute("rows", "10");
Text.setAttribute("cols", "31");

var Submit =  myWindow.document.createElement("input");
Submit.setAttribute("type", "submit");
Submit.setAttribute("value", "Submit feedback");

//append content
Form.appendChild(Title);
Form.appendChild(Label);
Form.appendChild(Brake);
Form.appendChild(DocInfo);
Form.appendChild(Brake.cloneNode());
Form.appendChild(InputRadioYes);
Form.appendChild(LabelYes);
Form.appendChild(InputRadioNo);
Form.appendChild(LabelNo);
Form.appendChild(Brake.cloneNode());
Form.appendChild(Brake.cloneNode());
//hidden
Form.appendChild(LabelMessage);
Form.appendChild(Brake.cloneNode());
Form.appendChild(Text);
Form.appendChild(Brake.cloneNode());
Form.appendChild(Brake.cloneNode());
//end hidden
Form.appendChild(Submit);
  });