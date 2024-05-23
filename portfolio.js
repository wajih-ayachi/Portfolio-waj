let canToggle = true;
function responsive() {
  if (window.innerHeight > window.innerWidth) {
    $('#navbarPc').addClass("d-none");
    $('#navbarMobile').removeClass("d-none");
    $('#columnLeft').addClass("d-none");
    $('#columnRight').addClass("d-none");
  } else {
    $('#navbarPc').removeClass("d-none");
    $('#navbarMobile').addClass("d-none");
    $('#columnLeft').removeClass("d-none");
    $('#columnRight').removeClass("d-none");
    if (window.innerHeight < 500) {
      $('#columnLeft').addClass("d-none");
      $('#columnRight').addClass("d-none");
    }
  }
  // if (window.innerWidth < 960) {
  //   if (canToggle) {
  //     const switchCarousel1 = $('#switchCarousel1').html();
  //     const switchText1 = $('#switchText1').html();
  //     const switchModal1 = $('#switchModal1').html();
  //     $('#switchContainer1').html('');
  //     $('#switchContainer1').append([
  //       switchText1,
  //       switchCarousel1,
  //       switchModal1
  //     ])
  //     $('#switchContainer1').append(switchText1);
  //     canToggle = false;
  //   }
  // }
}
function activateModal(buttonId, modalId, closeId) {
  $(`#${buttonId}`).on('click', () => {
    $(`#${modalId}`).addClass('active')
  })
  $(`#${closeId}`).on('click', () => {
    $(`#${modalId}`).removeClass('active')
  })
}

function resetCheck() {
  $('input[class=carousel-locator]:checked').prop('checked', false);
}

function scrollToAnchor(anchorId){
  const anchor = $(`#${anchorId}`);
  $('html,body').animate({scrollTop: anchor.offset().top}, 'fast');
}

function hoverResetChecked(inputToCheck) {
  $('input[class=carousel-locator]:checked').prop('checked', false);
  $(`#${inputToCheck}`).prop('checked', true);
}

function appearCarousel(coverId, carouselId) {
  $(`#${coverId}`).addClass('d-none');
  $(`#${carouselId}`).removeClass('d-none');
}

function appearCover(coverId, carouselId) {
  $(`#${coverId}`).removeClass('d-none');
  $(`#${carouselId}`).addClass('d-none');
}

function declareAOS() {
  AOS.init({
    once: true,
  });
  for (let i = 2 ; i <= 5 ; i += 1 ) {
    $(`#blocksection${i}`).removeClass('aos-animate') 
  }
  $('.accordionAOS').addClass('d-none');
  // for (let i = 1 ; i <= 5 ; i += 1 ) {
  //   $(`#menuAOS${i}`).removeClass('aos-animate') 
  // }
  // for (let i = 1 ; i <= 5 ; i += 1 ) {
  //   setTimeout(() => {
  //     $(`#menuAOS${i}`).addClass('aos-animate')
  //   }, i * 200);
  // }
  // document.addEventListener('aos:in:pictureAOS', () => {
  //   console.log('animated in');
  // });
  // $(document).on('aos:in:pictureAOS', () => {
  //   console.log('salut')
  // })
}

$(window).resize(() => {
  responsive();
})

$(document).ready(() => {
  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in');
  });
  responsive();
  declareAOS();
  // modal
  activateModal('buttonMobileModal', 'mobileModal', 'closeMobileModal')
  $('#buttonMobileModal').on('click', () => {
    $('.aos-animate').removeClass('aos-animate')
    for (let i = 1 ; i <= 5 ; i += 1 ) {
      setTimeout(() => {
        $(`#mobileAOS${i}`).addClass('aos-animate') 
      }, i * 100);
    }
  })
  activateModal('buttonBackofficeModal', 'backofficeModal', 'closeBackofficeModal')
  activateModal('buttonLocckerModal', 'locckerModal', 'closeLocckerModal')
  activateModal('buttonGardenmapModal', 'gardenmapModal', 'closeGardenmapModal')
  $('#buttonBackofficeModal').on('click', () => {
    resetCheck();
    $('#Bslide-1').prop('checked', true);
  });
  $('#closeBackofficeModal').on('click', () => {
    resetCheck();
    $('#startBslide-1').prop('checked', true);
    appearCover('coverLoccker', 'locckerCarousel');
    appearCarousel('coverBackoffice', 'backofficeCarousel');
    scrollToAnchor('buttonBackofficeModal');
  });
  $('#buttonLocckerModal').on('click', () => {
    resetCheck();
    $('#Lslide-1').prop('checked', true);
  });
  $('#closeLocckerModal').on('click', () => {
    resetCheck();
    $('#startLslide-1').prop('checked', true);
    appearCover('coverBackoffice', 'backofficeCarousel');
    appearCarousel('coverLoccker', 'locckerCarousel');
    scrollToAnchor('buttonLocckerModal');
  });
  $('#buttonGardenmapModal').on('click', () => {
    resetCheck();
    $('#Gslide-1').prop('checked', true);
  });
  $('#closeGardenmapModal').on('click', () => {
    resetCheck();
    $('#startGslide-1').prop('checked', true);
    appearCover('coverGardenmap', 'gardenmapCarousel');
    appearCarousel('coverGardenmap', 'gardenmapCarousel');
    scrollToAnchor('buttonGardenmapModal');
  });
  // cover
  $('#coverBackoffice').mouseenter(() => {
    appearCover('coverGardenmap', 'gardenmapCarousel');
    appearCover('coverLoccker', 'locckerCarousel');
    appearCarousel('coverBackoffice', 'backofficeCarousel');
    hoverResetChecked('startBslide-1');
  })

  $('#coverLoccker').mouseenter(() => {
    appearCover('coverGardenmap', 'gardenmapCarousel');
    appearCover('coverBackoffice', 'backofficeCarousel');
    appearCarousel('coverLoccker', 'locckerCarousel');
    hoverResetChecked('startLslide-1');
  })

  $('#coverGardenmap').mouseenter(() => {
    appearCover('coverLoccker', 'locckerCarousel');
    appearCover('coverBackoffice', 'backofficeCarousel');
    appearCarousel('coverGardenmap', 'gardenmapCarousel');
    hoverResetChecked('startGslide-1');
  })
  // mobile menu
  $('.customLinkMobile').on('click', () => {
    $('#mobileModal').removeClass('active')
  })
  $('.accordion-header').on('click', () => {
    $('.accordionAOS').removeClass('aos-animate');
    $('.accordionAOS').removeClass('d-none');
    console.log('yo')
    setTimeout(() => {
      $('.accordionAOS').addClass('aos-animate')
    }, 100);
  })

  $('.subMenu').on('click', (event) => {
    $('.triggered').removeClass('triggered');
    $(event.target).addClass('triggered');
    $('.blocksection').addClass('d-none');
    $(`#block${event.target.id}`).removeClass('d-none')
    $(`.block${event.target.id}AOS`).removeClass('aos-animate')
    setTimeout(() => {
      $(`.block${event.target.id}AOS`).addClass('aos-animate')
    }, 100);
  })
})

