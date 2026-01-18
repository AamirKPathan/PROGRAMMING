const cake = document.querySelector('.cake');
const resetBtn = document.getElementById('resetBtn');
const layers = document.querySelectorAll('.layer');

let removedColumns = 0;
const sliceDivs = [];

// Initialize click handlers for layers
layers.forEach(layer => {
    layer.style.cursor = 'pointer';
    layer.addEventListener('click', (e) => {
        e.stopPropagation();
        removeColumn();
    });
});

function removeColumn() {
    // Create a 10px wide slice element
    const slice = document.createElement('div');
    slice.className = 'slice-column';
    slice.style.position = 'fixed';
    slice.style.top = '0';
    slice.style.left = (removedColumns * 10) + 'px';
    slice.style.width = '10px';
    slice.style.height = '100vh';
    slice.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    slice.style.zIndex = '9999';
    slice.style.pointerEvents = 'none';
    
    console.log('Adding slice at left:', (removedColumns * 10) + 'px');
    document.body.appendChild(slice);
    sliceDivs.push(slice);
    removedColumns++;
    console.log('Total columns removed:', removedColumns);
}

// Reset button functionality
resetBtn.addEventListener('click', () => {
    console.log('Reset clicked');
    // Remove all slice divs
    sliceDivs.forEach(slice => slice.remove());
    sliceDivs.length = 0;
    removedColumns = 0;
});
