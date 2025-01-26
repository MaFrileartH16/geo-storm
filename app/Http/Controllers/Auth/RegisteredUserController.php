<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
  /**
   * Handle an incoming registration request.
   *
   * @throws ValidationException
   */
  public function store(Request $request): RedirectResponse
  {
    try {
      User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password,
        'role' => 'Borrower',
      ]);

      return redirect()->route('login')->with('notification', [
        'status' => 'success',
        'message' => 'Berhasil mendaftar. Silahkan login.',
      ]);
    } catch (ValidationException $e) {
      return redirect()->route('register')->with('notification', [
        'status' => 'error',
        'message' => 'Gagal mendaftar. Silahkan cek kembali data yang diinput.',
      ]);
    }
  }

  /**
   * Display the registration view.
   */
  public function create(): Response
  {
    return Inertia::render('Auth/Register', [
      'notification' => session()->pull('notification'),
    ]);
  }
}
