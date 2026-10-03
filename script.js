const ip="kryo.cs2.my";
function copyIP(button){
  navigator.clipboard.writeText(ip).then(()=>{
    const old=button.textContent;
    button.textContent="COPIED ✓";
    setTimeout(()=>button.textContent=old,1600);
    const state=document.getElementById("copyState");
    if(state){state.textContent="COPIED TO CLIPBOARD";setTimeout(()=>state.textContent="ONLINE ADDRESS",1600);}
  }).catch(()=>{});
}
document.getElementById("copyIp").addEventListener("click",e=>copyIP(e.currentTarget));
document.getElementById("copyIp2").addEventListener("click",e=>copyIP(e.currentTarget));