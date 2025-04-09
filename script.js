document.addEventListener("DOMContentLoaded", function () {
  const dishes = {
    'hyderabadi-biryani': {
      title: 'Hyderabadi Biryani',
      price: 'Rs.350',
      description: 'Spicy rice dish with marinated meat, cooked with aromatic spices.',
      ingredients: [
        'Basmati rice',
        'Chicken or mutton',
        'Yogurt',
        'Onions',
        'Tomatoes',
        'Ginger-garlic paste',
        'Biryani masala',
        'Mint leaves',
        'Coriander leaves',
        'Saffron'
      ],
      time: 'Approximately 60 minutes',
      image: 'Hyd Biryani.jpg'
    },
    'andhra-chicken-curry': {
      title: 'Andhra Chicken Curry',
      price: 'Rs.295',
      description: 'A rich and spicy chicken curry with a mix of Andhra flavors.',
      ingredients: [
        'Chicken pieces',
        'Onions',
        'Tomatoes',
        'Ginger-garlic paste',
        'Green chilies',
        'Curry leaves',
        'Andhra special spices',
        'Coriander powder',
        'Turmeric',
        'Mustard seeds'
      ],
      time: 'Approximately 45 minutes',
      image: 'Chicken Curry.jpg'
    },
    'prawn-fry': {
      title: 'Prawn Fry',
      price: 'Rs.315',
      description: 'Juicy prawns cooked to perfection with aromatic spices.',
      ingredients: [
        'Fresh prawns',
        'Onions',
        'Ginger-garlic paste',
        'Turmeric',
        'Red chili powder',
        'Coriander powder',
        'Curry leaves',
        'Mustard seeds',
        'Lemon juice'
      ],
      time: 'Approximately 30 minutes',
      image: 'Prawn Fry.jpg'
    },
    'tomato-pappu': {
      title: 'Tomato Pappu',
      price: 'Rs.225',
      description: 'A comforting dal made with tomatoes and seasoned with mustard and curry leaves.',
      ingredients: [
        'Toor dal',
        'Tomatoes',
        'Green chilies',
        'Turmeric',
        'Mustard seeds',
        'Cumin seeds',
        'Curry leaves',
        'Garlic',
        'Tamarind'
      ],
      time: 'Approximately 25 minutes',
      image: 'Tomato Pappu.jpg'
    },
    'vada': {
      title: 'Vada',
      price: 'Rs.95',
      description: 'Crispy fried doughnut-shaped fritters made from urad dal, served with chutneys.',
      ingredients: [
        'Urad dal',
        'Green chilies',
        'Ginger',
        'Curry leaves',
        'Pepper',
        'Cumin seeds',
        'Asafoetida'
      ],
      time: 'Approximately 20 minutes',
      image: 'Vada.jpg'
    },
    'idli-with-sambar': {
      title: 'Idli with Sambar',
      price: 'Rs.120',
      description: 'Steamed rice cakes served with spicy sambar and coconut chutney.',
      ingredients: [
        'Idli batter (rice and urad dal)',
        'Toor dal',
        'Vegetables',
        'Tamarind',
        'Sambar powder',
        'Mustard seeds',
        'Curry leaves',
        'Coconut',
        'Green chilies'
      ],
      time: 'Approximately 30 minutes',
      image: 'Idli with Sambar.jpg'
    }
  };
  const menuItems = document.querySelectorAll('.menu-item');
  const dishContainer = document.getElementById('dish-details-container');
  const closeBtn = document.querySelector('.close-btn');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const dishId = this.getAttribute('data-dish');
      showDishDetails(dishId);
    });
  });
  function showDishDetails(dishId) {
    const dish = dishes[dishId];
    document.getElementById('dish-title').textContent = dish.title;
    document.getElementById('dish-price').textContent = dish.price;
    document.getElementById('dish-description').textContent = dish.description;
    document.getElementById('dish-time').textContent = dish.time;
    document.getElementById('dish-image').src = dish.image;
    document.getElementById('dish-image').alt = dish.title;
    const ingredientsList = document.getElementById('dish-ingredients');
    ingredientsList.innerHTML = '';
    dish.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    dishContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  closeBtn.addEventListener('click', function() {
    dishContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  dishContainer.addEventListener('click', function(e) {
    if (e.target === dishContainer) {
      dishContainer.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  const navLinks = document.querySelectorAll('.navbar nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          menuToggle.classList.remove('active');
        }
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  const reservationForm = document.getElementById('reservation-form');
  const formMessage = document.getElementById('form-message');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;
      if (name && email && phone && date && time && guests) {
        formMessage.textContent = 'Your reservation has been submitted successfully!';
        formMessage.style.color = 'green';
        formMessage.style.backgroundColor = '#e8f5e9';
        reservationForm.reset();
      } else {
        formMessage.textContent = 'Please fill in all fields correctly.';
        formMessage.style.color = 'red';
        formMessage.style.backgroundColor = '#ffebee';
      }
    });
  }
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').min = today;
});