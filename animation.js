window.addEventListener('scroll', () => {
    toolsVisible(document.querySelector('.tools-list'));

    if(window.innerWidth < 678) {
        projectDesc();
    }
})

const toolsVisible = container => {
    if(window.scrollY > 250){
        container.classList.add('tools-list-visible');
        return;
    }
  
    if(window.scrollY < 250 && container.classList.contains('tools-list-visible')){
        container.classList.remove('tools-list-visible');
        return;
    }
};

const removeHoverClass = () => {
    const project = document.querySelector('.project-hover');
    if(project !== null) {
        project.classList.remove('project-hover');
    }
}

const projectDesc = () => {
    const projects = document.querySelectorAll('.project-link');

    if(window.scrollY > 1869 && window.scrollY < 2217) {
        removeHoverClass();
        projects[0].classList.add('project-hover');
    } else if(window.scrollY > 2217 && window.scrollY < 2513) {
        removeHoverClass();
        projects[1].classList.add('project-hover');
    } else if(window.scrollY > 2513 && window.scrollY < 2844) {
        removeHoverClass();
        projects[2].classList.add('project-hover');
    } else if(window.scrollY > 2844 && window.scrollY < 3149) {
        removeHoverClass();
        projects[3].classList.add('project-hover');
    } else if(window.scrollY > 3149 && window.scrollY < 3460) {
        removeHoverClass();
        projects[4].classList.add('project-hover');
    } else if(window.scrollY > 3460) {
        removeHoverClass();
        projects[5].classList.add('project-hover');
    } else {
        removeHoverClass();
    }
}