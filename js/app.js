/*---------- función que centraliza al resto de las funciones ----------*/
 page('/', e => {
  $('#principal-nav').addClass('hide')
  $('footer').addClass('hide')
  $('#nav-presentation').removeClass('hide')
  $('#content-me').html(`<section class="d-flex justify-content-center align-items-center description-initial">
  <div class="col-md-12 col-sm-12 text-center description">
    <p>¡Hola! Soy Mayra Cruz,<br>frontend developer.</p>
    <p><a class="load-landing" href="/home">Dale un vistazo a mi portafolio :)</a></p>
  </div>
</section>`)
} )


 page('/home', e => {
   $('#principal-nav').removeClass('hide')
   $('footer').removeClass('hide')
   $('#nav-presentation').addClass('hide')
   $('#content-me').html(`<section class="container" id="about-me">
     <div class="row">
       <div class="col-md-4 col-sm-12 text-center">
         <img class="profile" src="assets/images/perfil_desenfoque.jpg" alt="mc-profile">
       </div>
       <div class="col-md-8 col-sm-12 text-center about-me">
         <h2>Acerca de mí</h2>
         <div>
           <h4>¡Hola! Soy Mayra Cruz</h4>
           <p>Desarrolladora frontend radicada en CDMX, amante del poder de la tecnología y del código como generadores de impacto social. Chilanga por adopción. Autodidacta.</p>
           <p>Me gusta asistir a meetups y encontrar inspiración en el trabajo de otros. Busco proponer soluciones integrales por lo que me gustaría desarrollarme como fullstack developer en un futuro.</p>
           <button type="button" class="btn btn-lg"><a href="assets/Mayra-Cruz-Resume.pdf" target="_blank">Descarga mi CV</a></button>
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
             <p class="d-flex align-items-center"><span class="icon-javascript"></span>&emsp;&emsp;JavaScript</p>
             <p class="d-flex align-items-center"><span class="icon-html5"></span>&emsp;&emsp;HTML</p>
             <p class="d-flex align-items-center"><span class="icon-css3"></span>&emsp;&emsp;CSS</p>
             <p class="d-flex align-items-center"><span class="icon-git"></span>&emsp;&emsp;Git</p>
             <p class="d-flex align-items-center"><span class="icon-react"></span>&emsp;&emsp;React.js</p>
           </div>
           <div class="col-md-6 col-6">
             <p class="d-flex align-items-center"><span class="icon-wordpress"></span>&emsp;&emsp;WordPress</p>
             <p class="d-flex align-items-center"><span class="icon-microsoftexcel"></span>&emsp;&emsp;Excel</p>
           </div>
         </div>    
       </div>
       <div class="col-md-6 soft">
         <h3>Socio-emocionales</h3>
         <div>
           <p><span class="icon-unlock-alt"></span>&emsp;&emsp;Solución de problemas</p>
           <p><span class="icon-graduation-cap"></span>&emsp;&emsp;Autoaprendizaje</p>
           <p><span class="icon-group"></span>&emsp;&emsp;Trabajo en equipo</p>
           <p><span class="icon-handshake-o"></span>&emsp;&emsp;Dar y recibir feedback</p>
           <p><span class="icon-paper-plane"></span>&emsp;&emsp;Adaptabilidad</p>              
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
             <a href="/#!/mitrabajo/venus-ecommerce" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/pokedex-button.png');">
           <div class="card-body description-project text-center">
             <h5 class="card-title">Pokedex</h5>
             <a href="/#!/mitrabajo/pokedex" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/ticket-hack-button.png');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">Ticket-hack</h5>
             <a href="/#!/mitrabajo/ticket-hack" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/scribere-button.png');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">Scribere</h5>
             <a href="/#!/mitrabajo/scribere" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
       <div class="col-md-4 project-item">
         <div class="card projects" style="background-image: url('assets/images/lc-button.jpg');">
           <div class="card-body text-center description-project">
             <h5 class="card-title">LabCar</h5>
             <a href="/#!/mitrabajo/labcar" class="btn view" target="_blank">Acerca del proyecto</a>
           </div>
         </div>
       </div>
     </div>
   </section>`)
 } )

 $('.view').click(e => {
  e.preventDefault();
  const pageRef = e.target.getAttribute('href');
  // console.log(pageRef)
  page(pageRef);
})

page('/mitrabajo/venus-ecommerce', function (e) {
  getData(e.path);
})

page('/mitrabajo/pokedex', e => {
  getData(e.path);
})

page('/mitrabajo/ticket-hack', e => {
  getData(e.path);
})

page('/mitrabajo/scribere', e => {
  getData(e.path);
})

page('/mitrabajo/labcar', e => {
  getData(e.path);
})

  const getData = dataProject => {
   const project = data[1].find( project => {
     return project.id === dataProject;
   })
   paintProject(project);
 }

 const paintProject = project => {
  $('#principal-nav').removeClass('hide')
  $('footer').removeClass('hide')
  $('#nav-presentation').addClass('hide')
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
           <h4>¿Qué hice? :)</h4>
           <p>${project.do}</p>
         </div>
         <div>
           <h4>Tecnologías usadas</h4>
           <p>${project.technology}</p>
         </div>
         <div>
           <h4>Ver el proyecto</h4>
           <p class="text-center"><a href="${project.demo}" target="_blank"><span class="icon-link"></span></a></p>
           <h4>Ver código</h4>
           <p class="text-center"><a href="${project.code}" target="_blank"><span class="icon-github"></span></a></p>
         </div>
       </div>
     </div>
   </section>
 </section>`;
 $('#content-me').append(templateProject);
 $('html, body').animate({scrollTop:0}, 'slow');
 }

 page.start({ hashbang: true });
