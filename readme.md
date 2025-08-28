
### 6. Answer of the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    Answer: getElementById("id")- selects only one element with a specific id.
            getElementsByClassName- ("class")- selects all elements with a given class.
            querySelector("selector") - selects the first element that matches a CSS selector (id, class, tag, attribute etc). More flexible than getElementById
            querySelectorAll("selector") - selects all elements matching a CSS selector.
2. How do you **create and insert a new element into the DOM**?
    Answer: 1. Make a new element: document.getElement("div")
            2. Add text or attributes: div.textContent = "hello"
            3. Put it on the page: document.body.appendChild(div)
3. What is **Event Bubbling** and how does it work?
    Answer: When we click a child element ( like a button inside a div) , the event goes: button - div - body - document. This going up process is Event Bubbling.
4. What is **Event Delegation** in JavaScript? Why is it useful?
    Answer: Event Delegation means putting one event listener on a parent element instead of adding many listeners to each child.
            When a child element is clicked, the event bubbles up to the parent, and the parent checks which child was clicked.
            It's useful because: We write less code and it works for new elements added later.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
    Answer: preventDefault()- Stops the browser's default action
            stopPropagation()- Stops the event from bubbling up to parent elements.

