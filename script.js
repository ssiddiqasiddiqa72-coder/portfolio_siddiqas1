/**
 * Siddiqa Portfolio - Main JavaScript
 * Handles: loader, navigation, scroll effects, form validation, animations
 */

(function () {
  'use strict';

  /* ============================================
     DOM Elements
     ============================================ */
  const loader = document.getElementById('loader');
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const scrollTopBtn = document.getElementById('scroll-top');
  const contactForm = document.getElementById('contact-form');
  const revealElements = document.querySelectorAll('.reveal');
  const skillCards = document.querySelectorAll('.skill-card');
  const yearEl = document.getElementById('year');

  const sections = document.querySelectorAll('section[id]');

  /* ============================================
     Page Loader
     ============================================ */
  function initLoader() {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        initHeroReveal();
      }, 800);
    });

    document.body.classList.add('no-scroll');
  }

  /* ============================================
     Hero Reveal on Load
     ============================================ */
  function initHeroReveal() {
    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach(function (el, index) {
      setTimeout(function () {
        el.classList.add('visible');
      }, index * 100);
    });
  }

  /* ============================================
     Mobile Navigation
     ============================================ */
  function initMobileNav() {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      });
    });

    document.addEventListener('click', function (e) {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  /* ============================================
     Sticky Header on Scroll
     ============================================ */
  function initHeaderScroll() {
    function updateHeader() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ============================================
     Active Section Highlighting
     ============================================ */
  function initActiveSection() {
    function setActiveLink() {
      const scrollY = window.scrollY + 120;

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();
  }

  /* ============================================
     Scroll to Top Button
     ============================================ */
  function initScrollTop() {
    function toggleScrollTop() {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
        scrollTopBtn.removeAttribute('hidden');
      } else {
        scrollTopBtn.classList.remove('visible');
        scrollTopBtn.setAttribute('hidden', '');
      }
    }

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleScrollTop, { passive: true });
    toggleScrollTop();
  }

  /* ============================================
     Scroll Reveal Animations
     ============================================ */
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(function (el) {
      if (!el.closest('.hero')) {
        observer.observe(el);
      }
    });
  }

  /* ============================================
     Skill Progress Bars Animation
     ============================================ */
  function initSkillBars() {
    const skillObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillCards.forEach(function (card) {
      skillObserver.observe(card);
    });
  }

  /* ============================================
     Typing Effect for Hero Title
     ============================================ */
  function initTypingEffect() {
    const titleEl = document.getElementById('typed-title');
    if (!titleEl) return;

    const text = 'Aspiring Fullstack Developer';
    let index = 0;
    let isDeleting = false;
    let pauseCount = 0;

    function type() {
      if (!isDeleting && index <= text.length) {
        titleEl.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
          isDeleting = true;
          pauseCount = 0;
          setTimeout(type, 2000);
          return;
        }
      } else if (isDeleting && index >= 0) {
        if (pauseCount < 20) {
          pauseCount++;
          setTimeout(type, 50);
          return;
        }
        titleEl.textContent = text.substring(0, index);
        index--;
        if (index < 0) {
          isDeleting = false;
          index = 0;
          setTimeout(type, 500);
          return;
        }
      }
      setTimeout(type, isDeleting ? 40 : 80);
    }

    setTimeout(type, 1500);
  }

  /* ============================================
     Contact Form Validation
     ============================================ */
  function initContactForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('form-success');

    function showError(inputId, message) {
      const errorEl = document.getElementById(inputId + '-error');
      const inputEl = document.getElementById(inputId);
      if (errorEl) errorEl.textContent = message;
      if (inputEl) inputEl.classList.add('error');
    }

    function clearErrors() {
      ['name', 'email', 'message'].forEach(function (id) {
        const errorEl = document.getElementById(id + '-error');
        const inputEl = document.getElementById(id);
        if (errorEl) errorEl.textContent = '';
        if (inputEl) inputEl.classList.remove('error');
      });
      formSuccess.hidden = true;
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      if (!nameInput.value.trim()) {
        showError('name', 'Please enter your name.');
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters.');
        isValid = false;
      }

      if (!emailInput.value.trim()) {
        showError('email', 'Please enter your email.');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        showError('message', 'Please enter your message.');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters.');
        isValid = false;
      }

      if (isValid) {
        formSuccess.hidden = false;
        contactForm.reset();
        setTimeout(function () {
          formSuccess.hidden = true;
        }, 5000);
      }
    });

    [nameInput, emailInput, messageInput].forEach(function (input) {
      input.addEventListener('input', function () {
        const id = input.id;
        document.getElementById(id + '-error').textContent = '';
        input.classList.remove('error');
      });
    });
  }

  /* ============================================
     Footer Year
     ============================================ */
  function initFooterYear() {
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ============================================
     Smooth Scroll for Anchor Links
     ============================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================
     Initialize All
     ============================================ */
  function init() {
    initLoader();
    initMobileNav();
    initHeaderScroll();
    initActiveSection();
    initScrollTop();
    initScrollReveal();
    initSkillBars();
    initTypingEffect();
    initContactForm();
    initFooterYear();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
