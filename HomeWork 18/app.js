let getXMlFile = function (path) {
     let request = new XMLHttpRequest();
     request.open("GET", path);
     request.setRequestHeader("Content-Type", "text/xml");
     request.onreadystatechange = function () {
          SetXMLData(request.responseXML);
     };
     request.send();
};

function SetXMLData(xml) {
     console.log(xml);
     const x = xml.getElementsByTagName("CD");
     let table = "<tr><th>Artist</th><th>Title</th></tr>";
     for (let i = 0; i < x.length; i++) {
          table +=
          "<tr><td>" +
          x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
          "</td></tr>";
     }
     document.getElementById("demo").innerHTML = table;



//transform homework 18

let getXMlFile1 = function (path) {
     fetch(path, {
       headers: {
         "Content-Type": "text/xml"
       }
     })
     .then(response => response.text())
     .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
     .then(xml => SetXMLData(xml))
     .catch(err => console.log("Error fetching XML file:", err));
   };
   
   function SetXMLData(xml) {
     console.log(xml);
     const x = xml.getElementsByTagName("CD");
     let table = "<tr><th>Artist</th><th>Title</th></tr>";
     for (let i = 0; i < x.length; i++) {
       table +=
         "<tr><td>" +
         x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
         "</td></tr>";
     }
     document.getElementById("demo").innerHTML = table;
   }
}
