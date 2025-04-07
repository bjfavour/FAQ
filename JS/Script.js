const accordionItems = document.querySelectorAll(".accordion");

accordionItems.forEach((item) => {
    const question = item.querySelector(".arrange3");
    const answer = item.querySelector(".park");
    const openIcon = item.querySelector(".tog");
    const closeIcon = item.querySelector(".tog1");

    // Initially hide the answer and minus icon
    answer.style.display = "none";
    closeIcon.style.display = "none";

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // Close all other accordions
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.querySelector(".park");
                const otherOpenIcon = otherItem.querySelector(".tog");
                const otherCloseIcon = otherItem.querySelector(".tog1");
                
                otherAnswer.style.display = "none";
                otherOpenIcon.style.display = "block";
                otherCloseIcon.style.display = "none";
            }
        });

        // Toggle current accordion
        if (!isOpen) {
            answer.style.display = "block";
            openIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            answer.style.display = "none";
            openIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});

