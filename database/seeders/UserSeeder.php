<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Buat admin jika belum ada
    if (!User::where('role', 'Admin')->exists()) {
      User::factory()->create([
        'name' => 'Admin',
        'email' => 'admin@geostorm.id',
        'role' => 'Admin',
        'password' => 'admin@geostorm.id',
      ]);
    }

    // Buat beberapa borrower
    User::factory()->count(10)->create([
      'role' => 'Borrower',
    ]);
  }
}
