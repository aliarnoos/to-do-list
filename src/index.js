
(function () {
    const newProject = document.querySelector('.project-btn')
    const contProject = document.querySelector('#cont-project')
    const projectForm = document.querySelector('.input-project')
    let selected = null;
    newProject.addEventListener('click', function addProject () {
        projectForm.style.visibility='visible'
        })
    const addBtn = document.querySelector('.add') 
    const delBtn = document.querySelector('.delete') 
    const inputProject = document.querySelector('#project')

    
    const projectBtn = document.createElement('div')
    selected = projectBtn
    projectBtn.classList.add('project')
    projectBtn.textContent='General'
    const del = document.createElement('button')
    del.addEventListener('click', function deleteElement () {
        contProject.removeChild(projectBtn)
    })
    del.classList.add('del-btn')
    del.textContent='x'
    projectBtn.appendChild(del)
    contProject.appendChild(projectBtn)

    // const inputName = document.createElement('input')
    // const inputDesc = document.createElement('input')
    // const inputDate = document.createElement('input')


    addBtn.addEventListener('click', insertProject)
    function insertProject () {
        const projectBtn = document.createElement('div')
        projectBtn.classList.add('project')
        projectBtn.textContent=inputProject.value
        
        const del = document.createElement('button')
        del.addEventListener('click', function deleteElement () {
            contProject.removeChild(projectBtn)
        })
        del.classList.add('del-btn')
        del.textContent='x'
        projectBtn.appendChild(del)
        contProject.appendChild(projectBtn)
        inputProject.value=null;
        projectForm.style.visibility='hidden'
    }
    delBtn.addEventListener('click', function canselForm () {
        inputProject.value=null;
        projectForm.style.visibility='hidden'
    })

    const taskName= document.querySelector('#name')
    const taskDesc = document.querySelector('#desc')
    const taskDate = document.querySelector('#date')
    // const taskDone = document.querySelector('#done')

    const addTask = document.querySelector('.add-task')
    const taskTable = document.querySelector('#table')
    
    function newTask () {
        if (taskName.value=='') return
        else {
        const tr = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdDesc = document.createElement('td')
        const tdDate = document.createElement('td')
        const tdDone= document.createElement('td')
        const tdDel = document.createElement('td')

        tdName.textContent= taskName.value
        tdDesc.textContent=taskDesc.value
        tdDate.textContent=taskDate.value
        const checkTask = document.createElement('input')
        checkTask.setAttribute('type','checkbox')

        const delTaskBtn = document.createElement('button')
        delTaskBtn.textContent="Remove"
        delTaskBtn.classList.add('del-task')
        delTaskBtn.addEventListener('click', function delTask () {
            taskTable.removeChild(tr)
        })

        tdDel.appendChild(delTaskBtn)
        tdDone.appendChild(checkTask)
        tr.appendChild(tdName)
        tr.appendChild(tdDesc)
        tr.appendChild(tdDate)
        tr.appendChild(tdDone)
        tr.appendChild(tdDel)
        taskTable.appendChild(tr)
    }
}
    addTask.addEventListener('click', newTask)



 })()