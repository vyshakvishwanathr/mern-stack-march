function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

    function resizer () 
    {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    // alert(" height is "+height+ " and width is "+width);
    console.log(width, height);


    setInterval(() => {
        showNotification({
          top: 20,
          right: 5,
          html: 'Hello! ',
          className: "welcome"
        });
      }, 2000);
    let div = document.createElement('div');
    div.className = "showsizer";
    div.innerHTML = "the width is"+width+"the height is"+height;
    document.body.append(div);
    }


    function adder ()
    {   let num1 = document.getElementById(num1).value;
        let num2 = document.getElementById(num2).value;
        let add = document.createElement('div');
        div.className = "adder";
        console.log(num1+num2);
        div.innerHTML = num1+num2;
        document.body.append(add);
    }


  setInterval(() => {
    showNotification({
      top: 20,
      right: 5,
      html: 'Hello! ',
      className: "welcome"
    });
  }, 2000);


function resizere ()
{
    window.resizeTo(
        window.screen.availWidth / 2,
        window.screen.availHeight / 2
      );
}


function getAdd() {
        // Fetch the value of input with id val1
        const num1 = Number(document.getElementById("val1").value);
         
        // Fetch the value of input with id val2
        const num2 = Number(document.getElementById("val2").value);
        const add = num1 + num2;
        console.log(add);
         
        // Displays the result in paragraph using dom
        document.getElementById("result").innerHTML = "Addition : " + add;
         
        // Changes the color of paragraph tag with red
        document.getElementById("result").style.color = "red";
    }


    //6
    let doc1 = document.getElementById("vyshakhere").innerHTML;
    alert(doc1);

    var elements = document.getElementsByTagName(h1);
    console.log(elements);  //not working 


    function changestyling ()
{
 var para = document.getElementsByTagName ("p");
 para[0].style.fontSize - 25;
 for(var i=0;i<para.length; i++)
{
   para[i].style.fontSize = 22; 
}
}