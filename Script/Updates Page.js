let degree = 0;


setInterval(() => {
    degree = (degree + 1) % 360;
    document.documentElement.style.setProperty('--deg', `${degree}deg`);
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const mainColor = styles.getPropertyValue('--deg');
    console.log(mainColor);
}, 25);
