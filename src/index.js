
(function () {
    const newProject = document.querySelector('.project-btn')
    const contProject = document.querySelector('#cont-project')
    const projectForm = document.querySelector('.input-project')

    newProject.addEventListener('click', function addProject () {
        projectForm.style.visibility='visible'
        })
    const addBtn = document.querySelector('.add') 
    const delBtn = document.querySelector('.delete') 
    const inputProject = document.querySelector('#project')

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



 })()