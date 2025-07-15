// typedScript
var typed = new Typed('.typed1',{
	strings:[
	'世界中の友だち!', '新しい仲間!', '多文化の繋がり!'
	],
	typeSpeed:50,
	backSpeed:200,
	loop:true
});

// subNav
  document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#categoryMenu button');
  const posts = document.querySelectorAll('.blog-post');

  
  const activeBtn = document.querySelector('#categoryMenu .active');
  const activeCategory = activeBtn ? activeBtn.getAttribute('data-category') : null;

 
  posts.forEach(post => {
    if (post.getAttribute('data-category') === activeCategory) {
      post.classList.add('show');
    } else {
      post.classList.remove('show');
    }
  });

  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');

      posts.forEach(post => {
        if (post.getAttribute('data-category') === category) {
          post.classList.add('show');
        } else {
          post.classList.remove('show');
        }
      });
    });
  });
});
