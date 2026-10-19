
function hitungBelanja() {
    let pembeli = document.getElementById("pembeli").value;

    let barang1 = document.getElementById("barang1").value;
    let harga1 = Number(document.getElementById("harga1").value);
    let jumlah1 = Number(document.getElementById("jumlah1").value);

    let barang2 = document.getElementById("barang2").value;
    let harga2 = Number(document.getElementById("harga2").value);
    let jumlah2 = Number(document.getElementById("jumlah2").value);

    // Menghitung subtotal
    let subtotal1 = harga1 * jumlah1;
    let subtotal2 = harga2 * jumlah2;

    // Menghitung total belanja
    let totalBelanja = subtotal1 + subtotal2;

    // Menghitung diskon
    let diskon = 0;

    if (totalBelanja >= 50000) {
        diskon = totalBelanja * 10 / 100;
    }

    // Menghitung total bayar
    let totalBayar = totalBelanja - diskon;

    // Format rupiah
    function rupiah(angka) {
        return "Rp" + angka.toLocaleString("id-ID");
    }

    // Menampilkan hasil di web
    document.getElementById("hasil").innerHTML = `
        <h3>Hasil Invoice</h3>
        <p>Pembeli: ${pembeli}</p>

        <p>${barang1} (${jumlah1} x ${rupiah(harga1)})
        = ${rupiah(subtotal1)}</p>

        <p>${barang2} (${jumlah2} x ${rupiah(harga2)})
        = ${rupiah(subtotal2)}</p>

        <hr>
        <p>Total Belanja: ${rupiah(totalBelanja)}</p>
        <p>Diskon: ${rupiah(diskon)}</p>
        <h3>Total Bayar: ${rupiah(totalBayar)}</h3>

        <p>Linknya:
        <a href="http://invoice.namadomain">
        http://invoice.namadomain</a></p>
    `;

    // Menampilkan hasil di console
    console.log("Pembeli:", pembeli);
    console.log("Total Belanja:", rupiah(totalBelanja));
    console.log("Diskon:", rupiah(diskon));
    console.log("Total Bayar:", rupiah(totalBayar));
}
