---
title: Mengaktifkan Fungsi /update
status: Rencana
---

---
title: Manajemen Versi Internal (`/update` & `/downgrade`)
status: Rencana
---

Menjaga GraniteShell agar selalu berada di versi yang Anda butuhkan akan menjadi lebih mudah dari sebelumnya, langsung dari dalam terminal. Kami sedang merancang sistem manajemen versi yang kuat untuk memberi Anda kontrol penuh atas aplikasi Anda.

### Pembaruan Cepat dan Aman dengan `/update`

Fitur `/update` akan menjadi cara tercepat dan teraman untuk memastikan Anda selalu menggunakan GraniteShell versi terbaru. Saat dijalankan, perintah ini akan:

1.  **Memeriksa Versi:** Menghubungi repositori GitHub resmi secara aman untuk membandingkan versi yang Anda gunakan saat ini dengan rilis stabil terbaru yang tersedia.
2.  **Menampilkan Catatan Perubahan:** Sebelum melakukan pembaruan, Anda akan diperlihatkan ringkasan catatan rilis (*changelog*) agar Anda tahu persis apa saja fitur baru, perbaikan, dan perubahan keamanan yang akan Anda dapatkan.
3.  **Mengunduh & Menginstal:** Jika Anda setuju, GraniteShell akan mengunduh paket pembaruan di latar belakang dan menginstalnya secara otomatis. Proses ini dirancang untuk menjadi sehalus mungkin, dengan *downtime* minimal.

Tujuannya adalah untuk menghilangkan proses manual mencari rilis baru, mengunduh installer, dan menjalankannya. Semua akan terintegrasi dalam satu perintah sederhana.

### Fleksibilitas dengan `/downgrade`

Kami memahami bahwa terkadang versi terbaru mungkin memiliki *bug* atau perubahan yang tidak cocok dengan alur kerja Anda. Untuk itu, kami juga akan memperkenalkan perintah `/downgrade`.

Fitur `/downgrade` akan memungkinkan Anda untuk:

* **Melihat Versi Sebelumnya:** Menampilkan daftar beberapa versi stabil sebelumnya yang bisa Anda pilih.
* **Kembali ke Versi Stabil:** Dengan mudah kembali ke versi sebelumnya yang Anda tahu bekerja dengan baik untuk Anda, memberikan jaring pengaman jika terjadi masalah dengan rilis terbaru.

Sistem ini memberi Anda kebebasan untuk mengelola versi aplikasi sesuai dengan kebutuhan spesifik Anda, memastikan stabilitas dan produktivitas Anda selalu terjaga.