export function utils() {
    let burger = document.querySelector('.header-section__info-block__item__burger-logo__burger'),
        body = document.querySelector('body')

    burger.addEventListener('click', function(event) {
        body.classList.toggle('test')
        // body.classList.add('test')
        // body.classList.remove('test')
    })

    // var a = 5
    // let b = "fdgdfg3"
    // const c = false

    // console.log(a);
    // console.log(b);
    // console.log(c);
}