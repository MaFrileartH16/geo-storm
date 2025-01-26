<?php

namespace App\Http\Controllers;

use App\Models\MusicalInstrument;
use App\Models\Rental;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

// Import Exception untuk try-catch

class RentalController extends Controller
{
  /**
   * Menampilkan daftar rental.
   */
  public function index(Request $request)
  {
    try {
      // Cek role pengguna yang sedang login
      $user = $request->user();

      // Jika pengguna adalah Admin, tampilkan semua rental
      if ($user->role === 'Admin') {
        $rentals = Rental::with(['user', 'musicalInstrument'])->get();
      } // Jika pengguna adalah Borrower, tampilkan hanya rental miliknya
      else if ($user->role === 'Borrower') {
        $rentals = Rental::with(['user', 'musicalInstrument'])
          ->where('user_id', $user->id)
          ->get();
      } // Jika role tidak dikenali, kembalikan error
      else {
        return redirect()->back()->with('error', 'Akses ditolak. Role tidak valid.');
      }

      // Kirim data ke komponen Inertia
      return Inertia::render('Rentals/Index', [
        'rentals' => $rentals,
      ]);
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengambil data rental.');
    }
  }

  /**
   * Menyimpan rental baru ke database.
   */
  public function store(Request $request)
  {
    try {
      // Simpan rental baru
      Rental::create([
        'user_id' => $request->user_id,
        'musical_instrument_id' => $request->musical_instrument_id,
        'is_rented' => $request->is_rented,
      ]);

      // Redirect ke halaman index dengan pesan sukses
      return redirect()->route('rentals.index')->with('success', 'Rental berhasil dibuat!');
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat membuat rental.');
    }
  }

  /**
   * Menampilkan form untuk membuat rental baru.
   */
  public function create()
  {
    try {
      $users = User::all(); // Ambil semua user
      $instruments = MusicalInstrument::all(); // Ambil semua alat musik

      // Kirim data ke komponen Inertia
      return Inertia::render('Rentals/Create', [
        'users' => $users,
        'instruments' => $instruments,
      ]);
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memuat form create.');
    }
  }

  /**
   * Menampilkan detail rental.
   */
  public function show(Rental $rental)
  {
    try {
      // Load relasi user dan musical_instrument
      $rental->load(['user', 'musicalInstrument']);

      // Kirim data ke komponen Inertia
      return Inertia::render('Rentals/Show', [
        'rental' => $rental,
      ]);
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memuat detail rental.');
    }
  }

  /**
   * Menampilkan form untuk mengedit rental.
   */
  public function edit(Rental $rental)
  {
    try {
      $users = User::all(); // Ambil semua user
      $instruments = MusicalInstrument::all(); // Ambil semua alat musik

      // Kirim data ke komponen Inertia
      return Inertia::render('Rentals/Edit', [
        'rental' => $rental,
        'users' => $users,
        'instruments' => $instruments,
      ]);
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memuat form edit.');
    }
  }

  /**
   * Menghapus rental dari database.
   */
  public function destroy(Rental $rental)
  {
    try {
      $rental->delete();
      return redirect()->route('rentals.index')->with('success', 'Rental berhasil dihapus!');
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat menghapus rental.');
    }
  }

  public function returnRental(Rental $rental)
  {
    try {
      // Update is_rented menjadi false
      $rental->update([
        'is_rented' => false,
      ]);

      // Redirect ke halaman index dengan pesan sukses
      return redirect()->route('rentals.index')->with('success', 'Rental berhasil dikembalikan!');
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengembalikan rental.');
    }
  }

  /**
   * Mengupdate rental di database.
   */
  public function update(Request $request, Rental $rental)
  {
    try {
      // Update data rental
      $rental->update([
        'user_id' => $request->user_id,
        'musical_instrument_id' => $request->musical_instrument_id,
        'is_rented' => $request->is_rented,
      ]);

      // Redirect ke halaman index dengan pesan sukses
      return redirect()->route('rentals.index')->with('success', 'Rental berhasil diperbarui!');
    } catch (Exception $e) {
      // Tangani error dan kembalikan pesan error
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui rental.');
    }
  }
}
