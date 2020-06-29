/*localStorage.removeItem('x');
localStorage.setItem('x', 'Hii');
localStorage.setItem('y', 'Lol');
var c= localStorage.getItem('y');
//document.write(c);
//console.log(c);
localStorage.clear();
var emps= [
    {name: "ahmed", age:25},
    {name:"Soha", age:35}
]
localStorage.setItem("emps", JSON.stringify(emps));
var test= localStorage.getItem('emps');
var newTest= JSON.parse(test);
console.log(typeof(test));
console.log(typeof(newTest));
console.log(test);
console.log(newTest);*/ 
                        //APP Product

//This is our container

//Step1
var products;
if(localStorage.getItem("ourData")== null ) //this means key named (ourData) doesn't exist
{
    products=[];
}
else
{
    products= JSON.parse (localStorage.getItem("ourData"));
    display();
}

/*dispaly Function */
function display(){
    var temp='';
    for(i=0; i< products.length; i++) {
            temp+=  ` <div class="col-md-4 my-4">
                <div class="item border h-100">
                    <img class="img-fluid w-100 " src="images/testimonial-2.jpg"> 
                    <h2>`+products[i].name+ `<span class="cat">`+products[i].cat+ `</span></h2>
                    <p>`+products[i].desc+ `</p>
                    <span class="forSpan p-1">`+products[i].price+ `EGP</span>
                    <button onClick="deleteProduct(`+i+`)" class="btn btn-danger mb-0 float-left">delete</button>
                    <button onClick="updateProduct(`+i+`)" class="btn btn-warning mb-0 float-right">Update</button>
                    <div class="clr"></div>
                </div>  
            </div> `;        
    }
    document.getElementById("demo").innerHTML= temp;
}

/*addProduct Function */
function addProduct(){
    var proname= document.getElementById("pName").value;
    var procat= document.getElementById("cat").value;
    var price= document.getElementById("price").value;
    var desription= document.getElementById("desc").value;
    /*var proimg= document.getElementById("pImage").value;
    var newPath= proimg.replace("C:\\fakepath\\","images/");*/
    if(procat.length>20){
        alert("length mustn't exceed 20 letters");
    }
    else{
    var newPro={name:proname, price:price, cat:procat, desc:desription};
    products.push(newPro);
    localStorage.setItem("ourData", JSON.stringify(products));
    display();
    clearData();
    }

}

/*clear data Function */
function clearData(){
    document.getElementById("pName").value= '';
    document.getElementById("cat").value= '';
    document.getElementById("price").value= '';
    document.getElementById("desc").value= '';
}

/*delete Function */
function deleteProduct(index){
   products.splice( index , 1);
   localStorage.setItem("ourData", JSON.stringify(products));
   display();
}
/*Update Function */
function updateProduct(index){
    document.getElementById("pName").value=products[index].name ;
    document.getElementById("cat").value=products[index].cat;
    document.getElementById("price").value=products[index].price;
    document.getElementById("desc").value=products[index].desc;
    document.getElementById("update").style.display="inline-block";
    document.getElementById("Add").style.display="none";
    document.getElementById("update").addEventListener("click", function(){
        products[index].name = document.getElementById("pName").value;
        products[index].cat = document.getElementById("cat").value;
        products[index].price = document.getElementById("price").value;
        products[index].desc = document.getElementById("desc").value;
        localStorage.setItem("ourData", JSON.stringify(products));
        display();
        clearData();   
        document.getElementById("update").style.display="none";
        document.getElementById("Add").style.display="inline-block";     
    })
}


/*Search Function */
function search(searchInput){
    var container ='';
   for(i=0; i<products.length ; i++){
       var searchSmall = searchInput.toLowerCase();
       var c= products[i].name.toLowerCase();
       //console.log(c);
       if( c.includes(searchSmall))
       {
        container += ` <div class="col-md-4 my-4">
        <div class="item border h-100">
            <img class="img-fluid w-100 " src="images/testimonial-2.jpg"> 
            <h2>`+c.replace(searchInput ,"<span style='color:red'>"+searchSmall+"</span>")+` <span class="cat bg-primary p-1 "> `+products[i].cat+`</span> </h2> 
            <p>`+products[i].desc+ `</p>
            <span class="forSpan p-1">`+products[i].price+ `EGP</span>
            <button onClick="deleteProduct(`+i+`)" class="btn btn-danger mb-0 float-left">delete</button>
            <button onClick="updateProduct(`+i+`)" class="btn btn-warning mb-0 float-right">Update</button>
            <div class="clr"></div>
        </div>  
    </div> `;        
       }
   }
   document.getElementById("demo").innerHTML= container;
}
//Now, I'll store array in Local storage

/* CRUD: Update  */
//document.getElementById("Services").style.backgroundColor="blue";
/* How to call tag from HTML:
1)onClick/onkeyup/ onkeydown/onblur: as an event, embed in HTML
2)document.getElementById("id").addEventListener("click", function(){
}
*/