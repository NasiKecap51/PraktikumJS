class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }

    volume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }

    surfaceArea() {
        return (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * Math.pow(this.radius, 2));
    }
}

class Cone {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }

    volume() {
        return (1/3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }

    surfaceArea() {
        let l = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        return (Math.PI * this.radius) * (l + this.radius);
    }
}

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    volume() {
        return (4/3) * Math.PI * Math.pow(this.radius, 3);
    }

    surfaceArea() { 
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
}

// Contoh penggunaan
const cylinder = new Cylinder(50 / 100 / 2); 
const cone = new Cone(20 / 100, 40 / 100 / 2); 
const sphere = new Sphere(30 / 100 / 2); 

console.log("Volume Tabung: " + cylinder.volume());
console.log("Luas Permukaan Tabung: " + cylinder.surfaceArea());

console.log("Volume Kerucut: " + cone.volume());
console.log("Luas Permukaan Kerucut: " + cone.surfaceArea());

console.log("Volume Bola: " + sphere.volume());
console.log("Luas Permukaan Bola: " + sphere.surfaceArea());
