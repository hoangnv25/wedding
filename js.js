// ani 2 ảnh
window.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.gt_img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3
    });

    imgs.forEach(img => observer.observe(img));
});




// 3 ảnh
window.addEventListener('scroll', () => 
{
    document.querySelectorAll('.img_small').forEach(el => 
    {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
        {
            // el.classList.add('album_hihi');
            el.classList.remove('js_left');
            el.classList.remove('js_right');
        }
    });
});

window.addEventListener('scroll', () => {
    const el = document.querySelector('.img_big');
    if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.remove('js_center');
        }
    }
});

// lời mời




// cf nha
document.addEventListener('DOMContentLoaded', () => {
    const cfContainer = document.querySelector('.cf_container');

    if (cfContainer) {
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.3
        });

        observer2.observe(cfContainer);
    }
});




// ani album
window.addEventListener('scroll', () => 
{
    document.querySelectorAll('.js_album').forEach(el => 
    {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
        {
            // el.classList.add('album_hihi');
            el.classList.remove('album_left');
            el.classList.remove('album_right');
        }
        // else
        // {
        //     el.classList.add('album_left');
        //     el.classList.add('album_right');
        // }
    });
});

// thank
document.addEventListener('DOMContentLoaded', () => {
    const thankDesc = document.querySelector('.thank_desc');

    if (thankDesc) {
        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        observer3.observe(thankDesc);
    }
});


// nhạc
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const indicator = document.getElementById('audioIndicator');
  
    const playAudio = () => {
      if (!audio.paused) return;
  
      audio.play()
        .then(() => {
          console.log('Phát nhạc thành công');
          indicator.style.display = 'none'; // ẩn cái loa
          removeListeners();
        })
        .catch((err) => {
          console.warn('Trình duyệt chặn phát nhạc:', err);
          // Vẫn giữ loa lại để chờ thao tác khác
        });
    };
  
    const removeListeners = () => {
      ['click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, playAudio);
        document.removeEventListener(evt, playAudio);
      });
    };
  
    // Gán tất cả sự kiện tương tác
    ['click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach(evt => {
      window.addEventListener(evt, playAudio);
      document.addEventListener(evt, playAudio);
    });
  });
  
  




  