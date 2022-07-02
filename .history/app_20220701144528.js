const board=document.querySelector('#board')

const SQUERS_NUMBER=500;
for(let i=0;i<SQUERS_NUMBER;i++){
    const squre=document.createElement('div');
    squre.classList.add('square');
    squre.addEventListener('mousemove',()=>{
        setColor()
    })
    board.append(squre)
}
function setColor(element){
    
}