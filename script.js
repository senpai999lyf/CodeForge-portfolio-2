/* =========================================================
   CODEFORGE PORTFOLIO — CLEAN SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. LOADER
    ===================================================== */

    const loader = document.querySelector(".loader-screen");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("loaded");
            }

        }, 900);

    });


    /* =====================================================
       2. INTRO SCREEN
    ===================================================== */

    const intro = document.querySelector(".intro-screen");

    if (intro) {

        setTimeout(() => {
            intro.classList.add("hide");
        }, 2000);

    }


    /* =====================================================
       3. MOBILE NAVIGATION
    ===================================================== */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector(".navigation");


    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", () => {

            navigation.classList.toggle("active");
            mobileMenu.classList.toggle("active");

        });

    }


    /* Close mobile navigation after selecting a link */

    document
        .querySelectorAll(".navigation a")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (navigation) {
                    navigation.classList.remove("active");
                }

                if (mobileMenu) {
                    mobileMenu.classList.remove("active");
                }

            });

        });


    /* =====================================================
       4. SMOOTH SCROLLING
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function (event) {

                const targetID =
                    this.getAttribute("href");

                if (!targetID || targetID === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetID);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       5. DARK / LIGHT MODE
    ===================================================== */

    const themeButton =
        document.querySelector(".theme-button");

    const savedTheme =
        localStorage.getItem("codeforge-theme");


    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }


    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "codeforge-theme",
                isDark ? "dark" : "light"
            );

        });

    }


    /* =====================================================
       6. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       7. TEAM MEMBER SYSTEM
    ===================================================== */

    const members = [

        {
            name: "Samarth",

            role:
                "FOUNDER / DEVELOPER / SPORTY GUY",

            image:
                "samarth.jpg.jpg",

            description:
                "The main man behind CodeForge. A sporty personality who enjoys badminton and basketball while developing his coding skills through Python and basic HTML. Curious, hands-on and always ready to turn an idea into something real.",

            interests: [
                "Python",
                "HTML",
                "Badminton",
                "Basketball"
            ]

        },

        {
            name: "Aarti Ingle",

            role:
                "CREATIVE DESIGNER / SPEAKER",

            image:
                "aarti.jpg",

            description:
                "Aarti brings creativity, communication and confidence to CodeForge. She has an interest in creative design and public speaking, helping the team present ideas clearly while adding a strong visual and communication perspective to projects.",

            interests: [
                "Creative Design",
                "Public Speaking",
                "Communication"
            ]

        },

        {
            name: "Mayur",

            role:
                "PRACTICAL THINKER / AGRICULTURE",

            image:
                "mayur.jpg",

            description:
                "Mayur brings a practical perspective to CodeForge with an interest in agriculture and real-world problem solving. His grounded approach helps the team look at ideas from a practical point of view and consider how technology can be applied to everyday challenges.",

            interests: [
                "Agriculture",
                "Problem Solving",
                "Practical Thinking"
            ]

        }

    ];


    let currentMember = 0;


    const memberImage =
        document.getElementById("memberImage");

    const memberName =
        document.getElementById("memberName");

    const memberRole =
        document.getElementById("memberRole");

    const memberDescription =
        document.getElementById("memberDescription");

    const memberInterests =
        document.getElementById("memberInterests");

    const memberNumber =
        document.getElementById("memberNumber");

    const nextMember =
        document.getElementById("nextMember");

    const previousMember =
        document.getElementById("previousMember");


    function showMember(index) {

        const member = members[index];

        if (!member) {
            return;
        }


        /* Fade image and text */

        if (memberImage) {
            memberImage.style.opacity = "0";
        }

        if (memberName) {
            memberName.style.opacity = "0";
        }


        setTimeout(() => {

            /* Image */

            if (memberImage) {

                memberImage.src =
                    member.image;

                memberImage.alt =
                    `${member.name} - CodeForge team member`;

                memberImage.style.opacity = "1";

            }


            /* Name */

            if (memberName) {

                memberName.textContent =
                    member.name;

                memberName.style.opacity = "1";

            }


            /* Role */

            if (memberRole) {

                memberRole.textContent =
                    member.role;

            }


            /* Description */

            if (memberDescription) {

                memberDescription.textContent =
                    member.description;

            }


            /* Counter */

            if (memberNumber) {

                memberNumber.textContent =
                    String(index + 1).padStart(2, "0");

            }


            /* Interests */

            if (memberInterests) {

                memberInterests.innerHTML = "";

                member.interests.forEach(interest => {

                    const tag =
                        document.createElement("span");

                    tag.textContent =
                        interest;

                    memberInterests.appendChild(tag);

                });

            }

        }, 150);

    }


    if (nextMember) {

        nextMember.addEventListener("click", () => {

            currentMember++;

            if (currentMember >= members.length) {
                currentMember = 0;
            }

            showMember(currentMember);

        });

    }


    if (previousMember) {

        previousMember.addEventListener("click", () => {

            currentMember--;

            if (currentMember < 0) {
                currentMember = members.length - 1;
            }

            showMember(currentMember);

        });

    }


    /* Load first member */

    showMember(0);


    /* =====================================================
       8. PROJECT PROGRESS MODAL
    ===================================================== */

    const signButton =
        document.querySelector(".sign-button");

    const progressModal =
        document.querySelector(".modal");

    const modalClose =
        document.querySelector(".modal-close");


    if (signButton && progressModal) {

        signButton.addEventListener("click", () => {

            progressModal.classList.add("active");

        });

    }


    if (modalClose && progressModal) {

        modalClose.addEventListener("click", () => {

            progressModal.classList.remove("active");

        });

    }


    /* Click outside modal */

    if (progressModal) {

        progressModal.addEventListener("click", event => {

            if (event.target === progressModal) {

                progressModal.classList.remove("active");

            }

        });

    }


    /* =====================================================
       9. ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (progressModal) {
                progressModal.classList.remove("active");
            }

            if (navigation) {
                navigation.classList.remove("active");
            }

        }

    });


    /* =====================================================
       10. CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(".contact-form");

    const formMessage =
        document.querySelector(".form-message");


    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Thanks! Your message has been received by CodeForge.";

                formMessage.classList.add("show");

            }

            contactForm.reset();

        });

    }


    /* =====================================================
       11. SCROLL PROGRESS BAR
    ===================================================== */

    const scrollProgress =
        document.querySelector(".scroll-progress");


    function updateScrollProgress() {

        if (!scrollProgress) {
            return;
        }

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;


        if (pageHeight <= 0) {
            return;
        }


        const progress =
            (scrollTop / pageHeight) * 100;


        scrollProgress.style.width =
            `${progress}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();


    /* =====================================================
       12. HEADER SCROLL EFFECT
    ===================================================== */

    const siteHeader =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 50) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =====================================================
       13. BUTTON MICRO INTERACTION
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            "button, .button, .project-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "mousedown",
            () => {
                button.classList.add(
                    "button-pressed"
                );
            }
        );


        button.addEventListener(
            "mouseup",
            () => {
                button.classList.remove(
                    "button-pressed"
                );
            }
        );


        button.addEventListener(
            "mouseleave",
            () => {
                button.classList.remove(
                    "button-pressed"
                );
            }
        );

    });


    /* =====================================================
       14. NETWORK CARDS
    ===================================================== */

    /*
       IMPORTANT:

       The current HTML uses:

       .network-orbit
       .network-card

       We intentionally DO NOT use the old
       .codeforge-network system here.

       The cards remain stable and readable.
    */

    const networkCards =
        document.querySelectorAll(
            ".network-orbit .network-card"
        );


    networkCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "network-card-active"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "network-card-active"
                );

            }
        );


        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "network-card-active"
                );

            }
        );

    });


    /* =====================================================
       15. CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");


    const hasMouse =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (cursorDot && cursorRing && hasMouse) {

        window.addEventListener(
            "mousemove",
            event => {

                cursorDot.style.left =
                    `${event.clientX}px`;

                cursorDot.style.top =
                    `${event.clientY}px`;

                cursorRing.style.left =
                    `${event.clientX}px`;

                cursorRing.style.top =
                    `${event.clientY}px`;

            }
        );


        const hoverElements =
            document.querySelectorAll(
                "a, button, input, textarea, select, .project-card, .skill-tag, .network-card"
            );


        hoverElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    document.body.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        });

    }


    /* =====================================================
       16. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".navigation a"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =====================================================
       17. IMAGE FALLBACK
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.opacity =
                        "0.5";

                    console.warn(
                        "Image could not be loaded:",
                        image.src
                    );

                }
            );

        });


    /* =====================================================
       18. RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer = setTimeout(() => {

                updateScrollProgress();
                updateActiveNavigation();

            }, 150);

        }
    );


    /* =====================================================
       19. CONSOLE
    ===================================================== */

    console.log(
        "%c CODEFORGE ",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Forging the future, One line at a time."
    );

});
