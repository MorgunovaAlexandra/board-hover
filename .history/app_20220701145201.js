const board=document.querySelector('#board')
const colors=['yellow','green','blue']
const SQUERS_NUMBER=500;
for(let i=0;i<SQUERS_NUMBER;i++){
    const squre=document.createElement('div');
    squre.classList.add('square');
    squre.addEventListener('mousemove',()=>{
        setColor(squre)
    })
    squre.addEventListener('mouseleave',()=>{
      removeColor(squre)
    })
    board.append(squre)
}
function setColor(element){
    element.style.backgroundColor='red'
}
function removeColor(element){
    element.style.backgroundColor='aliceblue'
}
