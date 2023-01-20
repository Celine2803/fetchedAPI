// fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(data => data.map((item) => console.log(item.title)))

    async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        console.log(data);
    if(data.length>0){
         let temp="";
    
        data.forEach((u)=>
        {
             temp +="<tr>";
             temp +="<td>"+u.userId+"</td>";
             temp +="<td>"+u.Id+"</td>";
             temp +="<td>"+u.title+"</td>";
             temp +="<td>"+u.completed+"</td>"+"<button>add</button>"+"<button>delete</button>"+
             "</tr>";
         });
         document.getElementById("data").innerHTML=temp;
        }
       
     }
     fetchData()
    
    // fetch('https://jsonplaceholder.typicode.com/todos').then(
    //     res=>{
    //         res.json().then(
    //             data=>{
    //                 console.log(data);
    //                 if(data.length>0){
    //                     var temp="";
    //                     data.forEach;(u)=>{
    //                         temp+="<tr>";
    //                             temp +="<td>"+u.userId+"</td>";
    //             temp +="<td>"+u.Id+"</td>";
    //             temp +="<td>"+u.title+"</td>";
    //              temp +="<td>"+u.completed+"</td></tr>";
                            
    //                     }
    //                 }
    //             document.querySelector("#data").innerHTML=temp;
    //             }
    //         )
    //     }
    // )
        
            
    
                // if(data.length>0){
                //     let temp="";
                //     data.forEach;(u)=>{
                //         temp +="<tr>";
                // temp +="<td>"+u.userId+"</td>";
                // temp +="<td>"+u.Id+"</td>";
                // temp +="<td>"+u.title+"</td>";
                // temp +="<td>"+u.completed+"</td></tr>";
    //                 }
    //             }
                
    //             }
    //         }
    //     )
    // })
       
    //    if(data.length>0){
    //     let temp="";
    
    //    data.forEach; (u)=>
    //    {
    //         temp +="<tr>";
    //         temp +="<td>"+u.userId+"</td>";
    //         temp +="<td>"+u.Id+"</td>";
    //         temp +="<td>"+u.title+"</td>";
    //         temp +="<td>"+u.completed+"</td></tr>";
    //     }
    //     document.getElementById("data").innerHTML=temp;
    //    }
       
    //     // }
    //     fetchData()