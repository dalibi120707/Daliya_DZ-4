const button = document.querySelector('.btn')

button.addEventListener('click', (event) => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader("Content-type", "application/data.json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const names = document.createElement('div')
            names.innerHTML = 'name: ' + people.name
            const ages = document.createElement('div')
            ages.innerHTML = 'age: ' + people.age
            const hobbys = document.createElement('div')
            hobbys.innerHTML = 'hobby:' + people.hobby
            const div = document.createElement('div')
            div.classList.add('div')
            document.querySelector('body').append(names, ages, hobbys)
          // console.log(people)
        });
        data.map(el =>
        {
            console.log("name: " + el.name, 'age: ' + el.age, 'hobby: ' + el.hobby);
        })
    })
})


