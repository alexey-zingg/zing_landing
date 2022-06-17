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

  window.addEventListener("resize", function () {
    if (isInViewport(wellcome)) startAnimateWellcome();
  });

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
  window.addEventListener(
    "resize",
    function () {
      if (window.matchMedia("(min-width: 757px)").matches) {
        isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
        isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
        isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");
        isInViewport(p4) ? p4.classList.add("inview") : p4.classList.remove("inview");
      }
    },
    { passive: true }
  );

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
  window.addEventListener(
    "resize",
    function () {
      if (window.matchMedia("(min-width: 757px)").matches) {
        isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
        isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
        isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");

        document.addEventListener("scroll", function () {
          isInViewport(p1) ? p1.classList.add("inview") : p1.classList.remove("inview");
          isInViewport(p2) ? p2.classList.add("inview") : p2.classList.remove("inview");
          isInViewport(p3) ? p3.classList.add("inview") : p3.classList.remove("inview");
        });
      }
    },
    { passive: true }
  );
})();

// HALLMARKS SCREEN
(function () {
  const recurring = document.querySelector("#recurring");
  const virtual = document.querySelector("#virtual");
  const recurringOrders = recurring.querySelectorAll(".order-line");
  let recurringStarted = false;

  if (window.matchMedia("(min-width: 757px)").matches) {
    if (isInViewport(recurring)) startAnimateRecurring();
    isInViewport(virtual) ? virtual.classList.add("inview") : virtual.classList.remove("inview");
  }

  document.addEventListener(
    "scroll",
    function () {
      if (window.matchMedia("(min-width: 757px)").matches) {
        if (isInViewport(recurring)) startAnimateRecurring();
        isInViewport(virtual) ? virtual.classList.add("inview") : virtual.classList.remove("inview");
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 757px)").matches) {
      if (isInViewport(recurring)) startAnimateRecurring();
      isInViewport(virtual) ? virtual.classList.add("inview") : virtual.classList.remove("inview");
    }
  });

  function startAnimateRecurring() {
    if (!recurringStarted) {
      recurringStarted = true;
      recurring.classList.add("inview");
      setTimeout(() => {
        recurringOrders[0].src = "assets/images/recurring/order_1_ch.svg";
        recurring.querySelector(".z-drop").classList.add("exec");
        setTimeout(() => {
          recurring.querySelectorAll(".z-btn")[0].classList.add("click");
          setTimeout(() => {
            recurring.querySelectorAll(".z-btn")[0].classList.remove("click");
            recurring.querySelector(".z-drop").classList.remove("exec");
            recurringOrders[0].src = "assets/images/recurring/order_1_ex.svg";
            setTimeout(() => {
              recurringOrders[1].src = "assets/images/recurring/order_2_ch.svg";
              setTimeout(() => {
                recurringOrders[2].src = "assets/images/recurring/order_3_ch.svg";
                recurring.querySelector(".z-drop").classList.add("merge");
                setTimeout(() => {
                  recurring.querySelectorAll(".z-btn")[1].classList.add("click");
                  setTimeout(() => {
                    recurring.querySelectorAll(".z-btn")[1].classList.remove("click");
                    recurring.querySelector(".z-drop").classList.remove("merge");
                    recurringOrders[1].classList.add("hide");
                    recurringOrders[2].classList.add("hide");
                    setTimeout(() => {
                      recurring.querySelector(".order-mr").classList.add("on");
                      setTimeout(() => {
                        stopAnimateRecurring();

                        setTimeout(() => {
                          startAnimateRecurring();
                        }, 1000);
                      }, 2000);
                    }, 50);
                  }, 1000);
                }, 1000);
              }, 250);
            }, 1000);
          }, 1000);
        }, 500);
      }, 1500);
    }
  }

  function stopAnimateRecurring() {
    if (recurringStarted) {
      recurringStarted = false;
      //recurring.classList.remove("inview");
      recurringOrders[1].classList.remove("hide");
      recurringOrders[2].classList.remove("hide");
      recurring.querySelector(".order-mr").classList.remove("on");
      recurringOrders[0].src = "assets/images/recurring/order_1.svg";
      recurringOrders[1].src = "assets/images/recurring/order_2.svg";
      recurringOrders[2].src = "assets/images/recurring/order_3.svg";
    }
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
