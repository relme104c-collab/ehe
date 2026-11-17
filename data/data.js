// ============================================================
//  DATA SOALKIT PORTABLE
//  File ini menyimpan seluruh soal dan surat Anda.
//  Letakkan di folder: data/data.js
//  Cara paling mudah mengisinya: buat soal/surat di aplikasi,
//  lalu klik "Ekspor Data" dan timpa file ini.
// ============================================================

window.SOALKIT_DATA = window.SOALKIT_DATA || {};

SOALKIT_DATA.soal = {
  "judul": "ULANGAN HARIAN",
  "mapel": "Ilmu Pengetahuan Alam",
  "kelas": "7",
  "waktu": 60,
  "guru": "Ibu Sari Wulandari, S.Pd.",
  "petunjuk": "Berilah tanda silang (×) pada huruf A, B, C, atau D di depan jawaban yang paling benar! Kerjakan soal yang mudah terlebih dahulu.",
  "pakaiKop": true,
  "lembarJawaban": true,
  "kunci": false,
  "questions": [
    {
      "t": "Ciri makhluk hidup yang menunjukkan pertumbuhan adalah ....",
      "opts": ["bergerak dari satu tempat ke tempat lain", "ukuran tubuh bertambah besar secara teratur", "membutuhkan makanan setiap hari", "mengeluarkan zat sisa"],
      "key": 1
    },
    {
      "t": "Bagian sel tumbuhan yang berfungsi sebagai tempat berlangsungnya fotosintesis adalah ....",
      "opts": ["mitokondria", "dinding sel", "kloroplas", "vakuola"],
      "key": 2
    },
    {
      "t": "Makhluk hidup yang mampu membuat makanan sendiri disebut ....",
      "opts": ["heterotrof", "autotrof", "konsumen", "pengurai"],
      "key": 1
    },
    {
      "t": "Perubahan wujud air dari cair menjadi gas disebut ....",
      "opts": ["mengembun", "menyublim", "menguap", "membeku"],
      "key": 2
    },
    {
      "t": "Alat pernapasan utama pada ikan adalah ....",
      "opts": ["paru-paru", "trakea", "kulit", "insang"],
      "key": 3
    }
  ]
};

SOALKIT_DATA.surat = {
  "pakaiKop": true,
  "nomor": "421/001/SMP-1/2025",
  "lampiran": "-",
  "hal": "Undangan Rapat Koordinasi",
  "tanggal": "2025-07-01",
  "kepadaJabatan": "Yth. Bapak/Ibu Wali Murid",
  "kepadaNama": "",
  "alamat": "di Tempat",
  "salam": "Dengan hormat,",
  "isi": "Sehubungan dengan akan dilaksanakannya Ujian Tengah Semester Gasal Tahun Pelajaran 2025/2026, kami mengundang Bapak/Ibu untuk hadir pada rapat koordinasi yang akan dilaksanakan pada:\n- Hari/Tanggal : Sabtu, 12 Juli 2025\n- Waktu : 09.00 WIB - selesai\n- Tempat : Aula SMP Negeri 1 Harapan Bangsa\n\nMateri yang akan dibahas antara lain teknis pelaksanaan ujian, pembagian tugas pengawas, dan persiapan ruang kelas.",
  "penutup": "Demikian surat undangan ini kami sampaikan. Atas perhatian dan kehadiran Bapak/Ibu, kami ucapkan terima kasih.",
  "jabatan": "Kepala Sekolah",
  "nama": "Drs. Bambang Sutrisno, M.Pd.",
  "nip": "19700101 199003 1 001",
  "tembusan": "Ketua Komite Sekolah\nArsip"
};
