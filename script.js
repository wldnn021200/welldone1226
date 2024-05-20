function tambah() {
    var bilangan1 = parseInt(document.getElementById("bilangan1").value);
    var bilangan2 = parseInt(document.getElementById("bilangan2").value);
    
    var hasil = bilangan1 + bilangan2;
    
    document.getElementById("hasil").innerHTML = "Hasil penjumlahan: " + hasil;
}
