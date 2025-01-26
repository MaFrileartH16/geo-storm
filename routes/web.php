<?php

use App\Http\Controllers\MusicalInstrumentController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\UserController;
use App\Models\Rental;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login');
//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

//Route::get('/dashboard', function () {
//  return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/dashboard', function () {
    // Ambil data jumlah user per bulan (hanya untuk Admin)
    $userData = [];
    if (auth()->user()->role === 'Admin') {
      $userData = User::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
        ->where('role', '!=', 'Admin') // Exclude Admin dari perhitungan
        ->whereYear('created_at', Carbon::now()->year)
        ->groupBy('month')
        ->orderBy('month')
        ->get()
        ->map(function ($item) {
          return [
            'month' => Carbon::create()->month($item->month)->format('F'), // Format bulan (January, February, dll)
            'Pengguna' => $item->count,
          ];
        });
    }

    // Ambil data jumlah rental per bulan untuk Borrower
    $rentalData = [];
    if (auth()->user()->role === 'Borrower') {
      $rentalData = Rental::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
        ->where('user_id', auth()->id()) // Hanya rental milik pengguna yang login
        ->whereYear('created_at', Carbon::now()->year)
        ->groupBy('month')
        ->orderBy('month')
        ->get()
        ->map(function ($item) {
          return [
            'month' => Carbon::create()->month($item->month)->format('F'), // Format bulan (January, February, dll)
            'Meminjam' => $item->count,
          ];
        });
    }

    // Kirim data ke view
    return Inertia::render('Dashboard', [
      'userData' => $userData, // Data untuk Admin
      'rentalData' => $rentalData, // Data untuk Borrower
    ]);
  })->name('dashboard');

  Route::resource('users', UserController::class);
  Route::resource('musical-instruments', MusicalInstrumentController::class);
  Route::resource('rentals', RentalController::class);
  Route::post('/rentals/{rental}/return', [RentalController::class, 'returnRental'])->name('rentals.return');
});

//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

require __DIR__ . '/auth.php';
