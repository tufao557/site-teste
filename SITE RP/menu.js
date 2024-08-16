var menuItem = document.querySelectorAll('.item-menu')

function link(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )

    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', link)
)