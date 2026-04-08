# SIMENDOG - Sistem Informasi Manajemen Peternakan Endog

## Dokumen Kebutuhan Sistem (Software Requirements Specification)

**Versi:** 1.1
**Tanggal:** 11 Maret 2026
**Stack Teknologi:** Laravel 10 | Livewire 3 | Jetstream | Tailwind CSS | MySQL

---

## 1. Pendahuluan

### 1.1 Latar Belakang

SIMENDOG (Sistem Informasi Manajemen Peternakan Endog) adalah aplikasi berbasis web untuk mengelola seluruh aspek operasional peternakan ayam petelur, baik untuk **peternakan mandiri** maupun **jaringan peternakan mitra** dalam satu desa/wilayah. Sistem ini dirancang untuk mendukung berbagai jenis/strain ayam petelur:

| Jenis Ayam | Keterangan |
|---|---|
| **Ayam Petelur Komersial** | Ras petelur (ISA Brown, Lohmann, Hy-Line, dll) |
| **Ayam Kampung Petelur** | Ayam lokal/buras yang dibudidayakan untuk telur |
| **Ayam KUB** | Kampung Unggul Balitbangtan - strain unggul hasil seleksi Balitnak |
| **Ayam Elba** | Hasil persilangan untuk produksi telur lokal |
| **Jenis Lainnya** | Arab Petelur, Joper layer, strain petelur lain |

"Endog" (bahasa Jawa/Sunda: telur) mencerminkan fokus utama sistem pada **manajemen produksi telur** dari hulu ke hilir.

**Model Bisnis Utama:**
Salah satu client utama adalah **Desa atau Wilayah** yang memiliki 10+ peternak ayam petelur serupa. Sistem harus mampu menjadi **pusat kendali (hub)** yang memonitor seluruh mitra peternak, mengelola distribusi pakan, mengkonsolidasi penjualan telur, dan melacak konversi **telur → uang** secara real-time.

### 1.2 Tujuan Sistem

1. Mencatat dan memantau populasi ayam di setiap kandang secara real-time
2. Merekam produksi telur harian dan menghitung performa (HDP, FCR)
3. Mengelola pakan, obat/vitamin, dan inventaris peternakan
4. Menjadwalkan dan mencatat vaksinasi serta penanganan kesehatan
5. Mencatat transaksi keuangan (pembelian & penjualan) dan menghitung profitabilitas
6. Menyajikan dashboard dan laporan analitik untuk pengambilan keputusan
7. **Mengelola jaringan mitra peternak** dalam satu desa/wilayah dengan monitoring terpusat
8. **Melacak konversi telur → uang** secara real-time dari seluruh jaringan (kandang sendiri + mitra)
9. **Mengkonsolidasi kebutuhan pakan** dan penjualan telur dari seluruh mitra

### 1.3 Pengguna Sistem

| Peran | Akses |
|---|---|
| **Super Admin** | Seluruh fitur, manajemen user, konfigurasi sistem, semua data mitra |
| **Pemilik/Manager** | Dashboard, laporan, keuangan, persetujuan, monitoring mitra |
| **Operator Kandang** | Input produksi harian, mortalitas, konsumsi pakan (kandang sendiri) |
| **Petugas Gudang** | Stok pakan, obat, inventaris, distribusi pakan ke mitra |
| **Petugas Keuangan** | Transaksi pembelian, penjualan, laporan keuangan, settlement mitra |
| **Mitra (Peternak)** | Input produksi di kandang sendiri, lihat distribusi pakan, lihat penjualan miliknya |

### 1.4 Model Operasional: Hub & Mitra

```
┌──────────────────────────────────────────────────────────────┐
│                    PENGELOLA PUSAT (HUB)                     │
│          (BUMDes / Kelompok Tani / Koperasi / Desa)          │
│                                                              │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────────┐   │
│  │ Kandang  │  │ Gudang Pakan │  │ Manajemen Penjualan   │   │
│  │ Sendiri  │  │   Sentral    │  │ (Telur seluruh mitra) │   │
│  └──────────┘  └──────┬───────┘  └───────────┬───────────┘   │
│                       │ distribusi            │ konsolidasi   │
└───────────────────────┼───────────────────────┼──────────────┘
                        │                       │
        ┌───────────────┼───────────────┐       │
        ▼               ▼               ▼       │
  ┌──────────┐   ┌──────────┐   ┌──────────┐   │
  │ MITRA 1  │   │ MITRA 2  │   │ MITRA N  │   │
  │ Pak Agus │   │ Bu Sari  │   │ Pak Joko │   │
  │ 2 kandang│   │ 1 kandang│   │ 3 kandang│   │
  │ 500 ekor │   │ 300 ekor │   │ 800 ekor │   │
  └─────┬────┘   └─────┬────┘   └─────┬────┘   │
        │               │               │       │
        └───────────────┴───────────────┘       │
                  produksi telur ───────────────→┘
                  (setor ke pusat / jual mandiri)
```

**Alur Operasional:**
1. **Pakan**: Pusat beli bulk → distribusi ke mitra → catat konsumsi per mitra
2. **Produksi**: Mitra catat produksi harian → data mengalir ke pusat real-time
3. **Penjualan**: Mitra setor telur ke pusat ATAU jual mandiri → semua tercatat
4. **Uang**: Telur terjual → settlement ke mitra → rekonsiliasi keuangan

---

## 2. Arsitektur Sistem

### 2.1 Stack Teknologi (Sudah Terinstal)

```
Backend  : Laravel 10.50.2 (PHP ^8.1)
Frontend : Livewire 3.7.11 + Alpine.js (bundled) + Tailwind CSS 3.x
Auth     : Jetstream 4.3.1 + Fortify (Login, Register, 2FA, Profile)
API      : Laravel Sanctum 3.x
Database : MySQL 8.x (database: simendog)
Build    : Vite 5.x
URL      : http://simendog.me
```

### 2.2 Kondisi Saat Ini

Aplikasi sudah berjalan dengan scaffolding Jetstream + Livewire:
- Autentikasi lengkap (register, login, logout, 2FA, reset password)
- Manajemen profil pengguna
- Session berbasis database
- 6 tabel migrasi default (users, sessions, personal_access_tokens, dll)
- Build asset Tailwind + Vite berhasil
- **Belum ada fitur bisnis** - semua modul di bawah ini perlu dibangun

### 2.3 Pola Arsitektur

```
app/
├── Models/              # Eloquent models (domain entities)
├── Http/
│   └── Controllers/     # (opsional, Livewire-first approach)
├── Livewire/            # Full-page & komponen Livewire
│   ├── Dashboard/
│   ├── MasterData/
│   ├── Mitra/           # Modul mitra & jaringan peternakan
│   ├── Populasi/
│   ├── Produksi/
│   ├── Pakan/
│   ├── Kesehatan/
│   ├── Keuangan/
│   ├── Inventaris/
│   └── Laporan/
├── Actions/             # Single-responsibility action classes
├── Services/            # Business logic services
└── Enums/               # PHP Enums untuk status, tipe, grade
```

---

## 3. Modul & Fitur Detail

---

### 3.1 MODUL MASTER DATA

Data referensi yang menjadi dasar seluruh modul lainnya.

#### 3.1.1 Data Farm/Peternakan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | Auto increment |
| `mitra_id` | FK → mitras | NULL = milik pusat/sendiri, isi = milik mitra |
| `nama` | VARCHAR(100) | Nama peternakan |
| `alamat` | TEXT | Alamat lengkap |
| `telepon` | VARCHAR(20) | Nomor telepon |
| `pemilik` | VARCHAR(100) | Nama pemilik |
| `luas_area` | DECIMAL(10,2) | Luas area (m²) |
| `kapasitas_total` | INT | Total kapasitas ayam |
| `is_active` | BOOLEAN | Status aktif |
| `timestamps` | | created_at, updated_at |

#### 3.1.2 Data Kandang

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | Auto increment |
| `farm_id` | FK → farms | Relasi ke farm |
| `kode` | VARCHAR(20) | Kode unik kandang (K-001, K-002) |
| `nama` | VARCHAR(100) | Nama/label kandang |
| `tipe` | ENUM | `open`, `closed`, `semi_closed`, `postal`, `battery`, `colony` |
| `kapasitas` | INT | Kapasitas maksimum (ekor) |
| `panjang` | DECIMAL(8,2) | Panjang (meter) |
| `lebar` | DECIMAL(8,2) | Lebar (meter) |
| `jumlah_baris` | INT | Jumlah baris/row cage |
| `jumlah_tingkat` | INT | Jumlah tingkat cage (1-4) |
| `status` | ENUM | `aktif`, `istirahat`, `renovasi`, `nonaktif` |
| `catatan` | TEXT | Catatan tambahan |
| `timestamps` | | |

#### 3.1.3 Data Strain/Jenis Ayam

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | Kode strain |
| `nama` | VARCHAR(100) | Nama (ISA Brown, KUB, Kampung, Elba, dll) |
| `kategori` | ENUM | `ras_komersial`, `kampung`, `kub`, `elba`, `arab`, `silangan`, `lainnya` |
| `asal` | VARCHAR(100) | Asal/sumber genetik |
| `umur_bertelur` | INT | Umur mulai bertelur (minggu) |
| `puncak_produksi` | INT | Umur puncak produksi (minggu) |
| `target_hdp` | DECIMAL(5,2) | Target HDP puncak (%) |
| `target_berat_telur` | DECIMAL(5,2) | Target berat telur rata-rata (gram) |
| `standar_pakan_harian` | DECIMAL(6,2) | Standar konsumsi pakan/ekor/hari (gram) |
| `umur_afkir` | INT | Umur afkir standar (minggu) |
| `deskripsi` | TEXT | Keterangan tambahan |
| `is_active` | BOOLEAN | |
| `timestamps` | | |

#### 3.1.4 Data Supplier

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | Kode supplier |
| `nama` | VARCHAR(100) | Nama supplier |
| `tipe` | ENUM | `pakan`, `doc`, `obat_vitamin`, `peralatan`, `multi` |
| `alamat` | TEXT | |
| `telepon` | VARCHAR(20) | |
| `email` | VARCHAR(100) | |
| `kontak_person` | VARCHAR(100) | |
| `is_active` | BOOLEAN | |
| `timestamps` | | |

#### 3.1.5 Data Customer (Pembeli)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | |
| `nama` | VARCHAR(100) | |
| `tipe` | ENUM | `pengepul`, `pedagang`, `toko`, `restoran`, `industri`, `konsumen`, `lainnya` |
| `alamat` | TEXT | |
| `telepon` | VARCHAR(20) | |
| `email` | VARCHAR(100) | |
| `is_active` | BOOLEAN | |
| `timestamps` | | |

#### 3.1.6 Data Jenis Pakan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | |
| `nama` | VARCHAR(100) | Nama pakan (BR-1, Layer Mash, dll) |
| `tipe` | ENUM | `starter`, `grower`, `pre_layer`, `layer`, `konsentrat`, `campuran` |
| `merek` | VARCHAR(100) | |
| `satuan` | ENUM | `kg`, `sak_50kg`, `sak_25kg`, `karung` |
| `berat_per_satuan` | DECIMAL(8,2) | Berat per satuan (kg) |
| `harga_terakhir` | DECIMAL(12,2) | Harga beli terakhir per satuan |
| `is_active` | BOOLEAN | |
| `timestamps` | | |

#### 3.1.7 Data Obat & Vitamin

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | |
| `nama` | VARCHAR(100) | |
| `tipe` | ENUM | `vaksin`, `antibiotik`, `vitamin`, `desinfektan`, `anti_parasit`, `probiotik`, `lainnya` |
| `merek` | VARCHAR(100) | |
| `satuan` | VARCHAR(20) | (botol, vial, liter, kg, sachet) |
| `cara_pemberian` | ENUM | `air_minum`, `suntik`, `tetes_mata`, `semprot`, `oral`, `pakan` |
| `is_active` | BOOLEAN | |
| `timestamps` | | |

---

### 3.2 MODUL MANAJEMEN POPULASI

Pencatatan siklus hidup ayam dari DOC masuk hingga afkir.

#### 3.2.1 Data Flock/Batch (Kelompok Ayam)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode_batch` | VARCHAR(30) | Kode unik (BTH-2026-001) |
| `kandang_id` | FK → kandangs | |
| `strain_id` | FK → strains | |
| `tanggal_masuk` | DATE | Tanggal chick-in / masuk kandang |
| `umur_masuk` | INT | Umur saat masuk (hari), 1 = DOC |
| `jumlah_masuk` | INT | Jumlah ekor saat masuk |
| `harga_per_ekor` | DECIMAL(10,2) | Harga beli per ekor |
| `supplier_id` | FK → suppliers | Asal DOC/pullet |
| `jumlah_saat_ini` | INT | Populasi terkini (computed/cached) |
| `fase` | ENUM | `doc`, `starter`, `grower`, `pre_layer`, `layer`, `afkir` |
| `status` | ENUM | `aktif`, `afkir`, `habis` |
| `tanggal_first_egg` | DATE | Tanggal telur pertama (nullable) |
| `tanggal_afkir` | DATE | Tanggal afkir (nullable) |
| `catatan` | TEXT | |
| `timestamps` | | |

**Kalkulasi umur:**
```
umur_hari = (tanggal_hari_ini - tanggal_masuk) + umur_masuk
umur_minggu = floor(umur_hari / 7)
```

**Fase otomatis berdasarkan umur (konfigurabel per strain):**
- DOC: 0-3 hari
- Starter: 1-6 minggu
- Grower: 7-14 minggu
- Pre-Layer: 15-18 minggu
- Layer: 19+ minggu (sampai afkir)

#### 3.2.2 Mutasi Populasi

Setiap perubahan jumlah ayam dicatat sebagai record mutasi.

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `flock_id` | FK → flocks | |
| `tanggal` | DATE | |
| `tipe` | ENUM | `masuk`, `mati`, `afkir_jual`, `pindah_keluar`, `pindah_masuk`, `seleksi` |
| `jumlah` | INT | Jumlah ekor (positif) |
| `penyebab` | VARCHAR(200) | Penyebab kematian/alasan mutasi |
| `kandang_tujuan_id` | FK → kandangs | Untuk pindah kandang (nullable) |
| `user_id` | FK → users | Petugas pencatat |
| `catatan` | TEXT | |
| `timestamps` | | |

**Aturan bisnis:**
- `jumlah_saat_ini` di flock di-update otomatis setelah mutasi
- Mortalitas harian = jumlah mati / populasi awal hari × 100%
- Alert jika mortalitas harian > 0.5% (konfigurabel)

---

### 3.3 MODUL PRODUKSI TELUR

Modul inti — pencatatan produksi telur harian per kandang/flock.

#### 3.3.1 Produksi Harian

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `flock_id` | FK → flocks | |
| `tanggal` | DATE | Tanggal produksi |
| `jumlah_telur_utuh` | INT | Telur normal/utuh (butir) |
| `jumlah_telur_retak` | INT | Telur retak (butir) |
| `jumlah_telur_abnormal` | INT | Telur abnormal/softshell (butir) |
| `berat_total_kg` | DECIMAL(8,2) | Berat total telur (kg) — nullable |
| `populasi_hari_ini` | INT | Populasi ayam pada hari itu |
| `hdp` | DECIMAL(5,2) | Hen-Day Production (%) — auto-calculated |
| `berat_rata_rata` | DECIMAL(5,2) | Berat rata-rata per butir (gram) — nullable |
| `user_id` | FK → users | Petugas pencatat |
| `catatan` | TEXT | |
| `timestamps` | | |

**Unique constraint:** `(flock_id, tanggal)` — satu record per flock per hari.

**Kalkulasi otomatis:**

```
total_telur     = jumlah_telur_utuh + jumlah_telur_retak + jumlah_telur_abnormal
hdp (%)         = (total_telur / populasi_hari_ini) × 100
berat_rata_rata = (berat_total_kg × 1000) / total_telur
egg_mass        = hdp × berat_rata_rata / 100  (gram/ekor/hari)
```

#### 3.3.2 Grading Telur (Opsional / Fase 2)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `produksi_id` | FK → produksi_telurs | |
| `grade` | ENUM | `s`, `m`, `l`, `xl` |
| `jumlah` | INT | Jumlah butir per grade |
| `berat_per_butir` | DECIMAL(5,2) | Berat rata-rata grade (gram) |

**Standar grading berat:**
- S: < 50 gram
- M: 50-59 gram
- L: 60-69 gram
- XL: ≥ 70 gram

---

### 3.4 MODUL MANAJEMEN PAKAN

#### 3.4.1 Stok Pakan (Inventory)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `jenis_pakan_id` | FK → jenis_pakans | |
| `tanggal` | DATE | |
| `tipe` | ENUM | `masuk`, `keluar`, `penyesuaian` |
| `jumlah` | DECIMAL(10,2) | Jumlah dalam kg |
| `harga_satuan` | DECIMAL(12,2) | Harga per kg (untuk masuk) |
| `total_harga` | DECIMAL(14,2) | |
| `supplier_id` | FK → suppliers | Untuk tipe masuk (nullable) |
| `no_nota` | VARCHAR(50) | Nomor nota pembelian (nullable) |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

#### 3.4.2 Konsumsi Pakan Harian

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `flock_id` | FK → flocks | |
| `jenis_pakan_id` | FK → jenis_pakans | |
| `tanggal` | DATE | |
| `jumlah_kg` | DECIMAL(8,2) | Jumlah pakan yang diberikan (kg) |
| `populasi` | INT | Populasi saat pemberian |
| `konsumsi_per_ekor` | DECIMAL(6,2) | gram/ekor/hari — auto-calculated |
| `user_id` | FK → users | |
| `timestamps` | | |

**Kalkulasi:**
```
konsumsi_per_ekor = (jumlah_kg × 1000) / populasi
FCR = total_pakan_kg / total_berat_telur_kg  (periode tertentu)
```

**Alert:**
- Stok pakan < stok minimum (konfigurabel, default: 3 hari kebutuhan)
- Konsumsi per ekor menyimpang > 15% dari standar strain

---

### 3.5 MODUL KESEHATAN & VAKSINASI

#### 3.5.1 Jadwal & Catatan Vaksinasi

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `flock_id` | FK → flocks | |
| `obat_id` | FK → obats | |
| `tanggal_rencana` | DATE | Tanggal jadwal vaksinasi |
| `tanggal_pelaksanaan` | DATE | Tanggal aktual (nullable sampai dilaksanakan) |
| `status` | ENUM | `dijadwalkan`, `selesai`, `tertunda`, `dibatalkan` |
| `dosis` | VARCHAR(100) | Dosis (misal: "1 tetes/ekor", "0.5ml/ekor") |
| `metode` | ENUM | `tetes_mata`, `air_minum`, `suntik`, `semprot`, `tusuk_sayap` |
| `pelaksana` | VARCHAR(100) | Nama pelaksana vaksinasi |
| `jumlah_divaksin` | INT | Jumlah ekor yang divaksinasi |
| `biaya` | DECIMAL(12,2) | Total biaya vaksinasi |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

#### 3.5.2 Catatan Penyakit & Pengobatan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `flock_id` | FK → flocks | |
| `tanggal_mulai` | DATE | Tanggal gejala pertama |
| `tanggal_selesai` | DATE | Tanggal sembuh/selesai (nullable) |
| `gejala` | TEXT | Deskripsi gejala |
| `diagnosis` | VARCHAR(200) | Diagnosis penyakit |
| `jumlah_sakit` | INT | Estimasi jumlah ayam sakit |
| `jumlah_mati` | INT | Jumlah mati akibat penyakit ini |
| `status` | ENUM | `aktif`, `dalam_pengobatan`, `sembuh`, `kronis` |
| `timestamps` | | |

#### 3.5.3 Detail Pengobatan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `penyakit_id` | FK → penyakits | |
| `obat_id` | FK → obats | |
| `tanggal` | DATE | |
| `dosis` | VARCHAR(100) | |
| `durasi_hari` | INT | |
| `biaya` | DECIMAL(12,2) | |
| `catatan` | TEXT | |
| `timestamps` | | |

**Program vaksinasi standar (template konfigurabel):**

| Umur | Vaksin | Metode |
|---|---|---|
| 1 hari | ND-IB (Live) | Tetes mata |
| 4 hari | ND (B1/La Sota) | Tetes mata |
| 7-10 hari | Gumboro (IBD) | Air minum |
| 14 hari | ND-IB (Live) booster | Air minum |
| 21 hari | Gumboro booster | Air minum |
| 28 hari | AI (Avian Influenza) | Suntik |
| 35 hari | ND (La Sota) | Air minum |
| 8 minggu | Fowl Pox / Cacar | Tusuk sayap |
| 10 minggu | Coryza | Suntik |
| 12 minggu | ND+EDS+IB (Killed) | Suntik |
| 16 minggu | ND+AI booster | Suntik |

---

### 3.6 MODUL KEUANGAN

#### 3.6.1 Transaksi Pembelian

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `no_transaksi` | VARCHAR(30) | Auto-generated (PB-2026-0001) |
| `tanggal` | DATE | |
| `supplier_id` | FK → suppliers | |
| `mitra_id` | FK → mitras | NULL = pembelian pusat, isi = pembelian untuk/oleh mitra |
| `kategori` | ENUM | `doc_pullet`, `pakan`, `obat_vitamin`, `peralatan`, `operasional`, `lainnya` |
| `total` | DECIMAL(14,2) | Total pembelian |
| `status_bayar` | ENUM | `lunas`, `belum_lunas`, `cicilan` |
| `tanggal_jatuh_tempo` | DATE | Nullable |
| `no_nota` | VARCHAR(50) | |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

#### 3.6.2 Item Pembelian

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `pembelian_id` | FK → pembelians | |
| `item_type` | VARCHAR(50) | Polymorphic: jenis_pakan, obat, dll |
| `item_id` | BIGINT | |
| `nama_item` | VARCHAR(200) | Nama item (denormalized) |
| `jumlah` | DECIMAL(10,2) | |
| `satuan` | VARCHAR(20) | |
| `harga_satuan` | DECIMAL(12,2) | |
| `subtotal` | DECIMAL(14,2) | |

#### 3.6.3 Transaksi Penjualan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `no_transaksi` | VARCHAR(30) | Auto-generated (PJ-2026-0001) |
| `tanggal` | DATE | |
| `customer_id` | FK → customers | |
| `mitra_id` | FK → mitras | NULL = penjualan dari pusat, isi = penjualan atas nama mitra |
| `sumber` | ENUM | `pusat`, `mitra_setor`, `mitra_mandiri` |
| `kategori` | ENUM | `telur`, `ayam_afkir`, `kotoran`, `lainnya` |
| `total` | DECIMAL(14,2) | |
| `status_bayar` | ENUM | `lunas`, `belum_lunas`, `cicilan` |
| `status_settlement` | ENUM | `belum`, `proses`, `selesai` — untuk penjualan mitra |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

#### 3.6.4 Item Penjualan

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `penjualan_id` | FK → penjualans | |
| `deskripsi` | VARCHAR(200) | Misal: "Telur Grade L", "Ayam Afkir" |
| `jumlah` | DECIMAL(10,2) | |
| `satuan` | VARCHAR(20) | `kg`, `butir`, `tray`, `ekor` |
| `harga_satuan` | DECIMAL(12,2) | |
| `subtotal` | DECIMAL(14,2) | |

#### 3.6.5 Pengeluaran Operasional

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `tanggal` | DATE | |
| `mitra_id` | FK → mitras | NULL = pengeluaran pusat, isi = pengeluaran mitra |
| `kategori` | ENUM | `listrik`, `air`, `gaji`, `transportasi`, `pemeliharaan`, `sewa`, `lainnya` |
| `deskripsi` | VARCHAR(200) | |
| `jumlah` | DECIMAL(14,2) | |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

---

### 3.7 MODUL INVENTARIS OBAT & VITAMIN

#### 3.7.1 Stok Obat & Vitamin

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `obat_id` | FK → obats | |
| `tanggal` | DATE | |
| `tipe` | ENUM | `masuk`, `keluar`, `penyesuaian`, `expired` |
| `jumlah` | DECIMAL(10,2) | |
| `satuan` | VARCHAR(20) | |
| `no_batch` | VARCHAR(50) | Nomor batch produksi |
| `tanggal_expired` | DATE | |
| `harga_satuan` | DECIMAL(12,2) | |
| `supplier_id` | FK → suppliers | Nullable |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

**Alert:**
- Stok obat/vaksin mendekati expired (30 hari sebelum)
- Stok obat di bawah minimum

---

### 3.8 MODUL MITRA & JARINGAN PETERNAKAN

Modul inti untuk mengelola jaringan peternak mitra dalam satu desa/wilayah. Memungkinkan **satu pengelola pusat** memonitor dan mengelola 10+ peternak mitra secara real-time.

#### 3.8.1 Data Mitra (Peternak)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `kode` | VARCHAR(20) | Kode unik mitra (MTR-001, MTR-002) |
| `nama` | VARCHAR(100) | Nama peternak mitra |
| `nik` | VARCHAR(20) | NIK KTP (nullable) |
| `alamat` | TEXT | Alamat lengkap |
| `rt_rw` | VARCHAR(20) | RT/RW |
| `dusun` | VARCHAR(100) | Nama dusun/kampung |
| `desa` | VARCHAR(100) | Nama desa |
| `kecamatan` | VARCHAR(100) | Nama kecamatan |
| `telepon` | VARCHAR(20) | Nomor HP/WA |
| `foto` | VARCHAR(255) | Path foto mitra (nullable) |
| `user_id` | FK → users | Akun login mitra (nullable — mitra boleh tanpa akun) |
| `tanggal_bergabung` | DATE | Tanggal mulai menjadi mitra |
| `status` | ENUM | `aktif`, `nonaktif`, `suspend`, `keluar` |
| `skema_kerjasama` | ENUM | `bagi_hasil`, `jual_beli`, `plasma`, `mandiri_monitor` |
| `persentase_bagi_hasil` | DECIMAL(5,2) | % bagi hasil untuk mitra (nullable, sesuai skema) |
| `catatan` | TEXT | |
| `timestamps` | | |
| `deleted_at` | TIMESTAMP | Soft delete |

**Skema kerjasama:**

| Skema | Deskripsi |
|---|---|
| `bagi_hasil` | Pusat suplai DOC + pakan + obat, mitra kelola, hasil dibagi (%). Pusat menjualkan telur. |
| `jual_beli` | Mitra beli pakan dari pusat, jual telur ke pusat. Harga disepakati. |
| `plasma` | Mitra sebagai plasma inti, pusat sebagai inti. Sistem kemitraan terintegrasi. |
| `mandiri_monitor` | Mitra sepenuhnya mandiri, pusat hanya memonitor produksi (untuk data wilayah). |

#### 3.8.2 Setoran Telur Mitra

Pencatatan telur yang disetor mitra ke pusat untuk dijualkan.

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `no_setor` | VARCHAR(30) | Auto-generated (STR-2026-0001) |
| `mitra_id` | FK → mitras | |
| `tanggal` | DATE | Tanggal setor |
| `jumlah_kg` | DECIMAL(10,2) | Berat telur yang disetor (kg) |
| `jumlah_butir` | INT | Jumlah butir (nullable, jika dihitung) |
| `jumlah_tray` | DECIMAL(8,1) | Jumlah tray (1 tray = 30 butir, nullable) |
| `kualitas` | ENUM | `baik`, `sedang`, `campuran` |
| `harga_per_kg` | DECIMAL(12,2) | Harga beli dari mitra per kg |
| `total_nilai` | DECIMAL(14,2) | Total nilai setoran |
| `status` | ENUM | `diterima`, `sebagian_diterima`, `ditolak` |
| `jumlah_ditolak_kg` | DECIMAL(10,2) | Berat telur yang ditolak (retak/pecah, default 0) |
| `alasan_tolak` | VARCHAR(200) | Alasan penolakan (nullable) |
| `status_bayar` | ENUM | `belum_bayar`, `sebagian`, `lunas` |
| `user_id` | FK → users | Petugas penerima |
| `catatan` | TEXT | |
| `timestamps` | | |

#### 3.8.3 Distribusi Pakan ke Mitra

Pencatatan pakan yang didistribusikan dari gudang pusat ke mitra.

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `no_distribusi` | VARCHAR(30) | Auto-generated (DST-2026-0001) |
| `mitra_id` | FK → mitras | |
| `jenis_pakan_id` | FK → jenis_pakans | |
| `tanggal` | DATE | Tanggal distribusi |
| `jumlah_kg` | DECIMAL(10,2) | Jumlah pakan yang didistribusikan (kg) |
| `harga_per_kg` | DECIMAL(12,2) | Harga jual ke mitra per kg (bisa markup dari HPP) |
| `total_harga` | DECIMAL(14,2) | Total tagihan pakan ke mitra |
| `metode_bayar` | ENUM | `potong_hasil`, `tunai`, `hutang` |
| `status_bayar` | ENUM | `belum_bayar`, `sebagian`, `lunas` |
| `user_id` | FK → users | Petugas gudang |
| `catatan` | TEXT | |
| `timestamps` | | |

**Aturan bisnis:**
- Distribusi pakan otomatis mengurangi stok pakan pusat
- Jika metode `potong_hasil`: tagihan pakan dipotong saat settlement penjualan telur
- Riwayat distribusi menjadi dasar kebutuhan pakan konsolidasi

#### 3.8.4 Settlement / Rekonsiliasi Mitra

Penyelesaian keuangan antara pusat dan mitra secara periodik.

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `no_settlement` | VARCHAR(30) | Auto-generated (SET-2026-0001) |
| `mitra_id` | FK → mitras | |
| `periode_mulai` | DATE | Awal periode settlement |
| `periode_selesai` | DATE | Akhir periode settlement |
| `total_setoran_telur` | DECIMAL(14,2) | Total nilai telur yang disetor mitra |
| `total_penjualan_mitra` | DECIMAL(14,2) | Total penjualan atas nama mitra |
| `total_distribusi_pakan` | DECIMAL(14,2) | Total tagihan pakan dari pusat |
| `total_distribusi_obat` | DECIMAL(14,2) | Total tagihan obat/vitamin dari pusat |
| `potongan_lain` | DECIMAL(14,2) | Potongan lain-lain |
| `deskripsi_potongan` | TEXT | Rincian potongan lain |
| `bagi_hasil_pusat` | DECIMAL(14,2) | Bagian pusat (jika skema bagi_hasil) |
| `bagi_hasil_mitra` | DECIMAL(14,2) | Bagian mitra (jika skema bagi_hasil) |
| `netto_mitra` | DECIMAL(14,2) | Total yang harus dibayar ke mitra |
| `status` | ENUM | `draft`, `disetujui`, `dibayar`, `selesai` |
| `tanggal_bayar` | DATE | Tanggal pembayaran aktual (nullable) |
| `metode_bayar` | ENUM | `transfer`, `tunai`, `cek` |
| `bukti_bayar` | VARCHAR(255) | Path file bukti transfer (nullable) |
| `approved_by` | FK → users | Manager yang menyetujui |
| `user_id` | FK → users | Petugas yang membuat |
| `catatan` | TEXT | |
| `timestamps` | | |

**Kalkulasi settlement (skema bagi_hasil):**
```
pendapatan_kotor    = total_penjualan_mitra
biaya_pusat         = total_distribusi_pakan + total_distribusi_obat + potongan_lain
pendapatan_bersih   = pendapatan_kotor - biaya_pusat
bagi_hasil_mitra    = pendapatan_bersih × (persentase_bagi_hasil / 100)
bagi_hasil_pusat    = pendapatan_bersih - bagi_hasil_mitra
netto_mitra         = bagi_hasil_mitra
```

**Kalkulasi settlement (skema jual_beli):**
```
piutang_mitra       = total_setoran_telur (yang sudah diterima pusat)
hutang_mitra        = total_distribusi_pakan + total_distribusi_obat + potongan_lain
netto_mitra         = piutang_mitra - hutang_mitra
```

#### 3.8.5 Stok Telur (Egg Inventory — Tracking Telur → Uang)

Melacak telur dari produksi/setoran hingga terjual. Dasar konversi **telur → uang** real-time.

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `tanggal` | DATE | |
| `sumber` | ENUM | `produksi_sendiri`, `setoran_mitra` |
| `mitra_id` | FK → mitras | NULL jika produksi sendiri |
| `flock_id` | FK → flocks | NULL jika setoran mitra |
| `setoran_id` | FK → setoran_telurs | NULL jika produksi sendiri |
| `tipe` | ENUM | `masuk`, `terjual`, `rusak`, `penyesuaian`, `retur` |
| `jumlah_kg` | DECIMAL(10,2) | Berat (kg) |
| `jumlah_butir` | INT | Jumlah butir (nullable) |
| `harga_per_kg` | DECIMAL(12,2) | Harga saat transaksi |
| `total_nilai` | DECIMAL(14,2) | Nilai Rp |
| `penjualan_id` | FK → penjualans | Referensi jika tipe = terjual (nullable) |
| `user_id` | FK → users | |
| `catatan` | TEXT | |
| `timestamps` | | |

**Real-time tracking (query/computed):**
```
stok_tersedia_kg   = SUM(masuk) - SUM(terjual) - SUM(rusak) ± SUM(penyesuaian)
nilai_stok         = stok_tersedia_kg × harga_rata_rata
potensi_uang       = stok_tersedia_kg × harga_jual_saat_ini
konversi_hari_ini  = SUM(terjual hari ini) × harga → uang masuk hari ini
```

#### 3.8.6 Distribusi Obat/Vitamin ke Mitra

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | BIGINT PK | |
| `mitra_id` | FK → mitras | |
| `obat_id` | FK → obats | |
| `tanggal` | DATE | |
| `jumlah` | DECIMAL(10,2) | |
| `satuan` | VARCHAR(20) | |
| `harga_satuan` | DECIMAL(12,2) | |
| `total_harga` | DECIMAL(14,2) | |
| `metode_bayar` | ENUM | `potong_hasil`, `tunai`, `hutang` |
| `status_bayar` | ENUM | `belum_bayar`, `sebagian`, `lunas` |
| `user_id` | FK → users | |
| `timestamps` | | |

---

### 3.9 MODUL DASHBOARD & LAPORAN

#### 3.9.1 Dashboard Utama (Pengelola Pusat)

Ringkasan real-time yang ditampilkan setelah login untuk Super Admin / Manager:

**Widget/Card Baris 1 — Ringkasan Jaringan:**

| Widget | Data |
|---|---|
| Total Mitra Aktif | Jumlah mitra berstatus aktif |
| Total Populasi Jaringan | Jumlah ayam seluruh jaringan (pusat + semua mitra) |
| Produksi Hari Ini (Jaringan) | Total telur hari ini dari seluruh jaringan + HDP rata-rata |
| Konversi Telur → Uang Hari Ini | Telur yang sudah terjual hari ini → total Rp |

**Widget/Card Baris 2 — Detail Operasional:**

| Widget | Data |
|---|---|
| Total Populasi | Jumlah ayam aktif seluruh kandang |
| Produksi Hari Ini | Total telur hari ini + persentase HDP |
| Mortalitas Hari Ini | Jumlah mati hari ini + persentase |
| Stok Pakan | Estimasi hari tersisa |
| Pendapatan Bulan Ini | Total penjualan bulan berjalan (pusat + mitra) |
| Pengeluaran Bulan Ini | Total pembelian + operasional + distribusi ke mitra |
| Saldo Settlement | Total yang masih harus dibayar ke mitra |

**Grafik/Chart:**

| Chart | Tipe | Periode |
|---|---|---|
| Trend HDP | Line chart | 30 hari terakhir per flock |
| Trend Produksi Telur | Bar chart | 7 hari terakhir |
| Mortalitas Kumulatif | Line chart | Per flock sejak masuk |
| Konsumsi Pakan | Bar chart | 7 hari terakhir |
| Pendapatan vs Pengeluaran | Dual bar chart | 6 bulan terakhir |
| Produksi per Mitra | Stacked bar chart | 7 hari terakhir, per mitra |
| Ranking Mitra (HDP) | Horizontal bar chart | HDP rata-rata bulan ini per mitra |
| Konversi Telur → Uang | Area chart | 30 hari terakhir (produksi kg vs terjual Rp) |

**Alert/Notifikasi:**

| Alert | Kondisi |
|---|---|
| Mortalitas Tinggi | Mortalitas harian > 0.5% |
| Stok Pakan Rendah | Stok < kebutuhan 3 hari |
| Vaksinasi Jatuh Tempo | H-3 sebelum jadwal vaksinasi |
| Obat Expired | H-30 sebelum tanggal expired |
| HDP Turun Drastis | HDP turun > 5% dari minggu sebelumnya |
| Produksi Belum Diinput | Kandang aktif belum ada input hari ini |
| Mitra Belum Input | Mitra aktif yang belum input produksi hari ini |
| Settlement Jatuh Tempo | Settlement mitra yang belum dibayarkan > 7 hari |
| Stok Telur Menumpuk | Stok telur > 3 hari produksi belum terjual |

#### 3.9.2 Dashboard Mitra (Login Mitra)

Dashboard khusus untuk user dengan role Mitra. Hanya melihat data miliknya sendiri.

**Widget/Card:**

| Widget | Data |
|---|---|
| Populasi Saya | Total ayam aktif di semua kandang mitra |
| Produksi Hari Ini | Telur hari ini + HDP |
| Telur Sudah Disetor | Total kg telur yang sudah disetor bulan ini |
| Pendapatan Bulan Ini | Total uang yang diterima bulan ini (dari settlement) |
| Hutang Pakan | Sisa tagihan pakan yang belum dibayar/dipotong |
| Status Settlement | Settlement terakhir + status pembayaran |

**Grafik:**

| Chart | Tipe | Periode |
|---|---|---|
| Trend Produksi Saya | Line chart | 30 hari terakhir |
| Setoran vs Pembayaran | Dual bar chart | 6 bulan terakhir |
| Konsumsi Pakan | Bar chart | 7 hari terakhir |

#### 3.9.3 Dashboard Real-Time: Konversi Telur → Uang

Halaman khusus untuk monitoring aliran telur menjadi uang secara **live** (Livewire polling/events).

```
┌─────────────────────────────────────────────────────────────────────┐
│  KONVERSI TELUR → UANG    [Hari Ini]  [Minggu Ini]  [Bulan Ini]   │
│                                                                     │
│  ┌─────────────┐    ┌──────────────┐    ┌────────────────────┐      │
│  │  PRODUKSI   │───→│ STOK TELUR   │───→│ TERJUAL → UANG     │      │
│  │  523.5 kg   │    │  87.2 kg     │    │  436.3 kg           │      │
│  │ (hari ini)  │    │ (tersedia)   │    │ Rp 11.343.800       │      │
│  └─────────────┘    └──────────────┘    └────────────────────┘      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ SUMBER           │ Produksi │ Disetor │ Terjual │ Nilai Rp   │   │
│  │──────────────────│──────────│─────────│─────────│────────────│   │
│  │ Kandang Sendiri   │ 125.0 kg │    -    │ 120.0kg │ 3.120.000 │   │
│  │ MTR-001 Pak Agus  │  85.3 kg │ 80.0 kg │  75.0kg │ 1.950.000 │   │
│  │ MTR-002 Bu Sari   │  52.1 kg │ 50.0 kg │  50.0kg │ 1.300.000 │   │
│  │ MTR-003 Pak Joko  │ 112.8 kg │ 110.0kg │ 105.0kg │ 2.730.000 │   │
│  │ MTR-004 Pak Budi  │  63.2 kg │ 60.0 kg │  55.0kg │ 1.430.000 │   │
│  │ ... (10+ mitra)   │  85.1 kg │ 82.0 kg │  31.3kg │   813.800 │   │
│  │──────────────────│──────────│─────────│─────────│────────────│   │
│  │ TOTAL            │ 523.5 kg │ 382.0kg │ 436.3kg │11.343.800 │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  [Grafik garis: produksi vs penjualan per jam hari ini]            │
│                                                                     │
│  Conversion Rate: 83.3%    Avg Price: Rp 26.000/kg                 │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.9.4 Laporan

| Laporan | Isi | Format |
|---|---|---|
| Laporan Produksi Harian | Produksi per kandang per hari | Tabel + PDF |
| Laporan Produksi Mingguan | Ringkasan mingguan + HDP + egg mass | Tabel + PDF |
| Laporan Produksi Bulanan | Ringkasan bulanan + tren | Tabel + PDF + Chart |
| Laporan Populasi | Populasi per kandang, mutasi, mortalitas | Tabel + PDF |
| Laporan Konsumsi Pakan | Konsumsi harian/mingguan per kandang + FCR | Tabel + PDF |
| Laporan Stok Pakan | Posisi stok, riwayat masuk/keluar | Tabel + PDF |
| Laporan Vaksinasi | Riwayat & jadwal vaksinasi per flock | Tabel + PDF |
| Laporan Keuangan | Laba/rugi, arus kas, HPP telur | Tabel + PDF |
| Laporan Performa Flock | Perbandingan performa antar flock/strain | Tabel + Chart |
| Rekap Penjualan | Per customer, per periode | Tabel + PDF + Excel |
| **Laporan Mitra** | **Produksi, setoran, settlement per mitra** | **Tabel + PDF** |
| **Laporan Konsolidasi Jaringan** | **Ringkasan seluruh mitra: produksi, pakan, keuangan** | **Tabel + PDF + Chart** |
| **Laporan Distribusi Pakan** | **Distribusi pakan ke setiap mitra per periode** | **Tabel + PDF** |
| **Laporan Settlement** | **Rekap settlement per mitra, history pembayaran** | **Tabel + PDF** |
| **Laporan Konversi Telur→Uang** | **Aliran telur → stok → terjual → Rp per periode** | **Tabel + Chart + PDF** |

---

## 4. Aturan Bisnis (Business Rules)

### 4.1 Produksi Telur

| No | Aturan |
|---|---|
| BR-01 | HDP dihitung per flock: `(total_telur / populasi) × 100` |
| BR-02 | Input produksi hanya bisa dilakukan untuk flock dengan fase `layer` |
| BR-03 | Satu flock hanya boleh memiliki satu record produksi per tanggal |
| BR-04 | Produksi tidak bisa diinput untuk tanggal di masa depan |
| BR-05 | Koreksi produksi H-1 dan H-2 diperbolehkan, lebih dari itu butuh approval manager |

### 4.2 Populasi

| No | Aturan |
|---|---|
| BR-06 | Mutasi keluar tidak boleh melebihi populasi saat ini |
| BR-07 | Mortalitas harian > 1% otomatis trigger notifikasi ke manager |
| BR-08 | Fase flock berubah otomatis sesuai umur dan konfigurasi strain |
| BR-09 | Flock yang sudah berstatus `habis` atau `afkir` tidak bisa diinput lagi |
| BR-10 | Satu kandang bisa memiliki lebih dari satu flock (tapi harus dipantau kapasitas) |

### 4.3 Pakan

| No | Aturan |
|---|---|
| BR-11 | Stok pakan tidak boleh negatif |
| BR-12 | Pengeluaran pakan harus merujuk flock yang valid dan aktif |
| BR-13 | FCR dihitung per periode (mingguan/bulanan): `total_pakan_kg / total_egg_mass_kg` |

### 4.4 Keuangan

| No | Aturan |
|---|---|
| BR-14 | Nomor transaksi auto-generated dan unique per jenis (PB-/PJ-) |
| BR-15 | HPP telur per kg = (total biaya pakan + DOC + obat + operasional) / total berat telur |
| BR-16 | Transaksi yang sudah `lunas` tidak bisa diubah kecuali oleh admin |

### 4.5 Kesehatan

| No | Aturan |
|---|---|
| BR-17 | Vaksinasi yang sudah `selesai` tidak bisa dihapus, hanya bisa ditambah catatan |
| BR-18 | Obat dengan stok 0 tidak bisa digunakan untuk pengobatan/vaksinasi |
| BR-19 | Sistem otomatis generate jadwal vaksinasi berdasarkan template strain saat flock baru dibuat |

### 4.6 Mitra & Jaringan

| No | Aturan |
|---|---|
| BR-20 | Setiap mitra hanya bisa melihat dan menginput data miliknya sendiri |
| BR-21 | Pengelola pusat (admin/manager) bisa melihat data seluruh mitra secara agregat dan per mitra |
| BR-22 | Setoran telur mitra hanya bisa dicatat oleh petugas pusat (penerima), bukan oleh mitra sendiri |
| BR-23 | Distribusi pakan ke mitra otomatis mengurangi stok pakan pusat |
| BR-24 | Settlement harus di-approve oleh manager sebelum status menjadi `dibayar` |
| BR-25 | Settlement otomatis menghitung potongan pakan + obat yang metode bayar-nya `potong_hasil` |
| BR-26 | Mitra dengan status `suspend` tidak bisa input produksi atau menerima distribusi |
| BR-27 | Penjualan `mitra_setor` harus mereferensi setoran telur yang valid dan belum dibuatkan penjualan |
| BR-28 | Stok telur real-time dihitung dari: masuk (produksi+setoran) − keluar (terjual+rusak±penyesuaian) |
| BR-29 | Konversi telur→uang dihitung: `(telur_terjual_kg × harga_per_kg)` — real-time per hari |
| BR-30 | Mitra mandiri (`mandiri_monitor`) mencatat penjualannya sendiri sebagai `mitra_mandiri` |

---

## 5. User Interface (UI) Layout

### 5.1 Navigasi Utama (Sidebar)

```
SIMENDOG
├── Dashboard
│   ├── Dashboard Utama (pusat — semua data)
│   ├── Konversi Telur → Uang (live monitor)
│   └── Dashboard Mitra (khusus login mitra)
├── Mitra & Jaringan
│   ├── Daftar Mitra
│   ├── Setoran Telur
│   ├── Distribusi Pakan
│   ├── Distribusi Obat
│   ├── Settlement / Rekonsiliasi
│   └── Monitoring Mitra (peta/tabel produksi real-time)
├── Master Data
│   ├── Farm
│   ├── Kandang
│   ├── Strain Ayam
│   ├── Jenis Pakan
│   ├── Obat & Vitamin
│   ├── Supplier
│   └── Customer
├── Populasi
│   ├── Daftar Flock
│   ├── Mutasi Harian
│   └── Riwayat Mutasi
├── Produksi Telur
│   ├── Input Harian
│   ├── Rekap Produksi
│   ├── Stok Telur (inventory)
│   └── Analisa HDP
├── Pakan
│   ├── Konsumsi Harian
│   ├── Stok Pakan
│   └── Riwayat Pakan
├── Kesehatan
│   ├── Jadwal Vaksinasi
│   ├── Catatan Penyakit
│   └── Stok Obat
├── Keuangan
│   ├── Pembelian
│   ├── Penjualan
│   ├── Biaya Operasional
│   └── Laporan Keuangan
├── Laporan
│   ├── Laporan Produksi
│   ├── Laporan Populasi
│   ├── Laporan Pakan
│   ├── Laporan Performa
│   ├── Laporan Mitra & Jaringan
│   └── Laporan Konversi Telur → Uang
└── Pengaturan
    ├── Manajemen User
    ├── Role & Hak Akses
    └── Konfigurasi Sistem
```

### 5.2 Halaman Input Produksi Harian (Contoh UI Flow)

```
┌─────────────────────────────────────────────────────────┐
│  INPUT PRODUKSI TELUR HARIAN                            │
│                                                         │
│  Tanggal: [11 Maret 2026]  ▼                           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │ Kandang  │ Flock      │ Pop. │ Utuh │ Rtk │ Abn │    │
│  │──────────│────────────│──────│──────│─────│─────│    │
│  │ K-001    │ BTH-001    │ 980  │ 850  │ 12  │  3  │    │
│  │ K-002    │ BTH-002    │ 950  │ 820  │  8  │  5  │    │
│  │ K-003    │ BTH-003    │ 1000 │ 750  │ 15  │  2  │    │
│  │──────────│────────────│──────│──────│─────│─────│    │
│  │ TOTAL    │            │ 2930 │ 2420 │ 35  │ 10  │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  HDP Rata-rata: 84.1%                                  │
│                                                         │
│  [Simpan]  [Simpan & Input Berikutnya]                  │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Hak Akses per Role

| Fitur | Super Admin | Manager | Operator Kandang | Petugas Gudang | Petugas Keuangan | Mitra |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Dashboard Utama | Full | Full | Terbatas | Terbatas | Terbatas | - |
| Dashboard Mitra | - | - | - | - | - | Full (data sendiri) |
| Konversi Telur→Uang | Full | Full | - | - | Read | Read (data sendiri) |
| Master Data (CRUD) | CRUD | Read | Read | Read | Read | - |
| Daftar Mitra | CRUD | CRUD | Read | Read | Read | Read (profil sendiri) |
| Manajemen Flock | CRUD | CRUD | Read | - | - | CRU (flock sendiri) |
| Input Produksi | CRUD | CRUD | CRU | - | - | CRU (kandang sendiri) |
| Mutasi Populasi | CRUD | CRUD | CRU | - | - | CRU (flock sendiri) |
| Setoran Telur Mitra | CRUD | CRUD | CR | - | Read | Read (setoran sendiri) |
| Distribusi Pakan | CRUD | CRUD | - | CRU | Read | Read (distribusi sendiri) |
| Distribusi Obat | CRUD | CRUD | - | CRU | Read | Read (distribusi sendiri) |
| Settlement Mitra | CRUD | Approve | - | - | CRUD | Read (settlement sendiri) |
| Stok Telur | CRUD | Read | Read | CRUD | Read | Read (kontribusi sendiri) |
| Konsumsi Pakan | CRUD | CRUD | CRU | CRU | - | CRU (kandang sendiri) |
| Stok Pakan | CRUD | Read | Read | CRUD | Read | - |
| Vaksinasi | CRUD | CRUD | CRU | - | - | CRU (flock sendiri) |
| Stok Obat | CRUD | Read | Read | CRUD | - | - |
| Pembelian | CRUD | CRUD | - | CR | CRUD | - |
| Penjualan | CRUD | CRUD | - | - | CRUD | Read (penjualan miliknya) |
| Biaya Operasional | CRUD | CRUD | - | - | CRUD | - |
| Laporan | Full | Full | Produksi | Stok | Keuangan | Produksi sendiri |
| Laporan Mitra | Full | Full | - | - | Keuangan mitra | Data sendiri |
| Manajemen User | Full | - | - | - | - | - |
| Konfigurasi | Full | Read | - | - | - | - |

---

## 7. Non-Functional Requirements

### 7.1 Performa
- Halaman harus load < 2 detik pada koneksi lokal
- Dashboard harus render < 3 detik dengan data 1 tahun
- Input produksi harian harus bisa dilakukan < 30 detik per kandang

### 7.2 Keamanan
- Autentikasi via Jetstream (sudah terinstal: login, register, 2FA)
- Role-based access control (RBAC) menggunakan middleware + policy
- CSRF protection (bawaan Laravel)
- SQL injection protection (Eloquent ORM)
- XSS protection (Blade templating)
- Rate limiting pada endpoint kritis

### 7.3 Kompatibilitas
- Browser: Chrome, Firefox, Edge, Safari (versi terbaru)
- Responsif: Desktop, tablet, smartphone (operator lapangan)
- Minimum viewport: 360px (mobile)

### 7.4 Data & Backup
- Soft deletes untuk data penting (flock, transaksi)
- Audit trail (siapa mengubah apa, kapan)
- Daily database backup (konfigurasi server)

### 7.5 Skalabilitas
- Mendukung hingga 50 mitra aktif per desa/wilayah
- Mendukung hingga 200 kandang aktif (pusat + seluruh mitra)
- Mendukung hingga 500.000 ekor populasi total jaringan
- Data historis hingga 5 tahun
- Real-time dashboard refresh ≤ 10 detik (Livewire polling)

---

## 8. Entity Relationship Diagram (Ringkasan)

```
mitras (PUSAT JARINGAN)
  ├── farms ──→ kandangs ──→ flocks
  │                            ├── mutasi_populasis
  │                            ├── produksi_telurs
  │                            │     └── grading_telurs (opsional)
  │                            ├── konsumsi_pakans ──→ jenis_pakans
  │                            ├── vaksinasis ──→ obats
  │                            └── penyakits
  │                                  └── pengobatans ──→ obats
  │
  ├── setoran_telurs ──→ stok_telurs ──→ penjualans
  ├── distribusi_pakans ──→ jenis_pakans
  ├── distribusi_obats ──→ obats
  └── settlements (rekonsiliasi keuangan)

stok_telurs (inventory telur: masuk/terjual/rusak)
  ├── sumber: produksi_sendiri (flock_id) | setoran_mitra (setoran_id)
  └── keluar: penjualan_id

suppliers ──→ pembelians ──→ item_pembelians
customers ──→ penjualans ──→ item_penjualans

penjualans.sumber: pusat | mitra_setor | mitra_mandiri
penjualans.mitra_id → mitras (nullable)

stok_pakans ──→ jenis_pakans
stok_obats ──→ obats

pengeluaran_operasionals (standalone, mitra_id nullable)

users ──→ roles (many-to-many via role_user)
users ──→ mitras (1:1 optional — mitra dengan akun login)
strains ──→ flocks
```

---

## 9. Rencana Tahapan Pengembangan

### Fase 1 — Fondasi (Prioritas Tinggi)
1. Konfigurasi RBAC (roles, permissions, middleware) — termasuk role Mitra
2. Master Data: Farm, Kandang, Strain, Supplier, Customer
3. Master Data: Jenis Pakan, Obat & Vitamin
4. **Modul Mitra: CRUD data mitra, profil, skema kerjasama**
5. Manajemen Flock (CRUD + kalkulasi umur + fase otomatis) — dengan scope mitra
6. Input Produksi Telur Harian + kalkulasi HDP — pusat & mitra
7. Mutasi Populasi (mortalitas, afkir, pindah)
8. Dashboard dasar (populasi, produksi hari ini, HDP chart — agregat jaringan)

### Fase 2 — Operasional & Mitra
9. **Setoran Telur Mitra** (mitra setor telur ke pusat)
10. **Stok Telur / Egg Inventory** (tracking telur → uang)
11. **Distribusi Pakan ke Mitra** (dari gudang pusat)
12. Konsumsi Pakan Harian + stok pakan — pusat & mitra
13. Jadwal & Catatan Vaksinasi
14. Catatan Penyakit & Pengobatan
15. Stok Obat & Vitamin + **distribusi obat ke mitra**
16. Alert & Notifikasi (mortalitas tinggi, stok rendah, vaksin jatuh tempo, mitra belum input)

### Fase 3 — Keuangan, Settlement & Laporan
17. Transaksi Pembelian (dengan scope mitra)
18. Transaksi Penjualan (pusat / mitra_setor / mitra_mandiri)
19. Biaya Operasional
20. **Settlement / Rekonsiliasi Mitra** (hitung bagi hasil, potong hutang pakan/obat, bayar)
21. Kalkulasi HPP Telur
22. **Dashboard Konversi Telur → Uang** (live monitor)
23. **Dashboard Mitra** (khusus login mitra, data sendiri)
24. Laporan Produksi (harian, mingguan, bulanan) + export PDF
25. Laporan Keuangan (laba/rugi, cash flow)
26. **Laporan Mitra & Jaringan** (konsolidasi, ranking, performa per mitra)
27. Laporan Performa Flock + perbandingan strain

### Fase 4 — Penyempurnaan
28. Grading Telur per produksi
29. Export Excel untuk semua laporan
30. Audit trail lengkap
31. Template vaksinasi otomatis per strain
32. Optimasi performa & UX mobile
33. **Notifikasi WhatsApp/SMS ke mitra** (jadwal vaksin, reminder input, settlement)

---

## 10. Catatan Teknis Implementasi

### 10.1 Package yang Direkomendasikan

| Package | Kegunaan |
|---|---|
| `spatie/laravel-permission` | RBAC (roles & permissions) |
| `barryvdh/laravel-dompdf` | Export PDF laporan |
| `maatwebsite/laravel-excel` | Export/import Excel |
| `wire-elements/modal` | Modal component untuk Livewire |
| `livewire/volt` | Single-file Livewire components (opsional) |

### 10.2 Konvensi Kode

- **Model**: Singular PascalCase (`Flock`, `ProduksiTelur`, `JenisPakan`)
- **Tabel**: Plural snake_case (`flocks`, `produksi_telurs`, `jenis_pakans`)
- **Livewire Component**: PascalCase namespace (`Produksi/InputHarian`)
- **Route**: Kebab-case (`/produksi/input-harian`)
- **Bahasa UI**: Bahasa Indonesia
- **Bahasa Kode**: Bahasa Indonesia untuk domain terms, Inggris untuk technical terms

### 10.3 Konfigurasi Sistem (Tabel settings)

| Key | Default | Keterangan |
|---|---|---|
| `farm_nama` | - | Nama peternakan |
| `alert_mortalitas_persen` | 0.5 | Threshold alert mortalitas (%) |
| `alert_stok_pakan_hari` | 3 | Minimum stok pakan (hari) |
| `alert_vaksin_hari_sebelum` | 3 | Notif vaksinasi H-berapa |
| `alert_obat_expired_hari` | 30 | Notif obat expired H-berapa |
| `satuan_berat_telur` | kg | Default satuan berat telur |
| `harga_telur_default` | 0 | Harga jual telur default/kg |
| `mitra_max_per_wilayah` | 50 | Maksimal mitra per wilayah |
| `settlement_periode_hari` | 7 | Periode settlement default (hari) |
| `settlement_auto_potong_pakan` | true | Auto potong hutang pakan di settlement |
| `mitra_bagi_hasil_default` | 60 | Default % bagi hasil mitra |
| `stok_telur_alert_hari` | 3 | Alert jika stok telur > N hari belum terjual |
| `harga_beli_telur_mitra` | 0 | Harga beli telur dari mitra default/kg |

---

*Dokumen ini menjadi acuan utama untuk pengembangan SIMENDOG v1.1. Penambahan konsep Mitra & Jaringan Peternakan mengubah arsitektur dari single-farm menjadi hub-and-spoke network. Setiap perubahan requirement harus didokumentasikan dalam versi revisi dokumen ini.*

**Changelog:**
- **v1.1** (11 Maret 2026): Tambah Modul Mitra & Jaringan (3.8), Dashboard Konversi Telur→Uang (3.9.3), update ERD, update role Mitra, update business rules (BR-20 s.d. BR-30), update semua modul terkait dengan `mitra_id`.
- **v1.0** (11 Maret 2026): Dokumen awal — 8 modul inti single-farm.
