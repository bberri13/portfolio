document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.getElementsByClassName('menu-item');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function(event) {
        var contentId = this.getAttribute('data-content');
        toggleContent(event, contentId);
        
        if (contentId === 'projects') {
          animateName();
        } else {
          resetNamePosition();
        }
      });
    }
  });
  
  function toggleContent(event, contentId) {
    event.preventDefault();
    
    var contentElements = document.getElementsByClassName('content');
    for (var i = 0; i < contentElements.length; i++) {
      contentElements[i].classList.remove('active');
    }
    
    var targetContent = document.getElementById(contentId + '-content');
    targetContent.classList.add('active');
  }
  
  function animateName() {
    var nameElement = document.querySelector('.name');
    nameElement.style.transition = 'top 0.5s ease-in-out';
    nameElement.style.top = '0';
  }

  if (contentId === 'projects') {

    animateName();

    showProjectsContent();

  } 

  else {

    resetNamePosition();

  }
  
  function resetNamePosition() {
    var nameElement = document.querySelector('.name');
    nameElement.style.transition = 'none';
    nameElement.style.top = '30%';
  }
  
  function showProjectsContent() {

    var projectsContent = document.getElementById('projects-content');
  
    projectsContent.classList.add('active');
  
  }