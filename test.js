
 var  links = document.getElementsByTagName("a");

 /* BELOW: we want loop to continue as long as "i" is 
 less than number of links on page will continue to do this 
 so it will catch all links. 
 and we want to  increment i by 1 each time around  */
 
 for(i = 0; i < links.length; i++){

  links[i].className = "link-" + i;


 }