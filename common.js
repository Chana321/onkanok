const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

function closeMenu() {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove('active');
  navToggle.classList.remove('active');
  document.body.classList.remove('hide-floating');
}

function setActiveNav() {
  const links = document.querySelectorAll('.nav-menu a');
  const currentFile = location.pathname.replace(/\/+$/, '').split('/').pop() || 'index.html';
  const currentHash = location.hash;

  links.forEach(link => link.classList.remove('active'));

  let activeLink;
  if (currentFile === 'sell' || currentFile === 'sell.html') {
    activeLink = [...links].find(link => {
      const href = link.getAttribute('href') || '';
      return href === 'sell' || href === 'sell.html' || href === '/sell';
    });
  } else if (currentHash === '#listings') {
    activeLink = [...links].find(link => link.getAttribute('href')?.includes('#listings'));
  } else {
    activeLink = [...links].find(link => {
      const href = link.getAttribute('href');
      return href === '#' || href === '/' || href === 'index.html';
    });
  }

  activeLink?.classList.add('active');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', e => {
    e.stopPropagation();
    const isActive = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('hide-floating', isActive);
  });

  document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  setActiveNav();
  window.addEventListener('hashchange', setActiveNav);
}

function toggleFAB() {
  document.getElementById('fabMain')?.classList.toggle('active');
  document.getElementById('fabOptions')?.classList.toggle('show');
}

const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
}
