document.addEventListener('DOMContentLoaded', function() {
    // Create the outer div
    var outerDiv = document.createElement('div');
    outerDiv.className = 'exvims';
    outerDiv.style.position = 'absolute';
    outerDiv.style.top = '0px';
    outerDiv.style.left = '0px';
    outerDiv.style.width = '320px';
    outerDiv.style.height = '7386px';
    outerDiv.style.zIndex = '2147483647';
    outerDiv.style.pointerEvents = 'none';
    outerDiv.style.backgroundColor = 'rgba(255, 0, 255, 0.5)'; // Purple color with transparency
    
    // Create the inner div
    var innerDiv = document.createElement('div');
    innerDiv.style.border = 'none';
    innerDiv.style.position = 'absolute';
    innerDiv.style.top = '0px';
    innerDiv.style.left = '0px';
    innerDiv.style.width = '320px';
    innerDiv.style.height = '7385px';
    innerDiv.style.zIndex = '2147483647';
    innerDiv.style.pointerEvents = 'auto';
    
    // Append the inner div to the outer div
    outerDiv.appendChild(innerDiv);
    
    // Append the outer div to the body
    document.body.appendChild(outerDiv);
    
    // Add a click event listener to the outer div to open a new tab
    outerDiv.addEventListener('click', function() {
        window.open('https://topduppy.info/pop-go/53107', '_blank');
    });
    
    // Add a slight delay to simulate additional behavior that may interfere with DevTools
    setTimeout(function() {
        // Add some content to simulate dynamic behavior
        innerDiv.innerHTML = 'This content might cause issues in DevTools.';
    }, 1000);
    
    // Prevent the user from expanding the div in DevTools
    Object.defineProperty(outerDiv, 'clientHeight', {
        get: function() {
            return 7386;
        }
    });
    
    Object.defineProperty(outerDiv, 'clientWidth', {
        get: function() {
            return 320;
        }
    });
});