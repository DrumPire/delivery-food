const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay');
  const cartBtnOpen = document.querySelectorAll('.open-btn');

  const openModal = () => {
    modal.classList.add('open');
  }

  const closeModal = () => {
      modal.classList.remove('open');
  }

  cartBtnOpen.forEach(item => {
    item.addEventListener('click', () => {
      openModal();
    });
  });

  modal.addEventListener('click', e => {
  if (e.target.classList.contains('cart-modal__overlay') || e.target.closest('.cart-modal__header--close')) {
    closeModal();
  }
  });
}

const restFunc = () => {
  const container = document.querySelector('#rests-container');
  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest1.jpg'
    },
    {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest2.jpg'
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest3.jpg'
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest4.jpg'
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest5.jpg'
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest6.jpg'
    }
  ];

  const renderRests = array => {
    container.innerHTML = '';

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <a href="./goods.html?id=${card.id}" class="products-card">
          <div class="products-card__image">
            <img src="./img/rests/${card.image}" alt="${card.image}">
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">${card.title}</h4>
              <div class="products-card__description--badge">${card.time} мин</div>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--raiting">
                  <img src="./img/star.svg" alt="star">
                  ${card.rating}
                </div>
                <div class="products-card__description-info--price">
                  От ${card.price} ₽
                </div>
                <div class="products-card__description-info--group">
                ${card.type}
                </div>
              </div>
            </div>
          </div>
        </a>
      `)
      
    })
  }

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>';
  };

  if(container) {
    loading();
    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
}

const goodFunc = () => {
  const container = document.querySelector('#good-container');
  const goodArray = [
    {
      id: 0,
      name: 'Ролл угорь стандарт',
      price: 250,
      description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      image: 'food1.jpg'
    },
    {
      id: 1,
      name: 'Калифорния лосось стандарт',
      price: 250,
      description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      image: 'food2.jpg'
    },
    {
      id: 2,
      name: 'Окинава стандарт',
      price: 250,
      description: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      image: 'food3.jpg'
    },
    {
      id: 3,
      name: 'Цезарь маки хl',
      price: 250,
      description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      image: 'food4.jpg'
    },
    {
      id: 4,
      name: 'Ясай маки стандарт 185 г',
      price: 250,
      description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      image: 'food5.jpg'
    },
    {
      id: 5,
      name: 'Ролл с креветкой стандарт',
      price: 250,
      description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      image: 'food6.jpg'
    }
  ];

  const renderGoods = array => {
    container.innerHTML = '';

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <div class="products-card">
        <div class="products-card__image">
          <img src="./img/goods/${card.image}" alt="${card.image}">
        </div>
        <div class="products-card__description">
          <div class="products-card__description-row">
            <h5 class="products-card__description--name">${card.name}</h5>
          </div>
          <div class="products-card__description-row">
            <p class="products-card__description--text">
            ${card.description}
            </p>
          </div>
          <div class="products-card__description-row">
            <div class="products-card__description-controls">
              <button class="button button-main open-btn">
                <span class="button-text">В корзину</span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4202 14.9672H5.11549L5.58268 14.0156L13.3452 14.0016C13.6077 14.0016 13.8327 13.8141 13.8796 13.5547L14.9546 7.5375C14.9827 7.37969 14.9405 7.21719 14.8374 7.09375C14.7864 7.033 14.7228 6.98407 14.6511 6.95034C14.5793 6.91661 14.501 6.8989 14.4217 6.89844L4.54674 6.86562L4.46237 6.46875C4.40924 6.21562 4.18112 6.03125 3.92174 6.03125H1.50768C1.36139 6.03125 1.2211 6.08936 1.11766 6.1928C1.01423 6.29624 0.956116 6.43653 0.956116 6.58281C0.956116 6.7291 1.01423 6.86939 1.11766 6.97283C1.2211 7.07626 1.36139 7.13438 1.50768 7.13438H3.47487L3.84362 8.8875L4.75143 13.2828L3.58268 15.1906C3.52198 15.2725 3.48543 15.3698 3.47714 15.4714C3.46886 15.573 3.48918 15.675 3.5358 15.7656C3.62955 15.9516 3.81862 16.0688 4.02799 16.0688H5.00924C4.80005 16.3466 4.68706 16.685 4.68737 17.0328C4.68737 17.9172 5.40612 18.6359 6.29049 18.6359C7.17487 18.6359 7.89362 17.9172 7.89362 17.0328C7.89362 16.6844 7.77799 16.3453 7.57174 16.0688H10.0889C9.87974 16.3466 9.76675 16.685 9.76705 17.0328C9.76705 17.9172 10.4858 18.6359 11.3702 18.6359C12.2546 18.6359 12.9733 17.9172 12.9733 17.0328C12.9733 16.6844 12.8577 16.3453 12.6514 16.0688H14.4217C14.7249 16.0688 14.9733 15.8219 14.9733 15.5172C14.9724 15.3711 14.9137 15.2312 14.8101 15.1282C14.7065 15.0251 14.5663 14.9673 14.4202 14.9672V14.9672ZM4.77643 7.95312L13.7733 7.98281L12.8921 12.9172L5.82487 12.9297L4.77643 7.95312ZM6.29049 17.5266C6.01862 17.5266 5.79674 17.3047 5.79674 17.0328C5.79674 16.7609 6.01862 16.5391 6.29049 16.5391C6.56237 16.5391 6.78424 16.7609 6.78424 17.0328C6.78424 17.1638 6.73222 17.2894 6.63962 17.3819C6.54703 17.4745 6.42144 17.5266 6.29049 17.5266V17.5266ZM11.3702 17.5266C11.0983 17.5266 10.8764 17.3047 10.8764 17.0328C10.8764 16.7609 11.0983 16.5391 11.3702 16.5391C11.6421 16.5391 11.8639 16.7609 11.8639 17.0328C11.8639 17.1638 11.8119 17.2894 11.7193 17.3819C11.6267 17.4745 11.5011 17.5266 11.3702 17.5266V17.5266Z" fill="#fff"/>
                </svg>                 
              </button>
              <span class="products-card__description-controls--price">${card.price} ₽</span>
            </div>
          </div>
        </div>
      </div>
      `)
      
    })
  }

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>';
  };

  if(container) {
    loading();
    setTimeout(() => {
      renderGoods(goodArray);
    }, 1000);
  }
}

modalFunc();
restFunc();
goodFunc();


