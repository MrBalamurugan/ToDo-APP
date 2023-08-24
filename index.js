// To Create Close button and to use append to add new Close symbol to each list
var dataList = document.getElementsByTagName("LI");  //Tag based 

for (let i = 1; i < dataList.length; i++) {
  let span = document.createElement("SPAN");  //to created span new element when user add it into list
  let txt = document.createTextNode("\u00D7"); //\u00D7 -> Multipication UniCode Added into List
  span.className = "close";  //Create Class name for Unicode design and added to float right side
  span.appendChild(txt);  //use this method to reflect to DOM and Add to DataList
  dataList[i].appendChild(span);
}

//---------------------------------------------------------------------

// Remove or Hide item when click close symbol
var close = document.getElementsByClassName("close"); //class based

for (var i = 1; i < close.length; i++) {
  close[i].onclick = function() {  //To create Onclick fuction for remove the Current Item from each list
    var div = this.parentElement;  //
    div.style.display = "none";  //Use display to hide the current list based on onclick event
  }
}

//----------------------------------------------------------------------

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');   //querybased
list.addEventListener('click', function(e) {  //To create func for check or not check in list.
  if (e.target.tagName === 'LI' ) {   
      e.target.classList.toggle('checked');   //To call toggle methid from Classlist to check user click.   
  }
}, false);

//---------------------------------------------------------------------

// Create a new list item when clicking on the "Add" button
function newElement() {                 
  var li = document.createElement("li");        
  var inputValue = document.getElementById("mInput").value;   
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("We are not allow empty value!");       
  } else {
    document.getElementById("uList").appendChild(li);
  }

  document.getElementById("mInput").value = ""; //To remove input value once user added to list.

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
