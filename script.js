/* =========================================================
   CODEFORGE PORTFOLIO — SCRIPT.JS
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
       2. INTRO ANIMATION
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

    const mobileMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector(".navigation");

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", () => {
            navigation.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });

    }

    // Close mobile menu after clicking a navigation link

    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {

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
       4. SMOOTH NAVIGATION
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       5. DARK / LIGHT MODE
       ===================================================== */

    const themeButton = document.querySelector(".theme-button");

    // Check saved theme

    const savedTheme = localStorage.getItem("codeforge-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "codeforge-theme",
                isDark ? "dark" : "light"
            );

        });

    }


    /* =====================================================
       6. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

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


    /* =====================================================
       7. TEAM MEMBER SWITCHER
       ===================================================== */

    const members = [

        {
            name: "Samarth",
            role: "Developer • Sports • Tech Explorer",

            bio:
                "Samarth is the main man behind the technical side of CodeForge. " +
                "He enjoys exploring technology, experimenting with code and turning " +
                "ideas into practical digital experiences. He has been learning " +
                "Python, HTML, CSS, C and Java while building his understanding " +
                "of web development. Outside technology, he enjoys badminton and " +
                "basketball, bringing the same competitive and energetic mindset " +
                "into the team's work.",

            interests:
                "Python • HTML • CSS • C • Java • Badminton • Basketball",

            image:
                "samarth.jpg"
        },

        {
            name: "Aarti Ingle",
            role: "Speaker • Creative Designer",

            bio:
                "Aarti brings creativity and communication to CodeForge. She has " +
                "a natural interest in design and enjoys presenting ideas in a way " +
                "that is easy to understand and engaging. Her ability to communicate " +
                "ideas clearly helps the team turn technical concepts into experiences " +
                "that people can connect with. She adds a creative perspective to " +
                "the team's projects and presentations.",

            interests:
                "Creative Design • Speaking • Presentation • Ideas",

            image:
                "aarti.jpg"
        },

        {
            name: "Mayur",
            role: "Ideas • Agriculture • Street Smart",

            bio:
                "Mayur is the inspiration guy of CodeForge. His practical thinking, " +
                "knowledge of agriculture and street-smart approach help the team " +
                "look at problems from a different perspective. He brings ideas " +
                "that are grounded in real-world situations and encourages the team " +
                "to think beyond the obvious solution.",

            interests:
                "Agriculture • Practical Thinking • Ideas • Problem Solving",

            image:
                "mayur.jpg"
        }

    ];


    let currentMember = 0;

    const memberPhoto = document.querySelector(".member-photo");
    const memberName = document.querySelector(".member-information h3");
    const memberRole = document.querySelector(".member-information .member-role");
    const memberDescription = document.querySelector(".member-description");
    const memberInterests = document.querySelector(".member-interests");
    const memberCounter = document.querySelector(".member-counter");

    const nextButton = document.querySelector(".member-next");
    const previousButton = document.querySelector(".member-prev");


    function displayMember(index) {

        const member = members[index];

        if (!member) return;


        // Small transition

        if (memberPhoto) {
            memberPhoto.style.opacity = "0";
            memberPhoto.style.transform = "translateY(10px)";
        }

        if (memberName) {
            memberName.style.opacity = "0";
        }


        setTimeout(() => {

            if (memberPhoto) {
                memberPhoto.src = member.image;
                memberPhoto.alt = `${member.name} - CodeForge team member`;

                memberPhoto.style.opacity = "1";
                memberPhoto.style.transform = "translateY(0)";
            }

            if (memberName) {
                memberName.textContent = member.name;
                memberName.style.opacity = "1";
            }

            if (memberRole) {
                memberRole.textContent = member.role;
            }

            if (memberDescription) {
                memberDescription.textContent = member.bio;
            }

            if (memberInterests) {
                memberInterests.textContent = member.interests;
            }

            if (memberCounter) {
                memberCounter.textContent =
                    `${index + 1} / ${members.length}`;
            }

        }, 180);

    }


    if (nextButton) {

        nextButton.addEventListener("click", () => {

            currentMember++;

            if (currentMember >= members.length) {
                currentMember = 0;
            }

            displayMember(currentMember);

        });

    }


    if (previousButton) {

        previousButton.addEventListener("click", () => {

            currentMember--;

            if (currentMember < 0) {
                currentMember = members.length - 1;
            }

            displayMember(currentMember);

        });

    }


    // Load first member

    if (members.length > 0) {
        displayMember(0);
    }


    /* =====================================================
       8. PROJECT PROGRESS GIMMICK
       ===================================================== */

    const signButton = document.querySelector(".sign-button");
    const progressModal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal-close");

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


    // Close modal when clicking outside

    if (progressModal) {

        progressModal.addEventListener("click", (event) => {

            if (event.target === progressModal) {
                progressModal.classList.remove("active");
            }

        });

    }


    /* =====================================================
       9. ESCAPE KEY CLOSES MODAL
       ===================================================== */

    document.addEventListener("keydown", (event) => {

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

    const contactForm = document.querySelector(".contact-form");
    const formMessage = document.querySelector(".form-message");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

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

    const scrollProgress = document.querySelector(".scroll-progress");

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (pageHeight <= 0) return;

        const progress =
            (scrollTop / pageHeight) * 100;

        scrollProgress.style.width = `${progress}%`;

    }

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();


    /* =====================================================
       12. HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".navigation");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       13. BUTTON MICRO-INTERACTION
       ===================================================== */

    const buttons = document.querySelectorAll(
        "button, .button, .project-button"
    );

    buttons.forEach(button => {

        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.96)";
        });

        button.addEventListener("mouseup", () => {
            button.style.transform = "";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

    });


    /* =====================================================
       14. FLOATING NETWORK NODES
       ===================================================== */

    const floatingNodes =
        document.querySelectorAll(".floating-node");

    floatingNodes.forEach((node, index) => {

        const speed =
            2.5 + (index * 0.35);

        const delay =
            index * 0.25;

        node.style.animationDuration =
            `${speed}s`;

        node.style.animationDelay =
            `${delay}s`;

    });


    /* =====================================================
       15. CUSTOM CURSOR
       ===================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");

    // Only enable custom cursor on devices that actually have a mouse

    const hasMouse =
        window.matchMedia("(pointer: fine)").matches;

    if (cursorDot && cursorRing && hasMouse) {

        window.addEventListener("mousemove", (event) => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;

            cursorRing.style.left =
                `${event.clientX}px`;

            cursorRing.style.top =
                `${event.clientY}px`;

        });


        const hoverElements = document.querySelectorAll(
            "a, button, input, textarea, select, .project-card, .skill-tag"
        );

        hoverElements.forEach(element => {

            element.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover");
            });

            element.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
            });

        });

    }


    /* =====================================================
       16. ACTIVE NAVIGATION LINK
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".navigation a");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    /* =====================================================
       17. IMAGE FALLBACK
       ===================================================== */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            image.style.opacity = "0.5";

            console.warn(
                `Image could not be loaded: ${image.src}`
            );

        });

    });


    /* =====================================================
       18. PREVENT ANIMATION JUMPS ON RESIZE
       ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            updateScrollProgress();
            updateActiveNavigation();

        }, 150);

    });


    /* =====================================================
       19. CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%c CODEFORGE ",
        "font-size: 20px; font-weight: bold;"
    );

    console.log(
        "Forging the future, One line at a time."
    );

});
/* =====================================================
   TEAM MEMBERS
===================================================== */

const members = [

    {
        name: "Samarth",

        role: "FOUNDER / DEVELOPER / SPORTY GUY",

        image: "samarth.jpg.jpg",

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

        role: "CREATIVE DESIGNER / SPEAKER",

        image: "aarti.jpg",

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

        role: "PRACTICAL THINKER / AGRICULTURE",

        image: "mayur.jpg",

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


/* =====================================================
   DISPLAY MEMBER
===================================================== */

function showMember(index) {

    const member = members[index];

    document.getElementById("memberImage").src =
        member.image;

    document.getElementById("memberImage").alt =
        member.name;

    document.getElementById("memberName").textContent =
        member.name;

    document.getElementById("memberRole").textContent =
        member.role;

    document.getElementById("memberDescription").textContent =
        member.description;

    document.getElementById("memberNumber").textContent =
        String(index + 1).padStart(2, "0");


    const interests =
        document.getElementById("memberInterests");

    interests.innerHTML = "";


    member.interests.forEach(function (interest) {

        const span = document.createElement("span");

        span.textContent = interest;

        interests.appendChild(span);

    });

}


/* =====================================================
   NEXT MEMBER
===================================================== */

document
    .getElementById("nextMember")
    .addEventListener("click", function () {

        currentMember++;

        if (currentMember >= members.length) {
            currentMember = 0;
        }

        showMember(currentMember);

    });


/* =====================================================
   PREVIOUS MEMBER
===================================================== */

document
    .getElementById("previousMember")
    .addEventListener("click", function () {

        currentMember--;

        if (currentMember < 0) {
            currentMember = members.length - 1;
        }

        showMember(currentMember);

    });


/* Load first member */

showMember(currentMember);
