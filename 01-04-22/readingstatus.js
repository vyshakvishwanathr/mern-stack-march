var library = [{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
}]
for (var i = 0; i < library.length; i++) 
   {
    var book = " " ;
    if (library[i].readingStatus) {
      console.log("True" + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }