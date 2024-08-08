function calculateGeometricSeriesSum(a, r, n) {
    return (a * (Math.pow(r, n) - 1)) / (r - 1);
}

const sukuPertama = 4;
const rasio = 3;
const jumlahSukuPertama = 10;

const totalSukuPertama = calculateGeometricSeriesSum(sukuPertama, rasio, jumlahSukuPertama);
console.log(`Jumlah ${jumlahSukuPertama} suku pertama dari deret geometri: ${totalSukuPertama}`);
