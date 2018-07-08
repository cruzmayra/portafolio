/*---------- función que centraliza al resto de las funciones ----------*/
 page('/', e => {
  $('#container').html(`<nav class="navbar navbar-expand-lg justify-content-between row">
  <a class="navbar-brand" href="/">
    <img src="/assets/images/mc-logo.png" width="70" height="70" class="d-inline-block align-top" alt="mc-logo">
  </a>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="${data[0].github}" target="_blank"><i class="fab fa-github"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${data[0].linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${data[0].facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
      </li>
    </ul>
  </div>
</nav>

<section class="row d-flex justify-content-center align-self-center description-initial">
  <div class="col-md-12 col-sm-12 text-center description">
    <p>¡Hola! Soy Mayra Cruz,<br>frontend developer<br>por <a href="http://www.laboratoria.la/" target="_blank">Laboratoria</a>.</p>
    <p class="animated infinite pulse"><a class="load-landing" href="/portafolio">Dale un vistazo a mi portafolio :)</a></p>
  </div>
</section>`)
} )


 page('/portafolio', e => {
   $('#container').html(`<section id="content-me">
   <section class="container" id="about-me">
     <div class="row">
       <div class="col-md-4 col-sm-12 text-center">
         <img class="profile" src="assets/images/profile.jpg" alt="mc-profile">
       </div>
       <div class="col-md-8 col-sm-12 text-center about-me">
         <h2>Acerca de mí</h2>
         <div>
           <h4>¡Hola! Soy Mayra Cruz</h4>
           <p>Desarrolladora frontend egresada de la quinta generación de <a href="http://www.laboratoria.la/" target="_blank">Laboratoria</a>, amante del poder de la tecnología y del código como generadores de impacto social. Chilanga por adopción. Autodidacta.</p>
           <p>Me gusta asistir a meetups y encontrar inspiración en el trabajo de otros. Busco proponer soluciones integrales por lo que me gustaría desarrollarme como fullstack developer en un futuro.</p>
           <button type="button" class="btn btn-lg"><a href="assets/curriculum-mayra-cruz.pdf" target="_blank">Descarga mi CV</a></button>
         </div>
       </div>
     </div>
     <div class="row skills">
       <div class="col-md-12 text-center">
         <h3>Habilidades</h3>
       </div>
       <div class="col-md-6">
         <h3>Técnicas</h3>
         <div class="row">
           <div class="col-md-6 col-6">
             <p class="d-flex align-items-center"><i class="devicon-javascript-plain"></i>&emsp;&emsp;JavaScript</p>
             <p class="d-flex align-items-center"><i class="devicon-html5-plain-wordmark"></i>&emsp;&emsp;HTML5</p>
             <p class="d-flex align-items-center"><i class="devicon-css3-plain-wordmark"></i>&emsp;&emsp;CSS3</p>
             <p class="d-flex align-items-center"><i class="devicon-jquery-plain-wordmark"></i>&emsp;&emsp;jQuery</p>
             <p class="d-flex align-items-center"><i class="devicon-git-plain"></i>&emsp;&emsp;Git</p>
           </div>
           <div class="col-md-6 col-6">
             <p class="d-flex align-items-center"><i class="devicon-bootstrap-plain-wordmark"></i>&emsp;&emsp;Bootstrap</p>
             <p class="d-flex align-items-center"><i class="fab fa-npm"></i>&emsp;&emsp;Npm</p>
             <p class="d-flex align-items-center"><img src="assets/images/materialize.png" alt="">&emsp;Materialize</p>
             <p class="d-flex align-items-center"><img src="assets/images/firebase.png" alt="">&emsp;Firebase</p>
             <div class="row">
               <div class="col-md-12 col-12">
                 <p class="d-flex align-items-center h6">También sé un poco de:</p>
                 <p>
                   <img src="assets/images/excel.png" alt="">                      
                   <i class="devicon-jasmine-plain-wordmark"></i>
                   <i class="devicon-wordpress-plain-wordmark"></i>
                   <i class="devicon-react-original-wordmark"></i>
                 </p>
               </div>
             </div>
           </div>
         </div>    
       </div>
       <div class="col-md-6 soft">
         <h3>Socio-emocionales</h3>
         <div>
           <p><i class="fas fa-lock-open"></i>&emsp;&emsp;Solución de problemas</p>
           <p><i class="fas fa-graduation-cap"></i>&emsp;&emsp;Autoaprendizaje</p>
           <p><i class="fas fa-users"></i>&emsp;&emsp;Trabajo en equipo</p>
           <p><i class="fas fa-handshake"></i>&emsp;&emsp;Dar y recibir feedback</p>
           <p><i class="fab fa-medapps"></i>&emsp;&emsp;Adaptabilidad</p>              
         </div>
       </div>
       
     </div>
   </section>

   <section class="container" id="my-work">
     <div class="row">
       <h2 class="col-md-12">Mi trabajo</h2>

       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/venus-button.jpg');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">Venus e-commerce</h5>
             <a href="/venus-ecommerce" class="btn view">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/pokedex-button.png');">
           <div class="card-body description-project text-center">
             <h5 class="card-title">Pokedex</h5>
             <a href="/pokedex" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/ticket-hack-button.png');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">Ticket-hack</h5>
             <a href="/ticket-hack" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/scribere-button.png');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">Scribere</h5>
             <a href="/scribere" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/lc-button.jpg');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">LabCar</h5>
             <a href="/labcar" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>                             
     </div>
   </section>
   
 </section>`)
 } )

 $('.view').click(e => {
  e.preventDefault();
  const pageRef = e.target.getAttribute('href');
  // console.log(pageRef)
  page(pageRef);
})

page('/venus-ecommerce', e => {
  getData(e.path);
})

page('/pokedex', e => {
  getData(e.path);
})

page('/ticket-hack', e => {
  getData(e.path);
})

page('/scribere', e => {
  getData(e.path);
})

page('/labcar', e => {
  getData(e.path);
})

  const getData = dataProject => {
   const project = data[1].find( project => {
     return project.id === dataProject;
   })
  //  console.log(project)
   paintProject(project);
 }

 const paintProject = project => {
   $('#content-me').empty();
   let templateProject = '';
   templateProject += `<section id="projects">
   <section class="jumbotron">
     <div class="container text-center">
       <h2 class="name">${project.name}</h2>
       <img src="${project.image[0]}" alt="">   
     </div> 
   </section>
 
   <section class="container project-d">
     <div class="row">
       <div class="col-md-9">
         <h3>Descripción del proyecto</h3>
         <p>${project.description}</p>
         <img src="${project.image[1]}" alt="">         
       </div>
       <div class="col-md-3 details-project">
         <div>
           <h4>Tipo de proyecto</h4>
           <p>${project.type}</p>
         </div>
         <div>
           <h4>Qué hice :)</h4>
           <p>${project.do}</p>
         </div>
         <div>
           <h4>Tecnologías usadas</h4>
           <p>${project.technology}</p>
         </div>
         <div>
           <h4>Ver el proyecto</h4>
           <p class="text-center"><a href="${project.demo}" target="_blank"><i class="fas fa-eye"></i></a></p>
           <h4>Ver código</h4>
           <p class="text-center"><a href="${project.code}" target="_blank"><i class="fab fa-github-alt"></i></a></p>
         </div>
       </div>
     </div>
   </section>
 </section>`;
 $('#content-me').append(templateProject);
 $('html, body').animate({scrollTop:0}, 'slow');
 }

 page.start({ hashbang: false });
