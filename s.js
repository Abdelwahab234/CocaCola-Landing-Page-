class Contacts{ 
    constructor(element, cr){ 
        this.container = cr ;
        this.obj =Array( element );
        let m = document.createElement("img");
        m.style.width = "30px";
        m.src="contanct_img/menu-button.png" ;
        let d = document.createElement("a");
        d.appendChild(m);
        this.menu = d; 
     

    }
    parenter(){
        this.container.style.display= "flex";
        this.container.style.justifyContent = "center";
        this.container.style.alignItems= "center";
    }
    show(){ 
        this.parenter()
        this.menu.display= "none";
        this.obj.forEach(e => {
            e.style.display = "inline";

    })
}

    unshow(){ 
        this.parenter()

        this.obj.forEach(e => {
            e.style.display = "none";
        })
    } 
    put_menu(){ 
        this.parenter()

        this.unshow();
        this.menu.style.width = "30px"
        this.container.appendChild(this.menu);
        this.menu.style.display = "inline";
    }
}
let element = document.querySelector(".contacts > div");
let all = new Contacts(element, document.querySelector(".contacts"));

document.body.onresize = function(){ 

  
    

    if (document.body.offsetWidth  < 850){ 
        
            all.put_menu();
      

            
            
       
        }else{ 
            all.show();
        }
  
    }