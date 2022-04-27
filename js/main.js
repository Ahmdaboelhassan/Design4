// [1] suffle programming
//buttons
let shufbtns = document.querySelectorAll(".features ul li"); 
//picture
let pics = document.querySelectorAll(".features .imgs .row img")

shufbtns.forEach(el => {
    el.addEventListener("click",(e)=>{
        shufbtns.forEach((ele)=>{
        ele.classList.remove("active")      
        })
        e.target.classList.toggle("active")
        //start shuffling
        //all
        if(e.target.dataset.class == "all"){
            pics.forEach(elep=>{
                elep.classList.remove("display-hide")
            })
        }
        //website
        else if(e.target.dataset.class == "website"){
            pics.forEach(elep=>{
               elep.classList.add("display-hide")
               if(elep.dataset.class == "website"){
                   elep.classList.remove("display-hide")
               }
            })
        }
        //logo
        else if(e.target.dataset.class == "logo"){
            pics.forEach(elep=>{
               elep.classList.add("display-hide")
               if(elep.dataset.class == "logo"){
                   elep.classList.remove("display-hide")
               }
            })
        }
        //marketing
        else if(e.target.dataset.class == "marketing"){
            pics.forEach(elep=>{
               elep.classList.add("display-hide")
               if(elep.dataset.class == "marketing"){
                   elep.classList.remove("display-hide")
               }
            })
        }
        //video
        else if(e.target.dataset.class == "video"){
            pics.forEach(elep=>{
               elep.classList.add("display-hide")
               if(elep.dataset.class == "video"){
                   elep.classList.remove("display-hide")
               }
            })
        }
        //graphic
        else if(e.target.dataset.class == "graphic"){
            pics.forEach(elep=>{
               elep.classList.add("display-hide")
               if(elep.dataset.class == "graphic"){
                   elep.classList.remove("display-hide")
               }
            })
        }
    })
}); 


