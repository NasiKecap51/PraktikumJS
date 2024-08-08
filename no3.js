// Data Rhodey
let tinggiCm = 170; // dalam cm
let beratKg = 67; // dalam kg

// Mengubah tinggi badan dari cm ke meter
let tinggiM = tinggiCm / 100;

// Menghitung BMI
let bmi = beratKg / (tinggiM * tinggiM);

// Menentukan status kondisi tubuh berdasarkan BMI
let status;
if (bmi < 18.5) {
    status = "Berat badan kurang";
} else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Berat badan normal";
} else if (bmi >= 25 && bmi < 29.9) {
    status = "Berat badan berlebih (overweight)";
} else {
    status = "Obesitas";
}

console.log(`Tinggi Badan: ${tinggiCm} cm`); 
console.log(`Berat Badan: ${beratKg} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Status Kondisi Tubuh: ${status}`);
