document.addEventListener('DOMContentLoaded', function() {
    const tiktokUrlInput = document.getElementById('tiktok-url');
    const downloadButton = document.getElementById('download-button');
    const videoPreview = document.getElementById('video-preview');
    const downloadLink = document.getElementById('download-link');
    const errorMessage = document.getElementById('error-message');

    downloadButton.addEventListener('click', function() {
        const url = tiktokUrlInput.value;
        if (url) {
            // Tampilkan pesan loading (opsional)
            downloadButton.textContent = 'Memproses...';
            downloadButton.disabled = true;

            // Panggil fungsi untuk mengambil video TikTok tanpa watermark
            // (Anda perlu mengganti ini dengan logika yang sesuai)
            getVideoWithoutWatermark(url)
                .then(function(downloadUrl) {
                    // Jika berhasil, tampilkan video dan tautan unduhan
                    videoPreview.src = downloadUrl;
                    videoPreview.style.display = 'block';
                    downloadLink.href = downloadUrl;
                    downloadLink.style.display = 'inline-block';
                    errorMessage.style.display = 'none';
                })
                .catch(function(error) {
                    // Jika terjadi kesalahan, tampilkan pesan error
                    errorMessage.textContent = 'Terjadi kesalahan: ' + error.message;
                    errorMessage.style.display = 'block';
                    videoPreview.style.display = 'none';
                    downloadLink.style.display = 'none';
                })
                .finally(function() {
                    // Sembunyikan pesan loading dan aktifkan tombol unduh
                    downloadButton.textContent = 'Unduh';
                    downloadButton.disabled = false;
                });
        } else {
            alert('Masukkan tautan video TikTok terlebih dahulu.');
        }
    });

    // Fungsi placeholder untuk mengambil video TikTok tanpa watermark
    // (Anda perlu mengganti ini dengan logika yang sesuai)
    function getVideoWithoutWatermark(url) {
        return new Promise(function(resolve, reject) {
            // Simulasi proses pengambilan video (ganti dengan logika sebenarnya)
            setTimeout(function() {
                if (Math.random() > 0.5) {
                    resolve('https://example.com/video-tanpa-watermark.mp4'); // Ganti dengan URL video sebenarnya
                } else {
                    reject(new Error('Tidak dapat mengambil video.'));
                }
            }, 2000);
        });
    }
});
