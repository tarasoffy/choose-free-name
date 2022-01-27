let users = ['max', 'tarasoffy']

let inp = document.querySelector('input');

inp.oninput = () => {
    let inpValue = inp.value;
    let nameTaken = users.includes(inpValue);
    if(nameTaken) {
        console.log('Имя занято')
    } else {
        console.log('Имя свободно')
    }
}

console.log('gfdg')



