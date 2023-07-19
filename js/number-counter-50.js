function animateNumber(element, endNumber, duration) {
    const startNumber = 0;
    const range = endNumber - startNumber;
    const increment = endNumber > startNumber ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentNumber = startNumber;

    const updateNumber = () => {
      currentNumber += increment;
      element.textContent = currentNumber;
      if ((increment > 0 && currentNumber >= endNumber) || (increment < 0 && currentNumber <= endNumber)) {
        clearInterval(timer);
        setTimeout(() => {
            element.textContent += "+";
          }, 250);
        }
      
    };

    const timer = setInterval(updateNumber, stepTime);
  }

  const numberElement = document.getElementById("number");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateNumber(numberElement, 50, 1000);
      observer.disconnect();
    }
  });

  observer.observe(numberElement);