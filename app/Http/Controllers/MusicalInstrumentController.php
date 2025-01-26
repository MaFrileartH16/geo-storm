<?php

namespace App\Http\Controllers;

use App\Models\MusicalInstrument;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MusicalInstrumentController extends Controller
{
  /**
   * Menampilkan daftar alat musik.
   */
  public function index()
  {
    try {
      // Ambil semua alat musik dengan relasi rentals
      $musicalInstruments = MusicalInstrument::with(['rentals' => function ($query) {
        $query->where('is_rented', true); // Hanya ambil rental yang sedang aktif
      }])->get();

      // Format data untuk dikirim ke frontend
      $musicalInstruments->each(function ($instrument) {
        $instrument->is_rented = $instrument->rentals->isNotEmpty(); // Cek apakah ada rental aktif
      });

      return Inertia::render('MusicalInstruments/Index', [
        'musicalInstruments' => $musicalInstruments,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengambil data alat musik.');
    }
  }

  /**
   * Menyimpan alat musik baru ke database.
   */
  public function store(Request $request)
  {
    try {
      // Simpan alat musik baru
      MusicalInstrument::create($request->all());

      return redirect()->route('musical-instruments.index')->with('success', 'Alat musik berhasil dibuat!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat menyimpan alat musik.');
    }
  }

  /**
   * Menampilkan form untuk membuat alat musik baru.
   */
  public function create()
  {
    try {
      return Inertia::render('MusicalInstruments/Create');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat membuka form tambah alat musik.');
    }
  }

  /**
   * Menampilkan detail alat musik.
   */
  public function show(MusicalInstrument $musicalInstrument)
  {
    try {
      return Inertia::render('MusicalInstruments/Show', [
        'musicalInstrument' => $musicalInstrument,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengambil detail alat musik.');
    }
  }

  /**
   * Menampilkan form untuk mengedit alat musik.
   */
  public function edit(MusicalInstrument $musicalInstrument)
  {
    try {
      return Inertia::render('MusicalInstruments/Edit', [
        'musicalInstrument' => $musicalInstrument,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat membuka form edit alat musik.');
    }
  }

  /**
   * Mengupdate alat musik di database.
   */
  public function update(Request $request, MusicalInstrument $musicalInstrument)
  {
    try {
      // Update data alat musik
      $musicalInstrument->update($request->all());

      return redirect()->route('musical-instruments.index')->with('success', 'Alat musik berhasil diperbarui!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui alat musik.');
    }
  }

  /**
   * Menghapus alat musik dari database.
   */
  public function destroy(MusicalInstrument $musicalInstrument)
  {
    try {
      $musicalInstrument->delete();
      return redirect()->route('musical-instruments.index')->with('success', 'Alat musik berhasil dihapus!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat menghapus alat musik.');
    }
  }
}
