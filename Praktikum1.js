// NO 1

// const PanjangTanah = 20.5;
// const LebarTanah = 30;

// const HargaPerMeter = 1500000;

// const PPN = 0.15;

// const LuasTanah = PanjangTanah * LebarTanah;

// const TotalHargaSBLMPPN = LuasTanah * HargaPerMeter;

// const TotalHarga = TotalHargaSBLMPPN + (TotalHargaSBLMPPN * PPN);

// console.log('Luas Tanah :' + LuasTanah);
// console.log('Total Harga Sebelum PPN : ' + TotalHargaSBLMPPN);
// console.log('Total Harga : ' + TotalHarga);

// 

// NO 2

let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },

]

let totalbelanja = 0;

for (let i = 0; i < barang.length; i++) {
    totalbelanja += barang[i].harga * barang[i].jumlah;
}

console.log(`Total Belanja Bu Astui adalah Rp ${totalBelanja.toLocaleString(`id-ID`)}`)
