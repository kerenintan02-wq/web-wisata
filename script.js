const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const feedback = document.getElementById('feedback');

    feedback.textContent = `Terima kasih, ${nama}! Pesan contoh berhasil diproses.`;
    form.reset();
  });
}
