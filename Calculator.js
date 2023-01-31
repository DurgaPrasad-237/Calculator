let displaye1 = document.querySelector('.display-1');
let displaye2 = document.querySelector('.display-2');
let disres = document.querySelector('.display-result');
let numel = document.querySelectorAll('.number');
let oper1 = document.querySelectorAll('.operation');
let eql = document.querySelector('.equal');
let clrall = document.querySelector('.all-clear');
let clrlst = document.querySelector('.last-entry-clear');

let dis1num = "";
let dis2num = "";
let result = null;
let lastoperation = '';
let havedot = false;

numel.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !havedot){
            havedot = true;
        }else if(e.target.innerText === '.' && havedot){
        return;
        }
        dis2num += e.target.innerText;
        displaye2.innerText  = dis2num;
   
    })
})
oper1.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2num) result;
        havedot = false;
        const opeartioname = e.target.innerText;
        if(dis1num && dis2num && lastoperation){
            mathOperation();
        }
        else{
            result = parseFloat(dis2num)
        }
        clearvar(opeartioname);
        lastoperation = opeartioname;

    })
});
function clearvar(name = ''){
    dis1num += dis2num+ ' ' +name+ ' ';
    displaye1.innerHTML = dis1num;
    displaye2.innerText = '';
    dis2num = '';
    disres.innerText = result;

}
function mathOperation(){
    if(lastoperation === 'x'){
         result = parseFloat(result) * parseFloat(dis2num); 
    }
    else if(lastoperation === '+'){
        result = parseFloat(result) + parseFloat(dis2num); 
    }
    else if(lastoperation === '-'){
        result = parseFloat(result) - parseFloat(dis2num); 
    }
    else if(lastoperation === '/'){
        result = parseFloat(result) / parseFloat(dis2num); 
    }
    else if(lastoperation === '%'){
        result = parseFloat(result) % parseFloat(dis2num); 
    }

}
eql.addEventListener('click', (e) => {
    if(!dis1num || !dis1num)
    return;
    havedot = false;
    mathOperation();
    clearvar();
    displaye2.innerText = result;
    disres.innerText = '';
    dis2num = result;
    dis1num = '';
});

clrall.addEventListener('click', (e) => {
    displaye1.innerText = '0';
    displaye2.innerText = '0';
    dis1num = '';
    dis2num = '';
    result = '';
    disres.innerText = '0';
});
clrlst.addEventListener('click', (e) => {
    displaye2.innerText = '';
    dis2num = '';   
});




