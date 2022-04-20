const ScrollContainer = document.querySelector("#ScrollContainer");
let LastIndex = 0;

(function () {
    const ScrollPoint = document.querySelector("#ScrollPoint");

    let PageHeight = window.innerHeight + 100;
    let Stop = false;

    window.addEventListener("resize", () => {
        PageHeight = window.innerHeight + 100;
        console.log(" %c PAGE RESIZE TO " + PageHeight, "background:lime;color:black;display:inline-block;padding:5px");
    });

    window.addEventListener("scroll", () => {
        const bound = ScrollPoint.getBoundingClientRect();
        if (bound.top < PageHeight) {
            if (!Stop) {
                Stop = true;
                console.log(" %c STOP " + LastIndex, "background:red;color:white;display:inline-block;padding:5px");

                GenerateNext();
            }
        } else {
            if (Stop) {
                console.log(" %c START " + LastIndex, "background:green;color:white;display:inline-block;padding:5px");
            }
            Stop = false;
        }
    });
})();

function GenerateNext() {
    for (let i = 0; i < 4; i++) {
        let element = document.createElement("div");
        element.textContent = "Element " + ((LastIndex++) + 1);
        element.className = "element";

        ScrollContainer.append(element);
    }
}

// First load
GenerateNext();