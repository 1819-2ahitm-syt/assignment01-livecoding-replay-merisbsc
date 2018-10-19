function createCircle(radius) {
    return{
        radius,
        draw: function() {
            console.log("draw");
        }
    }
}

let c = createCircle(1);
c.draw();