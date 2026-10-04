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
        }, 650);
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
       14.5. INTERACTIVE CODEFORGE NETWORK
       ===================================================== */

    const networkContainer =
        document.querySelector(".hero-network");

    const networkNodes =
        document.querySelectorAll(".floating-node");


    /*
       Information shown when a network node is selected.

       The information is intentionally based on the existing
       CodeForge identity and projects.
    */

    const networkInformation = [

        {
            title: "CODE",
            label: "LANGUAGES & TOOLS",
            description:
                "The technical side of CodeForge is built around experimenting with code, learning different technologies and turning ideas into working digital experiences.",
            details:
                "HTML • CSS • JavaScript • Python • C • Java"
        },

        {
            title: "DESIGN",
            label: "CREATIVE THINKING",
            description:
                "Design helps CodeForge turn technical ideas into interfaces that are easier to understand, explore and enjoy.",
            details:
                "UI Design • Creativity • Visual Thinking • Presentation"
        },

        {
            title: "IDEAS",
            label: "PROBLEM SOLVING",
            description:
                "We start with an idea or everyday problem, break it down and experiment with possible solutions.",
            details:
                "Brainstorming • Experimentation • Practical Solutions"
        },

        {
            title: "TEAM",
            label: "THREE PEOPLE • ONE PROJECT",
            description:
                "CodeForge combines different personalities and strengths. Samarth focuses on technology and development, Aarti brings creativity and communication, while Mayur brings practical thinking and real-world perspectives.",
            details:
                "Samarth • Aarti • Mayur"
        },

        {
            title: "PROJECTS",
            label: "WHAT WE BUILD",
            description:
                "CodeForge uses projects as a way to turn learning into something tangible. The portfolio you're viewing is itself one of our projects.",
            details:
                "CodeForge Portfolio • Student Study Planner"
        },

        {
            title: "LEARNING",
            label: "BUILD • TEST • IMPROVE",
            description:
                "We're still students and constantly learning. Instead of pretending to know everything, we experiment, make mistakes and improve our work.",
            details:
                "Learning • Experimenting • Improving"
        }

    ];


    /*
       Create an information panel dynamically.

       This means you do not need to completely redesign
       the existing HTML just to make the network interactive.
    */

    let networkPanel = document.querySelector(
        ".codeforge-network-panel"
    );


    if (networkContainer && networkNodes.length > 0) {

        /*
           Add a class so the CSS can identify the interactive
           network without changing the existing HTML structure.
        */

        networkContainer.classList.add(
            "codeforge-interactive-network"
        );


        /*
           Assign information to the existing nodes.

           If there are more nodes than our information list,
           the remaining nodes still receive basic interaction.
        */

        networkNodes.forEach((node, index) => {

            const info =
                networkInformation[
                    index % networkInformation.length
                ];

            node.classList.add("network-interactive-node");

            node.setAttribute(
                "tabindex",
                "0"
            );

            node.setAttribute(
                "role",
                "button"
            );

            node.setAttribute(
                "aria-label",
                `Explore ${info.title} in CodeForge`
            );

            node.dataset.networkIndex =
                index;

        });


        /*
           Create the information panel only once.
        */

        if (!networkPanel) {

            networkPanel =
                document.createElement("div");

            networkPanel.className =
                "codeforge-network-panel";

            networkPanel.setAttribute(
                "aria-hidden",
                "true"
            );

            networkPanel.innerHTML = `

                <button
                    class="network-panel-close"
                    type="button"
                    aria-label="Close CodeForge network information"
                >
                    ×
                </button>

                <div class="network-panel-label">
                    CODEFORGE NETWORK
                </div>

                <div class="network-panel-title">
                    Explore CodeForge
                </div>

                <div class="network-panel-role">
                    Move over a node to discover more.
                </div>

                <p class="network-panel-description">
                    Explore the different parts of CodeForge.
                </p>

                <div class="network-panel-details">
                    CODE • DESIGN • IDEAS • TEAM
                </div>

            `;

            networkContainer.appendChild(
                networkPanel
            );

        }


        const networkPanelClose =
            networkPanel.querySelector(
                ".network-panel-close"
            );


        /*
           Show information for a selected node.
        */

        function showNetworkInformation(index) {

            const info =
                networkInformation[
                    index % networkInformation.length
                ];

            if (!info || !networkPanel) {
                return;
            }


            const title =
                networkPanel.querySelector(
                    ".network-panel-title"
                );

            const role =
                networkPanel.querySelector(
                    ".network-panel-role"
                );

            const description =
                networkPanel.querySelector(
                    ".network-panel-description"
                );

            const details =
                networkPanel.querySelector(
                    ".network-panel-details"
                );


            if (title) {
                title.textContent =
                    info.title;
            }

            if (role) {
                role.textContent =
                    info.label;
            }

            if (description) {
                description.textContent =
                    info.description;
            }

            if (details) {
                details.textContent =
                    info.details;
            }


            networkPanel.classList.add(
                "active"
            );

            networkPanel.setAttribute(
                "aria-hidden",
                "false"
            );

        }


        /*
           Close network information panel.
        */

        function closeNetworkInformation() {

            if (!networkPanel) {
                return;
            }

            networkPanel.classList.remove(
                "active"
            );

            networkPanel.setAttribute(
                "aria-hidden",
                "true"
            );

            networkNodes.forEach(node => {
                node.classList.remove(
                    "network-selected"
                );
            });

        }


        /*
           Add click + keyboard interaction.
        */

        networkNodes.forEach((node, index) => {

            node.addEventListener(
                "click",
                () => {

                    networkNodes.forEach(
                        otherNode => {
                            otherNode.classList.remove(
                                "network-selected"
                            );
                        }
                    );

                    node.classList.add(
                        "network-selected"
                    );

                    showNetworkInformation(
                        index
                    );

                }
            );


            node.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        node.click();

                    }

                }
            );


            /*
               Hover interaction.

               Nearby nodes receive a class so the network
               feels connected rather than each node behaving
               like an isolated button.
            */

            node.addEventListener(
                "mouseenter",
                () => {

                    node.classList.add(
                        "network-hover"
                    );

                    networkNodes.forEach(
                        otherNode => {

                            if (
                                otherNode !== node
                            ) {

                                otherNode.classList.add(
                                    "network-dimmed"
                                );

                            }

                        }
                    );

                }
            );


            node.addEventListener(
                "mouseleave",
                () => {

                    node.classList.remove(
                        "network-hover"
                    );

                    networkNodes.forEach(
                        otherNode => {

                            otherNode.classList.remove(
                                "network-dimmed"
                            );

                        }
                    );

                }
            );

        });


        /*
           Close button.
        */

        if (networkPanelClose) {

            networkPanelClose.addEventListener(
                "click",
                closeNetworkInformation
            );

        }


        /*
           Close the network panel with Escape.
        */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {
                    closeNetworkInformation();
                }

            }
        );


        /*
           Mouse movement interaction.

           The existing floating animation remains active.

           This adds a very subtle cursor-based movement on top
           rather than replacing the existing animation.
        */

        const hasFinePointer =
            window.matchMedia(
                "(pointer: fine)"
            ).matches;


        if (hasFinePointer) {

            let mouseX = 0;
            let mouseY = 0;

            let targetMouseX = 0;
            let targetMouseY = 0;


            window.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        networkContainer.getBoundingClientRect();

                    targetMouseX =
                        (
                            event.clientX -
                            (
                                rect.left +
                                rect.width / 2
                            )
                        ) / rect.width;

                    targetMouseY =
                        (
                            event.clientY -
                            (
                                rect.top +
                                rect.height / 2
                            )
                        ) / rect.height;

                }
            );


            function animateNetwork() {

                mouseX +=
                    (
                        targetMouseX -
                        mouseX
                    ) * 0.035;

                mouseY +=
                    (
                        targetMouseY -
                        mouseY
                    ) * 0.035;


                networkNodes.forEach(
                    (node, index) => {

                        /*
                           Keep the movement extremely small.

                           This prevents the nodes from flying
                           around or becoming distracting.
                        */

                        const movement =
                            7 + (index % 3) * 2;

                        const x =
                            mouseX *
                            movement;

                        const y =
                            mouseY *
                            movement;


                        node.style.setProperty(
                            "--network-mouse-x",
                            `${x}px`
                        );

                        node.style.setProperty(
                            "--network-mouse-y",
                            `${y}px`
                        );

                    }
                );


                requestAnimationFrame(
                    animateNetwork
                );

            }


            animateNetwork();

        }


        /*
           Touch devices.

           Tapping a node already triggers the same information
           panel, so no separate heavy touch system is necessary.
        */

        if (!hasFinePointer) {

            networkNodes.forEach(
                node => {

                    node.addEventListener(
                        "touchstart",
                        () => {

                            node.classList.add(
                                "network-hover"
                            );

                        },
                        {
                            passive: true
                        }
                    );

                }
            );

        }


        /*
           Optional network status indicator.

           Created dynamically so the existing HTML remains
           untouched.
        */

        let networkHint =
            networkContainer.querySelector(
                ".network-interaction-hint"
            );


        if (!networkHint) {

            networkHint =
                document.createElement("div");

            networkHint.className =
                "network-interaction-hint";

            networkHint.textContent =
                "INTERACTIVE NETWORK • HOVER OR CLICK A NODE";

            networkContainer.appendChild(
                networkHint
            );

        }

    }


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
            "a, button, input, textarea, select, .project-card, .skill-tag, .network-interactive-node"
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
