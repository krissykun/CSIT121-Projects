// cursor trail
document.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => {
        sparkle.remove();
    },      600);
});

// makes external links open in new tab always
document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, window.location.href);
    if (url.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

