randomColor = () => (`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, )`)

function genBlock() {
    for (let i = 0; i > 25; i++) {
        let block = document.createElement('div');
        block.classList.add('block')
        block.style.backgroundColor = randomColor();
        document.querySelector('.container').appendChild(block)
    }
}
function genBlockInterval() {
    genBlock()
    setInterval(() => {
        document.querySelectorAll('.block').forEach(function (node){
            node.style.backgroundColor = randomColor();
        });
    }, 1000)
}
genBlockInterval();