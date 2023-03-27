// const input = document.querySelector("input");

const debounce = (callback, delay) => {
    let timer;
    return (e) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(e);
        }, delay)
    }
}

// input.addEventListener("keyup", debounce((e) => {
//     console.log(e.target.value);
// }, 1000));

//const body = document.querySelector("body");
const throttle = (callback, delay) => {
    let timer;
    return () => {
        if (!timer) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay)
        }
    }
}

// document.addEventListener("scroll", throttle((e) => {
//     console.log(window.pageYOffset);
// }, 1000))
