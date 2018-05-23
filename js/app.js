/*---------- función que centraliza al resto de las funciones ----------*/
function loadPage() {
  $('.load-landing').click(hideHome);
 }

 const hideHome = (e) => {
   e.preventDefault();
   $('#home').removeClass('show');
   $('#home').addClass('hide');
   showPortfolio();
 }

 const showPortfolio = () => {
  $('#landing').removeClass('hide');
  $('#landing').addClass('show');
 }

 $('.view').click(function(e){
  e.preventDefault();
  const pageRef = e.target.getAttribute('href');
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

 function getData(dataProject) {
   const project = projects.find( project => {
     return project.id === dataProject;
   })
   paintProject(project);
 }

 function paintProject(project) {
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
           <p class="text-center"><a href="${project.demo}"><i class="fas fa-eye"></i></a></p>
           <h4>Ver código</h4>
           <p class="text-center"><a href="${project.code}"><i class="fab fa-github-alt"></i></a></p>
         </div>
       </div>
     </div>
   </section>
 </section>`;
 $('#content-me').append(templateProject); 
 }

 $(document).ready(loadPage);

 page.start({ hashbang: true })