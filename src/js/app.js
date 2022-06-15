// NAVBAR
document.querySelector(".navbar__toggler").addEventListener("click", function (e) {
  const nav = document.querySelector(".navbar__nav");
  !nav.classList.contains("show") ? nav.classList.add("show") : nav.classList.remove("show");
});

// ANIMATION
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 50 && rect.bottom >= window.innerHeight - document.documentElement.clientHeight + 50;
}

// WELLCOME SCREEN
(function () {
  const wellcome = document.querySelector("#wellcome");
  let welcomeStarted = false;

  if (isInViewport(wellcome)) startAnimateWellcome();

  document.addEventListener(
    "scroll",
    function () {
      if (isInViewport(wellcome)) startAnimateWellcome();
    },
    { passive: true }
  );

  function startAnimateWellcome() {
    const iphone = wellcome.querySelector(".iphone");
    const browser = wellcome.querySelector(".browser");
    iphone.classList.add("inview");
    browser.classList.add("inview");
    if (!welcomeStarted && window.matchMedia("(min-width: 757px)").matches) {
      welcomeStarted = true;
      setTimeout(() => {
        wellcome.querySelector(".z-toggler .inp").classList.add("act");
        setTimeout(() => {
          wellcome.querySelector(".z-inp.holder").classList.add("act");
          setTimeout(() => {
            wellcome.querySelector(".z-inp.holder").classList.add("done");
            wellcome.querySelector(".z-inp.card").classList.add("act");
            setTimeout(() => {
              wellcome.querySelector(".z-inp.card").classList.add("done");
              wellcome.querySelector(".z-inp.valid").classList.add("act");
              setTimeout(() => {
                wellcome.querySelector(".z-inp.valid").classList.add("done");
                wellcome.querySelector(".z-inp.cvv").classList.add("act");
                setTimeout(() => {
                  wellcome.querySelector(".z-inp.cvv").classList.add("done");
                  wellcome.querySelector(".z-btn").classList.add("click");
                  setTimeout(() => {
                    wellcome.querySelector("#step_2").classList.add("act");
                    setTimeout(() => {
                      stopAnimateWellcome();
                      startAnimateWellcome();
                    }, 5000);
                  }, 500);
                }, 1000);
              }, 1000);
            }, 2500);
          }, 1500);
        }, 1250);
      }, 3000);
    }
  }

  function stopAnimateWellcome() {
    welcomeStarted = false;
    const iphone = wellcome.querySelector(".iphone");
    const browser = wellcome.querySelector(".browser");
    iphone.classList.remove("inview");
    browser.classList.remove("inview");

    wellcome.querySelector(".z-toggler .inp").classList.remove("act");

    wellcome.querySelector(".z-inp.holder").classList.remove("act");
    wellcome.querySelector(".z-inp.holder").classList.remove("done");

    wellcome.querySelector(".z-inp.card").classList.remove("act");
    wellcome.querySelector(".z-inp.card").classList.remove("done");

    wellcome.querySelector(".z-inp.valid").classList.remove("act");
    wellcome.querySelector(".z-inp.valid").classList.remove("done");

    wellcome.querySelector(".z-inp.cvv").classList.remove("act");
    wellcome.querySelector(".z-inp.cvv").classList.remove("done");

    wellcome.querySelector(".z-btn").classList.remove("click");

    wellcome.querySelector("#step_2").classList.remove("act");
  }
})();

// PAYMENTS SCREEN
(function () {
  const p1 = document.querySelector("#payment_1");
  const p2 = document.querySelector("#payment_2");
  const p3 = document.querySelector("#payment_3");
  const p4 = document.querySelector("#payment_4");

  if (window.matchMedia("(min-width: 757px)").matches) {
    isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
    isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
    isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");
    isInViewport(p4) ? p4.classList.add("inview") : p4.classList.remove("inview");

    document.addEventListener(
      "scroll",
      function () {
        isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
        isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
        isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");
        isInViewport(p4) ? p4.classList.add("inview") : p4.classList.remove("inview");
      },
      { passive: true }
    );
  }

  // nav
  const links = document.querySelectorAll(".payments__nav ul li a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 100;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
    return false;
  }
})();

// ADVANTAGES SCREEN
(function () {
  const p1 = document.querySelector("#advantage_1");
  const p2 = document.querySelector("#advantage_2");
  const p3 = document.querySelector("#advantage_3");

  if (window.matchMedia("(min-width: 757px)").matches) {
    isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
    isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
    isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");

    document.addEventListener(
      "scroll",
      function () {
        isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
        isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
        isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");
      },
      { passive: true }
    );
  }
})();

// SUPPORT SCREEN
(function () {
  const support = document.querySelector(".support__animation");

  if (window.matchMedia("(min-width: 757px)").matches) {
    isInViewport(support) ? support.classList.add("inview") : support.classList.remove("inview");
    document.addEventListener(
      "scroll",
      function () {
        isInViewport(support) ? support.classList.add("inview") : support.classList.remove("inview");
      },
      { passive: true }
    );
  }
})();
