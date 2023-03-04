console.log("hhuhruvh r");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.full').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
      
        
    }
    else{
        document.querySelector('.full').style.display = 'none'
       setTimeout(() =>{       document.querySelector('.cross').style.display = 'inline'
    },300);
    }
})