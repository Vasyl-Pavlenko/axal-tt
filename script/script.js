document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const mobile = document.querySelector('.sider__mobile');
  const mobileIcon = document.querySelector('.mobile-icon');
  const siderMain = document.querySelector('.sider__main');
  const links = document.querySelectorAll('.sider__item');
  const logo = document.querySelector('.sider__logo-link');
  const viewOptions = document.querySelectorAll('.products__view-option');
  const gridView = document.querySelector('#gridView');
  const productsLink = document.querySelector('#products');
  const productItems = document.querySelectorAll('.products__item');
  const secondProduct = document.querySelector('#secondProduct');

  // Toggle class for productItems
  productItems.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
      productItems.forEach((product) => product.classList.remove('products__item--active'));
      this.classList.add('products__item--active');
    });
  });

  // Toggle mobile sidebar
  mobile.addEventListener('click', function (event) {
    event.stopPropagation();
    siderMain.classList.toggle('open');
    mobileIcon.classList.toggle('open');
    body.classList.toggle('no-scroll');
  });

  // Close mobile sidebar on click outside
  document.addEventListener('click', function (event) {
    if (!siderMain.contains(event.target) && !mobile.contains(event.target)) {
      siderMain.classList.remove('open');
      mobileIcon.classList.remove('open');
      body.classList.remove('no-scroll');
    }
  });

  // Activate sidebar link
  links.forEach((link) => {
    link.addEventListener('click', function () {
      links.forEach((link) => link.classList.remove('sider__item--active'));
      this.classList.add('sider__item--active');
      siderMain.classList.remove('open');
      mobileIcon.classList.remove('open');
      body.classList.remove('no-scroll');
    });
  });

  // Logo click resets sidebar and other elements
  logo.addEventListener('click', function () {
    links.forEach((link) => link.classList.remove('sider__item--active'));
    productsLink.classList.add('sider__item--active');

    viewOptions.forEach((option) => option.classList.remove('products__view-option--active'));
    gridView.classList.add('products__view-option--active');

    productItems.forEach((product) => product.classList.remove('products__item--active'));
    secondProduct.classList.add('products__item--active');

    siderMain.classList.remove('open');
    mobileIcon.classList.remove('open');
    body.classList.remove('no-scroll');
  });

  // Activate view option
  viewOptions.forEach((option) => {
    option.addEventListener('click', function () {
      viewOptions.forEach((opt) => opt.classList.remove('products__view-option--active'));
      this.classList.add('products__view-option--active');
    });
  });
});
