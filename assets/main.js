let isScrollingDown = false;

window.onscroll = function() {
  const navbar = document.querySelector(".header-nav");
  const totalBlock = document.querySelector(".cart-block__total");
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > 300) { 
    if (!isScrollingDown) {
      navbar.style.top = "0";
      isScrollingDown = true;
    }
  } else {
    if (isScrollingDown) {
      navbar.style.top = "-90px";
      isScrollingDown = false;
    }
  }

  if (currentScrollPos < 350) { 
    if (!isScrollingDown) {
      Object.assign(totalBlock.style ,{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '1px',
        width: '100%',
        
      });
      isScrollingDown = true;
    }
  } else {
    if (isScrollingDown) {
      Object.assign(totalBlock.style ,{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '0',
        animation: 'Up 0.4s linear',
        width: '100%',
      });
      isScrollingDown = false;
    }
  }
};
// ------------------------------------------------------


// quay mũi tên -----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const arrowButtons = document.querySelectorAll('.btn-show__droplist');

  arrowButtons.forEach(button => {
      button.addEventListener('click', function() {

          const categoryItem = this.closest('.category-item');

          const dropdownList = categoryItem.querySelector('.category-item__droplist');

          if (dropdownList) {
              this.classList.toggle('rotate');
              dropdownList.classList.toggle('show');
          } else {
              console.error('Không tìm thấy danh sách con tương ứng.');
          }
      });
  });
});


// Chuyển trang mượt

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('#smooth-page');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const href = this.href;

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});


// -----------------------------------------------------


// hiển thị khung đăng nhập ----------------------------

var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal__body');
var userLogin = document.querySelectorAll('#user');

function showLogin() {
    modal.classList.add('show');
}

function hideLogin() {
    modal.classList.remove('show');
}

userLogin.forEach(function(user) {
    user.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định của thẻ a
        showLogin();
    });
});

// Ấn ra ngoài ẩn khung đăng nhập
modal.addEventListener('click', hideLogin);

// Ngăn sự kiện nổi bọt tắt khung đăng nhập khi đang đăng nhập
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

//------------------------------------------------------ 


// Hiên menu dịch vụ ở tablet---------------------------

const serviceBlock =document.querySelector(".service-category--tb");
const serviceCategory = document.querySelector(".service-category__container");
const service = document.querySelectorAll("#service");

function showService() {
  serviceBlock.classList.remove('hide');
  serviceBlock.classList.add('showservice');
  serviceBlock.style.display = 'block';
}

function hideService() {
  serviceBlock.classList.remove('showservice');
  serviceBlock.classList.add('hide');
  // Đợi animation kết thúc trước khi ẩn hoàn toàn
  setTimeout(() => {
    serviceBlock.style.display = 'none';
  }, 400); // Thời gian tương đương với thời gian của animation
}
 
service.forEach(function(services){
    services.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn hành vi mặc định của thẻ a
      showService();
  });
})

serviceBlock.addEventListener('click', hideService);

serviceCategory.addEventListener('click', function(event) {
    event.stopPropagation();
});

// ------------------------------------------------------


// Hiện chức năng của user

const userFuncs =document.querySelector(".user-function--tb");
const funcContainer = document.querySelector(".user-function__body");
const func = document.querySelectorAll("#user-func");

function showFunc() {
  userFuncs.classList.remove('hideFunc');
  userFuncs.classList.add('showFunc');
  userFuncs.style.display = 'block';
}

function hideFunc() {
  userFuncs.classList.remove('showFunc');
  userFuncs.classList.add('hideFunc');
  // Đợi animation kết thúc trước khi ẩn hoàn toàn
  setTimeout(() => {
    userFuncs.style.display = 'none';
  }, 400); // Thời gian tương đương với thời gian của animation
}
 
func.forEach(function(funcs){
    funcs.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn hành vi mặc định của thẻ a
      showFunc();
  });
})

userFuncs.addEventListener('click', hideFunc);

funcContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

// menu admin--------------------------------------------

const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".nav__menu-item")

tabs.forEach((tab)=>{
  tab.addEventListener("click", function (){
    $(".nav-item__link.active").classList.remove("active");

    this.classList.add("active");
  })
});

// ------------------------------------------------------



