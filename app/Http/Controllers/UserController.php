<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
  /**
   * Menampilkan daftar user.
   */
  public function index()
  {
    try {
      // Ambil semua user kecuali yang memiliki role 'Admin'
      $users = User::where('role', '!=', 'Admin')->get();

      return Inertia::render('Users/Index', [
        'users' => $users,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengambil data user.');
    }
  }

  /**
   * Menyimpan user baru ke database.
   */
  public function store(Request $request)
  {
    try {
      // Simpan user baru tanpa validasi
      User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);

      return redirect()->route('users.index')->with('success', 'User berhasil dibuat!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat menyimpan user.');
    }
  }

  /**
   * Menampilkan form untuk membuat user baru.
   */
  public function create()
  {
    try {
      return Inertia::render('Users/Create');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat membuka form tambah user.');
    }
  }

  /**
   * Menampilkan detail user.
   */
  public function show(User $user)
  {
    try {
      return Inertia::render('Users/Show', [
        'user' => $user,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat mengambil detail user.');
    }
  }

  /**
   * Menampilkan form untuk mengedit user.
   */
  public function edit(User $user)
  {
    try {
      return Inertia::render('Users/Edit', [
        'user' => $user,
      ]);
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat membuka form edit user.');
    }
  }

  /**
   * Mengupdate user di database.
   */
  public function update(Request $request, User $user)
  {
    try {
      // Update data user tanpa validasi
      $user->update([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password ? Hash::make($request->password) : $user->password,
      ]);

      return redirect()->route('users.index')->with('success', 'User berhasil diperbarui!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui user.');
    }
  }

  /**
   * Menghapus user dari database.
   */
  public function destroy(User $user)
  {
    try {
      $user->delete();
      return redirect()->route('users.index')->with('success', 'User berhasil dihapus!');
    } catch (Exception $e) {
      return redirect()->back()->with('error', 'Terjadi kesalahan saat menghapus user.');
    }
  }
}
