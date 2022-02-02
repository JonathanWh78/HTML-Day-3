`use strict`

function Task8()
{
    let x = "foo";
    if (x == "foo") 
      {
        let z = "Sui";
      }
      console.log(x); 
      //console.log(y); 
    }
    Task8();

    function doSomething() {
        let a = 1;
        console.log(a);
        console.log(foo());
        //let a = 1; needs to be initilized first before it can be used unlike foo as its a function and can be called
        function foo() {
          return 2;
        }
      }
      doSomething();